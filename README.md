# node-graphQL
node.js graphql server_1


# PROTO
```$xslt
protoc src\proto\projectmetadata_service.proto --plugin=protoc-gen-ts=%CD%/node_modules/.bin/protoc-gen-ts.cmd --ts_out=.
```

```
sh ./scripts/build-protos.sh
```

# DOCS

```$xslt
https://adnanahmed.info/blog/2019/11/01/grpc-with-nodejs-typescript/
```

```$xslt
https://medium.com/blokur/how-to-implement-a-grpc-client-and-server-in-typescript-fa3ac807855e
```

## TRAVIS
```       
    "grpc-tools": "1.8.1" -- when building on travis--there is a problem... need for proto build on dev.. incllude when needed
```

## OPTIONS

```
    /*"build:dev": "nodemon src/server.ts --exec ts-node src/server.ts",*/
```