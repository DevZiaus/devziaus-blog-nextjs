---
title: "To-Do List App Tutorial: CRUD Operations, Local Storage, and Browser Notifications in React"
meta: "Learn how to build a to-do list app with CRUD operations, local storage, and browser notifications. Get a step-by-step guide and build your own to-do list app in React."
date: "2024-11-21"
thumbnail: "/images/todo/todo.webp"
author: "DevZiaus"
category: "Web Development & Programming"
tags: ['front-end','programming','development','web-design','web-page', 'Bootstrap', 'Tailwind CSS', 'Reactjs']
---

![To-Do List App Tutorial: CRUD Operations, Local Storage, and Browser Notifications in React](/images/todo/todo.webp)


**Build a To-Do List App with Reminders Using React, Local Storage, and Tailwind CSS**

A **to-do list app** with reminder notifications is a great project for beginners learning **CRUD operations**, **local storage**, and working with the **Notification API**. In this guide, you’ll create a responsive, priority-based to-do list with features like task creation, editing, and deadline-based notifications.

---

## **Features**
1. **Add, edit, and delete tasks.**
2. **Set deadlines and receive notifications.**
3. **Mark tasks as completed.**
4. **Sort tasks by priority or due date.**

---

## **Tech Stack**
- **React**: A <a href="./top-5-javascript-frameworks-for-building-responsive-web-app">JavaScript library</a> for building user interfaces.
- **Local Storage**: For data persistence without a backend.
- **Notification API**: To send reminders to users.
- **Tailwind CSS**: For rapid and responsive <a href="./frontend-development">UI design</a>.

---

## **Learning Goals**
- Master **CRUD operations** in React.
- Persist data using **local storage**.
- Trigger browser notifications using the **Notification API**.
- Style with <a href="./bootstrap-vs-tailwind-css-framework">Tailwind CSS</a> for a modern look.

---

### **Step-by-Step Implementation**

## **1. Project Setup**
1. **Create a new React project:**
   
   ```
   npx create-react-app to-do-reminders
   cd to-do-reminders
   ```

2. **Install Tailwind CSS:**
   
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

3. **Configure Tailwind CSS:**  
   Update `tailwind.config.js` with:
   
   ```
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Add Tailwind to your styles:**  
   Update `src/index.css`:
   
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start the development server:**
   
   ```
   npm start
   ```

---

### **2. App Structure**
Organize the app into reusable components:

```
/src
  ├── components
  │   ├── TaskForm.js    # Handles task creation
  │   ├── TaskList.js    # Displays all tasks
  │   ├── TaskItem.js    # Renders individual tasks
  ├── App.js             # Main application logic
  ├── index.js           # Entry point
```

---

### **3. Build the Components**

## **3.1 TaskForm Component**

The **TaskForm component** lets users input task details (title, deadline, priority).

#### Code:

```javascript
// src/components/TaskForm.js
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Task title is required");

    addTask({ 
      id: Date.now(), 
      title, 
      deadline, 
      priority, 
      completed: false 
    });

    setTitle("");
    setDeadline("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
```

---

### **Understanding the `TaskForm` Component in React**

In this section, we’ll break down the **`TaskForm`** Component, which is designed to let users add new tasks with details like a title, deadline, and priority level. This is a great way to learn about <a href="https://react.dev/" target="_blank">React</a> hooks, form handling, and event-driven programming.

---

### **Key Concepts in This Code**

#### 1. **What is `useState`?**
React’s `useState` hook allows us to manage and update the state of variables inside a functional component. Here, we use `useState` to track three pieces of information:
- **`title`**: The name of the task.
- **`deadline`**: The due date and time for the task.
- **`priority`**: The task's priority level (Low, Medium, or High).

---

#### 2. **How the Component Works**

- **`TaskForm` Props**: This component accepts a single prop, **`addTask`**, which is a function passed from the parent component. The `addTask` function handles what happens when a new task is added.

- **Form Structure**: 
  - The form consists of:
    1. An input field for the task title.
    2. A date and time picker for the deadline.
    3. A dropdown menu for setting the priority level.
    4. A submit button to add the task.

---

#### 3. **Code Walkthrough**

Here’s how each part of the code works:

1. **State Management**:
   
   ```javascript
   const [title, setTitle] = useState("");
   const [deadline, setDeadline] = useState("");
   const [priority, setPriority] = useState("Low");
   ```
   - `title`, `deadline`, and `priority` start with default values. 
   - Each `useState` hook comes with a setter function (`setTitle`, `setDeadline`, `setPriority`) to update the values.

2. **Form Submission**:
   
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault(); // Prevents the page from reloading
     if (!title) return alert("Task title is required");

     // Call the parent function to add the task
     addTask({
       id: Date.now(), // Generate a unique ID for the task
       title,
       deadline,
       priority,
       completed: false // Default status is "not completed"
     });

     // Clear form fields
     setTitle("");
     setDeadline("");
     setPriority("Low");
   };
   ```
   
   - **`handleSubmit`** is triggered when the user clicks "Add Task."
   - **Form Validation**: The code ensures a task title is provided. If not, it shows an alert.
   - **Task Data**: The task object includes:
     - A unique ID (`id`).
     - The user-provided `title`, `deadline`, and `priority`.
     - A default `completed` value of `false`.

3. **User Inputs**:

   - **Title Input**:
     
     ```javascript
     <input
       type="text"
       placeholder="Task Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
     />
     ```

     - Tracks what the user types and updates `title` in real-time.

   - **Deadline Picker**:
     
     ```javascript
     <input
       type="datetime-local"
       value={deadline}
       onChange={(e) => setDeadline(e.target.value)}
     />
     ```

     - Lets users pick a deadline. Updates `deadline` state when changed.

   - **Priority Dropdown**:
     
     ```javascript
     <select
       value={priority}
       onChange={(e) => setPriority(e.target.value)}
     >
       <option value="Low">Low Priority</option>
       <option value="Medium">Medium Priority</option>
       <option value="High">High Priority</option>
     </select>
     ```

     - Allows users to select a priority level.

4. **Form Layout**:
   
   ```javascript
   <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
     <h2 className="text-xl font-bold mb-4">Add New Task</h2>
   ```

   - The form is styled using **Tailwind CSS**, making it visually appealing and responsive.

5. **Submit Button**:
   
   ```javascript
   <button className="w-full bg-blue-600 text-white py-2 rounded-md">
     Add Task
   </button>
   ```

   - A button triggers the `handleSubmit` function to submit the form.

---


#### **3.2 TaskList Components**
This components displays a list of tasks and handle actions like marking tasks as completed or deleting them.

```javascript
// src/components/TaskList.js
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
```

### **Understanding the `TaskList` Component in React**

The **`TaskList`** component is a reusable React component designed to display a list of tasks. It serves as the "middleman" between the app’s task data and individual task components. Let's explains the code in detail, highlighting its use of props, reusable components, and React's `map()` method for rendering lists.

---

### **Key Concepts in This Code**

#### 1. **What Does the `TaskList` Component Do?**
The `TaskList` component:
- Receives a list of tasks as a prop.
- Iterates through the tasks using `map()` to render each task as a child component, **`TaskItem`**.
- Provides functionality for toggling task completion and deleting tasks, all through the props it passes to `TaskItem`.

---

### **Code Walkthrough**

1. **Importing Dependencies**:
   
   ```javascript
   import TaskItem from "./TaskItem";
   ```

   - The `TaskList` component imports **`TaskItem`**, which is responsible for displaying the details of a single task.

2. **Component Declaration**:
   
   ```javascript
   const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
   ```

   - The component is a **functional component** using arrow function syntax.
   - **Props**:
     - `tasks`: An array of task objects to display.
     - `toggleComplete`: A function to mark tasks as complete or incomplete.
     - `deleteTask`: A function to remove a task from the list.

3. **Rendering the Task List**:
   
   ```javascript
   return (
     <div className="mt-4">
       {tasks.map((task) => (
         <TaskItem
           key={task.id}
           task={task}
           toggleComplete={toggleComplete}
           deleteTask={deleteTask}
         />
       ))}
     </div>
   );
   ```

   - **`tasks.map()`**:
     - React's `map()` function iterates over the `tasks` array.
     - For each task object, it returns a **`TaskItem`** component.
   - **`key` Attribute**:
     - React requires a unique `key` for list items to optimize rendering. Here, `task.id` serves as the unique identifier.
   - **Props for TaskItem**:
     - `task`: Passes the task data to the `TaskItem` component.
     - `toggleComplete` and `deleteTask`: Passes functions to handle task actions.

4. **Styling**:
   
   ```javascript
   <div className="mt-4">
   ```

   - Uses Tailwind CSS for styling. The `mt-4` class adds margin to separate the task list visually.

5. **Exporting the Component**:
   
   ```javascript
   export default TaskList;
   ```

   - Exports the component so it can be imported and used in other parts of the application.

---

### **How the Component Fits into Your Application**

- **Parent-Child Relationship**:
  - `TaskList` is used in the main app component by importing it. 
  - It receives `tasks` from the parent and passes individual task data to the child component, `TaskItem`.

- **Dynamic Rendering**:
  - By using the `map()` function, the component dynamically renders the task list. If the `tasks` array changes (e.g., a task is added or deleted), the component re-renders automatically.

---

### **Benefits of This Approach**

1. **Separation of Concerns**:
   - The `TaskList` focuses only on iterating over tasks and rendering child components. Individual task details and actions are handled by `TaskItem`.

2. **Reusability**:
   - The `TaskList` component can be reused wherever you need to display a task list, with different data or behaviors.

3. **Scalability**:
   - Since it works with dynamic data (`tasks`), the component can handle lists of any size.

4. **Performance Optimization**:
   - The `key` attribute ensures React efficiently updates the DOM, re-rendering only the modified components.

---


#### **3.3 TaskItem Components**

This **TaskItem component** displays and manages an individual task

```javascript
// src/components/TaskItem.js
const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`p-4 mb-2 rounded-md shadow-md flex justify-between items-center ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm">Due: {new Date(task.deadline).toLocaleString()}</p>
        <p className="text-sm">Priority: {task.priority}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
```

---

### **Understanding the `TaskItem` Component in React**

The **`TaskItem`** component is a reusable React component designed to display and manage an individual task. It combines task data with interactive functionality, allowing users to mark tasks as complete or delete them. Let's explains the code step by step, focusing on its structure, styling, and interactivity.

---

### **Key Concepts in This Code**

#### 1. **What Does the `TaskItem` Component Do?**
The `TaskItem` component:
- Displays details of a single task (title, deadline, and priority).
- Allows users to toggle the task's completion status.
- Provides a button to delete the task.

---

### **Code Walkthrough**

1. **Component Declaration**:
   
   ```javascript
   const TaskItem = ({ task, toggleComplete, deleteTask }) => {
   ```

   - The component is a **functional component** using arrow function syntax.
   - **Props**:
     - `task`: An object representing a single task with properties like `title`, `deadline`, `priority`, and `completed`.
     - `toggleComplete`: A function to mark the task as complete or undo completion.
     - `deleteTask`: A function to remove the task.

2. **Main Container**:
   
   ```javascript
   <div
     className={`p-4 mb-2 rounded-md shadow-md flex justify-between items-center ${
       task.completed ? "bg-green-100" : "bg-gray-100"
     }`}
   >
   ```

   - The main container is styled using **Tailwind CSS**:
     - **Dynamic Background Color**: 
       - If `task.completed` is `true`, the background color is green (`bg-green-100`).
       - Otherwise, it’s gray (`bg-gray-100`).
     - **Styling Details**:
       - Padding (`p-4`), margin-bottom (`mb-2`), and rounded corners (`rounded-md`).
       - A shadow effect (`shadow-md`) for depth.
       - Flexbox properties (`flex`, `justify-between`, and `items-center`) to align content horizontally and vertically.

3. **Task Details**:
   
   ```javascript
   <div>
     <h3 className="text-lg font-bold">{task.title}</h3>
     <p className="text-sm">Due: {new Date(task.deadline).toLocaleString()}</p>
     <p className="text-sm">Priority: {task.priority}</p>
   </div>
   ```

   - **Title**: Displayed as a bold, larger font (`text-lg font-bold`).
   - **Deadline**:
     - The deadline is converted to a human-readable format using JavaScript’s `toLocaleString()` method.
     - **Why?**: It ensures the date is displayed according to the user’s locale.
   - **Priority**: Shows the task’s priority level.

4. **Action Buttons**:
   
   ```javascript
   <div className="flex items-center gap-2">
     <button
       onClick={() => toggleComplete(task.id)}
       className="px-4 py-2 bg-green-600 text-white rounded-md"
     >
       {task.completed ? "Undo" : "Complete"}
     </button>
     <button
       onClick={() => deleteTask(task.id)}
       className="px-4 py-2 bg-red-600 text-white rounded-md"
     >
       Delete
     </button>
   </div>
   ```

   - **Container**: A flexbox layout (`flex items-center gap-2`) aligns buttons horizontally with spacing between them.
   - **"Complete/Undo" Button**:
     - **`onClick` Handler**: Calls `toggleComplete(task.id)` when clicked.
     - **Dynamic Text**: If the task is completed, the button displays *"Undo"*. Otherwise, it shows *"Complete"*.
     - **Styling**:
       - Green background (`bg-green-600`), white text (`text-white`), padding, and rounded corners.
   - **"Delete" Button**:
     - **`onClick` Handler**: Calls `deleteTask(task.id)` to remove the task.
     - **Styling**:
       - Red background (`bg-red-600`), white text (`text-white`), padding, and rounded corners.

5. **Exporting the Component**:
   
   ```javascript
   export default TaskItem;
   ```

   - The component is exported so it can be imported and used in the parent component, typically `TaskList`.

---

### **How the Component Fits into Your Application**

- **Parent-Child Relationship**:
  - `TaskItem` is used inside the `TaskList` component, which iterates over an array of tasks and renders a `TaskItem` for each one.
- **Interactive Functionality**:
  - The `toggleComplete` and `deleteTask` functions are passed down from the parent component, enabling `TaskItem` to interact with the app’s state.

---

### **Benefits of This Approach**

1. **Modular Design**:
   - The `TaskItem` component focuses solely on rendering and managing a single task, making it reusable and easier to maintain.

2. **Dynamic Styling**:
   - Conditional styling (e.g., green vs. gray background) visually differentiates completed tasks from incomplete ones.

3. **Interactive UI**:
   - Users can mark tasks as complete or delete them, improving engagement and usability.

4. **Readable Code**:
   - The code is clean and well-organized, with clear separation of responsibilities between the task details and action buttons.

---

### **Potential Enhancements**
1. **Accessibility**:
   - Add `aria-label` attributes to buttons for better accessibility.
2. **Error Handling**:
   - Display a confirmation dialog before deleting a task to prevent accidental deletion.
3. **Animations**:
   - Use CSS animations or a library like Framer Motion to add transitions when tasks are marked as complete or deleted.

---


#### **3.4 Main App Component**
The **App.js** component integrates everything and uses **localStorage** for data persistence.

```javascript
// src/App.js
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const sendNotification = (task) => {
    if (Notification.permission === "granted") {
      new Notification("Task Reminder", {
        body: `Don't forget: ${task.title}`,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    tasks.forEach((task) => {
      if (!task.completed && task.deadline) {
        const timeLeft = new Date(task.deadline).getTime() - Date.now();
        if (timeLeft > 0) {
          setTimeout(() => sendNotification(task), timeLeft);
        }
      }
    });
  }, [tasks]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
```

### **Understanding the `App` Component in React**

The `App` component is the central hub of a **To-Do List App**. It combines various features like task management, local storage, notifications, and dynamic rendering. Let's explains the code in a beginner-friendly way, breaking down its structure, functionality, and concepts.

---

### **Key Concepts in This Code**

#### 1. **What Does the `App` Component Do?**
- **State Management**: It tracks the app’s tasks using React's `useState`.
- **Task Actions**: Allows users to add, complete, and delete tasks.
- **Persistent Storage**: Saves tasks in the browser's `localStorage`.
- **Notifications**: Sends reminders for tasks with deadlines.
- **Child Components**: Delegates UI rendering to `TaskForm` (task creation) and `TaskList` (task display).

---

### **Code Walkthrough**

1. **Importing Dependencies**:
  
  ```javascript
   import { useEffect, useState } from "react";
   import TaskForm from "./components/TaskForm";
   import TaskList from "./components/TaskList";
   ```
   
   - **`useState`**: Manages the state of tasks.
   - **`useEffect`**: Executes side effects like saving tasks or setting up notifications.
   - `TaskForm`: A form for adding new tasks.
   - `TaskList`: Displays a list of tasks and provides actions for each task.

2. **State Initialization**:
  
  ```javascript
   const [tasks, setTasks] = useState(() => {
     const savedTasks = localStorage.getItem("tasks");
     return savedTasks ? JSON.parse(savedTasks) : [];
   });
   ```
   
   - **Initial State**:
     - Checks `localStorage` for saved tasks and loads them if available.
     - Otherwise, starts with an empty array.
   - **Why Use a Callback?**
     - The callback ensures `localStorage` is only accessed during the initial render, improving performance.

3. **Task Management Functions**:

   - **Adding a Task**:
     
     ```javascript
     const addTask = (task) => {
       setTasks((prevTasks) => [...prevTasks, task]);
     };
     ```
     
     - Adds a new task to the existing task list using the spread operator (`...`).

   - **Toggling Completion**:
     
     ```javascript
     const toggleComplete = (taskId) => {
       setTasks((prevTasks) =>
         prevTasks.map((task) =>
           task.id === taskId ? { ...task, completed: !task.completed } : task
         )
       );
     };
     ```
     
     - Finds a task by its `id` and toggles its `completed` status.
     - Uses the `map()` method to create a new array with the updated task.

   - **Deleting a Task**:
     
     ```javascript
     const deleteTask = (taskId) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
     };
     ```
     
     - Removes a task by filtering out the one with the matching `id`.

4. **Task Notifications**:

   - **Sending Notifications**:

     ```javascript
     const sendNotification = (task) => {
       if (Notification.permission === "granted") {
         new Notification("Task Reminder", {
           body: `Don't forget: ${task.title}`,
         });
       }
     };
     ```
     
     - Sends a browser notification if the user has granted permission.
     
   - **Scheduling Notifications**:
     
     ```javascript
     tasks.forEach((task) => {
       if (!task.completed && task.deadline) {
         const timeLeft = new Date(task.deadline).getTime() - Date.now();
         if (timeLeft > 0) {
           setTimeout(() => sendNotification(task), timeLeft);
         }
       }
     });
     ```
     
     - Calculates the time until the task deadline.
     - Schedules a notification with `setTimeout()` if the task isn’t completed.

5. **Effect Hooks**:

   - **Synchronizing State with `localStorage`**:
     
     ```javascript
     useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks));
     }, [tasks]);
     ```
     
     - Saves the `tasks` array to `localStorage` whenever it changes.
   - **Requesting Notification Permissions**:
    
    ```javascript
     useEffect(() => {
       if (Notification.permission !== "granted") {
         Notification.requestPermission();
       }
     }, []);
     ```
     
     - Requests permission for notifications when the app is first loaded.

6. **Rendering the UI**:
   
   ```javascript
   return (
     <div className="min-h-screen bg-gray-50 p-6">
       <h1 className="text-3xl font-bold text-center mb-6">To-Do List App</h1>
       <TaskForm addTask={addTask} />
       <TaskList
         tasks={tasks}
         toggleComplete={toggleComplete}
         deleteTask={deleteTask}
       />
     </div>
   );
   ```
   
   - **App Layout**:
     - A full-screen container (`min-h-screen`) with padding and a light background.
   - **Header**:
     - Displays the app title.
   - **Child Components**:
     - **`TaskForm`**:
       - Handles task creation and passes the `addTask` function as a prop.
     - **`TaskList`**:
       - Displays the tasks and passes action handlers (`toggleComplete` and `deleteTask`) as props.

7. **Exporting the Component**:
   
   ```javascript
   export default App;
   ```
   
   - Makes the `App` component available for use in other parts of the application.

---

### **How the Component Fits into Your Application**

- The `App` component serves as the **root component**, managing state and Application Logic.
- It communicates with child components (`TaskForm` and `TaskList`) to render the UI and handle interactions.
- It ensures the app’s tasks persist across page reloads using `localStorage`.

---

### **Benefits of This Approach**

1. **Stateful Logic**:
   - Centralized state (`tasks`) ensures data consistency across the app.
2. **Persistent Data**:
   - `localStorage` keeps tasks even if the user refreshes the page or closes the browser.
3. **Notifications**:
   - Adds a modern touch by reminding users about upcoming deadlines.
4. **Modularity**:
   - Separates task creation (`TaskForm`) and task display (`TaskList`) into reusable components.

---

### **Potential Enhancements**
1. **Validation**:
   - Ensure task titles and deadlines are properly validated before adding tasks.
2. **Sorting and Filtering**:
   - Add functionality to sort tasks by priority or deadline.
   - Allow users to filter completed or incomplete tasks.
3. **Dark Mode**:
   - Provide a dark theme for better user experience.
4. **Responsive Design**:
   - Optimize the layout for mobile devices.

---


## **Conclusion**
Congratulations! You’ve built a to-do list app that lets users add tasks, set deadlines, and receive reminders. This project sharpens your skills in **CRUD operations**, **local storage**, and **browser notifications**. You can enhance the app further with sorting, filters, or integration with a backend.

<a href="https://github.com/DevZiaus/todo-with-reminders" target="_blank">Finished Code</a>

### <a href="https://devziaus.xyz" target="_blank">DevZiaus</a>