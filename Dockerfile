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
