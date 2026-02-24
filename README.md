# 💼 Job Application Tracker Dashboard

A responsive and interactive Job Application Tracker built using HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript.

This project allows users to manage job applications efficiently by marking them as Interviewed or Rejected, filtering them dynamically, and tracking overall application progress in real-time.

---

## 🔗 Live Demo

- 🌐 Live Site: (Add your live link here)
- 📂 GitHub Repository: (Add your repository link here)

---

## 📌 Project Overview

The Job Application Tracker Dashboard provides a clean and user-friendly interface to manage job applications.

Users can:
- Track total job applications
- Mark applications as Interviewed
- Mark applications as Rejected
- Delete job entries
- Filter applications dynamically
- Monitor progress instantly

All interactions update the dashboard in real-time without reloading the page.

---

## ✨ Key Features

### 1️⃣ Dynamic Dashboard Summary
- Displays:
  - Total Jobs
  - Interviewed Jobs
  - Rejected Jobs
- Automatically updates based on user interaction.

---

### 2️⃣ Interactive Job Cards
Each job card contains:
- Company Name
- Job Position
- Location
- Job Type
- Salary Information
- Meaningful Description
- Interview Button
- Rejected Button
- Delete Button

Users can toggle between Interview and Rejected status at any time.

---

### 3️⃣ Smart Filtering System
Three filtering options:
- **All**
- **Interview**
- **Rejected**

Filtering is handled dynamically using JavaScript without page reload.

If no jobs exist in a selected category, a proper “No jobs found” message appears.

---

### 4️⃣ Real-Time Progress Indicator
- Displays:
  - `Total jobs` when viewing All
  - `X of Y jobs` when viewing Interview or Rejected
- Automatically recalculates after every action.

---

### 5️⃣ Delete Functionality (Challenge Feature)
- Permanently removes a job card.
- Updates dashboard counts instantly.
- Adjusts progress indicator automatically.

---

### 6️⃣ Fully Responsive Design
- Mobile-friendly layout
- Clean grid system using Tailwind CSS
- Modern UI styling using DaisyUI components

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- DaisyUI
- JavaScript (ES6)
- DOM Manipulation
- Event Handling
- Dataset Attributes

---

## 📚 JavaScript Concepts Used

- DOM Selection (`getElementById`, `querySelector`, `querySelectorAll`)
- Event Listeners
- Event Bubbling
- Event Delegation
- Dynamic UI Updates
- State Management using `data-status`

---

## ❓ Questions & Answers

### 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

- **getElementById()**  
  Returns a single element by its unique ID.

- **getElementsByClassName()**  
  Returns a live HTMLCollection of elements with the specified class name.

- **querySelector()**  
  Returns the first element that matches a CSS selector.

- **querySelectorAll()**  
  Returns a static NodeList of all elements matching a CSS selector.

---

### 2. How to create and insert a new element into the DOM?

Steps:
1. Create element using `document.createElement()`
2. Add content or attributes
3. Insert using `append()` or `appendChild()`

Example: 

```js
const element = document.createElement("div");
element.textContent = "New Job";
document.body.appendChild(element);
## Answers to Questions


### 3. What is Event Bubbling? And how does it work?

Event Bubbling means when an event happens on a child element, it moves upward to its parent elements.


### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding an event listener to a parent element instead of adding it to many child elements.

Why is it useful?

Less code

Better performance

Works for dynamically added elements

### 5. What is the difference between preventDefault() and stopPropagation() methods?
# preventDefault()

Stops the default behavior of an element.

Example: Prevent form submission.

# stopPropagation()

Stops the event from moving to parent elements.

Stops event bubbling.

---