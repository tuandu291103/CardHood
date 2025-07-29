# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the project
COPY . .

# Build the app
RUN npm run build

# Install static server
RUN npm install -g serve

# Run it in production mode
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose port
EXPOSE 3000
