const winston = require('winston');
const app = require('./server');
const { launchConsumers } = require('./events/consumer');

/**
 * Launch kafka consumers
 */
launchConsumers();

/**
 * Start the server
 */
app.listen(3500, () => {
  winston.info('Server is running on: http://localhost:3500');
});
