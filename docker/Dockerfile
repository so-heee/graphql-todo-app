FROM golang:alpine

ENV SRC_DIR=/go/src/github.com/so-heee/graphql-todo-app/backend
ENV  GO111MODULE=on

WORKDIR $SRC_DIR

RUN apk update && apk add git

RUN go mod init graphql-todo-app/backend
RUN GO111MODULE=off go get github.com/oxequa/realize