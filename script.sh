#!/bin/bash

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Generate Prisma migrate
npx prisma migrate dev --name createProductTable

# Build the project
npm run build

# Start the server
npm start
