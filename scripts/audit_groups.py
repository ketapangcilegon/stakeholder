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

print("=== AUDIT OF PELAKU USAHA QUESTIONS ===")
for qid, ind, grp, teks, skala in matches:
    if grp == 'pelaku_usaha':
        print(f"[{ind}] {teks.strip()}")

print("\n=== AUDIT OF AKADEMISI & ORGANISASI NELAYAN (UNTIRTA & HNSI) QUESTIONS ===")
for qid, ind, grp, teks, skala in matches:
    if grp == 'akademisi_lsm':
        print(f"[{ind}] {teks.strip()}")
