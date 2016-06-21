;(function($){
    "use strict";//jshint
    var PromoSlider      = function(element,options){
        var self = this;
        this.$element    = $(element);     
        this.promoMain   = this.$element.find(".promo-main");     
        this.promoPanel  = this.promoMain.find(".promo-panel");
        this.promoPage   = this.$element.find(".promo-page") || {};        
        this.promoPrev   = this.promoPage.find('.promo-prev') || {};
        this.promoNext   = this.promoPage.find('.promo-next') || {}; 
        this.itemLeng    = this.promoPanel.length;
        this.curren      = 0;
        this.timer       = null;

        this.options     = $.extend( {}, $.fn.promoSlider.defaults, options);
        this.initValue(); 

        this.$element.hover(function() {
            self.promoPage.show();
        }, function() {
            self.promoPage.hide();
        });

        this.promoNext.click(function() {
            if (self.options.pageNav){
                self.sliderNext();
            }
            return false;
        });

        this.promoPrev.click(function() {
            if (self.options.pageNav){
                self.sliderPrev();
            }
            return false;
        });


        if (this.options.Navigation) {
            this.prompItem   = this.$element.find(".promo-item");
            this.prompItem.click(function() {
                var that = this;
                self.navigateByClick(that);
            });
        }

        if (this.options.autoPlay) {
            this.autoPlay();
            this.$element.hover(function(){
                clearInterval(self.timer);
            },function(){
                self.autoPlay();
            });
        }
    };

    PromoSlider.prototype.initValue = function(){
        var panelWidth = this.promoPanel.outerWidth(true),
        mainWidth = panelWidth*this.itemLeng;

        this.$element.css({
            width: this.options.width + "px",
            height: this.options.height + "px",
        });

        this.promoMain.css({
            width: mainWidth + "px",
            height: this.options.height + "px",
        });
    };

    PromoSlider.prototype.sliderNext = function(){
        var self = this;
        if (!self.promoMain.is(":animated")) {
            if (self.curren < self.itemLeng-1) {
                self.curren++;
                self.promoMain.animate({
                    left: "-="+self.options.width+"px",
                }, self.options.speed);
            }else{
                self.promoMain.animate({
                    left: 0 ,
                },self.options.speed);
                self.curren = 0;
            }
        }
        if (self.prompItem){
            self.prompItem.eq(this.curren).addClass('promo-select')
            .siblings().removeClass('promo-select');
        }
    };

    PromoSlider.prototype.sliderPrev = function(){
        var self = this;
        if (!self.promoMain.is(":animated")) {
            if (self.curren === 0) {
                self.promoMain.animate({
                    left: -self.options.width*(self.itemLeng-1) + "px",
                },self.options.speed);
                self.curren = self.itemLeng-1;
            }else{
                self.curren--;
                self.promoMain.animate({
                    left: "+="+self.options.width+"px",
                },self.options.speed);
            }
        }
        if (self.prompItem) {
            self.prompItem.eq(self.curren).addClass('promo-select')
            .siblings().removeClass('promo-select');
        }
    };

    PromoSlider.prototype.navigateByClick = function(i){
        var self = this,
        index = self.prompItem.index(i);
        self.curren = index;

        if (!self.promoMain.is(":animated")) {
            self.promoMain.animate({
                left: -(self.curren*self.options.width) + "px",
            });
        }
        self.prompItem.eq(self.curren).addClass('promo-select')
        .siblings().removeClass('promo-select');
    };

    PromoSlider.prototype.autoPlay = function(){
        var self = this;
        self.timer = setInterval(function(){
            self.sliderNext();
        },self.options.delay);
    };
    
    $.fn.promoSlider = function(options){
        return this.each(function() {
            new PromoSlider(this,options);
        });
    };

    $.fn.promoSlider.defaults = {
        "width": 760,
        "height": 380,
        "Navigation": true,
        "pageNav": true,
        "speed": 500,
        "autoPlay": false,
        "delay": 3000,
    };

    $.fn.promoSlider.Constructor = PromoSlider;
})(jQuery);