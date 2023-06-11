# MERN Stack Hotel Reservation App

This project is a full-stack hotel reservation application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app utilizes various technologies and features such as the Context API for state management, JWT for authentication, custom hooks for reusability, and a React calendar component.

## Features

- User registration and authentication
- Hotel room booking and reservation
- Interactive calendar for selecting dates
- User-friendly interface for managing reservations

## Technologies Used

- MongoDB: A NoSQL database used for storing hotel and user data.
- Express.js: A web application framework used for building the backend API.
- React: A JavaScript library used for building the user interface.
- Node.js: A runtime environment used for running the server-side JavaScript code.
- Context API: A state management system provided by React for managing application-wide state.
- JWT (JSON Web Tokens): A standard for securely transmitting information between parties as a JSON object.
- Custom Hooks: Reusable functions that encapsulate logic and allow for code reuse.
- React Calendar: A customizable React component for displaying and selecting dates.

## Getting Started

### Prerequisites

Before running the application, ensure that you have the following software installed on your system:

- Node.js: Download and install Node.js from the official website (https://nodejs.org).
- MongoDB: Install MongoDB Community Edition from the official website (https://www.mongodb.com/try/download/community).

### Usage

1. Start the server:

   ```bash
   npm run server
   ```

   The server will run on http://localhost:5000.

2. Start the client:

   ```bash
   npm run client
   ```

   The client will run on http://localhost:3000.

3. Open your web browser and visit http://localhost:3000 to access the hotel reservation app.

## Folder Structure

The project structure is as follows:

```
hotel-reservation-app/
  |-- client/
  |    |-- public/
  |    |-- src/
  |    |    |-- components/
  |    |    |-- contexts/
  |    |    |-- hooks/
  |    |    |-- pages/
  |    |    |-- App.js
  |    |    |-- index.js
  |-- server/
  |    |-- models/
  |    |-- routes/
  |    |-- controllers/
  |-- .env
  |-- .gitignore
  |-- package.json
  |-- README.md
```

- The `client` directory contains the frontend code written in React.
- The `api` directory contains the backend code written in Node.js with Express.js.
- The `.env` file stores the environment variables used by the application.
- The `package.json` file contains the project's dependencies and scripts.

## Conclusion

Congratulations! You now have a basic understanding of

 the MERN stack hotel reservation app project. Feel free to explore the code and customize it according to your needs. Happy coding!
