### Instructions

**1. Database Setup:**
   - This project is implemented to run on a localhost environment, utilizing a MySQL database managed through phpMyAdmin.
   - Start by creating a new database in phpMyAdmin. You can name the database as per your preference; in the provided `.env` file, the default database name is `queue_buster`.

**2. Creating Tables:**
   - Once the database is created, you need to set up two tables: `users` and `queue`.
   - The schema for these tables is provided in the `schema_table.sql` file. Import this file into your database to create the necessary tables with the correct structure.

**3. Configuring the Database Connection:**
   - Ensure your `.env` file in the backend folder is correctly set up with the following variables:
     - `HOST`: Your MySQL server host (usually `localhost`).
     - `DATABASE_USER`: Your MySQL username.
     - `PASSWORD`: Your MySQL password (leave blank if not set).
     - `DATABASE`: The name of your database (e.g., `queue_buster`).
   - These configurations allow the application to connect to your MySQL database.

**4. Running the Application:**
   - Navigate to the `backend` folder of your project.
   - Run the `app.js` file using Node.js to start the server. You can do this by running the command `node app.js` in your terminal.
   - If the server starts successfully and connects to the database, you'll see a message in the terminal indicating that the server is running and the database is connected.

**5. Accessing the Application:**
   - Once the server is running, you can access the application through your web browser.
   - Open `http://localhost:5000` (or the port specified in your `.env` file) to view the site.
   - Here, you can register users, log in, and test the virtual queue functionalities.

By following these steps, you will set up the project on your local machine, establish the necessary database connections, and launch the application for use.
