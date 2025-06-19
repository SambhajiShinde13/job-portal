Job Portal Website
A full-stack job portal for seamless job searching and hiring, built with React.js, Spring Boot, and MongoDB.

📖 About
This is a full-stack web application that enables job seekers to search and apply for jobs while allowing employers to post and manage job listings. It is a customized version of an open-source job portal, featuring a modern UI, advanced search filters, and robust backend APIs.


🛠️ Tech Stack

Frontend: React.js, Axios, React Router DOM, CSS (custom theme)
Backend: Spring Boot, RESTful APIs, Spring Security (JWT-based authentication)
Database: MongoDB
Tools: Git, GitHub, Postman, VS Code, IntelliJ

✨ Features
For Job Seekers

Secure registration and login with JWT authentication
Advanced job search with filters for job type, location, and experience
Resume upload for job applications
Dashboard to track application status

For Employers/Admin

Post and manage job listings
View and manage job applicants
Update or delete job postings

✅ Custom Enhancements

UI Redesign: Modern, responsive layouts with custom colors and typography
MongoDB Integration: Dynamic storage for jobs, users, and applications
Enhanced Search: Filters for job type, location, and experience level
Robust Error Handling: Improved validation and user feedback for forms and APIs
Code Optimization: Refactored for better maintainability and performance

🚀 Installation Process
Follow these steps to set up and run the project locally.
Prerequisites
Ensure the following are installed on your system:

Node.js: Version 14 or higher (Download)
Java: JDK 11 (Download)
Maven: For building the Spring Boot backend (Download)
MongoDB: Running locally or via MongoDB Atlas (Local Setup or MongoDB Atlas)
Tools: Git (Download), Postman (for API testing, Download), VS Code or IntelliJ IDEA

Verify installations:
node -v          # Should output v14 or higher
java -version    # Should output Java 11
mvn -version     # Should output Maven version
mongod --version # Should output MongoDB version (if installed locally)
git --version    # Should output Git version

Step 1: Clone the Repository
Clone the project from GitHub to your local machine:
git clone https://github.com/Sambha13/job-portal.git
cd job-portal

Step 2: Set Up the Backend (Spring Boot)

Navigate to the backend directory:
cd backend


Configure MongoDB:

If using local MongoDB, ensure the MongoDB server is running:mongod


If using MongoDB Atlas, obtain your connection URI (e.g., mongodb+srv://<username>:<password>@cluster0.mongodb.net/jobportal).
Create or update the application.properties file in backend/src/main/resources with your MongoDB URI:spring.data.mongodb.uri=mongodb://localhost:27017/jobportal
# For MongoDB Atlas, use: spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jobportal

Note: Do not commit application.properties with sensitive credentials. Use .gitignore to exclude it and provide a template (application.properties.example).


Install backend dependencies:
./mvnw clean install  # For Mac/Linux
.\mvnw clean install  # For Windows

If the mvnw file is missing, generate it:
mvn -N wrapper:wrapper


Run the backend application:
./mvnw spring-boot:run  # For Mac/Linux
.\mvnw spring-boot:run  # For Windows

Alternatively, if Maven is installed globally:
mvn spring-boot:run


The backend will run on http://localhost:8080 by default.
To change the port, update application.properties:server.port=8081





Step 3: Set Up the Frontend (React.js)

Open a new terminal and navigate to the frontend directory:
cd frontend


Install frontend dependencies:
npm install


Configure the API base URL:

If the backend is running on a port other than 8080, update the API URL in frontend/src/api/config.js (or similar file):export const API_URL = 'http://localhost:8080/api';




Run the frontend application:
npm start


The frontend will run on http://localhost:3000 by default.
If port 3000 is in use, change it in frontend/package.json:"scripts": {
  "start": "PORT=3001 react-scripts start"
}





Step 4: Verify the Application

Open a browser and navigate to http://localhost:3000.
Ensure the backend is running (http://localhost:8080) before starting the frontend.
Test features like registration, job search, and job posting.

🛠️ Troubleshooting

Backend Errors:
Dependency issues: Run mvn clean install to resolve.
MongoDB connection failure: Verify the MongoDB URI and ensure the database is running.
Port conflict: Change the port in application.properties (e.g., server.port=8081).


Frontend Errors:
Missing dependencies: Run npm install again.
CORS issues: Ensure CORS is enabled in the backend (check WebConfig.java or similar).
Port conflict: Update the port in package.json or use PORT=3001 npm start.


General:
Check Java version (java -version) and ensure JAVA_HOME is set.
Verify Node.js version (node -v).
Review logs in the terminal for specific error messages.



🧪 Testing APIs

Use Postman to test RESTful APIs (e.g., GET /api/jobs, POST /api/auth/register).
Check the API documentation in backend/docs/api.md (if available) or test endpoints manually.
Example Postman requests:
GET http://localhost:8080/api/jobs: Fetch all jobs.
POST http://localhost:8080/api/auth/register: Register a new user (provide JSON body with user details).



📂 Project Structure
job-portal/
├── backend/                  # Spring Boot backend
│   ├── src/                  # Source code
│   ├── pom.xml               # Maven dependencies
│   └── application.properties # Configuration
├── frontend/                 # React.js frontend
│   ├── src/                  # Source code
│   ├── package.json          # Node dependencies
│   └── public/               # Static assets
└── README.md                 # Project documentation



🤝 Contribution Steps
1.Fork this repo

2.Create your branch: git checkout -b feature-name

3.Commit changes: git commit -m "Added feature"

4.Push to GitHub: git push origin feature-name

5.Submit a Pull Request

