const withTM = require('next-transpile-modules')(['store', 'schema']);

module.exports = withTM({
  reactStrictMode: true,
});
