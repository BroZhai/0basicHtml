// 让我们来看一些高级的东西

/* TypeScript中的 Class */
class Pokemon{
  name: string; // 没有赋值的属性 要自己声明类型
  lv: number;
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