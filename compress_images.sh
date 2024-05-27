#!/bin/bash

# Define the directories to compress
DIRS=("static/images/hero-img_files" "static/images/images" "static/images/logo" "static/images/main-img")

# Loop through each directory and compress images
for DIR in "${DIRS[@]}"; do
  # Create a temporary directory for compressed images
  TEMP_DIR="$DIR/compressed"
  mkdir -p $TEMP_DIR

  # Compress JPEG images
  imagemin "$DIR/*.jpg" --plugin=imagemin-mozjpeg --out-dir=$TEMP_DIR

  # Compress PNG images
  imagemin "$DIR/*.png" --plugin=imagemin-pngquant --out-dir=$TEMP_DIR

  # Compress SVG images (if any)
  imagemin "$DIR/*.svg" --plugin=imagemin-svgo --out-dir=$TEMP_DIR

  # Replace original images with compressed images
  cp -r $TEMP_DIR/* $DIR/

  # Remove the temporary directory
  rm -rf $TEMP_DIR
done

echo "Image compression completed and original images replaced."
