# Web Application Development Classes

Sessions will include lecture material & coding challenges. We provide base content for you to use in your learning.

## Setting Up Your Code Environment

To allow us to use all of the packages and tools we might need, we need to set up our code environment:

1. **Open Laragon:**
2. Open the terminal (ensure you are in the `www` folder) then type the following commands:

   ```bash
   mkdir source
   cd source
   mkdir repos
   cd repos
   ```

3. Clone the class content into the folder using:

   ```bash
   git clone https://github.com/NM-TAFE/dip-web-application-development-classes.git
   ```

4. Navigate back to the `www` folder:

   ```bash
   cd ../../
   ```

5. Check that npm is installed:

   ```bash
   npm -v
   ```

6. Install the latest version:

   ```bash
   npm install -g npm@latest
   ```

7. Check the installation worked (if updates are required):

   ```bash
   npm -v
   ```

8. Clone the GitHub repository with the following command in your Laragon terminal:

   ```bash
   git clone https://github.com/NM-TAFE/dip-web-application-development-classes.git
   ```

9. To get weekly updates, use:

   ```bash
   git pull origin main
   ```

## GitHub Repository

**[NM-TAFE/dip-web-application-development-classes](https://github.com/NM-TAFE/dip-web-application-development-classes):** Repository for challenges and code examples for ICTWEB517 & ICTPRG546 (beginning 2024).

Note: You can also download the session code in the Blackboard shell.

To bring the latest changes from the `main` branch into another branch without overwriting the work on that branch, you can use **Git merge** or **Git rebase**. Both methods will bring changes from the `main` branch into your current branch, but they handle conflicts differently. Here’s a step-by-step guide for each approach:

### **Option 1: Merging the `main` branch into another branch**

1. **Switch to the target branch** (the branch where you want to bring the changes):

   ```bash
   git checkout <your-branch>
   ```

2. **Fetch the latest changes from `main`** (to ensure you have the latest commits):

   ```bash
   git fetch origin
   ```

3. **Merge the `main` branch into your branch**:

   ```bash
   git merge origin/main
   ```

   - This will merge the latest changes from the `main` branch into your current branch.
   - If there are conflicts, Git will notify you, and you can resolve them manually before completing the merge.

4. **Resolve any conflicts**, if necessary:

   - Open the conflicting files and make manual edits.
   - Once resolved, mark the conflicts as resolved by adding the changes:
     ```bash
     git add <file>
     ```

5. **Complete the merge**:
   After resolving any conflicts, complete the merge with:
   ```bash
   git commit
   ```

### **Option 2: Rebasing your branch onto `main`**

Alternatively, you can rebase your branch onto the latest `main` branch. This keeps your commit history cleaner, as it applies your branch’s changes on top of the latest `main` branch commits.

1. **Switch to the target branch**:

   ```bash
   git checkout <your-branch>
   ```

2. **Fetch the latest changes from `main`**:

   ```bash
   git fetch origin
   ```

3. **Rebase your branch onto `main`**:

   ```bash
   git rebase origin/main
   ```

   - This will reapply your branch’s changes on top of the latest commits from `main`.
   - If there are conflicts, Git will pause the rebase and allow you to resolve them.

4. **Resolve any conflicts**, if necessary:

   - Open the conflicting files, make your changes, and then add the files:
     ```bash
     git add <file>
     ```

5. **Continue the rebase**:
   After resolving conflicts, continue the rebase:

   ```bash
   git rebase --continue
   ```

6. **Force-push your branch** (only if you have already pushed your branch to a remote repository):
   ```bash
   git push --force-with-lease
   ```

### **Which to Use: Merge or Rebase?**

- **Merge** is safer for preserving the original history of your branch. It creates a merge commit, showing where the two branches merged.
- **Rebase** results in a cleaner history, as it applies your changes on top of `main` as if they were developed after the latest `main` changes. However, it rewrites history, which can be problematic if your branch has already been pushed to a shared repository.
