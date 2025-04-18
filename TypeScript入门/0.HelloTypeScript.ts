// js的原始数据类型
let integer: number = 114514 
let character: string = '我是字符串'
let tf: boolean = false
let unknown: undefined = undefined 
let lonely: null = null 
function testFun(): void{ 
  console.log('这是一个没有返回值的方法, 已声明返回值为void');
}
let es6WoW: symbol = Symbol('我的地址是独一无二的!')

// ts给你整出的点'很新的东西'

  /* 联合类型 */
  let mix_arr: (string|number)[] = ['我既可以字符串','又可以是', 114514]
  let sepeate_judge: string[] | number = 1234 // 注意这个byd'()', 这里的意思是: 要么是'字符串数组[]', 要么是'纯数字'

  /* 自定义类型 (类型别名)*/
  type MyAny = number | boolean 
  // let myData: MyAny = 'ss' // 错误示范, 数据类型错误
  let myData: MyAny = true // 对应到MyAny中的 boolean, Correct!
