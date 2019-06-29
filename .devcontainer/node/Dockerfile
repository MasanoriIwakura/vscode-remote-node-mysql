FROM node:10.16.0-stretch-slim

LABEL maintainer "MasanoriIwakura"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y --no-install-recommends apt-utils 2>&1 && \
    apt-get install -y git && \
    npm i -g eslint && \
    rm -rf /var/lib/apt/lists/*

ENV DEBIAN_FRONTEND=dialog

