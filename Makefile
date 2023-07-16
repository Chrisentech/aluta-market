# Variables
DOCKER_IMAGE_NAME := alutamarket-client
DOCKER_CONTAINER_NAME := alutamarket-client-container

# Build Docker image
docker-client:
	docker build -t $(DOCKER_IMAGE_NAME) .

# Run the app in a Docker container
client:
	docker run -it -p 3000:3000 --name $(DOCKER_CONTAINER_NAME) $(DOCKER_IMAGE_NAME)

# Stop and remove the Docker container
stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

.PHONY: docker-client client stop