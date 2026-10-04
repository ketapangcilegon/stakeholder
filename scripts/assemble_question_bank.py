# -*- coding: utf-8 -*-
"""
Assembles questionBank.ts from modular indicator datasets.
"""
import sys
import os

sys.path.append(os.path.dirname(__file__))

from gen_q_data_2 import ALL_INDICATORS as d2
from gen_q_data_3 import ALL_INDICATORS as d3
from gen_q_data_4 import ALL_INDICATORS as d4
from gen_q_data_5 import ALL_INDICATORS as d5

combined = d2 + d3 + d4 + d5

print(f"Total indicators combined: {len(combined)}")
assert len(combined) == 42, f"Expected 42 indicators, got {len(combined)}"

groups = ["pemda", "pelaku_usaha", "masyarakat_pesisir", "akademisi_lsm", "industri"]

# Verify all questions
total_q = 0
for ind in combined:
    assert len(ind["questions"]) == 5, f"Indicator {ind['id']} does not have 5 questions"
    for g in groups:
        assert g in ind["questions"], f"Missing group {g} in {ind['id']}"
        q = ind["questions"][g]
        assert "teks" in q and q["teks"], f"Missing teks in {ind['id']} for {g}"
        assert "skala" in q and len(q["skala"]) == 5, f"Missing skala 1-5 in {ind['id']} for {g}"
        total_q += 1

print(f"Verified all {total_q} questions across 42 indicators.")

# Build TypeScript content
lines = []
lines.append("import { PertanyaanItem } from './questionnaireData';")
lines.append("")
lines.append("export const LIKERT_LABELS = {")
lines.append("  standard: {")
lines.append('    1: "Sangat Tidak Setuju / Sangat Buruk",')
lines.append('    2: "Tidak Setuju / Kurang Baik",')
lines.append('    3: "Cukup / Netral / Ragu-ragu",')
lines.append('    4: "Setuju / Baik",')
lines.append('    5: "Sangat Setuju / Sangat Baik"')
lines.append("  },")
lines.append("  frequency: {")
lines.append('    1: "Tidak Pernah (0%)",')
lines.append('    2: "Jarang Sekali",')
lines.append('    3: "Kadang-kadang",')
lines.append('    4: "Sering",')
lines.append('    5: "Sangat Sering / Selalu Aktif"')
lines.append("  },")
lines.append("  influence: {")
lines.append('    1: "Sangat Rendah / Tidak Berpengaruh",')
lines.append('    2: "Rendah",')
lines.append('    3: "Sedang / Cukup",')
lines.append('    4: "Tinggi / Berpengaruh Kuat",')
lines.append('    5: "Sangat Tinggi / Sangat Menentukan"')
lines.append("  },")
lines.append("  interest: {")
lines.append('    1: "Sangat Rendah / Tidak Berkepentingan",')
lines.append('    2: "Rendah",')
lines.append('    3: "Sedang",')
lines.append('    4: "Tinggi / Sangat Berkepentingan",')
lines.append('    5: "Sangat Tinggi / Vital & Menentukan Hidup"')
lines.append("  }")
lines.append("};")
lines.append("")
lines.append("export const QUESTION_BANK: PertanyaanItem[] = [")

for item in combined:
    if item.get("section"):
        lines.append("  // =========================================================================")
        lines.append(f"  // {item['section']}")
        lines.append("  // =========================================================================")
    
    ind_id = item["id"]
    ind_name = item.get("name", "")
    lines.append(f"  // {ind_id}: {ind_name}")

    for grp in groups:
        q = item["questions"][grp]
        qid = f"Q_{ind_id}_{grp}"
        teks_escaped = q["teks"].replace('"', '\\"')
        
        skala_entries = []
        for num in range(1, 6):
            s_label = q["skala"][num].replace('"', '\\"')
            skala_entries.append(f'{num}: "{s_label}"')
        skala_str = ", ".join(skala_entries)

        lines.append("  {")
        lines.append(f'    id: "{qid}",')
        lines.append(f'    id_indikator: "{ind_id}",')
        lines.append(f'    id_stakeholder_group: "{grp}",')
        lines.append(f'    teks: "{teks_escaped}",')
        lines.append(f'    skala_label: {{ {skala_str} }}')
        lines.append("  },")
    lines.append("")

# Remove trailing comma on last item
if lines[-2] == "  },":
    lines[-2] = "  }"

lines.append("];")
lines.append("")
lines.append("export function getQuestionsForStakeholder(stakeholderId: string): PertanyaanItem[] {")
lines.append("  return QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderId);")
lines.append("}")
lines.append("")

output_code = "\n".join(lines)

with open("src/data/questionBank.ts", "w", encoding="utf-8") as f:
    f.write(output_code)

print("Successfully written to src/data/questionBank.ts!")
