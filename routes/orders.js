const GROUP_NAME = 'orders';
const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, h) => {
      return "";
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, h) => {
      return "";
    },
    options: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        params: Joi.object({
          orderId: Joi.string().required(),
        })
      }
    },
  },
];