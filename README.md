[基于 hapi 的 Node.js 小程序后端开发实践指南](https://juejin.im/book/6844733741424705550)
https://github.com/yeshengfei/hapi-tutorial

```
npx knex init
createdb hapi-tutorial-shop-store //postgres create database
npx knex migrate:make create-shops-table
npx knex migrate:make create-items-table
npx knex migrate:latest

npx knex seed:make 01-init-shops
npx knex seed:run
```

### Seed

- Seed files allow you to populate your database with test or seed data independent of your migration files.
- Seed files are executed in alphabetical order.
- The idea is every time we run the seed the database will go back to the exact same state.