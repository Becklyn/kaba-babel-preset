const browserslistConfigs = require("@becklyn/browserslist-config/envs");

/**
 * Builds the config for a given browser list
 */
function buildConfig (browserslistConfig)
{
    return {
        presets: [
            // default env
            [require("@babel/preset-react"), {
                pragma: "h",
                pragmaFrag: "Fragment",
            }],
            [require("@babel/preset-env"), {
                spec: false,
                useBuiltIns: "usage",
                corejs: 3,
                targets: browserslistConfig,
            }],
        ],
        plugins: [
            // ------------------------------------------------------------------------------------------
            // Stage 3 proposals
            // ------------------------------------------------------------------------------------------
            [require("@babel/plugin-proposal-json-strings")],
            [require("@babel/plugin-proposal-nullish-coalescing-operator"), {loose: true}],
            [require("@babel/plugin-proposal-numeric-separator")],
            [require("@babel/plugin-syntax-dynamic-import")],

            // set with loose: true, as the compilation is pretty big otherwise
            // https://babeljs.io/docs/plugins/transform-class-properties/
            [require("@babel/plugin-proposal-class-properties"), {loose: true}],
        ],
    };
}

module.exports = {
    modern: buildConfig(browserslistConfigs.modern),
    legacy: buildConfig(browserslistConfigs.legacy),
};
