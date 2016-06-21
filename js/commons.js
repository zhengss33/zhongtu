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

    //当滚动条大于窗口可视区时显示回到顶部按钮
    $(window).scroll(function(){        
        if ($(window).scrollTop() > $(window).height()) {
            $("#J_backtop").show();
        }else{
            $("#J_backtop").hide();
        }
    });
    //点击回到顶部
   $("#J_backtop").click(function(){
        $("body,html").animate({scrollTop: 0},300);
        return false;
    });

    $("#j_fixedTool").find(".elevator-weixin").hover(function(){
        $(this).find(".elevator-weixin-box").fadeIn("fast");
    },function(){
        $(this).find(".elevator-weixin-box").fadeOut("fast");
    });
});
