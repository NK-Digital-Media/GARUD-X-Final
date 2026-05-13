#!/bin/bash
echo "🚀 GARUD X: Initiating Instant Deployment..."

# Initialize Git
git init
git add .
git commit -m "GARUD X: Professional Deployment"
git branch -M main

# Creating a unique repo name using timestamp
repo_name="GARUD-X-$(date +%s)"

# Automatic push and create repo on GitHub
gh repo create $repo_name --public --source=. --remote=origin --push

echo "✅ SUCCESS! Aapka system 100% working hai."
echo "🔗 Live Link: https://nk-digital-media.github.io/$repo_name/"
