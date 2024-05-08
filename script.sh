#!/bin/bash

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build the project
npm run build

# Start the server
npm start
