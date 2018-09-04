module.exports = {
    // the plugins are applied from top to bottom, so the order is important.
    // Especially the syntax plugins (like class properties) need to be all other plugins.
    plugins: [
        // ------------------------------------------------------------------------------------------
        // Stage 3 proposals
        // ------------------------------------------------------------------------------------------
        ["@babel/plugin-proposal-decorators"],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-json-strings"],

        // set with loose: true, as the compilation is pretty big
        // https://babeljs.io/docs/plugins/transform-class-properties/
        ["@babel/plugin-proposal-class-properties", {loose: true}],


        // ------------------------------------------------------------------------------------------
        // JSX
        // ------------------------------------------------------------------------------------------
        ["@babel/plugin-transform-react-jsx", {pragma: "h"}],

        // ------------------------------------------------------------------------------------------
        // ES 2015
        // ------------------------------------------------------------------------------------------
        ["@babel/plugin-transform-arrow-functions", {spec: false}],
        ["@babel/plugin-transform-block-scoped-functions"],
        ["@babel/plugin-transform-block-scoping", {"throwIfClosureRequired": true}],
        ["@babel/plugin-transform-classes"],
        ["@babel/plugin-transform-computed-properties", {loose: true}],
        ["@babel/plugin-transform-destructuring", {loose: false}],
        ["@babel/plugin-transform-duplicate-keys"],
        ["@babel/plugin-transform-function-name"],
        ["@babel/plugin-transform-literals"],
        ["@babel/plugin-transform-object-super"],
        ["@babel/plugin-transform-parameters", {loose: true}],
        ["@babel/plugin-transform-shorthand-properties"],
        ["@babel/plugin-transform-spread"],
        ["@babel/plugin-transform-sticky-regex"],
        ["@babel/plugin-transform-template-literals", {loose: true}],
        ["@babel/plugin-transform-unicode-regex"],
    ],
};
