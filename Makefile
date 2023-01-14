.PHONY = default deps build test start-cms-backend clean start-database

# Shell to use for running scripts
SHELL := $(shell which bash)
IMAGE_NAME := ivanfernandez2646/typescript-ddd-skeleton
SERVICE_NAME := app
MOOC_APP_NAME := cms

# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)
deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

default: build

# Build image
build:
	docker build -t $(IMAGE_NAME):dev . --no-cache

# Clean container
clean:
	npm run down:docker:local

# Start
start:
	docker compose up -d
	npm run dev

stop:
	docker compose down

# Run tests
test: deps start_database
	npm run test
