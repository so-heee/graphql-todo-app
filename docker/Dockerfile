FROM golang:alpine

ENV SRC_DIR=/go/src/github.com/so-heee/next-gqlgen-todo/backend
ENV  GO111MODULE=on

WORKDIR $SRC_DIR

RUN apk update && apk add git

RUN go mod init next-gqlgen-todo/backend
RUN GO111MODULE=off go get github.com/oxequa/realize