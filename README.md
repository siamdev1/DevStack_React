# 🧱 DevStack - Modern Tech Stack Builder

DevStack is an interactive and responsive web application designed for developers and software engineers to discover, explore, and curate technology stacks for their software projects.

---

## 🚀 Live Demo & Links
- **GitHub Repository**: [https://github.com/siamdev1/DevStack_React](https://github.com/siamdev1/DevStack_React)
- **Live Deployment**: [https://cool-bubblegum-e68008.netlify.app/](https://cool-bubblegum-e68008.netlify.app/)

---

## 🛠️ Technologies Used
- **React.js (v18+)**
- **TypeScript**
- **Tailwind CSS (v4)**
- **React-Toastify** (Toast Notification alerts)
- **Lucide React** (Vector UI icons)
- **Vite** (Next-generation frontend tooling)
- **JSON** (Asynchronous technology data catalog)

---

## ✨ Key Features
1. **Interactive Tech Stack Curation**: Users can browse categorized technologies (Frontend, Backend, Database, Language, Styling, DevOps) and add them to their custom architectural stack sidebar with live item count and status indicator.
2. **Duplicate Prevention & Realtime Alerts**: Smart validation prevents adding duplicate technologies to the stack, showing toast notifications via `react-toastify` for additions, removals, duplicates, and clearing the entire stack.
3. **Responsive Sticky Navbar & Mobile Drawer**: Seamless mobile and desktop navigation with a sticky header, brand gradient accents, category filtering, and interactive hamburger menu for smaller screens.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like structure directly inside JavaScript code. JSX makes writing React components much more intuitive, readable, and declarative. Behind the scenes, build tools (like Babel or Vite) compile JSX into standard `React.createElement()` JavaScript calls.

---

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component down to a child component. Props are immutable and cannot be modified by the child component receiving them.
- **State:** Internal, mutable data managed within a component that can change over time based on user interactions or API responses. When state updates, React automatically re-renders the component to reflect the new data in the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to declare and manage local reactive state variables. In this project, `useState` was used in `App.tsx` to manage:
- `technologies`: Holds the array of tech items loaded from the JSON file.
- `myStack`: Holds the list of selected technologies currently in the user's stack.
- `loading`: Tracks whether the JSON catalog data is still fetching.
- `selectedCategory`: Tracks the active category filter pill.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook is used to perform **side effects** in functional components (such as fetching data, manipulating the DOM, or setting up timers). In this project, `useEffect` was used with an empty dependency array (`[]`) to trigger an asynchronous `fetch('/technologies.json')` call once when the component initially mounts, loading the catalog without blocking component rendering.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React uses the `key` prop to identify which items in a list have changed, been added, or been removed during reconciliation (Virtual DOM diffing). Giving each item a unique `key` (such as `tech.id`) allows React to efficiently update only the specific DOM nodes that changed rather than re-rendering the entire list from scratch.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering is a technique in React where different UI elements or components are rendered based on certain conditions (like boolean flags or array lengths).  
**Example used in this project:**
Inside `YourStack.tsx`, when `stack.length === 0`, an empty state folder illustration and message are shown. When `stack.length > 0`, the list of selected cards and the "Export Architecture Stack" button are displayed.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed downwards via **props** (for example, passing `<TechCard technology={tech} isAdded={isAdded} />`).
- **Child to Parent:** The parent passes a **callback function** as a prop to the child (e.g., `onAddToStack={handleAddToStack}`). When the user clicks the button in the child component, it invokes that callback function, passing arguments back up to the parent component.
