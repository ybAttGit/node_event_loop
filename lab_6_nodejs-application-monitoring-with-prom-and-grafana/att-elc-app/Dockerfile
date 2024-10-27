# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application files
COPY package*.json ./
COPY server.mjs ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "server.mjs"]