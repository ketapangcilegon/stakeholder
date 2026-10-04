import json
import io

with open('questions_summary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with io.open('all_questions_detailed.txt', 'w', encoding='utf-8') as out:
    for grp in ['pemda', 'pelaku_usaha', 'masyarakat_pesisir', 'akademisi_lsm', 'industri']:
        out.write(f"\n{'='*70}\nKELOMPOK STAKEHOLDER: {grp.upper()}\n{'='*70}\n")
        for q in data.get(grp, []):
            out.write(f"[{q['indikator']}] ({q['id']})\n")
            out.write(f"Teks: {q['teks']}\n\n")

print("Written to all_questions_detailed.txt")
