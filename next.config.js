// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({
//     reactStrictMode: true,
//     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//     eslint: {
//         dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
//     },
//     webpack: (config, { dev, isServer }) => {
//         config.resolve.fallback = {}
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ['@svgr/webpack'],
//         })
//         if (!dev && !isServer) {
//             Object.assign(config.resolve.alias, {
//                 'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
//                 react: 'preact/compat',
//                 'react-dom/test-utils': 'preact/test-utils',
//                 'react-dom': 'preact/compat',
//             })
//         }
//         return config
//     },
// })
// module.exports = (phase, {defaultConfig}) => {
//     /*** @type {import('next').NextConfig}*/
//     const nextConfig = {
//         webpack: (config, {dev, isServer}) => {
//             config.resolve.fallback = {}
//             config.module.rules.push({
//                 test: /\.svg$/,
//                 use: ['@svgr/webpack'],
//             })
//             if (!dev && !isServer) {
//                 Object.assign(config.resolve.alias, {
//                     'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
//                     react: 'preact/compat',
//                     'react-dom/test-utils': 'preact/test-utils',
//                     'react-dom': 'preact/compat',
//                 })
//             }
//             return config
//         },
//     }
//     return nextConfig
// }

// module.exports = withPlugins([
//     [withBundleAnalyzer],
//     {
//         webpack: (config, {dev, isServer}) => {
//             config.resolve.fallback = {}
//             config.module.rules.push({
//                 test: /\.svg$/,
//                 use: ['@svgr/webpack'],
//             })
//             if (!dev && !isServer) {
//                 Object.assign(config.resolve.alias, {
//                     'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
//                     react: 'preact/compat',
//                     'react-dom/test-utils': 'preact/test-utils',
//                     'react-dom': 'preact/compat',
//                 })
//             }
//             return config
//         }
//     }
//     // your other plugins here
// ])
module.exports = {
    /*** @type {import('next').NextConfig}*/
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}
