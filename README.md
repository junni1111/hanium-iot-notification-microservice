# Device MicroService

---

## Description

---

## Environment

---

- Mac OS
- Npm 6.14.13

- Docker
    - Node:14
    - PostgreSQL

## Local Dev Setup

---

### Install Docker (if docker installed then pass)

- [Reference Here](https://docs.docker.com/get-docker/)

### Install Images

- [PostgreSQL](https://hub.docker.com/_/postgres)
    - <pre>docker pull postgres</pre>

### Download from repository

<pre>git clone https://github.com/junni1111/hanium-iot-notification-microservice.git</pre>

### Go to download path

<pre>cd hanium-iot-notification-microservice</pre>

### Install packages

<pre>npm install --force</pre>

### Start Database

<pre>npm run start:dev:db</pre>

### Run

<pre>npm run start:dev</pre>
