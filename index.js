module.exports = {
    // the plugins are applied from top to bottom, so the order is important.
    // Especially the syntax plugins (like class properties) need to be all other plugins.
    plugins: [
        // ------------------------------------------------------------------------------------------
        // Stage 3 proposals
        // ------------------------------------------------------------------------------------------
        ["babel-plugin-syntax-dynamic-import"],

        // set with loose: true, as the compilation is pretty big
        // https://babeljs.io/docs/plugins/transform-class-properties/
        ["babel-plugin-transform-class-properties", {loose: true}],


        // ------------------------------------------------------------------------------------------
        // JSX
        // ------------------------------------------------------------------------------------------
        ["babel-plugin-transform-react-jsx", {pragma: "h"}],

        // ------------------------------------------------------------------------------------------
        // ES 2015
        // ------------------------------------------------------------------------------------------
        ["babel-plugin-transform-es2015-template-literals", {loose: false, spec: false}],
        ["babel-plugin-transform-es2015-literals"],
        ["babel-plugin-transform-es2015-function-name"],
        ["babel-plugin-transform-es2015-arrow-functions", {spec: false}],
        ["babel-plugin-transform-es2015-block-scoped-functions", {throwIfClosureRequired: true}],
        ["babel-plugin-transform-es2015-classes", {loose: false}],
        ["babel-plugin-transform-es2015-object-super"],
        ["babel-plugin-transform-es2015-shorthand-properties"],
        ["babel-plugin-transform-es2015-duplicate-keys"],
        ["babel-plugin-transform-es2015-computed-properties", {loose: false}],
        ["babel-plugin-transform-es2015-sticky-regex"],
        ["babel-plugin-transform-es2015-unicode-regex"],
        ["babel-plugin-check-es2015-constants"],
        ["babel-plugin-transform-es2015-spread", {loose: false}],
        ["babel-plugin-transform-es2015-parameters"],
        ["babel-plugin-transform-es2015-destructuring", {loose: false}],
        ["babel-plugin-transform-es2015-block-scoping"],
    ],
};
