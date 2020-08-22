const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules')([
    '@adobe/react-spectrum',
    '@adobe/react-spectrum-ui',
    '@react-spectrum',
]);

if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {}
    require.extensions['.css'] = (file) => {}
}
global.requestAnimationFrame = (cb) => cb();

module.exports = withPlugins([withCSS, withTM], {
    // Next config
});