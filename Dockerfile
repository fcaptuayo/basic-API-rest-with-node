
FROM node:8

RUN echo "remove-cache 2"

ADD app/ ./

RUN echo $(ls -1 ./)

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]