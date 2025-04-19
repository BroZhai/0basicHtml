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
  console.log("seperate_judage的类型为: "+typeof(seperate_judge)) // number


  /* 自定义类型 (类型别名)*/
  type MyAny = number | boolean 
  // let myData: MyAny = 'ss' // 错误示范, 数据类型错误
  let myData: MyAny = true 
  console.log("myData的类型为"+typeof(myData)); // boolean


  /* 元组 */
  let tom: [string, number];
  // tom = ['Tom']; // 报错, 提示'少个number'
  tom = ['Tom', 25]; // OK

  tom.push('male'); // 新增的元素, 属于'string', OK
  // tom.push(true); // 报错, 不属于任何的'规定数据类型'


  /* any */
  let myFavouriteNumber: any = 'seven';
  myFavouriteNumber = 7;
  console.log("My favourite number is " + myFavouriteNumber);
  console.log('My favourite number的类型为'+ typeof(myFavouriteNumber)) // 这里还是推导了, 是number


  /* ts类型推导 */
  let text = '我应该是字符串'; // TypeScript自行检测到后面的数据类型为 '字符串', 并赋给text
  console.log("text被自动推断出来的类型为: "+typeof(text)); // string

  console.log("\n------我是一个分割线------\n");

  /* 对象类型 */
  let zhoux2: {
    name: string;
    lv: number;
    isMale: boolean;
    skills: string[];
    act(): void;
  } = {
    name:"CyanDog",
    lv: 20,
    isMale: true,
    skills: ["coding","modeling","composing","drawing"],
    act: () => {
      console.log(zhoux2.name+' have the skills: '+zhoux2.skills);
    }
  }
  zhoux2.act()


  /*抽象接口 & 实现*/
  interface Baka{
    Baka_name: string;
    Baka_value: number;
    Baka_function:() => void;
    Baka_optional?: any; // 可选参数, 非必要实现, 在函数的形参中同理
  }

  let Tekon: Baka = {
    Baka_name: 'Baka_Tekon',
    Baka_value: 99,
    Baka_function: () => {
      console.log(Tekon.Baka_name+'使用了冰冻技能');
    }
  }
  Tekon.Baka_function();


  /* 函数类型 */
  let shout_fun = (msg: string): string => { // 分别指定形参类型, 返回类型
    console.log("I shouted "+ msg);
    return("I shouted "+ msg)
  }
  shout_fun('我超!原!')

  let sleep:(msg: string) => void  =  (msg) => { // 形参&返回类型 '一口气'指定 (感觉不如上面的)
    console.log("I said " + msg+ " while sleeping");
    // return("I said " + msg+ " while sleeping")
  }
  sleep('嘻嘻嘻')

/* 枚举类型*/
  enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }

  let changeDirection = (way: Direction) => {
    if (Direction.Down === way){
      console.log('方向 下 被打印了出来')
    }
    else if (Direction.Up === way){
      console.log('方向 上 被打印了出来')
    }
    else if (Direction.Left === way){
      console.log('方向 左 被打印了出来')
    }
    else if (Direction.Right === way){
      console.log('方向 右 被打印了出来')
    }
    
  }
  changeDirection(Direction.Down); // 方向 下 被打印了出来
  console.log('Direction.Down的类型为: '+ typeof(Direction.Down)); // 枚举enum里面会自动给成员变量'赋值', Down对应的就是 number 1

