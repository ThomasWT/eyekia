# Use the official Node.js image as the base image for the backend
FROM node:14-alpine

# Set the working directory to the backend directory
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY /backend/package*.json ./

# Install the backend dependencies
RUN npm install

# Copy the backend source code to the container
COPY backend/ .

# Expose port 3000 for the backend
EXPOSE 3000

# Start the backend server
CMD ["node", "index.mjs"]
 
# Use the official Vue CLI image as the base image for the frontend
FROM node:14-alpine as frontend

# Set the working directory to the frontend directory
WORKDIR /frontend

# Copy the package.json and package-lock.json files to the container
COPY frontend/package*.json ./

# Install the frontend dependencies
RUN npm install

# Copy the frontend source code to the container
COPY frontend/ .

# Build the frontend assets
RUN npm run build

# Use a lightweight image for the production build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built frontend assets to the container
COPY --from=frontend /frontend/dist /usr/share/nginx/html

# Expose port 8080 for the frontend
EXPOSE 8080

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]