let p_element = document.querySelector("p");
let p_parent = p_element.parentElement;
console.log(`p标签的'父级元素节点'为: `);
console.dir(p_parent);

let children_nodelist = p_parent.children;
console.log(`${p_parent.id}中的子集元素节点有: `);
console.dir(children_nodelist);
console.log(`第一个子集元素的innerHtml为: ${children_nodelist[0].innerHTML}`);
console.log(`最后一个为: ${children_nodelist[children_nodelist.length-1].innerHTML}`);

let insert_p = document.createElement("p"); // 使用document.createElement创建一个p标签
insert_p.innerHTML = "我是来自JS定义的p标签";
// 直接插在 inner_div末尾
// p_parent.appendChild(insert_p); 

// 在inner_div指定'参考元素'位置前插入, 使用insertBefore(要插入的子元素节点, 参考元素节点)方法;
p_parent.insertBefore(insert_p, children_nodelist[1]); // 插在第一个p标签(qwq)前
