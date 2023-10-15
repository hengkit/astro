1. Create new folder for image
- Create Lights subfolder
- Create Darks subfolder
- Copy frames into each folder
  - TODO: Symlinks

2. Siril
- Check Preferences
  - Set Bayer pattern to GBRG (Dwarf only, Canon is RGGB but set in FITS header)
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
   - Select Average Stacking with Rejection
   - Start Stacking
- Save r_pp_light_stacked.fit in main folder
- Select & Crop
- Image Processing
  - Use Graxpert AI
    - Smoothing 0 first
  - Save as FITS
 - Color Calibration
   - Photometric Color Calibration
   - Search for the thing
   - Check Focal Length and Pixel Size
- Remove Green Noise
- Set display to linear mode 
- Image Processing
   - Todo: Starnet?
   - Generalized Hyperbolic stretch transformation
     - Find left inflection point on histogram
     - Drag everything around until it looks better
     - Apply 
     - Repeat for right side
     - Repeat for anything interesting
     - save as 16 bit TIFF
  - Affinity Photo
    - S curve in histogram
    - Color balance
    - Contrast & Saturation
    - 


