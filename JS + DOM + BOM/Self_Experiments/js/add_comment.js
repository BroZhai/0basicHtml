let edit_area = document.querySelector("#edit_area");
let edit_elements = edit_area.children; // 0 输入框, 1 按钮

let display_ul = document.querySelector("#display_ul");
let display_elements = display_ul.children;

let index_counter = 1;

// edit_area中的按钮[1]被点击
edit_elements[1].onclick = () => {
    const input_comment = edit_elements[0].value;
    let new_comment = document.createElement("li");
    new_comment.innerHTML = input_comment;
    index_counter++;
    new_comment.setAttribute("data-index", index_counter);
    if(index_counter%2==0){
        new_comment.style.backgroundColor = "rgb(241, 94, 94)";
        // new_comment.setAttribute("style","background-color: rgb(241, 94, 94);")
    }

    display_ul.appendChild(new_comment);
    edit_elements[0].value=''; // 清空已有描述
}