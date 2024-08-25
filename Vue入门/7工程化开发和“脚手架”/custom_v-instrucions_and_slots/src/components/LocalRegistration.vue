<template>
    <div>
        <h2>你好，这里是局部注册的v-color"指定内容颜色"，修改即刻更新响应</h2>
        <em><b>请在F12控制台查看输出信息</b></em>
        <div v-color="Acolor">
            我是内容A uwu
        </div>
        <p>设置A内容的颜色为: 
                <select name="内容A颜色" v-model="Acolor"> 
                    <option value="red">红色</option>
                    <option value="blue">蓝色</option>
                    <option value="green">绿色</option>
                </select>
        </p>

        <br><br><br>

        <div v-color="Bcolor">
            我是内容B awa
        </div>
        <p>设置B内容的颜色为: 
            <select name="内容B颜色" v-model="Bcolor"> 
                <option value="pink">粉色</option>
                <option value="yellow">黄色</option>
                <option value="cyan">青色</option>
            </select>
            </p>
    </div>
</template>

<script>

export default {
    data(){
        return{
            Acolor:"blue",
            Bcolor:"yellow",
        }
    },
    
    directives:{
        color:{
            //inserted只对应"初始加载"，并不对后续更新响应生效
            inserted(el,binding){
                // el即为选择的dom的形参，binding.value获取到右边 v-color="xxx" 的变量值
                el.style.color=binding.value;
                console.log(`首次加载完成，已将`);
                console.log(el);
                console.log(`的.style.color设置为"${binding.value}"`);
                console.log('--------------------');
            },

            //为了能及时"对后续的修改"进行更新响应，我们还要写一个update()
            update(el,binding){
                el.style.color=binding.value;
                // console.log(binding);
                
                console.log(`已更新${binding.expression}的值为"${binding.value}"`);
                
            }
        }
    }

}
</script>

<style>
    
</style>