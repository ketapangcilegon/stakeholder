import json

with open('questions_summary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== AKADEMISI & ORGANISASI NELAYAN (UNTIRTA & HNSI) QUESTIONS ===")
for q in data.get('akademisi_lsm', []):
    print(f"[{q['indikator']}] {q['teks']}")
