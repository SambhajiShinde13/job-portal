🧑‍💼 Job Portal Website – Customized Version
A full-stack Job Portal Web Application built with React.js, Spring Boot, and MongoDB. This project enables job seekers to search and apply for jobs and allows employers to post and manage job openings. It is a customized version of an open-source project with significant improvements in UI, functionality, and user experience.

🔧 Tech Stack

Frontend: React.js, Axios, React Router DOM, CSS (custom theme)
Backend: Spring Boot, RESTful APIs, Spring Security (JWT-based authentication)
Database: MongoDB
Tools: Git, GitHub, Postman, VS Code / IntelliJ


✨ Features
For Job Seekers:

Register and log in with secure authentication
Browse and search jobs with advanced filters
Apply for jobs with resume upload
Dashboard to track application status

For Employers/Admin:

Post new job listings
View and manage job applicants
Update or delete job postings


✅ Custom Enhancements

UI Redesign: Modernized frontend with custom colors, responsive layouts, and improved typography
MongoDB Integration: Dynamic storage for jobs, users, and applications
Enhanced Search: Added filters for job type, location, and experience level
Robust Error Handling: Improved validation and user feedback for forms and API calls
Code Optimization: Refactored and cleaned code for better maintainability and performance




🚀 How to Run the Project
🔧 Prerequisites

Node.js: v14 or higher
Java: 11
Maven: For building the Spring Boot backend
MongoDB: Running locally or via MongoDB Atlas
Tools: Git, Postman (for API testing), VS Code / IntelliJ


▶️ Backend (Spring Boot)

Navigate to the backend directory:
cd backend


Configure MongoDB:

Ensure MongoDB is running locally (mongod) or use MongoDB Atlas.
Update the application.properties or application.yml file in backend/src/main/resources with your MongoDB URI:spring.data.mongodb.uri=mongodb://localhost:27017/jobportal




Run the application:
Using Maven Wrapper
./mvnw spring-boot:run   # For Mac/Linux/Unix-based systems
.\mvnw spring-boot:run   # For Windows

Using Maven (if installed globally)
mvn spring-boot:run


Notes:

Ensure the mvnw (or mvnw.cmd for Windows) file exists in the backend directory. If missing, generate it with:mvn -N wrapper:wrapper


Verify Java is installed (java -version) and JAVA_HOME is set.
The backend runs on http://localhost:8080 by default. Change the port in application.properties if needed (e.g., server.port=8081).




▶️ Frontend (React.js)

Navigate to the frontend directory:
cd frontend


Install dependencies:
npm install


Run the application:
npm start


Notes:

The frontend runs on http://localhost:3000 by default.
Ensure the backend is running before starting the frontend, as it relies on the backend APIs.
Update the API base URL in the frontend (e.g., in src/api/config.js) if the backend port is not 8080:export const API_URL = 'http://localhost:8080/api';






🛠️ Troubleshooting

Backend Errors:
Dependency issues: Run mvn clean install to resolve.
MongoDB connection failure: Check the MongoDB URI and ensure the database is running.


Frontend Errors:
Missing dependencies: Run npm install again.
CORS issues: Ensure CORS is enabled in the Spring Boot backend (configured in WebConfig.java or similar).


Port Conflicts: Change the port in application.properties (backend) or package.json (frontend, e.g., PORT=3001 npm start).


🧪 Testing APIs

Use Postman to test RESTful APIs (e.g., GET /api/jobs, POST /api/auth/register).
Import the Postman collection (if provided) or check the API documentation in backend/docs.


📂 Project Structure
job-portal/
├── backend/                # Spring Boot backend
│   ├── src/               # Source code
│   ├── pom.xml            # Maven dependencies
│   └── application.properties  # Configuration
├── frontend/               # React.js frontend
│   ├── src/               # Source code
│   ├── package.json       # Node dependencies
│   └── public/            # Static assets
└── README.md              # Project documentation


🤝 Contributing

Fork the repository on GitHub.
Create a new branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Create a Pull Request.

