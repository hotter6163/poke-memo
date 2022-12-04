const withTM = require('next-transpile-modules')(['dao', 'schema']);

module.exports = withTM({
  reactStrictMode: true,
});
