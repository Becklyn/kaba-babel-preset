const browserslistConfigs = require("@becklyn/browserslist-config/envs");

/**
 * Builds the config for a given browser list
 */
function buildConfig (browserslistConfig)
{
    return {
        presets: [
            // default env
            ["@babel/preset-env", {
                spec: false,
                useBuiltIns: "entry",
                corejs: 3,
                targets: browserslistConfig,
            }],
        ],
        plugins: [
            // ------------------------------------------------------------------------------------------
            // Stage 3 proposals
            // ------------------------------------------------------------------------------------------
            ["@babel/plugin-proposal-json-strings"],
            ["@babel/plugin-proposal-nullish-coalescing-operator", {loose: true}],
            ["@babel/plugin-syntax-dynamic-import"],

            // set with loose: true, as the compilation is pretty big
            // https://babeljs.io/docs/plugins/transform-class-properties/
            ["@babel/plugin-proposal-class-properties", {loose: true}],
        ],
    };
}

module.exports = {
    modern: buildConfig(browserslistConfigs.modern),
    legacy: buildConfig(browserslistConfigs.legacy),
};
