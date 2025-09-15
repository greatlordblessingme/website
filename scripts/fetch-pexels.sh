#!/bin/bash
set -e
mkdir -p public/assets/pexels

echo "Downloading solutions-hero.jpg..."
curl -L -o public/assets/pexels/solutions-hero.jpg "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"

echo "Downloading cases-hero-bg.jpg..."
curl -L -o public/assets/pexels/cases-hero-bg.jpg "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg"

echo "Downloading service-step1.jpg..."
curl -L -o public/assets/pexels/service-step1.jpg "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"

echo "Downloading service-step2.jpg..."
curl -L -o public/assets/pexels/service-step2.jpg "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"

echo "Downloading service-step3.jpg..."
curl -L -o public/assets/pexels/service-step3.jpg "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"

echo "Downloading service-step4.jpg..."
curl -L -o public/assets/pexels/service-step4.jpg "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"

echo "Downloading about-vision.jpg..."
curl -L -o public/assets/pexels/about-vision.jpg "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"

echo "Downloading about-mission.jpg..."
curl -L -o public/assets/pexels/about-mission.jpg "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"

echo "Downloading contact-partner.jpg..."
curl -L -o public/assets/pexels/contact-partner.jpg "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"

echo "Downloading partners-recruitment.jpg..."
curl -L -o public/assets/pexels/partners-recruitment.jpg "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg"
