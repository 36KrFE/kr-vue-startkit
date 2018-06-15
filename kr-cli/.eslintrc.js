/* 
cnpm i eslint-plugin-vue@latest  -g
cnpm i babel-eslint  -g
*/
// eslint  --fix src/views/*/*/*.vue
/* 

You can use <!-- eslint-disable -->-like HTML comments in <template> of .vue files. For example:

<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div a="1" b="2" c="3" d="4">
  </div>
</template>

*/
module.exports = {
    "env": {
        "browser": true,
        // "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        // add more generic rulesets here, such as:
        // "eslint:recommended",
        // "plugin:vue/recommended",
        // "plugin:vue/base",
        'plugin:vue/essential'
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
    ],
    "rules": {
        // 禁止重复html属性
        "vue/no-duplicate-attributes":["error"],
        // 禁止vue组件选项中重复字段名
        "vue/no-dupe-keys":["error"],
        // 计算属性中不允许异步操作，因为可能会导致意外的错误
        "vue/no-async-in-computed-properties":["error"],
        // v-for和v-if不允许在同一标签上使用，When they exist on the same node, v-for has a higher priority than v-if. That means the v-if will be run on each iteration of the loop separately
        "vue/no-confusing-v-for-v-if":["error"],
        // html属性值强制双引号
        "vue/html-quotes":["error"],
        // v-on要使用 @ 简写
        "vue/v-on-style":["error"],
        // v-bind要使用 : 简写
        "vue/v-bind-style":["error"],
        // prop必须有默认值
        "vue/require-default-prop":["error"],
        // html不允许多余的空格
        "vue/no-multi-spaces":["error"],
        // 组件名称风格：驼峰
        "vue/name-property-casing": ["error", "PascalCase"],
        // 双大括号内两侧不能有空格
        'vue/mustache-interpolation-spacing': [2, 'never'],
        // 每行属性最大数量
        "vue/max-attributes-per-line": [2, {
            // 单行不超过3个
            "singleline": 3,
            // 多行不超过1个
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        // html缩进
        "vue/html-indent": ["error", 2, {
            "attribute": 1,//属性缩进1
            "closeBracket": 0,//右括号缩进0
            "alignAttributesVertically": false,//多行的属性不允许和标签行对其
            "ignores": []
        }],
        // js缩进
        "vue/script-indent":["error", 2, {
            "baseIndent": 0,
            "switchCase": 0,
            "ignores": []
          }],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};