1. Create new folder for image
- Create lights subfolder
- Create darks subfolder
- Copy frames into each folder

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
 
Adjusting stars from here on:

3. Affinity

Select>Select Sampled Colour

Single click on a bright star to sample it

For the colour model, try Intensity—alternatively, if you're dealing with rich colour stars, you may want to try RGB or CIELAB.

Adjust tolerance as required, click Apply

Select>Grow/Shrink, grow selection as required

Optionally, Select>Feather to feather the selection

Now go to Layer>New Live Filter Layer>Blur>Minimum Blur and adjust Radius to suit

At any point, you can change the Minimum Blur layer's Radius parameter, or even change its Opacity if the effect is too strong.
