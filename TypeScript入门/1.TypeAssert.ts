// 我们来具体看一下ts中的'类型推断' 和 '类型断言'

/* 类型推断 */
let age = 18; // 未标明number, 但鼠标浮在age上会发现有'number'

/*类型断言*/
// const aLabel = document.getElementById('link') // 拿到id为link的 a标签dom, 但属性为'通用HTML Elements'
// const aLable = document.getElementById('link') as HTMLAnchorElement // as 'a标签'

/*额外补充*/
let obj = {a:100, b:200}
let key = 'a' as keyof typeof obj // key 现在即为 'a' | 'b'
console.log(typeof obj);
console.log(obj[key]);