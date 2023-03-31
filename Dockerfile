# Use the official Node.js image as the base image for the backend
FROM node:14-alpine as backend

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
ENTRYPOINT ["npm", "start"]

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
RUN npm run builddev

# Expose port 80 for the frontend
EXPOSE 80


FROM node:14
# Set the working directory back to the backend directory
WORKDIR /backend
# Copy the package.json and package-lock.json files to the container
COPY /backend/package*.json ./

COPY backend/ .

RUN npm install -g concurrently

# Install the frontend dependencies
RUN npm install

# Copy the frontend source code to the container
COPY frontend/ ../frontend
# Start both backend and frontend servers
CMD ["npm", "run", "start:all"]