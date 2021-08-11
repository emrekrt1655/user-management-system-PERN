FROM node:14-alpine 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY yarn.lock  ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]