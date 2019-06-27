module.exports = {
    plugins: [
        // ------------------------------------------------------------------------------------------
        // Stage 3 proposals
        // ------------------------------------------------------------------------------------------
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-json-strings"],

        // set with loose: true, as the compilation is pretty big
        // https://babeljs.io/docs/plugins/transform-class-properties/
        ["@babel/plugin-proposal-class-properties", {loose: true}],

        // default env
        ["@babel/preset-env", {
            spec: false,
            useBuiltIns: "entry",
            corejs: 3,
        }],
    ]
};
