const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const path = require('path');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');

// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
// https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js


// Copy from `react-scripts/config/webpack.config.js`
const hasJsxRuntime = (() => {
    if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
        return false;
    }
  
    try {
        require.resolve('react/jsx-runtime');
        return true;
    } catch (e) {
        return false;
    }
})();


module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    babel: {
        presets: [
            ["@babel/preset-env", { loose: true }],
            ["@babel/preset-react"],
            ["@babel/preset-typescript"],
        ],
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // console.log(JSON.stringify(env, null, 2));
            // console.log(JSON.stringify(paths, null, 2));
            // console.log(JSON.stringify(webpackConfig, null, 2));
            const isEnvProduction = env === 'production';
            const isEnvDevelopment = env === 'development';
            const shouldUseReactRefresh = false;

            // Copy from `react-scripts/config/webpack.config.js`
            webpackConfig.module.rules.push({
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: [
                    paths.appSrc,
                    path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
                ],
                loader: require.resolve('babel-loader'),
                options: {
                    customize: require.resolve(
                      'babel-preset-react-app/webpack-overrides'
                    ),
                    presets: [
                        [
                            require.resolve('babel-preset-react-app'),
                            {
                                runtime: hasJsxRuntime ? 'automatic' : 'classic',
                            },
                        ],
                    ],
                    // @remove-on-eject-begin
                    babelrc: false,
                    configFile: false,
                    // Make sure we have a unique cache identifier, erring on the
                    // side of caution.
                    // We remove this when the user ejects because the default
                    // is sane and uses Babel options. Instead of options, we use
                    // the react-scripts and babel-preset-react-app versions.
                    cacheIdentifier: getCacheIdentifier(
                        isEnvProduction
                            ? 'production'
                            : isEnvDevelopment && 'development',
                        [
                            'babel-plugin-named-asset-import',
                            'babel-preset-react-app',
                            'react-dev-utils',
                            'react-scripts',
                        ]
                    ),
                    // @remove-on-eject-end
                    plugins: [
                        isEnvDevelopment &&
                            shouldUseReactRefresh &&
                            require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    // See #6846 for context on why cacheCompression is disabled
                    cacheCompression: false,
                    compact: isEnvProduction,
                },
            });
            return webpackConfig;
        }
    },
}
