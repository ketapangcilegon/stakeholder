import json

with open('questions_summary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for grp in ['pemda', 'pelaku_usaha', 'masyarakat_pesisir', 'industri']:
    print(f"\n============================== {grp.upper()} ==============================")
    for q in data.get(grp, []):
        print(f"[{q['indikator']}] {q['teks']}")
