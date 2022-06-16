## Image source
#FROM node:18-alpine
#
## Docker working directory
#WORKDIR /app
#
## Copying file into APP directory of docker
#COPY tasks-api/package.json tasks-api/package-lock.json tasks-api/tsconfig.build.json tasks-api/tsconfig.json tasks-api/nest-cli.json /app/
#
## Then install the NPM module
#RUN npm ci
#
## Copy current directory to APP folder
#COPY . /app/
#
#EXPOSE 3000
#CMD ["npm", "run", "start:dev"]
