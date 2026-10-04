import json
import re

with open('src/data/questionBank.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

pattern = re.compile(
    r'id:\s*["\']([^"\']+)["\'],\s*'
    r'id_indikator:\s*["\']([^"\']+)["\'],\s*'
    r'id_stakeholder_group:\s*["\']([^"\']+)["\'],\s*'
    r'teks:\s*["\'](.*?)["\'],\s*'
    r'skala_label:\s*\{([^}]+)\}',
    re.DOTALL
)

matches = pattern.findall(ts_code)

with open('src/config/constants.ts', 'r', encoding='utf-8') as f:
    const_code = f.read()

# Parse indicator descriptions
ind_pattern = re.compile(r'id:\s*["\'](IND_\d+)["\'],\s*id_variabel:\s*["\']([^"\']+)["\'],\s*kode:\s*["\']([^"\']+)["\'],\s*deskripsi:\s*["\'](.*?)["\']', re.DOTALL)
ind_matches = ind_pattern.findall(const_code)
indicators = {m[0]: {'var': m[1], 'kode': m[2], 'desc': m[3]} for m in ind_matches}

# Output full audit report
with open('audit_report.txt', 'w', encoding='utf-8') as out:
    for ind_id, ind_info in indicators.items():
        out.write(f"\n{'='*80}\n")
        out.write(f"INDIKATOR: {ind_id} ({ind_info['kode']}) - {ind_info['var']}\n")
        out.write(f"Definisi: {ind_info['desc']}\n")
        out.write(f"{'-'*80}\n")
        for qid, ind, grp, teks, skala in matches:
            if ind == ind_id:
                out.write(f"[{grp.upper()}]:\n  Pertanyaan: {teks.strip()}\n  Skala: {' '.join(skala.split())}\n\n")

print("Generated audit_report.txt successfully")
