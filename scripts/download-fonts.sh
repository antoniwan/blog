#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Inter variable font
curl -L "https://github.com/rsms/inter/raw/master/docs/font-files/InterVariable.woff2" -o public/fonts/inter-var.woff2

# Download Source Serif 4 fonts
curl -L "https://github.com/adobe-fonts/source-serif/raw/release/OTF/SourceSerif4-Regular.otf" -o public/fonts/source-serif-4-regular.woff2
curl -L "https://github.com/adobe-fonts/source-serif/raw/release/OTF/SourceSerif4-Semibold.otf" -o public/fonts/source-serif-4-semibold.woff2
curl -L "https://github.com/adobe-fonts/source-serif/raw/release/OTF/SourceSerif4-Bold.otf" -o public/fonts/source-serif-4-bold.woff2

# Download JetBrains Mono
curl -L "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/webfonts/JetBrainsMono-Regular.woff2" -o public/fonts/jetbrains-mono-regular.woff2

echo "Fonts downloaded successfully!" 