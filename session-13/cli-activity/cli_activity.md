# Command Line Instructions

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
cd hello
rm hello.py
ls
touch hello_again.py
cd ../..
ls
cd 5003670
ls
rm -r hello
ls
rm my-app
rm -r my-app
clear
ls
touch hello.py
mv hello.py Downloads
ls
cd Downloads
ls
ls
cp hello.py Documents
cd ../Documents
ls
clear
mkdir cli-test
cd cli-test && npm init
ls
npm install
ls
nano package.json
npm test
npm run test
git config -l
git config user.name
start chrome
node -v
node -e "console.log(123)"
node -l
node -h
history -w ~/history.txt
npm init
npm install express
npm install nodemon
npm start
touch index.js
```

- Add a Start Command

1. Paste the content from `index.txt` as `index.js`.
2. Add the following start command to `package.json`:
   ```json
   "start": "nodemon server.js"
   ```

```bash
curl -X POST -H "Content-Type: application/json" --json '{"username":"admin","password":"admin"}' http://localhost:5050/login
```

- Start the Next.js App

```bash
curl "http://localhost:3000/api/user"

- Test API with Postman

Run the following command:


```
