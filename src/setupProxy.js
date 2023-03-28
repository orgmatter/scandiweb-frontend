const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://scandiweb-product-api.herokuapp.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api/v1/products',
    createProxyMiddleware(proxy)
  );
};