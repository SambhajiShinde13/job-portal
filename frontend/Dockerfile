# Stage 1: Build React app
FROM node:20 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build React app (env vars included)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files to Nginx web folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for HTTP
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
