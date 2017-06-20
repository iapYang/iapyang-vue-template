module.exports = {
    babelrc: false,
    presets: [
        [
            'es2015',
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
