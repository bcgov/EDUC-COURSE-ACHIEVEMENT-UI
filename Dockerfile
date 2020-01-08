# base image
FROM node:lts-alpine
 
# install simple http-server
RUN npm install -g http-server

# set working directory
WORKDIR /app
 
# install and cache app dependencies
COPY packag*.json ./

# install project dependencies
RUN npm install

# copt project files and folders to working directory (i.e. app folder)
COPY . .

# build for production
RUN npm run build

EXPOSE 8080
# start app
CMD [ "http-server", "dist" ]