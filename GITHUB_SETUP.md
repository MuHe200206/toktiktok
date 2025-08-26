# 🚀 GitHub Setup Guide

## 📋 Prerequisites
- ✅ Git installed and configured
- ✅ GitHub account
- ✅ Project committed locally (✅ Already done!)

## 🔧 Step-by-Step GitHub Setup

### 1. Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `netflix-clone` (or your preferred name)
4. **Description**: `A Netflix-like streaming platform built with React frontend and C# .NET 8 backend`
5. **Visibility**: Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

### 2. Connect Local Repository to GitHub

After creating the repository, GitHub will show you the commands. Use these:

```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/netflix-clone.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git push -u origin master
```

### 3. Alternative: Using GitHub CLI (if installed)

```bash
# Install GitHub CLI if you haven't
# Windows: winget install GitHub.cli
# macOS: brew install gh

# Login to GitHub
gh auth login

# Create repository and push in one command
gh repo create netflix-clone --public --source=. --remote=origin --push
```

## 🔐 Authentication Options

### Option A: Personal Access Token (Recommended)
1. **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **Generate new token** → **Generate new token (classic)**
3. **Select scopes**: `repo`, `workflow`
4. **Copy the token** (you won't see it again!)
5. **Use token as password** when pushing

### Option B: SSH Keys
1. **Generate SSH key**: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. **Add to SSH agent**: `ssh-add ~/.ssh/id_ed25519`
3. **Add public key to GitHub**: Copy `~/.ssh/id_ed25519.pub` content to GitHub SSH keys
4. **Change remote URL**: `git remote set-url origin git@github.com:USERNAME/REPOSITORY.git`

### Option C: GitHub Desktop
1. **Download GitHub Desktop**
2. **Sign in with your GitHub account**
3. **Add existing repository** → Browse to your project folder
4. **Publish repository** to GitHub

## 📁 Repository Structure

Your repository will contain:

```
netflix-clone/
├── .gitignore          # Git ignore rules
├── LICENSE             # MIT License
├── README.md           # Project documentation
├── GITHUB_SETUP.md     # This file
├── backend/            # .NET 8 Backend
│   ├── toktiktokBackend/
│   │   ├── Controllers/    # API endpoints
│   │   ├── Models/         # Entity models
│   │   ├── Data/           # Database context
│   │   ├── Program.cs      # Main entry point
│   │   └── appsettings.json # Configuration
│   └── README.md
└── frontend/           # React + TypeScript Frontend
    ├── src/
    │   ├── components/     # UI components
    │   ├── pages/          # Page components
    │   ├── context/        # State management
    │   └── styles/         # CSS and Tailwind
    ├── public/              # Static assets
    └── package.json         # Dependencies
```

## 🎯 Next Steps After GitHub Setup

### 1. Enable GitHub Features
- **Issues**: Track bugs and feature requests
- **Projects**: Kanban board for project management
- **Actions**: CI/CD workflows (optional)
- **Wiki**: Additional documentation

### 2. Set Up Branch Protection (Optional)
1. **Repository Settings** → **Branches**
2. **Add rule** for `master` branch
3. **Require pull request reviews**
4. **Require status checks to pass**

### 3. Add Project Description
- **Repository description** on GitHub
- **Topics/tags** for discoverability
- **Website URL** if deployed
- **Social preview image**

## 🔄 Daily Git Workflow

### Making Changes
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
```

### Updating from Remote
```bash
# Get latest changes
git pull origin master

# Or if you have local changes
git stash
git pull origin master
git stash pop
```

## 🚨 Common Issues & Solutions

### Issue: Authentication Failed
```bash
# Check your credentials
git config --global user.name
git config --global user.email

# Reset credentials
git config --global --unset credential.helper
```

### Issue: Push Rejected
```bash
# Pull latest changes first
git pull origin master

# Or force push (use carefully!)
git push -f origin master
```

### Issue: Large Files
```bash
# Check for large files
git ls-files | xargs ls -la | sort -k5 -nr | head -10

# Remove from git history if needed
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch FILE_PATH' --prune-empty --tag-name-filter cat -- --all
```

## 📚 Additional Resources

- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub CLI Documentation](https://cli.github.com/)
- [GitHub Desktop](https://desktop.github.com/)

## 🎉 Success Checklist

- [ ] GitHub repository created
- [ ] Local repository connected to GitHub
- [ ] Code pushed to GitHub
- [ ] README.md displays correctly
- [ ] .gitignore working (no unwanted files)
- [ ] Repository is public/private as intended
- [ ] Description and topics added
- [ ] Issues enabled for bug tracking

---

**Your Netflix clone project is now ready for collaboration and deployment! 🚀**
