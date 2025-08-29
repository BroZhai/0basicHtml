// 研究一下addEventListener()来注册事件
let my_btns = document.querySelectorAll("button");
// 第一个按钮
my_btns[0].addEventListener('click', ()=> {
    alert("你是聪明人!");
});

my_btns[0].addEventListener('click', ()=> { // 监听到了同一个'触发事件'
    alert("才怪嘞, 你是大Baka!"); // 在'聪明人'alert方法完成后继续执行 'Baka', 传统的.onclick写法则会直接覆盖前面的所有内容
})


// 第二个按钮
let pop_msg = () =>{
    alert("你不会再看见我第二次了 :)");
    my_btns[1].removeEventListener('click', pop_msg);
}

my_btns[1].addEventListener('click', pop_msg);