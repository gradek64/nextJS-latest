# Builder Stage
FROM node:22.13.0-alpine AS builder

# Set the working directory inside the container
WORKDIR /build

# Copy all files to the build container (exclude files listed in .dockerignore)
COPY . .

RUN --mount=type=secret,id=GITHUB_PACKAGES_AUTH_TOKEN,env=GITHUB_PACKAGES_AUTH_TOKEN npm ci

RUN npm run build

# Runtime Stage
FROM node:22.13.0-alpine AS runtime

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=80

EXPOSE ${PORT}

WORKDIR /app

# Create a non-root user and group for running a Next.js application securely
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built Next.js files
COPY --from=builder /build/.next /app/.next

# Copy dependencies from build stage
COPY --from=builder /build/package.json /app/
COPY --from=builder /build/node_modules /app/node_modules

# Set the default command to start the application in production mode
CMD ["npm", "start"]
