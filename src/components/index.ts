// import Copyright from './assembly/copyright/copyright.vue'
// import Navigation from './assembly/Navigation/Navigation.vue'

// 动态导入所有组件，方便使用
// 创建组件是组件命name必须，引入组件的名称
const files: any = require.context('./modules', true, /\.vue$/);
const modules: any = {};
files.keys().forEach(key => {
 let componentEntity = files(key).default || files(key);
 modules[componentEntity.name] = componentEntity
});

export default modules

