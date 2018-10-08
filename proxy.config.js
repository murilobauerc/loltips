const proxy = [
    {
      context: '/api',
      target: 'https://personal-api-riot.herokuapp.com/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;