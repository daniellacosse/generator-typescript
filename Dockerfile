FROM mhart/alpine-node:latest

WORKDIR /app

# TODO: set environment variables

COPY build .

EXPOSE 3000

ENTRYPOINT [ "node", "build/index.js" ]
