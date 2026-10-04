import re
import json

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
print(f"Total questions matched: {len(matches)}")

groups = {}
indicators = {}
questions_by_group = {}

for m in matches:
    qid, ind, grp, teks, skala = m
    groups[grp] = groups.get(grp, 0) + 1
    indicators[ind] = indicators.get(ind, 0) + 1
    if grp not in questions_by_group:
        questions_by_group[grp] = []
    questions_by_group[grp].append({
        'id': qid,
        'indikator': ind,
        'teks': teks.strip()
    })

print("Questions per group:", groups)
print(f"Total distinct indicators: {len(indicators)}")

# Output summary to a text file
with open('questions_summary.json', 'w', encoding='utf-8') as f:
    json.dump(questions_by_group, f, ensure_ascii=False, indent=2)

print("Saved to questions_summary.json")
