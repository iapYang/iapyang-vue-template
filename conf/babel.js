module.exports = {
    babelrc: false,
    presets: [
        [
            'env',
            {
                modules: false,
            },
        ],
        'stage-3',
    ],
    plugins: [
        'transform-object-rest-spread',
        'transform-class-properties',
        'syntax-dynamic-import',
    ],
};
