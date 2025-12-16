# JavaScript Modules Exercise

## Overview

This exercise involves splitting an existing JavaScript file into modules and classes to promote better code organisation and reuse.

You will start with a single JavaScript file and refactor it into 2 modules and one class.

## Instructions

### 1. Clone the Repository (if using Github Classroom)

- click the link for your classroom repo on blackboard
- link your GitHub account to your Student Number in GitHub Classroom
- your repo you will use will be automatically created
- clone the classroom repo to your local machine

**if you are not using Github Classroom**

- download the code from either the Class repo or the Blackboard shell

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Review the Existing Code

Open the scripts.js file located in the /js directory and review the existing code.

### 3. Create New Modules

Split the code into at two modules and one class.

**Example Structure:**

- eventHandlers.js: This module will contain functions that handle button events.
- domUpdate.js: This module will contain functions that manipulate the DOM.
- post.js: This module will define a Post class.

/assets
/js
|\_\_
| domUpdate.js
| eventHandlers.js
| post.js
| main.js

- index.html
- README.md

### 4. Refactor scripts.js

Refactor the scripts.js to use the new modules.

### 5. Implement the Modules

Create the following files in the /js directory:

- domUpdate.js
- eventHandlers.js
- post.js
- main.js (this file will be provided by your lecturer & initiates all of the other code)

### 6. Test Your Changes

Open index.html in a web browser(Either from Live Server or Laragon) to ensure everything works as expected.

### 7. Commit and Push Your Changes(if using github classroom)

```bash
git add .
git commit -m "Refactored JavaScript into modules and added Post class"
git push origin main
```
