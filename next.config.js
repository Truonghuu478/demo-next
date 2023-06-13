/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Resolve the new 'src/pages' directory
        config.resolve.alias['pages'] = path.join(__dirname, 'src', 'pages')

        return config
    },
    webpackDevMiddleware: (config)=>{
        config.watchOptions = {
            poll: 1000, // Check for changes every second
            ignored: ["node_modules"],
            aggregateTimeout: 300, // Delay before rebuilding

        };
        return config;
    }

}

module.exports = nextConfig
