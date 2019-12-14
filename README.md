# structured-openapi-schema

Example project for structured OpenAPI schema.

## overview

This project includes OpenAPI schema, based on structured YAML files.

https://swagger.io/specification/

YAML files reference each other using `$ref`.

https://swagger.io/docs/specification/using-ref/

## directory structure

The directory structure is based on OpenAPI object.

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

For the case of adding `/notes` path.

Add `notes.yml` into `/paths`.

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

Almost all of the editors or plugins cannot evaluate file reference using `$ref`. (as far as I know)

If you need OpenAPI schema as a single YAML (or JSON) file, you can merge structured files using [openapi-generator](https://github.com/OpenAPITools/openapi-generator
).

```shell
# generate openapi.yaml
$ openapi-generator generate -g openapi-yaml -i root.yml -o generated
# generate openapi.json
$ openapi-generator generate -g openapi -i root.yml -o generated
```
