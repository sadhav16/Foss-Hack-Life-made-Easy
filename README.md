# Foss-Hack-Life-made-Easy

### Project Overview: Virtual Queue System for Medical Institutions

#### Introduction
The Virtual Queue System is a web-based application designed to streamline the process of managing patient appointments in medical institutions. The system allows patients to book tokens for consultations, receive notifications when their token is up, and helps institutions manage patient flow efficiently.

---

### Modules and Components

#### 1. **Backend**

The backend handles the server-side logic, including database operations, user authentication, and queue management.

**Technologies Used:**
- **Node.js**: JavaScript runtime used to build the backend server.
- **Express.js**: Web framework for Node.js, used to create the RESTful API.
- **MySQL**: Relational database used to store user and queue data.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **bcrypt.js**: Library for hashing passwords to enhance security.

**Key Files and Their Functions:**

- **`config/db.js`**:
  - Establishes a connection to the MySQL database using credentials stored in environment variables.
  - Exports the database connection object for use in other parts of the application.

- **`controllers/auth.js`**:
  - Contains functions for user registration, login, and logout.
  - Handles password hashing using bcrypt and generates JWT tokens for authenticated sessions.

- **`middlewares/auth.js`**:
  - Middleware for verifying if a user is logged in by checking the presence and validity of a JWT in the cookies.
  - Retrieves user details based on the decoded JWT token.

- **`routes/auth.js`**:
  - Defines routes for authentication-related actions (e.g., `/register`, `/login`, `/logout`).
  - Connects these routes to the appropriate controller functions.

- **`app.js`**:
  - Initializes the Express application, sets up middleware for JSON parsing and cookie handling, and defines the main application routes.
  - Configures the server to listen on a specified port.

- **Environment Configuration (`.env`)**:
  - Stores sensitive information like database credentials, JWT secret, and other configuration variables.

- **Nodemon Configuration (`nodemon.json`)**:
  - Specifies which files and directories to watch and ignore during development, facilitating a smoother development process by automatically restarting the server on changes.

#### 2. **Frontend**

The frontend provides the user interface for patients and administrators to interact with the system.

**Technologies Used:**
- **HTML5**: Markup language used to structure the web pages.
- **CSS3**: Styling language used to design the visual layout of the application.
- **JavaScript**: Scripting language used to add interactivity to the frontend.

**Key Files and Their Functions:**

- **`public/index.html`**:
  - The main HTML file that serves as the entry point for the web application.
  - Contains forms for user login and registration, and placeholders for future queue management features.

- **`public/js/main.js`**:
  - Handles client-side logic, such as form submissions for login and registration.
  - Sends asynchronous requests to the backend API for authentication and manages the user interface based on the response.

#### 3. **Queue Management (Planned)**

Future development includes implementing features for virtual queue management:

- **Join/Leave Queue**: Allow patients to join or leave a virtual queue.
- **Queue Notifications**: Notify patients when their token is nearing or when it’s their turn.
- **Admin Dashboard**: Provide administrators with tools to manage the queue, view patient details, and manage appointment schedules.

---

### Summary
The Virtual Queue System project is a comprehensive solution for medical institutions to efficiently manage patient appointments. It integrates user authentication, database management, and a planned feature for real-time queue notifications. By allowing patients to book tokens online and receive timely notifications, the system can significantly reduce waiting times at hospitals. This streamlined process helps avoid overcrowding, ensures patients are informed about their turn, and allows medical staff to manage patient flow more effectively. The system is built using modern web technologies, including Node.js, Express.js, MySQL, and frontend languages like HTML, CSS, and JavaScript. Future enhancements could include real-time notifications, a detailed admin dashboard, and improved security measures.
