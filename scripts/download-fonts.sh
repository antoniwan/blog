#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Inter variable font
curl -L "https://github.com/rsms/inter/raw/master/docs/font-files/InterVariable.woff2" -o public/fonts/inter-var.woff2

# Download Fraunces fonts
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Regular.ttf" -o public/fonts/fraunces-regular.woff2
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-SemiBold.ttf" -o public/fonts/fraunces-semibold.woff2
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Bold.ttf" -o public/fonts/fraunces-bold.woff2
curl -L "https://github.com/google/fonts/raw/main/ofl/fraunces/static/Fraunces-Black.ttf" -o public/fonts/fraunces-black.woff2

# Download JetBrains Mono
curl -L "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/webfonts/JetBrainsMono-Regular.woff2" -o public/fonts/jetbrains-mono-regular.woff2

echo "Fonts downloaded successfully!" 