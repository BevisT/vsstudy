var  myheader = {
    template:'<P>this is my-header</P>'  
}
var mybottom = {
    template:'<a href="https://www.baidu.com/">宝贝 点我</a>'
}
myheader.template='<p>THIS is my header two</p>'
var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js',
        fruit:'apple'
    },  
    components:{   
        'myheader':myheader,
        'mybottom':mybottom
    }
});
app.message = 'I am a IT Man';  
app.fruit = 'orange';

