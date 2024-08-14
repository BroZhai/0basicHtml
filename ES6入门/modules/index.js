/*  es6的"模块"功能主要由两个命令组成:
    import: 在"外部程序"中"引用"用到的关键字
    export: 在"模块文件内部" 导出 数据对象 或 接口的关键字
*/

export let name="Mr-Pancake"; //传出一个数据变量
export function introduce(){
    return `Hello! 这里来是自模块内部的: ${name}` // 模块内部的本地变量也是互相可以调用的
}
/*Tips:也可以用"解构的方式"抛出对象 (解构时只要"名"就好了)
    export{name,introduce}; 【'指定'要抛出去的东西】
*/

/*抛出一个单一数据对象【多了个default关键字，在不用解构赋值{}的情况下 直接写"对象名"即可】*/
export default class Pancake{ 
    constructor(){

    }
    eat(){
        console.log("你咬了一口煎饼，HP+5");
    }
}

