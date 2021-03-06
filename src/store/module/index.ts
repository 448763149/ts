/**
 * 该文件启用 `@/store/index.js` 导入所有 vuex 模块。
 * 这个文件是一次性创建的，不应该被修改。
 */

const files = require.context('./modules', false, /\.ts$/);
const modules = {};

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
});

export default {
    namespaced: true,
    modules
};
