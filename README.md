# S69_Lack_of_Education_Bihar_Edition
S69_Lack_of_Education_Bihar_Edition
Project Title:

"List of People Who Claim They Skipped School to Become Geniuses (Bihar Edition)"

Project Overview:

This project creates a fun and engaging web application where users can explore and contribute to a humorous list of individuals from Bihar who claim to have become geniuses despite skipping formal education. The goal is to showcase creativity while learning foundational MERN stack development concepts.

Key Features:

User Login System: Users can sign up and log in to view and edit their lists.
Dynamic List: Personalized lists for each user, allowing them to add, edit, or delete entries.
Search Functionality: Users can search for specific entries in their list.
Simple Design: A clean and intuitive UI for easy navigation and interaction.
Tech Stack: Frontend:

React (with basic components and CSS for styling).
Backend:

Node.js and Express.js (for APIs)
MongoDB (for database)
Mongoose (for schema creation and data management)
JWT (JSON Web Tokens) for user authentication
Why This Project?

This project aligns perfectly with the guidelines by being quirky, engaging, and unique. It simplifies the MERN stack concepts while providing hands-on experience in:

Setting up a full-stack project.
Building a user-authenticated system.
Creating and managing a database with MongoDB and Mongoose.
Designing a basic frontend with React.
By keeping the project simple yet creative, it allows me to focus on core concepts without adding unnecessary complexity.

# **S69_Lack_of_Education_Bihar_Edition**

This project is part of the ASAP (Accelerated Software Application Project) initiative. It demonstrates a basic Express.js server with a `/ping` route to test server functionality.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Branch Details](#branch-details)
4. [Ping Route Functionality](#ping-route-functionality)
5. [How to Run the Application](#how-to-run-the-application)
6. [Pull Request Details](#pull-request-details)

---

## **Project Overview**

This project is focused on building the backend of an educational app. The implementation includes:
- Setting up an Express.js server.
- Adding a `/ping` route for testing server responses.
- Using version control through Git and GitHub for collaborative development.

---

## **Setup Instructions**

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/devanshsingh/S69_Lack_of_Education_Bihar_Edition.git
   ```
2. Navigate into the project directory:
   ```bash
   cd S69_Lack_of_Education_Bihar_Edition
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

---

## **Branch Details**

### `ping-route`
- This branch implements a basic `/ping` route in the `server.js` file.
- The `/ping` route responds with a simple `"pong"` message to confirm the server is working.

---

## **Ping Route Functionality**

The `/ping` route is defined in `server.js` as follows:

```javascript
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### **Response**
When the `/ping` route is accessed, the server responds with:
```
pong
```

---

## **How to Run the Application**

1. Start the server:
   ```bash
   node server.js
   ```
2. Open your browser or an API testing tool (e.g., Postman).
3. Access the `/ping` route:
   ```text
   http://localhost:3000/ping
   ```
4. You should see the response:
   ```
pong
   ```

---

## **Pull Request Details**

The branch `ping-route` has been successfully pushed to GitHub, and a Pull Request has been created and merged into the `main` branch. 

### Pull Request:
- **Title**: Added `/ping` route to server.js
- **Description**: Implemented

---
## Deployment Link
[View the app here](https://s69-lack-of-education-bihar-edition.onrender.com)
