let img_ele = document.querySelector("img");

document.addEventListener('mousemove', (e)=>{ // 在'整个页面'中, 当鼠标发生移动时
    // 通过产生MouseEvent(e)事件对象 对 鼠标的坐标进行捕获, 同时映射在img标签的css中, 达到'动态跟随'的效果
    let cur_x = e.pageX;
    let cur_y = e.pageY;

    img_ele.style.top = cur_y+10 + "px"; // 注意, 这里一定要加单位! 不然不会生效!!
    img_ele.style.left = cur_x+10 + "px";
})