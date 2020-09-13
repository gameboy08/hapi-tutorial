// plugins/hapi-swagger.js
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('package');
const HapiSwagger = require('hapi-swagger');

const swaggerOptions = {
    info: {
        title: '接口文档',
        version: Pack.version,
    },
    // 定义接口以 tags 属性定义为分组
    grouping: 'tags',
    tags: [
        { name: 'tests', description: '测试相关' },
    ]
};

module.exports = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
]