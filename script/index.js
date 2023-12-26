$(function(){

//팝업 영역
// $(".pop").hide();
$(".pop").slideDown();

//CLOSE X
$(".pop_inner button").click(function(){
    $(".pop").slideUp();
})

//메뉴영역
$(".sub").hide();

$(".gnb, .header_b").mouseenter(function(){
    $(".sub").stop().slideDown();
    $(".header_b").stop().animate({"height":"400px"},500);
})//gnb").mouseenter
$(".header_b").mouseleave(function(){
    $(".sub").stop().slideUp();
    $(".header_b").stop().animate({"height":"103px"},500);
})//gnb").mouseleave

//메인 비주얼 슬라이드
$(".move").slick({
    autoplay:true,
    autoplaySpeed:1500,
    dots:true,
    arrows:true,
})//move").slick




})//jquery