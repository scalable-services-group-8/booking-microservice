# Booking_Microservice

docker network create bookingms-network

docker build -t bookingdb-i ./src/db

docker build -t bookingms-i .

docker run --name bookingdb-c --network bookingms-network -dp 127.0.0.1:3005:3306 bookingdb-i

docker run --name bookingms-c --network bookingms-network -dp 127.0.0.1:3002:3002 bookingms-i
