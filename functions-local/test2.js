const random = require('random')

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: `And the result is: ${random.boolean()}`
  })
}