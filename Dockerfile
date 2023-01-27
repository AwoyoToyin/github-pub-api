FROM node:18-alpine As base
RUN npm --global install pnpm
WORKDIR /usr/src/app


FROM base As development
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./
RUN pnpm install
# Bundle app source
COPY --chown=node:node . .
# Use the node user from the image (instead of the root user)
USER node


FROM base As build
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./

# In order to run `build` we need access to the Nest CLI.
# The Nest CLI is a dev dependency,
# In the previous development stage we ran `npm install` which installed all dependencies.
# So we can copy over the node_modules directory from the development image into this build image.
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
# Run the build command which creates the production bundle
RUN pnpm run build
# Set NODE_ENV environment variable
ENV NODE_ENV=production
RUN pnpm install --prod
# Use the node user from the image (instead of the root user)
USER node


FROM base As production
# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
# Start the server using the production build
CMD [ "node", "dist/main.js" ]
