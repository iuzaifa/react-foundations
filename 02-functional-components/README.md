
## 1. What is a **Function**?

A **function** is a block of JavaScript code that performs a task and can return a value.

**Example:**

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

* Used for calculations, logic, or any general purpose.
* Not tied to React specifically.

---

## 2. What is a **Component** in React?

A **component** is a **special kind of function** that returns **JSX** (HTML-like syntax used in React). It’s used to build user interfaces.

**Example:**

```jsx
function Welcome() {
  return <h1>Hello, Abu!</h1>;
}
```

* Must start with a capital letter (like `Welcome`)
* Must return JSX (not plain text or numbers)
* Can be reused in other components like this: `<Welcome />`

---

## Key Differences: Function vs Component

| Feature         | Function                         | Component                            |
| --------------- | -------------------------------- | ------------------------------------ |
| Purpose         | Perform logic, calculation, etc. | Render UI (HTML/JSX)                 |
| Returns         | Any value (number, string, etc.) | JSX (UI markup)                      |
| Capital Naming? | No (can be lowercase)            | Yes (must start with capital letter) |
| Used In         | Any JavaScript code              | Only inside React apps               |
| Example Return  | `return a + b;`                  | `return <h1>Hello</h1>;`             |

---

## Bonus: A React Component is a Function

A **React component** is really just a **JavaScript function** that returns **JSX**.

---

### Example:

```jsx
function Sum() {
  const result = 5 + 3;
  return <p>Sum is: {result}</p>;
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Sum />
    </div>
  );
}
```

In this example:

* `Sum` is a component that returns UI.
* `App` is another component using `Sum`.

---

## Summary:

* **Function** = Regular JavaScript block of code.
* **Component** = Special function used in React that returns JSX and builds UI.
