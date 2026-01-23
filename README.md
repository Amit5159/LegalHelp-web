<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 1. Initialize a new git record in this folder
git init

# 2. Add all your files
git add .

# 3. Create the commit
git commit -m "Deployment Update"

# 4. Rename the branch to 'main' (crucial step)
git branch -M main

# 5. Connect back to your GitHub repository
git remote add origin https://github.com/Amit5159/LegalHelp-web.git

# 6. Force the push to overwrite the old broken code
git push -u origin main --force
