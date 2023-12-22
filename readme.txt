=========================================
      Eshetu Personal Portfolio Website
=========================================

-----------------------------------------
Introduction
-----------------------------------------

Welcome to Eshetu Personal Portfolio Website project! This document provides detailed instructions on setting up, configuring, and deploying a simple, responsive personal portfolio website.

-----------------------------------------
Prerequisites
-----------------------------------------

Before running the project locally, make sure you have the following prerequisites installed on your machine:

- Node.js: Download and install from the official website (https://nodejs.org).
- MongoDB: Install MongoDB from the official website (https://www.mongodb.com/try/download/community).

-----------------------------------------
Installation
-----------------------------------------

1. Download the project files.
2. Extract the downloaded zip file to a location of your choice.
3. Open a terminal or command prompt and navigate to the project folder.
4. Install project dependencies by running: `npm install`

-----------------------------------------
Project Structure
-----------------------------------------

The project has the following structure:

- **frontend:** Contains HTML, CSS, and JavaScript files for the website's frontend.
- **backend:** Node.js server code and API endpoint for handling form submissions.
- **submissions.json:** Example JSON file for initial MongoDB setup.

-----------------------------------------
Backend Configuration
-----------------------------------------

1. Open a terminal or command prompt and navigate to the "backend" directory.
2. Install backend dependencies by running: `npm install`

-----------------------------------------
Database Setup
-----------------------------------------

1. Open a terminal or command prompt and navigate to the "backend" directory.
2. Ensure the MongoDB server is running.
3. Run the following command to set up the database: `mongoimport --db portfolio --collection submissions --file submissions.json`
   (This assumes you have a JSON file - submissions.json - with the necessary data for initial setup.)

-----------------------------------------
Local Testing
-----------------------------------------

1. Start the backend server by running: `node server.js`
2. Open a web browser and visit http://localhost:3000/.
3. Explore the website, test form submissions, and verify the backend functionality.

-----------------------------------------
Deployment
-----------------------------------------

The website is hosted on Netlify. Deployment is automatically handled when changes are pushed to the main branch on the Git repository.

-----------------------------------------
Support
-----------------------------------------

If you need assistance or encounter issues, please reach out:

- Developer: Robel Abebe
- Email: robel.sean@gmail.com

Thank you for using Eshetu Personal Portfolio Website project! We hope you enjoy showcasing your skills and accomplishments through your responsive portfolio.

-----------------------------------------