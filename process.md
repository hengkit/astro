1. Create new folder for image
- Create Lights subfolder
- Create Darks subfolder
- Copy frames into each folder
  - TODO: Symlinks

2. Siril
- Check Preferences
  - Uncheck from file header
  - Set Bayer pattern to GBRG
 - Set home folder to the new folder

- Scripts
  - Run Without Flats script
- Open Result.fit
- Set displaymode to autostretch
- Unchain channels
- Set working directory to process
- Sequence
  - Search Sequences
  - Select r_pp_light_.seq
  - Click on stack icon in bottom right
  - Remove bad frames
 - Stacking	
   - Select Weighed FWHM
   - Start Stacking
- Save r_pp_light_stacked.fit in main folder
- Select & Crop
- Image Processing
  - Background Extraction
  - Select many background points
  - Run
 - Color Calibration
   - Photometric Color Calibration
   - Search for the thing
   - Focal Length: 50
   - Pixel Size: 1.45
- Remove Green Noise
- Set display to linear mode 
- Image Processing
   - Generalized Hyperbolic stretch transformation
     - Find left inflection point on histogram
     - Drag everything around until it looks better
     - Apply 
     - Repeat for right side
  - Histogram transformation
  - Color Saturation
 - save as TIFF


