#!/bin/bash
# Quick build script for Korean version only

echo "Building Korean PDF..."
latexmk -pdf -interaction=nonstopmode -shell-escape -f book-main_ko.tex

if [ ! -f book-main_ko.pdf ]; then
  echo "❌ PDF build failed"
  exit 1
fi

echo "✅ PDF build successful"
echo "Converting to HTML..."

cd website/latex_to_html
uv run --no-project --with beautifulsoup4 latex_to_html_converter.py ../../book-main_ko.tex ../html/ko

if [ $? -eq 0 ]; then
  echo "✅ HTML conversion successful"
  cd ../..
  mv book-main_ko.pdf website/html/assets/book-main_ko.pdf
  echo ""
  echo "Build complete! To view the website:"
  echo "  cd website/html && python3 -m http.server 8000"
  echo "  Then navigate to http://localhost:8000/ko/index.html"
else
  echo "❌ HTML conversion failed"
  exit 1
fi
