const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    eslint: {
        dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            })
        }

        return config
    },
})
