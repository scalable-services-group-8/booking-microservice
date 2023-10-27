# Booking_Microservice

**Docker Setup -->**

**Prerequisite**: _docker network create infra-network_

- docker network create bookingms-network

#remove relative path in dockerfile for this
- docker build -t bookingdb-i ./src/db

- docker build -t bookingms-i .

- docker run --name bookingdb-c --network bookingms-network -dp 127.0.0.1:3005:3306 bookingdb-i

- docker run --name bookingms-c --network bookingms-network -dp 127.0.0.1:3002:3002 bookingms-i

- docker network connect infra-network bookingms-c

_OR_

- docker compose up

- docker network connect infra-network bookingms-c

**Kubernetes Setup -->**

**Prerequisite**: _minikube start_

- kubectl apply -f bookingdb-deployment.yml
  
- kubectl apply -f bookingms-deployment.yml

- kubectl get pods

- kubectl port-forward <dbpodname> 3005:3306

- kubectl port-forward <mspodname> 3002:3002

----------------------------------------------------

- kubectl delete service bookingms-service

- kubectl delete service bookingdb-service

- kubectl delete deployment bookingms-deployment

- kubectl delete deployment bookingdb-deployment
