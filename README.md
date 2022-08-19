# structured-openapi-schema

Sample project for structured OpenAPI schema.

## overview

This project includes OpenAPI schema, based on **structured** YAML files.

https://swagger.io/specification/

YAML files reference each other using `$ref`.

https://swagger.io/docs/specification/using-ref/

## directory structure

The directory structure based on OpenAPI object.

https://swagger.io/specification/#oasObject

```shell
paths/        # https://swagger.io/specification/#pathItemObject
components/   # https://swagger.io/specification/#componentsObject
  schemas/    # https://swagger.io/specification/#schemaObject
  parameters/ # https://swagger.io/specification/#parameterObject
```

But you can change directory structure as you like.

## how to use

### edit schema

For the case of adding `/notes` to routing.

Add `notes.yml` into `./paths`.

```yaml
# paths/notes.yml
get:
  responses:
    200:
      description: ok
```

Then add a reference to this file into `root.yml`.

```yaml
# root.yml
paths:
  /notes:
    $ref: ./paths/notes.yml
```

This reference means path definition as below.

```yaml
paths:
  /notes:
    get:
      responses:
        200:
          description: ok
```

### generate merged schema

If you need OpenAPI schema as a single JSON (or YAML) file, you can merge structured files using [openapi-generator](https://github.com/OpenAPITools/openapi-generator
).

```shell
# generate openapi.json
$ openapi-generator-cli generate -g openapi -i root.yml -o generated
# generate openapi.yaml
$ openapi-generator-cli generate -g openapi-yaml -i root.yml -o generated
```

## tools

### lint

Lint OpenAPI schema using Stoplight [Spectral](https://github.com/stoplightio/spectral).

```shell
$ spectral lint ./generated/openapi.json
```

### mock

Run mock server based on OpenAPI schema using Stoplight [Prism](https://github.com/stoplightio/prism).

```shell
$ prism mock ./generated/openapi.json
```
