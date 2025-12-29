#!/bin/bash
# Quick build script for English version only

echo "Building English PDF..."
latexmk -pdf -interaction=nonstopmode -shell-escape -f book-main.tex

if [ ! -f book-main.pdf ]; then
  echo "❌ PDF build failed"
  exit 1
fi

echo "✅ PDF build successful"
echo "Converting to HTML..."

cd website/latex_to_html
uv run --no-project --with beautifulsoup4 latex_to_html_converter.py ../../book-main.tex ../html

if [ $? -eq 0 ]; then
  echo "✅ HTML conversion successful"
  cd ../..
  mv book-main.pdf website/html/assets/book-main.pdf
  echo ""
  echo "Build complete! To view the website:"
  echo "  cd website/html && python3 -m http.server 8000"
else
  echo "❌ HTML conversion failed"
  exit 1
fi
