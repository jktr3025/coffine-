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

//허니버터 브래드 슬라이드
$(".s4_left_move").slick({
    autoplay:true,
    dots:true,
    arrows:false,
    slidesToShow:1,
    slidesToScroll:2,
})///s4_left_move").slick

//sns 탭 
$(".section5_inner ul li").click(function(e){
        e.preventDefault();
        $(".section5_inner ul li").toggleClass("on");
})//section5_inner ul li").click




})//jquery