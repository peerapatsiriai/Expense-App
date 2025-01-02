FROM golang:1.23

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY src /app/src

# Copy the .env file from the root directory
COPY .env /app/.env

# Copy the run_tests.sh script from the root directory
COPY run_tests.sh /app/

WORKDIR /app/src

RUN go build -o /app/main ./cmd/main.go

# Ensure the run_tests.sh script is executable
RUN chmod +x /app/run_tests.sh

CMD ["/app/main"]