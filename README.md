# ruuvi-gateway-nodejs

Acting as a gateway between Ruuvitag and the MongoDB database. Data can send between the Ruuvitag and gateway with, for example, Ruuvi Station mobile app. ruuvi-gateway-nodejs stores data permanently to the MongoDB database.

Service allows only POST requests. It now showing stored data.

## Prerequisites

You need the Ruuvitag device which sends temperature, humidity and pressure data to the connector. A connector can be some Bluetooth LE capable device such for example Rasberry pi, laptop or Android phone.  Connector sending the Ruuvitag data into gateway which acts Rest service for the connector. Gateway stores data permanently to the database.

For testing purposes, you can use test data.

<https://github.com/pasiol/ruuvi-gateway-nodejs/requests>

### Database

For testing purposes, you can run the MongoDB database as a docker container on your laptop.

<https://docs.docker.com/samples/library/mongo/>

Or you can sign to the MongoDB Atlas cloud service. Which is free for prototyping small scale applications.

<https://cloud.mongodb.com/user#/atlas/login>

## Docker container for testing enviroments

### Pulling the image from docker hub

    docker pull pasiol/ruuvi-gateway-nodejs:dev

### Running the docker container

    docker run -d -p 8888:8888 --rm --name ruuvi-gateway-nodejs-api -e MONGODB_URI='mongodb://NNN.NNN.NNN.NNN:27017/ruuvi' -e PORT=8888 ruuvi-gateway-nodejs:dev
