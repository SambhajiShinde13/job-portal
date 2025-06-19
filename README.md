# 🧑‍💼 Job Portal – Full Stack Web Application

![Banner](https://github.com/Sambha13/job-portal/blob/master/banner.png?raw=true)

> A fully-featured **Job Portal Web Application** built with **React.js**, **Spring Boot**, and **MongoDB**.  
> It allows **job seekers** to register and apply for jobs, while **employers** can post and manage job openings.  
> The platform includes **JWT-based authentication**, **MongoDB integration**, and a modern, responsive UI.

---

## 🌐 Live Demo

- 🔹 **Frontend:** [https://job-portal.vercel.app](https://job-portal.vercel.app)  
- 🔹 **Backend API:** [https://job-portal-backend.onrender.com](https://job-portal-backend.onrender.com)

---

## 🚀 Tech Stack

| Layer      | Technology                                   |
|------------|----------------------------------------------|
| Frontend   | React.js, Axios, React Router, CSS           |
| Backend    | Spring Boot, Spring Security (JWT), Maven    |
| Database   | MongoDB (hosted via MongoDB Atlas)           |
| Tools      | Git, GitHub, Postman, IntelliJ / VS Code     |

---

## ✨ Features

### 👨‍💼 Job Seekers
- Secure registration and login (JWT)
- Search and filter jobs by location, type, experience
- Apply for jobs with resume upload
- View application status in dashboard

### 🏢 Employers / Admin
- Post, edit, and delete job listings
- View job applicants
- Manage job posts from dashboard

---

## ⚙️ How to Run Locally

### 🔧 Backend

```bash
cd backend
# Update MongoDB URI in src/main/resources/application.properties
mvn spring-boot:run