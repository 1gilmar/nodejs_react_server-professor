- criando projeto api
$yarn init -y 

- instalar dependencia type sricpt
$yarn add typescript -D

- criando arquivo de configuração do typscirpt

$yarn tsc --init

ou $npx tsc --init

- instalando o ts-node-de igual o nodemon

- este e como o nodemon para que aplicacao sempre reestart quando salvarmos.
$yarn add ts-node-dev -D

```tsx
"scripts": {
    "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },
```

$yarn add knex sqlite3