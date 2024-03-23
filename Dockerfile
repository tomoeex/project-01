# Choose the base image (from Docker Hub) as the starting runtime to run the project
# Here, we select the node image version 18
FROM node:18

# Set the working directory in the container (when it is run)
WORKDIR /usr/src/app

# Copy the package.json file from the local machine into the container
COPY package.json .

# Install Node.js dependencies
RUN npm install

# Copy the index.html file into the container
COPY Index.html .

# Copy the index.js file into the container
COPY index.js .

# Expose port 8000 for access
EXPOSE 8000

# Set the command to start running the application when the container starts
CMD ["node", "index.js"]
