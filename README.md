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
```        - npm explore npm -g -- npm install node-gyp@latest
           - npm install node-pre-gyp -g
           - npm install --unsafe-perm node-sass -g
        
    - stage: build
      before_install:
        - npm i -g npm@6.14.4
        - npm install --only=production
      script:
        - npm run build


    "grpc-tools": "1.8.1"
```