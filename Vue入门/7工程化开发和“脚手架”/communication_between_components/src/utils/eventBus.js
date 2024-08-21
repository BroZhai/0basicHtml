// 在一个单独的js中创建一个 "事件"总线 eventbus
import Vue from "vue";
const BusVue=new Vue()
export default BusVue //将创建好的"空Vue数据缓存"进行导出，供其它组件"导入使用"