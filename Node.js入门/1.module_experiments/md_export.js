// 研究一下 module.exports 和 exports的区别
/* 简单来说, exports 就是 module.exports的一个'小弟', 在'手动挂载'中可以直接平替 module.exports(少打点字)
    但是小弟并不能'飞升'(统一导出), 写了也没用, 只有大哥module.exports才可以, 且大哥飞升后会直接'放大招'覆盖所有的'手动挂载' (小弟的手挂也会被干掉 XD)
*/

let first_value = 514;
let second_value = 1919;

/* 双方均手动挂载  */
exports.first_val = first_value; // 小弟手挂
module.exports.second_val = second_value; // 大哥手挂
// {first_val: 514, second_val: 1919}

/* export 小弟尝试'飞升', 但是P用没有*/ 
exports = { // 完全废物代码, 以后见到直接删就好了 XD
    first_value: 415,
    // {first_val: 514, second_val: 1919}
};

/*大哥module.exports进行飞升,  并释放了大招覆盖了所有的'手动挂载区', 小弟的'手挂'也被灭了 XD (注释 / 取消注释 一下代码将会有不同的结果)*/
module.exports = {
    second_value: 9191, // 大哥开大了, 场上只剩'大哥'的 9191 被导出了
    // {second_val: 9191}
}
