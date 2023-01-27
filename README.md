## Description

This app exposes 2 endpoints (`/health` and `/repositories/popular`).

`/health` simply returns an object with property `status` as `ok`. This could be useful in production environment for health check.

`/repositories/popular` is the main popular repositories search endpoint. This endpoint expects a few query parameters (`createdFromDate`, `language` and `limit`). `language` and `limit` are optional.

## System Requirements

`Docker`
You should already have docker installed and running on your machine. Decided to ship it in docker because I went with redis store for caching requests/response.


## Installation

The following instruction assumes you already have docker installed on your machine.


## Running the app

Make a copy of the `.env.incl` file and rename the copy to `.env`


```bash
# Optional. Install dependencies locally in order to run unit tests
Feel free to use any manager of your choice (pnpm, npm or yarn)

$ (pnpm | npm | yarn) install
```


```bash
# Required. This will expose the api on port 3000 and can be accessed at http://localhost:3000
$ docker-compose up
```

## Usage

Navigate to: http://localhost:3000/repositories/popular?createdFromDate=2022-01-01&language=Typescript&limit=10 to see the results


You could also play with this using the swagger api documentation as described below


## Test

```bash
# unit tests & test coverage
$ (pnpm | npm | yarn) run test

# integration tests
# You must have the service running as stated above to run the integration tests
$ (pnpm | npm | yarn) run itest
```

## Swagger Documentation

You can find the swagger documentation of the api at `/docs`

Run the app as stated above and visit: http://127.0.0.1:3000/docs
