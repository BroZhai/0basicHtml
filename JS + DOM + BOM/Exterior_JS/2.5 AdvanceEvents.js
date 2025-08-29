// 研究一下addEventListener()来注册事件
let my_btns = document.querySelectorAll("button");
// 第一个按钮
my_btns[0].addEventListener('click', ()=> {
    alert("你是聪明人!");
});
my_btns[0].addEventListener('click', ()=> { // 监听到了同一个'触发事件'
    alert("才怪嘞, 你是大Baka!"); // 在'聪明人'alert方法完成后继续执行 'Baka', 传统的.onclick写法则会直接覆盖前面的所有内容
})

// 研究'事件对象'
my_btns[0].addEventListener('click', (e)=>{
    console.log(e);
})

// 第二个按钮
let pop_msg = () =>{
    alert("你不会再看见我第二次了 :)");
    my_btns[1].removeEventListener('click', pop_msg);
}

my_btns[1].addEventListener('click', pop_msg);


// 研究捕获和冒泡
let child_div = document.querySelector("#child");
let parent_div = child_div.parentElement;

child_div.addEventListener("click", ()=>{
    alert("子元素冒泡");
})

parent_div.addEventListener("click", (e)=>{
    alert("父元素");
    // e.stopPropagation(); // 阻止父级继续往下'捕获'
}, true); // 这里的true指定'沿路调用顺序'为 捕获阶段 (外到内), 因此父级会先于子级一步调用

// 删除true后则两个都是'冒泡', 则是先内部的子级冒, 随后才是外部的父级冒