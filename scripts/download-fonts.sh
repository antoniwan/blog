#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Inter variable font
curl -L "https://github.com/rsms/inter/raw/master/docs/font-files/InterVariable.woff2" -o public/fonts/inter-var.woff2

# Download Fraunces fonts (TTF format - these are the actual TTF files)
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Regular.ttf" -o public/fonts/fraunces-regular.ttf
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-SemiBold.ttf" -o public/fonts/fraunces-semibold.ttf
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Bold.ttf" -o public/fonts/fraunces-bold.ttf
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Black.ttf" -o public/fonts/fraunces-black.ttf

# Download JetBrains Mono
curl -L "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/webfonts/JetBrainsMono-Regular.woff2" -o public/fonts/jetbrains-mono-regular.woff2

echo "Fonts downloaded successfully!"
echo "Note: Fraunces fonts are in TTF format, CSS has been updated to use 'truetype' format." 