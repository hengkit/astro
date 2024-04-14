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
   - Color Calibration
     - Photometric Color Calibration
     - Search for the thing
     - Check Focal Length and Pixel Size
  - Use Graxpert AI
    - Smoothing 0 first
  - Save as FITS

- Remove Green Noise
- Set display to linear mode 
- Image Processing
   - Todo: Starnet?
   - Generalized Hyperbolic stretch transformation
     - Initial Stretch
       - Set to log histogran
       - Set local stretch intensity (b) to 15(max)
       - Set SP to somewhere in the peak but to the left of the actual max
       - Play with stretch factor (D) and stop before channel peaks bifurcate
          - adjust SP and D until you can see background
       - Repeat if necessary
       - Adjust black point
     - General Stretching
       - set to log histogram
       - Use GHS or inverse GHS to get a smooth line down histogram from top left to bottom right with some space left and right
     - save as 16 bit TIFF
  - Affinity Photo
    - S curve in histogram
    - Color balance
    - Contrast & Saturation
    - White Balance


