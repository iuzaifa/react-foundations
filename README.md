
# react-foundations

A professional repository to learn and practice React.js from scratch, covering core concepts, components, hooks, and real-world projects.



## React Js Contents


* [Overview](#overview)
* [Hooks](#hooks)
* [Components](#components)
* [APIs](#apis)


* [Hooks](#react-dom-hooks)
* [Components](#react-dom-components)
* [APIs](#react-dom-apis)

  * [Client APIs](#client-apis)
  * [Server APIs](#server-apis)
  * [Static APIs](#static-apis)

#### **Rules of React**

* [Overview](#rules-overview)

#### **React Server Components**

* [Server Components](#server-components)
* [Server Functions](#server-functions)
* [Directives](#directives)

#### **Legacy APIs**

* [Legacy React APIs](#legacy-react-apis)
<br>
<br>
<br>
---

Here is the **step-by-step guide to create the latest React app (as of 2025)** using modern tools like **Vite** (faster and more lightweight than `create-react-app`):

---

## 1. Prerequisites

Make sure you have:

* **Node.js** (version 18 or later)
* **npm** or **yarn**

Check by running:

```bash
node -v
npm -v
```

If not installed, download from: [https://nodejs.org/](https://nodejs.org/)

---

## 2. Create a New React Project Using Vite

### Step-by-Step (with npm):

###  Step 1: Open Terminal / Command Prompt

Navigate to the folder where you want to create the app.

```bash
cd path/to/your/folder
```

---

### Step 2: Create React App with Vite

```bash
npm create vite@latest my-react-app
```

* `my-react-app` is your project name. You can change it.
* Vite will ask:

  * **Framework?** → Choose: `React`
  * **Variant?** → Choose: `JavaScript` or `TypeScript` (choose JS if unsure)

---

### Step 3: Move into Project Folder

```bash
cd my-react-app
```

---

### Step 4: Install Dependencies

```bash
npm install
```

---

### Step 5: Run the Development Server

```bash
npm run dev
```

* Open browser and go to: `http://localhost:5173`

---

##  3. Folder Structure (Vite React App)

```
my-react-app/
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ index.html
├─ package.json
├─ vite.config.js
```

---

##  4. Create Your First Component

Inside `src/`, create a file:

```jsx
// src/components/Hello.jsx
function Hello() {
  return <h2>Hello from Component!</h2>;
}
export default Hello;
```

Then use it in `App.jsx`:

```jsx
import Hello from './components/Hello';

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <Hello />
    </>
  );
}

export default App;
```

---

##  5. Build for Production (optional)

```bash
npm run build
```

This will generate the final static files in the `dist/` folder.

---

##  6. Bonus: Install Tailwind CSS (Optional)

If you want to use Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then configure `tailwind.config.js` and `index.css`.

---

Let me know if you want to set it up using **create-react-app** instead of Vite, or if you want Tailwind + Router setup included.



---




### Standard Folder Structure (Best Practice)

```
/src
├── /assets
│   ├── /images         All image files (logo.png, banners, etc.)
│   └── /styles         Global CSS/SASS files
│       ├── main.css
│       ├── variables.scss
│       └── themes.scss
│
├── /components         Reusable UI components
│   ├── Button.jsx
│   ├── Header.jsx
│   └── Sidebar.jsx
│
├── /pages              Page-level components (like routes)
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── /hooks              Custom React Hooks (like useAuth.js)
│   └── useToggle.js
│
├── /contexts           React Context files (like AuthContext)
│   └── AuthContext.js
│
├── /utils              Helper functions or constants
│   ├── dateFormatter.js
│   └── constants.js
│
├── /services           API calls and services
│   └── api.js
│
├── App.js
├── index.js
└── index.css
```

---

### Where to Keep What?

| Type              | Keep It In           | Example                              |
| ----------------- | -------------------- | ------------------------------------ |
| Images            | `src/assets/images/` | `src/assets/images/logo.png`         |
| Global CSS        | `src/assets/styles/` | `main.css`, `variables.scss`         |
| Page-specific CSS | With the component   | `Home.module.css` beside `Home.jsx`  |
| JS Components     | `src/components/`    | Reusable buttons, cards, headers     |
| Page Components   | `src/pages/`         | Routes like `Home`, `About`          |
| Custom Hooks      | `src/hooks/`         | `useToggle.js`, `useLocalStorage.js` |
| Context Providers | `src/contexts/`      | `AuthContext.js`                     |
| API Calls / Axios | `src/services/`      | `api.js`, `userService.js`           |
| Utilities         | `src/utils/`         | `dateFormatter.js`, `constants.js`   |

---

### Why Avoid Using the `public/` Folder

| Problem                   | Solution in `src/`               |
| ------------------------- | -------------------------------- |
| No caching/versioning     | Webpack handles it in `src`      |
| No import system          | Import like any other file       |
| No linting or safety      | Full JS/CSS support in `src`     |
| Doesn't work with modules | Can't use `import` from `public` |

---

### Difference Between `src/assets/` and `public/` in React

| Feature / Purpose  | `src/assets/`                           | `public/`                                         |
| ------------------ | --------------------------------------- | ------------------------------------------------- |
| Webpack Handling   | Processed by Webpack                    | Not processed by Webpack                          |
| Importing          | ES6 imports (`import img from ...`)     | No import (use relative URLs only)                |
| File Optimization  | Minified, hashed, and cached            | No optimization or hashing                        |
| Hot Reload Support | Full hot-reloading support              | Partial or none                                   |
| Use in JSX         | `import logo from '../assets/logo.png'` | `<img src='/logo.png' />`                         |
| Best Use Case      | For images, fonts, assets in components | For public files like `favicon.ico`, `robots.txt` |

> Use `src/assets/` for component-related resources.
> Use `public/` only when direct URL access is required.

---

