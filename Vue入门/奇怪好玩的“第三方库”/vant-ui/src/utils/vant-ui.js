// 被拆成单独js的"按需导入"模块，要啥在下面加啥就好了，省的让main.js变动巨臃肿XD
// 别忘了还要在main.js里面import一下这里的'单独js'
import Vue from "vue";
import {Field, Button} from 'vant';

Vue.use(Button)
Vue.use(Field)
// Vue.use(Cell)
// Vue.use(CellGroup, Cell)