# Builder Stage
FROM node:22.13.0-alpine AS builder

ARG GITHUB_PACKAGES_AUTH_TOKEN

# Set the working directory inside the container
WORKDIR /build

# Copy all files to the build container (exclude files listed in .dockerignore)
COPY . .

RUN npm ci

RUN npm run build

# Runtime Stage
FROM node:22.13.0-alpine AS runtime

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=80

EXPOSE ${PORT}

WORKDIR /app

# Copy built Next.js files
COPY --from=builder /build/.next /app/.next

# Copy dependencies from build stage
COPY --from=builder /build/package.json /app/
COPY --from=builder /build/package-lock.json /app/
COPY --from=builder /build/node_modules /app/node_modules

# Copy only the necessary build artifacts to the runtime environment
COPY --from=builder /build/.next /app/.next

# Clean up sensitive files like .npmrc (if exists)
RUN rm -f /app/.npmrc

# Set the default command to start the application in production mode
CMD ["npm", "start"]
