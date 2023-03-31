# eyekia

![Frontend](https://github.com/ThomasWT/eyekia/actions/workflows/frontend.js.yml/badge.svg)
![Backend](https://github.com/ThomasWT/eyekia/actions/workflows/backend.js.yml/badge.svg)

eyekia is a dashboard application for a fictional company named eyekia, which displays ecommerce statistics. It is built using Vue 3 and Express as the backend, and uses MongoDB and Mongoose for data storage and retrieval.

<div id="badges">
  <a href="https://www.linkedin.com/in/thomasthomsendk/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

## Demo

Check it out here https://eyekia.thomaswt.com


**Username:** admin

**Password:** 123

## Pipeline and hosting

Pipelines and build process for frontend is handled by [Netlify](https://www.netlify.com/)

Pipelines and build process for backend is handled by [Buddy](https://buddy.works/)


Backend is hosted on [Digitalocean](https://www.digitalocean.com/)

Frontend is hosted on [Netlify](https://www.netlify.com/)

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
Hosted on localhost port 80
```
docker build -t eyekia .
```
```
docker run --rm -d -p 80:80/tcp -p 8080:8080/tcp eyekia:latest
```


## Features

The eyekia dashboard application includes some the following features:

- A backend server built with Express.js and MongoDB.
- Authentication with JWT tokens.
- Routes for registering and authenticating users.
- Routes for retrieving ecommerce statistics, such as sales and revenue.
- Endpoints for retrieving and modifying user information, such as username and password.
- Password hashing with bcrypt.js.
- Protected routes that require authentication

## Dependencies

Backend:

- [babel-jest](https://www.npmjs.com/package/babel-jest): ^29.5.0
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): ^2.4.3
- [body-parser](https://www.npmjs.com/package/body-parser): ^1.20.2
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.0.3
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): ^9.0.0
- [mongodb](https://www.npmjs.com/package/mongodb): ^5.1.0
- [mongoose](https://www.npmjs.com/package/mongoose): ^7.0.3
- [ts-jest](https://www.npmjs.com/package/ts-jest): ^29.0.5

Dev Dependencies

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): ^7.20.2
- [jest](https://www.npmjs.com/package/jest): ^29.5.0
- [supertest](https://www.npmjs.com/package/supertest): ^6.3.3

Frontend:
-   [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core) - Font Awesome icons library for SVG
-   [@fortawesome/free-brands-svg-icons](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons) - Free Font Awesome brand icons in SVG format
-   [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons) - Free Font Awesome regular icons in SVG format
-   [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) - Free Font Awesome solid icons in SVG format
-   [@fortawesome/vue-fontawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome) - Vue.js component for Font Awesome 5 icons
-   [apexcharts](https://www.npmjs.com/package/apexcharts) - Interactive JavaScript charts for web pages and applications
-   [axios](https://www.npmjs.com/package/axios) - Promise-based HTTP client for the browser and node.js
-   [gsap](https://www.npmjs.com/package/gsap) - Professional-grade JavaScript animation for the modern web
-   [sass](https://www.npmjs.com/package/sass) - Sass is a CSS pre-processor
-   [vue](https://www.npmjs.com/package/vue) - Reactive, component-oriented view layer for modern web interfaces
-   [vue-country-flag-next](https://www.npmjs.com/package/vue-country-flag-next) - Vue.js component for SVG flags of countries
-   [vue-number-animation](https://www.npmjs.com/package/vue-number-animation) - Simple number animation component for Vue.js
-   [vue-router](https://www.npmjs.com/package/vue-router) - Official router for Vue.js
-   [vue3-apexcharts](https://www.npmjs.com/package/vue3-apexcharts) - Vue.js 3 wrapper for ApexCharts.js

Dev Dependencies

-   [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) - Vue.js 3 plugin for Vite.js
-   [autoprefixer](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes automatically
-   [postcss](https://www.npmjs.com/package/postcss) - A tool for transforming CSS with JavaScript
-   [tailwindcss](https://www.npmjs.com/package/tailwindcss) - A utility-first CSS framework for rapidly building custom designs
-   [typescript](https://www.npmjs.com/package/typescript) - Typed superset of JavaScript that compiles to plain JavaScript
-   [vite](https://www.npmjs.com/package/vite) - Next-generation frontend tooling. It's fast!
-   [vite-svg-loader](https://www.npmjs.com/package/vite-svg-loader) - Vite.js plugin to load SVG files as Vue.js components
-   [vue-tsc](https://www.npmjs.com/package/vue-tsc) - Type-checking for Vue.js 3 with TypeScript.

## Author

This project was created by Thomas Thomsen.
