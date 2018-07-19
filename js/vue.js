$(".love").on ("click",function(){
    alert("赵雅美是美女");
});

var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue.js'
    }
});
app.message = 'I am a IT Man';