#!/bin/bash
# Local build script for all language versions
# This mirrors the GitHub Actions workflow

set +e

# Define functions for each language build sequence
build_english() {
  echo "Starting English PDF build..."
  latexmk -pdf -interaction=nonstopmode -shell-escape -f book-main.tex || true
  if [ -f book-main.pdf ]; then
    EN_PDF_EXIT=0
  else
    EN_PDF_EXIT=1
  fi

  if [ $EN_PDF_EXIT -eq 0 ]; then
    echo "English PDF build successful, starting HTML conversion..."
    (cd website/latex_to_html && uv run --no-project --with beautifulsoup4 latex_to_html_converter.py ../../book-main.tex ../html)
    EN_HTML_EXIT=$?

    echo "English HTML conversion successful, moving PDF to assets..."
    mv book-main.pdf website/html/assets/book-main.pdf
  else
    echo "English PDF build failed, skipping HTML conversion"
    EN_HTML_EXIT=1
  fi

  echo "English build complete: PDF=$EN_PDF_EXIT, HTML=$EN_HTML_EXIT"
  return $((EN_PDF_EXIT + EN_HTML_EXIT))
}

build_chinese() {
  echo "Starting Chinese PDF build..."
  latexmk -pdf -interaction=nonstopmode -shell-escape -f book-main_zh.tex || true
  if [ -f book-main_zh.pdf ]; then
    ZH_PDF_EXIT=0
  else
    ZH_PDF_EXIT=1
  fi

  if [ $ZH_PDF_EXIT -eq 0 ]; then
    echo "Chinese PDF build successful, starting HTML conversion..."
    (cd website/latex_to_html && uv run --no-project --with beautifulsoup4 latex_to_html_converter.py ../../book-main_zh.tex ../html/zh)
    ZH_HTML_EXIT=$?

    echo "Chinese HTML conversion successful, moving PDF to assets..."
    mv book-main_zh.pdf website/html/assets/book-main_zh.pdf
  else
    echo "Chinese PDF build failed, skipping HTML conversion"
    ZH_HTML_EXIT=1
  fi

  echo "Chinese build complete: PDF=$ZH_PDF_EXIT, HTML=$ZH_HTML_EXIT"
  return $((ZH_PDF_EXIT + ZH_HTML_EXIT))
}

build_romanian() {
  echo "Starting Romanian PDF build..."
  latexmk -lualatex -pdf -interaction=nonstopmode -shell-escape -f book-main_ro.tex || true
  if [ -f book-main_ro.pdf ]; then
    RO_PDF_EXIT=0
  else
    RO_PDF_EXIT=1
  fi

  if [ $RO_PDF_EXIT -eq 0 ]; then
    echo "Romanian PDF build successful, moving PDF to assets..."
    mv book-main_ro.pdf website/html/assets/book-main_ro.pdf
  else
    echo "Romanian PDF build failed"
  fi

  echo "Romanian build complete: PDF=$RO_PDF_EXIT"
  return $((RO_PDF_EXIT))
}

build_korean() {
  echo "Starting Korean PDF build..."
  latexmk -pdf -interaction=nonstopmode -shell-escape -f book-main_ko.tex || true
  if [ -f book-main_ko.pdf ]; then
    KO_PDF_EXIT=0
  else
    KO_PDF_EXIT=1
  fi

  if [ $KO_PDF_EXIT -eq 0 ]; then
    echo "Korean PDF build successful, starting HTML conversion..."
    (cd website/latex_to_html && uv run --no-project --with beautifulsoup4 latex_to_html_converter.py ../../book-main_ko.tex ../html/ko)
    KO_HTML_EXIT=$?

    echo "Korean HTML conversion successful, moving PDF to assets..."
    mv book-main_ko.pdf website/html/assets/book-main_ko.pdf
  else
    echo "Korean PDF build failed, skipping HTML conversion"
    KO_HTML_EXIT=1
  fi

  echo "Korean build complete: PDF=$KO_PDF_EXIT, HTML=$KO_HTML_EXIT"
  return $((KO_PDF_EXIT + KO_HTML_EXIT))
}

echo "=========================================="
echo "Starting parallel builds for all languages"
echo "=========================================="

# Start build sequences in parallel
build_english &
EN_PID=$!

build_chinese &
ZH_PID=$!

build_romanian &
RO_PID=$!

build_korean &
KO_PID=$!

# Wait for English build
echo "Waiting for English build sequence..."
wait $EN_PID
EN_TOTAL_EXIT=$?

# Wait for Chinese build
echo "Waiting for Chinese build sequence..."
wait $ZH_PID
ZH_TOTAL_EXIT=$?

# Wait for Romanian build
echo "Waiting for Romanian build sequence..."
wait $RO_PID
RO_TOTAL_EXIT=$?

# Wait for Korean build
echo "Waiting for Korean build sequence..."
wait $KO_PID
KO_TOTAL_EXIT=$?

echo "=========================================="
echo "Final build results:"
echo "  English: $([ $EN_TOTAL_EXIT -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"
echo "  Chinese: $([ $ZH_TOTAL_EXIT -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"
echo "  Romanian: $([ $RO_TOTAL_EXIT -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"
echo "  Korean: $([ $KO_TOTAL_EXIT -eq 0 ] && echo 'SUCCESS' || echo 'FAILED')"
echo "=========================================="

# Fail if any build failed
if [ $EN_TOTAL_EXIT -ne 0 ] || [ $ZH_TOTAL_EXIT -ne 0 ] || [ $RO_TOTAL_EXIT -ne 0 ] || [ $KO_TOTAL_EXIT -ne 0 ]; then
  echo "❌ One or more builds failed"
  exit 1
fi

echo "✅ All builds completed successfully!"
echo ""
echo "To view the website locally, run:"
echo "  cd website/html && python3 -m http.server 8000"
