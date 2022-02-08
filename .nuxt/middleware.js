const middleware = {}

middleware['auth-user'] = require('../middleware/auth-user.js')
middleware['auth-user'] = middleware['auth-user'].default || middleware['auth-user']

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware
