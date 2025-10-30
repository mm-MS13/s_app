import sys
import pdfplumber

path = sys.argv[1]
with pdfplumber.open(path) as pdf:
    for i, page in enumerate(pdf.pages[:2]):
        t = page.extract_text() or ""
        print(f"--- PAGE {i+1} ---")
        print(t[:4000])


