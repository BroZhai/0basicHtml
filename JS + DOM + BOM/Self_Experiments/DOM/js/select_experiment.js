let select_btn = document.querySelector("#select_all");
let remain_btns = Array.from(document.querySelector("tbody").querySelectorAll("input")); // 我靠还能层层深入这么用
// 注: DOM取得的'多个元素'并不是一个标准的js数组, 而是一个NodeList数组, 要想使用Js中的数组方法, 我们则需要将其转成Js数组

select_btn.onclick = () =>{
    for(const cur_btn of remain_btns){
        cur_btn.checked = event.target.checked;
    }
}

for(const cur_btn of remain_btns){
    cur_btn.onclick = ()=>{
        if(remain_btns.every((btn) => btn.checked === true)){
            select_btn.checked = true;
        }else{
            select_btn.checked = false;
        }
    }
}