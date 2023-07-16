# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
