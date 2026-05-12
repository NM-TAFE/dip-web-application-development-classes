You can use `npm` to check for outdated dependencies in your project by running the following command in your terminal:

```bash
npm outdated
```

### What this command does:

- It lists all the dependencies in your project that are outdated, including details such as:
  - The **current version** of the installed package.
  - The **wanted version** (the latest version that satisfies the version range in your `package.json`).
  - The **latest version** (the newest version available in the npm registry).

### Example output:

```
Package         Current  Wanted  Latest  Location
react           17.0.2   17.0.2  18.2.0  node_modules/react
react-dom       17.0.2   17.0.2  18.2.0  node_modules/react-dom
```

### To update packages:

1. **For minor and patch updates (recommended by your `package.json`):**
   You can run:

   ```bash
   npm update
   ```

2. **To update to the latest version (including major updates):**
   If you want to upgrade to the latest version, regardless of breaking changes, you can use:

   ```bash
   npm install <package-name>@latest
   ```

   Example:

   ```bash
   npm install react@latest
   ```

3. **To update all dependencies to their latest versions:**
   You can use a package like `npm-check-updates` to upgrade all dependencies to their latest versions. Install it globally:

   ```bash
   npm install -g npm-check-updates
   ```

   Then, to update all dependencies in your `package.json` to the latest versions:

   ```bash
   ncu -u
   ```

   After that, run `npm install` to install the updated versions.
