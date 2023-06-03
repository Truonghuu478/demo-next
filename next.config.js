/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Resolve the new 'src/pages' directory
        config.resolve.alias['pages'] = path.join(__dirname, 'src', 'pages')

        return config
    }

}

module.exports = nextConfig
