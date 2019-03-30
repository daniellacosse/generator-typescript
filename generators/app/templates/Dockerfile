FROM mhart/alpine-node:latest

WORKDIR /app

ADD . .

# run yarn install independenly so dependencies are cached
RUN yarn install

ENTRYPOINT [ "make" ]
