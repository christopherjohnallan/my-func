const random = require('random')

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: `But a (possibly) different result is: ${random.boolean()}`
  })
}