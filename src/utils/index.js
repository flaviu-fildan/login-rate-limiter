const incrementLoginAttemptsCounter = require('./incrementLoginAttemptsCounter');
const isLoginPermittedFor = require('./isLoginPermittedFor');
const storeLoginEntry = require('./storeLoginEntry');

module.exports = {
  incrementLoginAttemptsCounter,
  isLoginPermittedFor,
  storeLoginEntry,
};
