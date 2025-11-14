let pro_value = 114;

// 手动挂载导出成员变量 (属性, 方法)
module.exports.pro_value = pro_value;
module.exports.pro_fun = (val) => {
    console.log(`${val}的下一个值是: ${val+1}`);
}

module.exports = { // 统一导出 (将会覆盖上面的'手动挂载'), 
    provider_value: 124,
    provider_function: (val) =>{
        console.log(`${val}的上一个值是: ${val-1}`);
    },
}

console.log(`provide.js: 诶嘿, 有人好像引用了我, 是谁呢?`); // 注: 当该模块被其他模块引用时, 会先将该模块'跑一遍' (这一行会被执行)