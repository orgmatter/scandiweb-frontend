const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://scandiweb-product-api.herokuapp.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    ['/api/v1/products', '/api/v1/product', '/api/v1/product/validate'],
    createProxyMiddleware(proxy)
  );
};