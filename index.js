module.exports = {
    plugins: [
        // es2015
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
        ["babel-plugin-syntax-dynamic-import"],

        // Stage 3 proposals

        // set with loose: true, as the compilation is pretty big
        // https://babeljs.io/docs/plugins/transform-class-properties/
        ["babel-plugin-transform-class-properties", {loose: true}],

        // additional transforms
        ["babel-plugin-transform-react-jsx", {pragma: "h"}],
    ],
};
