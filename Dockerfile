FROM node:8.11.3-alpine

RUN mkdir -p /proxy-server

WORKDIR /proxy-server

COPY . /proxy-server

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
