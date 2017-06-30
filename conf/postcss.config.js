module.exports = {
    plugins: [
        require('postcss-css-variables'),
        require('postcss-cssnext')({
            warnForDuplicates: false,
            features: {
                calc: false,
            },
            browsers: [
                'Chrome >= 35',
                'Firefox >= 38',
                'Edge >= 12',
                'Explorer >= 10',
                'iOS >= 9',
                'Safari >= 9',
                'Android 2.3',
                'Android >= 4',
                'Opera >= 12',
            ],
        }),
    ],
};
