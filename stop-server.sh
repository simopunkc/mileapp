#!/bin/bash

docker compose down
docker compose rm -f
sleep 5
docker volume rm $(docker volume ls -q)
sleep 5
docker rmi mongo1
docker rmi mongo2
docker rmi mongo3
docker rmi mileapp-be-nodejs