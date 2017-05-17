Kaba Babel preset
=================

A custom preset for usage in Babel in combination with Kaba.

It limits the available ES2015 functionality, so that a few cases are deliberately not compiled.
It should is based on the [Babel preset `es2015`](https://babeljs.io/docs/plugins/preset-es2015/).


Included transforms
-------------------

A list of all `es2015` transforms and whether they are included.
If they are not included there is also a reason for why they are not included.


| Transform                                                 | Included?  | Reason / Comment  |
| --------------------------------------------------------- | ---------- | ----------------- |
| `babel-plugin-transform-es2015-template-literals`         | ✅         |                   |
| `babel-plugin-transform-es2015-literals`                  | ✅         |                   |
| `babel-plugin-transform-es2015-function-name`             | ✅         |                   |
| `babel-plugin-transform-es2015-arrow-functions`           | ✅         |                   |
| `babel-plugin-transform-es2015-block-scoped-functions`    | ✅         |                   |
| `babel-plugin-transform-es2015-classes`                   | ✅         |                   |
| `babel-plugin-transform-es2015-object-super`              | ✅         |                   |
| `babel-plugin-transform-es2015-shorthand-properties`      | ✅         |                   |
| `babel-plugin-transform-es2015-duplicate-keys`            | ✅         |                   |
| `babel-plugin-transform-es2015-computed-properties`       | ✅         |                   |
| `babel-plugin-transform-es2015-for-of`                    | 🚫         | Compilation to `Symbol` usages is not desired, as the polyfill should not be used. |
| `babel-plugin-transform-es2015-sticky-regex`              | ✅         |                   |
| `babel-plugin-transform-es2015-unicode-regex`             | ✅         |                   |
| `babel-plugin-check-es2015-constants`                     | ✅         |                   |
| `babel-plugin-transform-es2015-spread`                    | ✅         |                   |
| `babel-plugin-transform-es2015-parameters`                | ✅         |                   |
| `babel-plugin-transform-es2015-destructuring`             | ✅         |                   |
| `babel-plugin-transform-es2015-block-scoping`             | ✅         |                   |
| `babel-plugin-transform-es2015-typeof-symbol`             | 🚫         | `Symbol` is not used. |
| `babel-plugin-transform-es2015-modules-commonjs`          | 🚫         | No modules transformation to enable tree shacking in webpack. |
| `babel-plugin-transform-es2015-modules-systemjs`          | 🚫         | No modules transformation to enable tree shacking in webpack. |
| `babel-plugin-transform-es2015-modules-amd`               | 🚫         | No modules transformation to enable tree shacking in webpack. |
| `babel-plugin-transform-es2015-modules-umd`               | 🚫         | No modules transformation to enable tree shacking in webpack. |
| `babel-plugin-transform-regenerator`                      | 🚫         | We don't want to use the runtime. |


Additional transforms
---------------------

All transforms that are not adapted from `es2015`.

| Transform                             | Included? | Reason / Comment |
| ------------------------------------- | --------- | ---------------- |
| `babel-plugin-transform-react-jsx`    | ✅         | The pragma is set to `h`, for `preact` compatibility. |


Disclaimer
----------

Kaba and this preset are used internally in Becklyn Studios. The reasons stated above might only be valid in the context of this work.

Most of the constraints are filesize based, so that if the compilation heavily increases the code size, the transform is not desired.
