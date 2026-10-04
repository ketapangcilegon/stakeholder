import json
import re

with open('src/data/questionBank.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(
    r'id:\s*["\']([^"\']+)["\'],\s*'
    r'id_indikator:\s*["\']([^"\']+)["\'],\s*'
    r'id_stakeholder_group:\s*["\']([^"\']+)["\'],\s*'
    r'teks:\s*["\'](.*?)["\'],\s*'
    r'skala_label:\s*\{([^}]+)\}',
    re.DOTALL
)

matches = pattern.findall(content)

print("Checking polarity and scale labels for key indicators:\n")
sensitive_inds = ['IND_03', 'IND_04', 'IND_06', 'IND_10', 'IND_11', 'IND_36']
for m in matches:
    qid, ind, grp, teks, skala = m
    if ind in sensitive_inds:
        skala_clean = " ".join(skala.split())
        print(f"[{ind}] [{grp}] ({qid}):")
        print(f"  Teks: {teks.strip()}")
        print(f"  Skala: {skala_clean}\n")
