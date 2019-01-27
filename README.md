# basic-API-rest-with-node


This application is the basic test for evaluate NodeJS and Express Framework.


Create Imagen
docker build -t sabit/node-web-app-start .


Deployment API whit docker
docker-machine create --driver virtualbox default

docker run -p 49160:8080 -d sabit/node-web-app-start


Test deployment
docker-machine ip default
curl -i 192.168.99.101:49160