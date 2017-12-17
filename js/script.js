// var food = prompt('你最爱吃的食物是?');
// if (food == ('炸鸡'||'米饭')){
//     alert('Good taste');
// }

// else if (food == '面条'){
//     console.log('Good taste');

// }
// else{
//     console.log('yuck...');
//     console.log('Boring..');
// }

// arr = [1,2,3,4,5,6,7,8];
// for (i=arr.length; i>=0; i=i-2){
//     console.log(arr[i]);
// }
// for(var i = prompt('enter a number');i<10;i++){
//     alert("请再试一次" + i);

// }
// if (i>10){
//     alert("超出范围");
// }

// var student = 15;
// if (student > 30){

// }

// function add(a, b){
//     var c = a + b;
//     return c;
// }


// var d = add(1,2);
// console.log(d);


// var x = function(a,b){return a * b};

// var z = x(4,3);

// console.log(z);

// $('h1');


// jQuery(document).ready(function(){
//     $("h1").append("where to?");
// });

$(document).ready(function(){
    // $("h1").append("where to?");
    $( ".form-title" ).click(function() {
        // $('h1').append("where to");
        $('h1').css('color','yellow');
    });

    $("#register-btn").click(function(){
        $('h1').fadeOut();
        

    });

    // $( ".container" ).click(function() {
    //     $('h1').css('color','#fff');
    // });
});



