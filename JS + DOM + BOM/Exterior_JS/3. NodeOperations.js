let p_element = document.querySelector("p");
let p_parent = p_element.parentElement;
console.log(`p标签的'父级元素节点'为: `);
console.dir(p_parent);

let children_nodelist = p_parent.children;
console.log(`${p_parent.id}中的子集元素节点有: `);
console.dir(children_nodelist);
console.log(`第一个子集元素的innerHtml为: ${children_nodelist[0].innerHTML}`);
console.log(`最后一个为: ${children_nodelist[children_nodelist.length-1].innerHTML}`);
