# Take-home Project for Orderful

## Introduction

Oh, hey! You are probably because you are among the team who will interview me on Tuesday :)

Great to e-meet you! I hope my code can speak a bit about myself.

## Installation

Quick and easy:

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

The command will bring up a local REST server running on `http://localhost:3000`.

### Endpoints

```text
POST http://localhost:3000/format
```

#### Body Schema

```json
{
  "from": {
    "required": true,
    "properties": {
      "format": {
        "type": "string",
        "examples": [
          "delineated"
        ],
        "required": true
      },
      "lineSeparator": {
        "type": "string",
        "examples": [
          "~"
        ],
        "required": false
      },
      "itemSeparator": {
        "type": "string",
        "examples": [
          "*"
        ],
        "required": false
      }
    }
  },
  "to": {
    "required": true,
    "properties": {
      "format": {
        "type": "string",
        "examples": [
          "json"
        ],
        "required": true
      },
      "lineSeparator": {
        "type": "string",
        "examples": [
          "~"
        ],
        "required": false
      },
      "itemSeparator": {
        "type": "string",
        "examples": [
          "*"
        ],
        "required": false
      }
    }
  },
  "document": {
    "type": "string",
    "examples": [
      "ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~"
    ],
    "required": true
  }
}
```

#### Examples

```bash
curl --location --request POST 'http://localhost:3000/format' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from": {
        "format": "delineated",
        "lineSeparator": "~",
        "itemSeparator": "*"
    },
    "to": {
        "format": "json"
    },
    "value": "ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~"
}'
```

## Testing

I've tried to cover the app with as many unit tests as possible within my time capacity. The unit tests run against
the `example-format-1-input.txt` file provided along with the requirement of the app.

```bash
$ npm run test
```

