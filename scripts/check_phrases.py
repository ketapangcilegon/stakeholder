import re

with open('src/data/questionBank.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's verify all questions for IND_01 to IND_42
# We want to check:
# 1. Any typo in questions
# 2. Inappropriately informal phrases (e.g. "hangat-hangat tahi ayam saat mau pemilu saja" in Q_IND_18_pelaku_usaha)
# 3. Questions in akademisi_lsm that ignore HNSI (organisasi nelayan)
# 4. Questions in pelaku_usaha that are phrased too ambiguously or as yes/no instead of evaluative Likert
# 5. Skala labels appropriateness

# Let's find specific phrases
findings = []
if 'hangat-hangat tahi ayam' in text:
    findings.append("Found 'hangat-hangat tahi ayam' in question text (unprofessional for academic thesis).")

if 'perguruan tinggi / LSM' in text:
    findings.append("Found 'perguruan tinggi / LSM' (should include UNTIRTA & HNSI).")

print("Key findings:")
for f in findings:
    print("- " + f)
