let img_ele = document.querySelector("img");

document.addEventListener('mousemove', (e)=>{ // 在'整个页面'中, 当鼠标发生移动时
    // 这里的 e 直接指代 MouseEvent 鼠标事件对象
    // 通过产生MouseEvent(e)事件对象 对 鼠标的坐标进行捕获, 同时映射在img标签的css中, 达到'动态跟随'的效果
    let cur_x = e.pageX;
    let cur_y = e.pageY;

    img_ele.style.top = cur_y+10 + "px"; // 注意, 这里一定要加单位! 不然不会生效!!
    img_ele.style.left = cur_x+10 + "px";
})


// 键盘事件
document.addEventListener("keyup", (e)=>{
    // 这里的e则指代 键盘事件对象 KeyboardEvent
    console.log(`用户按下了: ${e.key}键, 对应的Ascii码为: ${e.keyCode}`);
})