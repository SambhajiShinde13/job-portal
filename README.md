 🧑‍💼 Job Portal – Full Stack Web Application

![Banner](./banner.png)

A fully-featured **Job Portal Web Application** built with **React.js**, **Spring Boot**, and **MongoDB**. It allows **job seekers** to register and apply for jobs, while **employers** can post and manage job openings. The platform includes **JWT-based authentication**, MongoDB integration, and a modern, responsive UI.

---

 🌐 Live Demo

- 🔹 **Frontend:** [https://job-portal.vercel.app](https://job-portal.vercel.app)
- 🔹 **Backend API:** [https://job-portal-backend.onrender.com](https://job-portal-backend.onrender.com)

---

 🚀 Tech Stack

| Layer      | Technology                                   |
|------------|----------------------------------------------|
| Frontend   | React.js, Axios, React Router, CSS           |
| Backend    | Spring Boot, Spring Security (JWT), Maven    |
| Database   | MongoDB (hosted via MongoDB Atlas)           |
| Tools      | Git, GitHub, Postman, IntelliJ / VS Code     |

---

 ✨ Features

👨‍💼 Job Seekers
- Secure registration and login
- Search and filter jobs by location, type, experience
- Apply for jobs with resume upload
- View application status in dashboard

 🏢 Employers / Admin
- Post, edit, and delete job listings
- View job applicants
- Manage job posts from dashboard

---



---
⚙️ How to Run Locally




 ---
🔧 Backend

```bash
cd backend
 Update Mongo URI in application.properties
mvn spring-boot:run

Backend default: http://localhost:8080

cd frontend
npm install
npm start

Frontend default: http://localhost:3000

export const API_URL = 'http://localhost:8080/api';

🧪 API Testing
Use Postman or REST client to test:

Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get token
GET	/api/jobs	List available jobs
POST	/api/jobs/apply	Apply for a job




 
🤝 Contributing
1.Fork the repository

2.Create a branch: git checkout -b feature-name

3.Commit changes: git commit -m "Add new feature"

4.Push branch: git push origin feature-name

5.Create a Pull Request
---

