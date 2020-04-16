module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
        test: /\.pdf/,
        use: [
            options.defaultLoaders.babel,
            {
            loader: 'file-loader',
            options: pluginOptions.options,
            },
        ],
        })

        return config
    },
}