// js的原始数据类型
let integer: number = 114514 
let character: string = '我是字符串'
let tf: boolean = false
let unknown: undefined = undefined 
let lonely: null = null 
function testFun(): void{ 
  console.log('这是一个没有返回值的方法, 已声明返回值为void');
}
// let es6WoW: symbol = Symbol('我的地址是独一无二的!')

// ts给你整出的点'很新的东西'

  /* 联合类型 */
  let mix_arr: (string|number)[] = ['我既可以字符串','又可以是', 114514];
  let seperate_judge: string[] | number = 1234; // 注意这个byd'()', 这里的意思是: 要么是'字符串数组[]', 要么是'纯数字'
  console.log(typeof(seperate_judge)) // number


  /* 自定义类型 (类型别名)*/
  type MyAny = number | boolean 
  // let myData: MyAny = 'ss' // 错误示范, 数据类型错误
  let myData: MyAny = true 
  console.log(typeof(myData)); // boolean


  /* 元组 */
  let tom: [string, number];
  // tom = ['Tom']; // 报错, 提示'少个number'
  tom = ['Tom', 25]; // OK

  tom.push('male'); // 新增的元素, 属于'string', OK
  // tom.push(true); // 报错, 不属于任何的'规定数据类型'


  /* any */
  let myFavouriteNumber: any = 'seven';
  myFavouriteNumber = 7;
  console.log(typeof(myFavouriteNumber)) // 这里还是推导了, 是number


  /* ts类型推导 */
  let text = '我应该是字符串'; // TypeScript自行检测到后面的数据类型为 '字符串', 并赋给text
  console.log(typeof(text)); // string