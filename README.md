# Take-home Project for Orderful

## Introduction

Oh, hey! You are probably here because you are on the team who will interview me on Tuesday :)

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

**Required Headers:**

- `Content-Type` - indicates what format the document should be converted from
  
- `Accept` - indicates what format the document should be converted to.

**Accepted types:**

- `text/plain` - converts the document from/to Format #1
  
- `application/json` - converts the document from/to Format #2 (JSON)

- `application/xml` - converts the document from/to Format #3 (XML)

**Query**

- `lineSeparator` - required when either `Content-Type` or `Accept` is `text/plain`.

- `itemSeparator` - required when either `Content-Type` or `Accept` is `text/plain`.

#### Examples

```bash
curl --location --request POST 'http://localhost:3000/format?itemSeparator=*&lineSeparator=~' \
--header 'Accept: application/json' \
--header 'Content-Type: text/plain' \
--data-raw 'ProductID* 4* 8* 15* 16*23~AddressID* 42* 108*3* 14 ~ContactID* 59* 26~'
```

## Testing

I've tried to cover the app with as many unit tests as possible within my time capacity. The unit tests run against
the `example-format-1-input.txt` file provided along with the requirement of the app.

```bash
$ npm run test
```

