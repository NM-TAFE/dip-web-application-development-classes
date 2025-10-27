#### **1. Set Up Your Project Directory**

First, create a new directory for your project and navigate into it:

```bash
mkdir my-nextjs-app
cd my-nextjs-app
```

#### **2. Initialise a New NPM Project**

Initialise a new NPM project. This will create a `package.json` file:

```bash
npm init -y
```

The `-y` flag automatically accepts the default settings, but you can omit it if you prefer to go through each prompt manually.

#### **3. Install Next.js, React, and React DOM**

Next.js requires `react` and `react-dom` as peer dependencies, so you need to install them along with `next`:

```bash
npm install next@15.5.6 react@18.3.1 react-dom@18.3.1
```

#### **4. Configure Your `package.json` for Next.js**

Open your `package.json` file and add scripts to run and build your Next.js application. Update your `package.json` to include the following:

```json
{
  "name": "my-nextjs-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev", // Script to start the development server
    "build": "next build", // Script to build the application
    "start": "next start" // Script to start the production server
  },
  "dependencies": {
    "next": "^15.5.6", // Use the latest stable versions
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

#### **5. Create the directory for App Router**

Now, manually create the folder structure for a Next.js app using the App Router:

```bash
mkdir -p app/api/users
mkdir -p styles
touch app/layout.js app/page.js app/api/users/route.js styles/globals.css
```

This will create the following structure:

```
my-nextjs-app/
├── app/
│   ├── api/
│   │   └── users/
│   │       └── route.js
│   ├── layout.js
│   └── page.js
├── styles/
│   └── globals.css
├── package-.json
├── package.json
└── node_modules/
```

#### **6. Add Basic Content to Your Files**

Now, you need to add some basic content to each file to get your Next.js project up and running.

**`app/page.js`**:

```jsx
// app/page.js
export default function HomePage() {
  return (
    <main className="section">
      <div className="container has-text-centered">
        <h1 className="title is-1">Welcome to the NM Tafe Next.js App</h1>
        <p className="subtitle">
          Building modern applications with Next.js and Bulma
        </p>
      </div>
    </main>
  );
}
```

**`app/layout.js`**:

```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1 className="title has-text-white">My Next.js App</h1>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
            </div>
          </div>
        </nav>

        {/* Main content section */}
        <section className="section">
          <div className="container">
            {children} {/* This will render the children (pages) */}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              © 2024 <strong>My Next.js App</strong>. Built with Next.js and
              Bulma.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

**`app/api/users/route.js`**:

```javascript
// app/api/user/route.js
export async function GET(req) {
  try {
    // Retrieve the user
    const userObject = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: false,
      address: {
        street: "123 Main St",
        city: "Perth",
        zipCode: "6000",
      },
      skills: ["JavaScript", "HTML", "CSS"],
      socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe",
      },
      isEmployed: true,
    };

    // Return the user object as a JSON response
    return new Response(JSON.stringify(userObject), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
```

**`styles/globals.css`**:

```css
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

**`app/layout.js`**:

```js
export const metadata = {
  title: "NM Tafe Next.js App",
  description: "A modern application built with Next.js and Bulma",
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "App Logo",
      },
    ],
    siteName: "My Next.js App",
  },
};
```

## Install Bulma via npm

First, you need to install Bulma using npm (or yarn, if that's your preference) in your Next.js project.

Run the following command in your terminal:

```bash
npm install bulma
```

Or if you are using Yarn:

```bash
yarn add bulma
```

### 2. Import Bulma in Your Next.js Project

Once Bulma is installed, you need to import its CSS file into your Next.js project. There are two main ways to do this:

#### **Global Import**

1. Create or modify your `globals.css` file (located in the `app/` directory) and import Bulma:

   ```css
   /* app/globals.css */
   @import "bulma/css/bulma.min.css";
   ```

2. In your root `layout.js` file (typically `app/layout.js`), ensure that `globals.css` is imported:

   ```javascript
   // app/layout.js
   import "./globals.css"; // Import global styles (including Bulma)

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
   ```

This will apply Bulma styles globally to your entire project, and you can start using Bulma's utility classes in all your pages and components.

#### **7. Start the Development Server**

Now, start the Next.js development server to see your project in action:

```bash
npm run dev
```

This command will start the development server at `http://

Test the api route localhost:3000`.

```bash
curl "http://localhost:3000/api/user"
```

### **Summary**

By following these steps, you have manually created a Next.js project using NPM without using `npx` or the `create-next-app` tool. You now have a basic project structure that uses the App Router (`app/` directory) in Next.js 14, with scripts configured to run, build, and start your Next.js application.
