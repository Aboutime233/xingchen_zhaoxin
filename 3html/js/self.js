window.onload = function () {
    $('.imgs1').hide();//隐藏所有图片
    $('.imgs1').eq(0).show();
    var count = 0;//代表当前图片
    autoroll();
    function changeleft() {
        count--;
        if (count == -1) {
            count = 3;
        }
        $('.imgs1').hide();
        $('.imgs1').eq(count).show();
    }
    function changeright() {
        count++;
        if (count == 4) {
            count = 0;
        }
        $('.imgs1').hide();
        $('.imgs1').eq(count).show();
    }
    var clockfunc;
    function autoroll() {
        clockfunc = setInterval(() => changeright(), 2000);
    }
    var box = document.querySelector('.box');
    box.onmouseenter = function () {
        clearInterval(clockfunc);
    }
    box.onmouseleave = function () {
        autoroll();
    }
}
//浅写一个页面转移
$(".boxs4").click(function(){
    window.location.href="selfIntroduction.html";
})
$(".boxs3").click(function(){
    window.location.href="study.html";
})
$(".boxs2").click(function(){
    window.location.href="myEmo.html";
})
$(".boxs1").click(function(){
    window.location.href="hobby.html";
})