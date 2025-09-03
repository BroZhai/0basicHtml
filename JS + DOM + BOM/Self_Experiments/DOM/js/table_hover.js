let content_rows = document.querySelectorAll("tbody tr"); // 取得内容tr数组

for(const cur_row of content_rows){
    cur_row.onmouseover = () =>{
        // for(const row of content_rows){
        //     row.style.backgroundColor = "";
        // }
        cur_row.style.backgroundColor = "cyan";
    };
    cur_row.onmouseout = () =>{
        cur_row.style.backgroundColor = "";
    }
}
