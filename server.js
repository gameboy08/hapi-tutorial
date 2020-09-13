'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const init = async () => {
    const server = Hapi.server(config);
    
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([...routesHelloHapi, ...routesShops, ...routesOrders]);

    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();