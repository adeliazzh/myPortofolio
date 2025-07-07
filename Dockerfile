# --- Stage 1: Build the React Application ---
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
# This means if only source code changes, npm install won't re-run
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
# Assuming your build command is 'npm run build' which outputs to 'dist'
RUN npm run build

# --- Stage 2: Serve the Built Application with a Lightweight Web Server ---
FROM nginx:alpine

# Copy the built React app from the builder stage into Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration (optional but recommended for SPAs)
# Create a file named 'nginx.conf' in your project root next to Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default HTTP port for Nginx)
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]