# eyekia

![Frontend](https://github.com/ThomasWT/eyekia/actions/workflows/frontend.js.yml/badge.svg)
![Backend](https://github.com/ThomasWT/eyekia/actions/workflows/backend.js.yml/badge.svg)

eyekia is a dashboard application for a fictional company named eyekia, which displays ecommerce statistics. It is built using Vue 3 and Express as the backend, and uses MongoDB and Mongoose for data storage and retrieval.

<div id="badges">
  <a href="https://www.linkedin.com/in/thomasthomsendk/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

## Features

The eyekia dashboard application includes some the following features:

- A backend server built with Express.js and MongoDB.
- Authentication with JWT tokens.
- Routes for registering and authenticating users.
- Routes for retrieving ecommerce statistics, such as sales and revenue.
- Endpoints for retrieving and modifying user information, such as username and password.
- Password hashing with bcrypt.js.
- Protected routes that require authentication


## Demo

Check it out here https://eyekia.thomaswt.com


**Username:** admin

**Password:** 123

## CI/CD and hosting

Pipelines and build process for frontend is handled by [Netlify](https://www.netlify.com/)

Pipelines and build process for backend is handled by [Buddy](https://buddy.works/)

Backend is hosted on [Digitalocean](https://www.digitalocean.com/)

Frontend is hosted on [Netlify](https://www.netlify.com/)


### Github workflow
https://github.com/ThomasWT/eyekia/actions

## Installation

To install the necessary dependencies, run the following command in the both the backend and frontend folder:
```
npm install
```
Starting the backend by.
```
cd backend
node .
```

Starting the frontend
```
cd frontend
npm run dev
```

### Or docker
Frontend hosted on port 80 with a local backend hosted on port 3000
```
docker build -t eyekia .
```
```
docker run --rm -d -p 80:80/tcp -p 3000:3000/tcp eyekia:latest
```

## Author

This project was created by Thomas Thomsen.
