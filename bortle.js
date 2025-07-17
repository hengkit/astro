// Google Earth Engine script to dynamically pull cloud coverage and plot against light pollution
// Define the region of interest: San Francisco Bay Area
var sfBay = ee.Geometry.Rectangle([-123.2, 36.8, -121.2, 38.6]);
var bortlePalette = [
  '000000', // Bortle 1 
  '191919', // Bortle 2 
  '002572', // Bortle 3 
  '0080c4', // Bortle 4 
  '2f8a00', // Bortle 5 
  '9ebcda', // Bortle 6 
  'ffff00', // Bortle 7 
  'e50000', // Bortle 8 
  'eeeeee'  // Bortle 9 
];
// VIIRS monthly night time composites
var viirs = ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
             .filterDate('2025-02-01', '2025-02-28')  
             .select('avg_rad') 
             .mean();

var visParams = {
  min:0,
  max:8,
  palette: bortlePalette,
  opacity: 0.7
};
//Gaussian smoothing, just because
var kernel = ee.Kernel.gaussian({radius: 1,  sigma: 1, units: 'pixels', normalize: true});
//var kernel = ee.Kernel.circle({radius: 100, units: 'meters', normalize: true});

var smoothed = viirs.convolve(kernel);
//hacky bortle to radiance conversion
var classified = smoothed
  .where(smoothed.lte(0.25), 0)
  .where(smoothed.gt(0.25).and(smoothed.lte(0.5)), 1)
  .where(smoothed.gt(0.5).and(smoothed.lte(1)), 2)
  .where(smoothed.gt(1).and(smoothed.lte(2)), 3)
  .where(smoothed.gt(2).and(smoothed.lte(5)), 4)
  .where(smoothed.gt(5).and(smoothed.lte(10)), 5)
  .where(smoothed.gt(10).and(smoothed.lte(20)), 6)
  .where(smoothed.gt(20).and(smoothed.lte(40)), 7)
  .where(smoothed.gt(40), 8);

Map.centerObject(sfBay, 9);
Map.addLayer(classified, visParams, 'Bortle (March 2025)');
var labels = [
  '1 - Pristine (Darkest)',
  '2 - Dark sky park',
  '3 - Rural dark sky',
  '4 - Transition zone',
  '5 - Suburban edge',
  '6 - Suburban',
  '7 - Urban transition',
  '8 - Bright urban',
  '9 - Inner city (Brightest)'
];

// Create the legend panel
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});

legend.add(ui.Label({
  value: 'Bortle Scale',
  style: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 0 8px 0',
    padding: '0'
  }
}));

for (var i = 0; i < bortlePalette.length; i++) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + bortlePalette[i],
      padding: '8px',
      margin: '0 8px 4px 0'
    }
  });

  var description = ui.Label({
    value: labels[i],
    style: {margin: '0 0 4px 0'}
  });

  var row = ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });

  legend.add(row);
}

Map.add(legend);
// Create cloud layer using GOES Fire Data mask. Yes, this is hacky as well
var end = ee.Date(Date.now());
var start = end.advance(-15,"minute");
var fdcc = ee.ImageCollection("NOAA/GOES/19/FDCC")
  .filterDate(start, end)
  .first();
var dqf = fdcc.select('DQF');

var DQFVis = {
  min: 0,
  max: 5,
  opacity: 0.7,
  palette: [
    'black',  // Good quality fire pixel
    'black',           // Good quality fire free land
    'white',            // Opaque cloud
                       // Bad surface type, sunglint, LZA threshold exceeded,
    'black',   // off Earth, or missing input data
    'black',    // Bad input data
    'black'        // Algorithm failure
  ]};
  
Map.addLayer(dqf.updateMask(dqf.eq(2)), DQFVis, 'Cloud Cover');
