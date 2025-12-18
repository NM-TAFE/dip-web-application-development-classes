## Command Line Instructions
### These commands run on all windows terminals
(note some may vary for MacOS or Linux)

1. File navigation
```bash
ls
ls -al
mkdir hello
ls
cd hello
touch hello.py
nano hello.py
python hello.py
pwd
python -h
code .
cd ..
rm hello.py
ls
touch hello_again.py
cd ../..
cd 5003670
rm -r hello
clear
touch hello.py
mv hello.py pick_a_folder
cp hello.py Documents
```
2. Create a node server
```bash
mkdir cli-test
# Initiating the npm project creates you packag.json and lets you choose some options
cd cli-test && npm init
ls
npm install
ls
# Edit a file
nano package.json
npm init
npm install express
npm install nodemon
# Does this work?
npm start 
# Create an entry point
touch index.js
```
## Add a Start Command to the package.json

- Paste the content from `index.txt` as `index.js`.
- Add the following start command to `package.json`:
   ```json
   "start": "nodemon server.js"
   ```
- Test API with Postman - note that we can run more than one server assuming the port number is different

- Start the Node server
```bash
curl -X POST -H "Content-Type: application/json" --json '{"username":"admin","password":"admin"}' http://localhost:5050/login
```

- Start the Next.js App
```bash
curl "http://localhost:3000/api/user"
```

4. Other useful commands
```bash
node -v
# execute some code in node
node -e "console.log(123)"
node -l
# Help flags are everywhere
node -h
# Change you git account details
git config -l
git config user.name
# Start an app
start chrome
# Print the history from your terminal
history -w ~/history.txt
```