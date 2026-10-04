import json

with open('questions_summary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('src/config/constants.ts', 'r', encoding='utf-8') as f:
    constants_text = f.read()

# Let's write an inspector script to check each indicator and print questions for all 5 stakeholders side by side
with open('review_all_questions.txt', 'w', encoding='utf-8') as out:
    for ind_idx in range(1, 43):
        ind_code = f"IND_{ind_idx:02d}"
        out.write(f"====================================================================\n")
        out.write(f"INDIKATOR: {ind_code}\n")
        out.write(f"====================================================================\n")
        for grp in ['pemda', 'pelaku_usaha', 'masyarakat_pesisir', 'akademisi_lsm', 'industri']:
            qs = [q for q in data.get(grp, []) if q['indikator'] == ind_code]
            if qs:
                q = qs[0]
                out.write(f"[{grp}] ({q['id']}):\n  {q['teks']}\n\n")
            else:
                out.write(f"[{grp}]: NOT FOUND!\n\n")

print("Generated review_all_questions.txt")
