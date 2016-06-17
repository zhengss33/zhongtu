$(function(){
    //头部搜索框
    $(".hd_search").focus(function(){
        if (this.value === this.defaultValue) {
            this.value = "";
            this.style.color = "rgb(51, 51, 51)";
        }
    }).blur(function(){
        if (this.value === "") {
            this.value = this.defaultValue;
            this.style.color = "rgb(153, 153, 153)";
        }
    });

    //左侧分类菜单
    var $sidebarList = $(".sidebar ul"),
        $layer       = $(".dorpdown-layer"),
        $layerSub    = $layer.find(".item-sub");

    $sidebarList.hover(function() {
        this.index = $(this).attr("data-group")-1;
        $(this).addClass("on");
        $layer.show();
        $layerSub.hide().eq(this.index).show();

    }, function() {
        $(this).removeClass("on");
        $layer.hide();
    });

    $layerSub.hover(function() {
        this.index = $(this).attr("data-index")-1;
        $layer.show();
        $sidebarList.eq(this.index).addClass("on");
    }, function() {
        $layer.hide();
        $sidebarList.eq(this.index).removeClass("on");
    });
});