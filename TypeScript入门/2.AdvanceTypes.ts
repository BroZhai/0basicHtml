// 让我们来看一些高级的东西
/* TypeScript中的 Class */
class Pokemon{
  name: string; // 没有赋值的属性 要自己声明类型
  lv: number;
  readonly fixedValue: number = 9; // readonly 指定该数据 '不能被更改'(只读), 或是在constructor中为其设置初始值 
  // 注: readonly 只能修饰属性, 不能修饰方法, 且修饰的属性'一定要带个类型'
  greet(): void{
    console.log("Hello, my name is " + this.name);
  } 

  constructor(name: string, lv: number){ // 构造函数
    this.name = name;
    this.lv = lv;
  }
}

let flareon = new Pokemon('Flareon', 18)
flareon.greet() // Hello, my name is Flareon

class Monster extends Pokemon{
  evilLv: number;
  constructor(name: string, lv: number, evilLv: number){ // 对父类的构造函数进行Overwrite重写
    super(name, lv) // 必须先super 父类的构造函数, 并传入响应的参数
    this.evilLv = evilLv;
  }
  shout(): void {
    console.log("我是"+ this.name + ", 我的邪恶等级是: "+ this.evilLv);
  }
}

let miniQ = new Monster('MiniQ',13, 22)
miniQ.shout() // 我是miniQ, 我的邪恶等级是: 22


/* 类型兼容性 */ 
class Point{x: number; y: number}
class Point2D{x: number; y: number}
class Point3D{x: number; y: number; z:number}

let p1:Point = new Point2D() // 不报错, 因为 Point 和 Point2D 类的 '结构相似', ts认为这是同一个东西 (发生了'类型兼容')
let p2:Point = new Point3D() // 也不报错, 类型少的 可以用 类型多的 (Point3D > Point)

type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
type F3 = (a: number) => void // 和F1'完全一致', 细到参数类型

let a:F1 = () => { console.log("a需要被初始化, 不然会报错") }
let b:F2
let c:F3

b = a  // type 函数类型兼容, 这个和上面'类&接口'的兼容性反过来, 函数多的可以用函数少的(也确实, 稳嘛)
c = a // '结构相似', OK

interface Point2D{x: number; y: number}
interface Point3D{x: number; y: number; z:number}

type F4 = (p: Point2D) => void
type F5 = (p: Point3D) => void
// 因为这里还是type 的函数进行的比较, 仍是'函数类型'兼容性的逻辑(大的可以用小的), 而非'类&接口'的类型兼容性逻辑

let f4:F4 = () => { console.log("初始化");}
let f5:F5
f5 = f4 // OK,  f5(Point3D 3个参数) > f4(Point2D 2个参数), 没毛病

type F6 = () => {ret_int: number} // 返回一个对象, 里面第一个数据为int类型
type F7 = () => {ret_int: number, ret_str: string}

let f6:F6 = () => { return {ret_int: 123}; }
// let f6:F6 = () => { return {ret_int: "abc"}; } // 报错
let f7:F7 = () => { return {ret_int: 234, ret_str: "abc"}}

f6 = f7 // 函数兼容性, 形参少的可以用多的 (多的有'多余'的参)


/* 交叉类型 */
interface person{ name: string }
interface phone_num{ num: number}
type personalInfo = person & phone_num
/*
  此刻的personalInfo:
  interface personalInfo{
    name: string;
    num: number;
  }
*/

// '属性混合'实验
class test1{ fun: (value: number) => void }
class test2{ fun: (value: string) => void }
type test3 = test1 & test2
/*
  此刻的test3:
  value: number | string
  judge: boolean
*/
let t3: test3 = { fun: () => {} };
t3.fun("abc") // OK
t3.fun(123) // OK


/* 泛型 */
function wow<WoBuzhiDao>(value: WoBuzhiDao): WoBuzhiDao { return value } // 一般函数带泛型
let sos = <Fanxing>(value: Fanxing) => {return value} // 箭头函数带泛型

wow<string>('丢字符串进去试试'); wow(123); wow(undefined); // 均不报错, 因为用了泛型
// wow<boolean>('我不是boolean, 所以我必然报错')
sos('同理, 这里也不会报错'); sos(false); // 同理

// 泛型约束 (将泛型'进一步细分'以调用一些的属性)
let genericity_exp1 = <Type> (arr: Type[]): number => {
  return arr.length; // 我们具体指定了(arr)Type将会是一个'数组[]', 所以这里能调到arr.length且不报错
}

interface additional_constraints{
  // 自定义可以有哪些'属性', 一会儿加到对应的'泛型'上 (extends)
  length;
  value;
  time;
}

let genericity_exp2 = <Type extends additional_constraints>(arr: Type): void =>{
  console.log(arr.length, arr.value, arr.time);  // OK
}

// 研究多个泛型 + keyof 关键字 
let obj_key = <Object, Key extends keyof Object>(obj: Object, key:Key) => { return obj[key] } // 一个带泛型的箭头函数
let person = {name: "Cake", age: 114}
obj_key(person, 'age')
obj_key('I am a set of String','length')

// 接口带泛型
interface Weapon<Fx>{ 
  shoot: (target: Fx) => void; // shoot是一个 返回void的抽象方法 (':'不是赋值, 看岔了 XD)
}

let Fire_arm: Weapon<string> & {ammo: number} = { // 明确指定泛型是什么类型<string>, Fire_arm是一个属于 Weapon<string> 类型的 对象变量
  shoot(target) { // '对象'的方法重写
      console.log(`${target} missed due to the shit accuracy of Fire_arm`);
  },
  ammo: 10, // 玩点花的, 在上面原有的基础上'混一个新属性&进来' (交叉类型)
}

Fire_arm.shoot('Cirno')
console.log(`Fire_arm 中的ammo剩余 ${Fire_arm.ammo}`) // 成功打印

class HandGun<Fx> implements Weapon<Fx>{ // 创建一个类来实现接口
  shoot = (target: Fx) => { //'类'的方法重写
    console.log(target + " has been hit!");
  }
  ammo: number = 114514
}
let pisto = new HandGun()
pisto.shoot('Cirno')
console.log(`pisto 中的ammo数量为 ${pisto.ammo}`);