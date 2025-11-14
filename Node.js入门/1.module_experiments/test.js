// console.log(module);

const pro_module = require("./provider");
console.log(`pro_module export出来的东西:`);
console.log(pro_module);
// pro_module.pro_fun(pro_module.pro_value); // 引用引入模块的方法和属性 // 115

// 引用'统一导出'中的成员变量
// console.log(pro_module.pro_value); // 失败, 原来export手动挂载的成员变量 被 '统一导出'的覆盖了
pro_module.provider_function(pro_module.provider_value); // 123


// exports 和 module.exports 测试区
console.log(`\nexports, module.exports测试区`);
const md_module = require("./md_export");
console.log(md_module);