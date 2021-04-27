# Base image to use
FROM node:latest

# Create application directory
WORKDIR /usr/src/application

# Install application dependencies
# Copy across project configuration information
COPY package*.json ./

# Ask npm to install the dependencies
RUN npm install

# Copy across our files
COPY . .

# Expose our application using npm
EXPOSE 3000

# On start, run the application using npm
ENTRYPOINT ["npm", "start"]