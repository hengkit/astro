1. Set up working directory
   - copy files to lights, darks, flats, biases
     - probably reuse darks because the 533 has no amp noise 
   - check your bayer pattern is in the header or use global settings for it
2. run osc_preprocessing script
3. Set working directory to process
4. Check Sequence
   - Click on Sequence
   - Click Search Sequences
   - Select r_pp_light_.seq
   - Click on stack icon in bottom right
   - Remove bad frames
5. Redo Stacking (if you redid the sequence)
   - Select Average Stacking with Rejection
   - Start Stacking
   - Save r_pp_light_stacked.fit in working directory
6. Crop 
   - Select autostretch and the chain to link channels
   - crop the image to get rid of the perimeter bands
7. Background Extraction
   - Siril (RBF) - brighter images
   - GraxPert AI - dimmer images
     - TODO
8. Photometric Color Calibration
9. Deconvolution
   - generate PSF (blind descent)
   - Richardson-Lucy method
10. Noise Reduction
    - uncheck salt and pepper
    - data adaptive dual domain denoising - brighter images
    - anscombe VST - dimmer images
11. Stretching
    - switch to linear view
    - without starnet - dimmer images
    - Initial Stretch
      - Set to log histogran
      - Set local stretch intensity (b) to 15(max)
      - Set SP to somewhere within the peak but to the left of the actual max
      - Play with stretch factor (D) and stop before channel peaks bifurcate
      - adjust SP and D until you can see background
      - Repeat
      - Adjust black point
    - General Stretching
      - set to log histogram
      - Use GHS or inverse GHS to get a smooth line down histogram from top left to bottom right with some space left and right

    - with starnet
TODO

12. Remove Green Noise
13. Adjust Color Saturation
14. Save as 16 bit TIFF
15. Affinity Photo
    - S curve in histogram
    - Color balance
    - Contrast & Brightness
    - Saturation
    - White Balance
16. Export as JPEG
