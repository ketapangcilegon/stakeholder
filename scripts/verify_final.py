import re

with open('src/data/questionBank.ts', 'r', encoding='utf-8') as f:
    text = f.read()

pattern = re.compile(r'id_stakeholder_group:\s*["\']([^"\']+)["\']')
matches = pattern.findall(text)

counts = {}
for g in matches:
    counts[g] = counts.get(g, 0) + 1

print(f"Total question items found: {len(matches)}")
print("Counts by group:")
for g, c in counts.items():
    print(f"  - {g}: {c}")

assert len(matches) == 210, f"Expected 210, got {len(matches)}"
for g in ['pemda', 'pelaku_usaha', 'masyarakat_pesisir', 'akademisi_lsm', 'industri']:
    assert counts.get(g) == 42, f"Expected 42 for {g}, got {counts.get(g)}"

print("ALL VERIFICATIONS PASSED PERFECTLY!")
