# ==============================
# Dockerfile — Antigravity Backend
# ==============================

# Stage 1: Use official Node.js LTS image (Alpine for smaller size)
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (better Docker layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Health check — Docker will monitor this endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/health || exit 1

# Start the application
CMD ["node", "src/server.js"]
