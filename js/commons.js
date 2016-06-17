$(function(){
    //导航-我的世界
    $(".nav-multi-menu").hover(function() {
        $(this).find("a").addClass("a_hover");
        $(this).find(".multi-menu").show();
    }, function() {
        $(this).find("a").removeClass("a_hover");
        $(this).find(".multi-menu").hide();
    });

    //导航-微信二维码
    $(".topnav_weixin").hover(function() {
        $(this).find(".topnav_weixin_qrcode").show();
    }, function() {
        $(this).find(".topnav_weixin_qrcode").hide();
    });
});