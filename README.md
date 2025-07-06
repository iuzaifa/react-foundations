
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

