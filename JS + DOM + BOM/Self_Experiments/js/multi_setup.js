let all_btns = document.querySelectorAll("button");

for(let curbtn of all_btns){
    curbtn.onclick = ()=> {
        for(let btn of all_btns){
            btn.style.backgroundColor = ''; // 首先设置所有按钮的颜色为'空'
        }
        // 获得当前'触发事件'的按钮元素
        curbtn.style.backgroundColor = "pink"; // 单独设置当前的'元素'为特定颜色
        // 排他思想: 先'干掉'其他人, 再来看自己
    }
}

// 点图换背景
let all_imgs = document.querySelectorAll("img");
let src_list = ["imgs/mc.png", "imgs/silent.png", "imgs/universe.png", "imgs/vket.png"]
let body = document.querySelector("body");
for(i=0; i<src_list.length ; i++){
    all_imgs[i].src = src_list[i];
    all_imgs[i].onclick = () => {
        body.style.backgroundImage = "url("+src_list[i]+")";
        body.style.borderImageRepeat = "no-repeat";
        console.log(`图片${i}被触发`);
    }
}
