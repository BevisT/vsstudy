Vue.component('my-header',{
    template:'<p>this is my header</p>'
})

var  myheader = {
    template:'<P>this is my-header</P>'
}

var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js',
        fruit:'apple'
    },  
    components:{
        'my-header':myheader
    }
});
app.message = 'I am a IT Man';  
app.fruit = 'orange';

