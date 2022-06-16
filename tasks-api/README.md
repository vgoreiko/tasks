1) In the root of tasks-api should be present 
`ormconfig.env` file with the following settings

```   
   TYPEORM_CONNECTION = postgres
   TYPEORM_HOST = localhost
   TYPEORM_USERNAME = ***
   TYPEORM_PASSWORD = ***
   TYPEORM_DATABASE = ***
   TYPEORM_PORT = ***
   TYPEORM_SYNCHRONIZE = true
   TYPEORM_LOGGING = true
   TYPEORM_ENTITIES = entity/*.js,modules/**/entity/*.js
```

2) Swagger http://localhost:3000/api

3) TODO: add https://dev.to/arnaudcortisse/trying-out-nestjs-part-4-generate-typescript-clients-from-openapi-documents-28mk

4) Is used for swagger decoration with @ApiProperty https://docs.nestjs.com/openapi/cli-plugin

5) Add google authorization method

6) Add SSR +-

7) Auth as separate microService

https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5
