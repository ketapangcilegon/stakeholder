import json
import re

with open('src/data/questionBank.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

# Parse all items
pattern = re.compile(
    r'id:\s*["\']([^"\']+)["\'],\s*'
    r'id_indikator:\s*["\']([^"\']+)["\'],\s*'
    r'id_stakeholder_group:\s*["\']([^"\']+)["\'],\s*'
    r'teks:\s*["\'](.*?)["\'],\s*'
    r'skala_label:\s*\{([^}]+)\}',
    re.DOTALL
)

matches = pattern.findall(ts_code)

# Group by group
by_group = {}
for qid, ind, grp, teks, skala in matches:
    if grp not in by_group:
        by_group[grp] = []
    by_group[grp].append({
        'id': qid,
        'ind': ind,
        'teks': teks.strip(),
        'skala': " ".join(skala.split())
    })

for grp, qs in by_group.items():
    print(f"\n==================== GROUP: {grp.upper()} ({len(qs)} questions) ====================")
    for q in qs:
        print(f"[{q['ind']}] {q['teks']}")
