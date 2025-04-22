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

class HandGun<Fx> implements Weapon<Fx>{ // 创建一个类来实现接口 (泛型类)
  shoot:(target:Fx) => void = (target) => { //'类'的方法重写 (方法: 类型=> 返回值类型  =  具体实现... )
    console.log(target + " has been hit!");
  }
  ammo: number = 114514
}
let pisto = new HandGun<string>() // 指定好'泛型类型' (可选)
pisto.shoot('Cirno')
console.log(`pisto 中的ammo数量为 ${pisto.ammo}`);

// Tips: 数组也是一个'泛型'
const str_arr = ['a', 'b', 'c']
const num_arr = [1, 2, 3]
str_arr.forEach // Array<string>
num_arr.forEach // Array<number>

// 泛型工具类型
interface Device{ // 可以看到, 这里的所有属性都是'必要'
  id: number;
  name: string;
  android: boolean;
}
type knockoff_device = Partial<Device> // 全参可选
// let d1: Device = {
//   id: 1234, // e1报错, 因为提供的'参数不全' (all required)
// }
let d2: knockoff_device = {
  android: false, // 只提供了'一个参', 但OK, 因为所有参数过了Partial后都是可选的
}

type fixed_device = Readonly<Device> // 全参只读
let d3: fixed_device = {
  id:123, // e3里面所有参数都是readonly
  name: 'GPRS拨号上网机',
  android: false,
}
// d3.android = true; // 报错, 任何属性都不再能更改

type old_device = Pick<Device, 'name' | 'id'> // 摘出部分
let d4: old_device = {
  name: 'java步话机',
  id: 101,
  // android: false // 报错, 因为上面'摘出来'的属性中并没有'andorid'
}

type modern_device = Record<'Android_ver' | 'Keneral_ver' | 'CPU', string> // 快速新建 + 统一声明
let d5: modern_device = {
  Android_ver: 'API 31',
  Keneral_ver: 'UNIX LTS 23.3',
  CPU: 'BakaDragon 9.9',
}