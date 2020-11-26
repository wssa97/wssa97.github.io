/*!
 * 米维建站  一建轻松建站
 * 详尽信息请看官网：http://www.miwinfo.com/
 *
 * Copyright 2014 米维建站
 *
 * 请尊重原创，保留头部版权
 * 仅供学习参考使用，不可用于任何商业用途
 *
 * 客服QQ 974837117
 */

//导航按钮
$(".header .nav_handle").click(function(){
  $(".inmuen").slideToggle();
  $(this).toggleClass("on");
  if($(".header .search .xf").attr("style")=='display: block;'){
  	$(".header .search .xf").slideToggle();
  	$(".header .search i").toggleClass("on");
  }
});

$(".header .search i").click(function(){
  $(".header .search .xf").slideToggle();
  $(this).toggleClass("on");
  if($(".inmuen").attr("style")=='display: block;'){
  	$(".inmuen").slideToggle();
  	$(".header .nav_handle").toggleClass("on");
  }
});

$(".footer .fnav .tit").click(function(){
  $(this).next(".nr").slideToggle();
  if($(this).next(".nr").attr("style")=='display: block;'){
  	$(this).find("span").html("+");
  }else{
  	$(this).find("span").html("-");
  }
});

var mySwiper = new Swiper('.banner',{
	pagination: '.pagination',
	loop:true,
	grabCursor: true,
	paginationClickable: true,
	autoplay: 5000
});

//返回顶部
$(window).scroll(function () {
if ($(window).scrollTop()>=300) {
$(".page-down").fadeIn();
}else{
$(".page-down").fadeOut();
}
});
(function Page(){
var oDown = $(".page-down"),
oBody = $("html,body");
oDown.bind("click",function(){
oBody.animate({ scrollTop : 0 },500);
});        
})();

function Kongzhi() {
$(".banner").css("height",$(".banner img").height()*1+"px");
//$(".incasenr .li").css("margin-bottom",$(".incasenr").width()/100+"px");
}
self.setInterval("Kongzhi()",50);

if($(window).width()<=850){
$(".nynav .lmtit").click(function(){
  $(this).next(".nr").slideToggle();
});
}

if($(window).width()<=850){ var geshu=3 }else{ var geshu=7 }
var mySwiper = new Swiper('.nypronavnr',{
  pagination: '.pagination',
  paginationClickable: true,
  slidesPerView: geshu
});

//获取要定位元素距离浏览器顶部的距离
var navH = $(".nynav").offset().top;
//滚动条事件
$(window).scroll(function(){
//获取滚动条的滑动距离
var scroH = $(this).scrollTop();
//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
if(scroH>=navH){
$(".nynav").addClass("nav_on");
}else if(scroH<navH){
$(".nynav").removeClass("nav_on");
}
});

