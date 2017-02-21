$(document).ready(function() {

    /**
     * Атрибут Placeholder для IE
     */
    if($.browser.msie) { // Условие для вызова только в IE
        $("form").find("input[type='text']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#000');
        }).focusin(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','').css('color','#303030');
                }
            }).focusout(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == "") {
                    $(this).attr('value', val).css('color','#ccc');
                }
            });

        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }

    /**
     * Смена атрибута Border-Color у ссылки "Задать вопрос"
     */
    $(".add_question").mouseover(function () {
        $('> span', this).css('border-bottom','1px dotted #ff6000');
    });
    $(".add_question").mouseout(function () {
        $('> span', this).css('border-bottom','1px dotted #000000');
    });

    /**
     * Форма авторизации
     */

    $('.shadow_layer').fadeOut(0);
    $('.register_link').click(function(){
        $('.shadow_layer').fadeTo(200,0.5);
        $('.auth_login_form').fadeIn(200);
    });
    $('.close').click(function(){
        $('.auth_login_form').fadeOut(200);
        $('.shadow_layer').fadeOut(200);
        return false;
    });
    $('.shadow_layer').click(function(){
        $('.auth_login_form').fadeOut(200);
        $('.shadow_layer').fadeOut(200);
    });

    /**
     * Переключение табов в фильтре
     */
    $(".filter_index ul li div#marks_filter").click(function(){
        $(".filter_index ul li div#param_filter").removeClass("active");
        $("div#tab_param_filter").removeClass("active");
        $(this).addClass("active");
        $("div#tab_marks_filter").addClass("active");
    });
    $(".filter_index ul li div#param_filter").click(function(){
        $(".filter_index ul li div#marks_filter").removeClass("active");
        $("div#tab_marks_filter").removeClass("active");
        $(this).addClass("active");
        $("div#tab_param_filter").addClass("active");
    });


    /**
     * установки слайдера bxSlider
     */
    $('div.SElements').bxSlider({
        auto: false,
        pause: 5000,
        pager: false,
        nextText: '<div>&nbsp;</div>',
        prevText: '<div>&nbsp;</div>',
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 160,
        slideMargin: 7
    });

    /**
     * Настройки для фильтра (от и до)
     */
    jQuery("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true
        });

    jQuery("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
        },
        slide: function(event, ui){
            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
        }
    });

    jQuery("input#minCost").change(function(){
        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#slider").slider("values",0,value1);
    });


    jQuery("input#maxCost").change(function(){
        var value1=jQuery("input#minCost").val();
        var value2=jQuery("input#maxCost").val();

        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values",1,value2);
    });

    /**
     * Кнопка Бренд на главном фильтре, показывает список
     */
    $(".filter_brend").click(function(){
        var listBrand = $(".check_brend");
        if ($(this).hasClass("opened"))
        {
            listBrand.css("display", "block");
            $(this).removeClass("opened");
        }
        else
        {
            listBrand.css("display", "none");
            $(this).addClass("opened");
        }
    });


    /**
     * Фиксация верхнего блока
     */
    var m1 = 40; /* высота шапки в пикселях */
    var m2 = 0; /* отступ, когда во время прокрутки шапка
     уже не видна */
    var menuID = "fix_panel";
    /* id горизонтального меню для закрепления */
    var menuWrap = "wrapper_fix";
    var menuOpacityOnChange = "1";
    /* прозрачность меню при
     скроллинге:
     1   - непрозрачное,
     0.5 - полупрозрачное
     0.0 - полностью прозрачное*/
    var menuOpacityOnChangeIE = menuOpacityOnChange * 100;
    /* функция кроссбраузерного определения
     отступа от верха документа к текущей позиции
     скроллера прокрутки */
    function getScrollTop() {
        var scrOfY = 0;
        if( typeof( window.pageYOffset ) == "number" ) {
            //Netscape compliant
            scrOfY = window.pageYOffset;
        } else if( document.body
            && ( document.body.scrollLeft
            || document.body.scrollTop ) ) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
        } else if( document.documentElement
            && ( document.documentElement.scrollLeft
            || document.documentElement.scrollTop ) ) {
            //IE6 Strict
            scrOfY = document.documentElement.scrollTop;
        }
        return scrOfY;
    }
    /* функция, которая устанавливает верхний отступ
     для «плавающего» фиксированного горизонтального
     меню в зависимости от положения
     скроллера и видимости шапки */
    function marginMenuTop() {
        var top  = getScrollTop();
        var s    = document.getElementById(menuID);
        var d    = document.getElementById(menuWrap);

        if(typeof s != "undefined" && s){

            if (top+m2 < m1) {
                s.style.top       = (m1-top) + "px";
                s.style.filter    = s.style.filter.replace("progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")","");
                s.style.opacity   = "1";
                s.style.left      = "";
                s.style.width     = "980px";
                s.style.boxShadow = "";

            } else {
                s.style.top       = m2 + "px";
                s.style.opacity   = menuOpacityOnChange;
                s.style.filter    = s.style.filter.replace("progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")","");
                s.style.filter    += "progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")";
                s.style.left      = "0";
                s.style.width     = "100%";
                s.style.boxShadow = "0 3px 2px -2px #ACACAC";
                d.style.width     = "980px";
                d.style.margin    = "0 auto";

            }
        }
    }
    /** функция регистрирует
     вычисление позиции
     «плавающего» меню при прокрутке страницы
     **/
    function setMenuPosition(){
        if(typeof window.addEventListener != "undefined"){
            window.addEventListener("scroll", marginMenuTop, false);
        } else if(typeof window.attachEvent != "undefined"){
            window. attachEvent("onscroll", marginMenuTop);
        }
        marginMenuTop();
    }
    /** регистрируем вызов
     необходимых функций после
     загрузки страницы **/
    if(typeof window.addEventListener != "undefined"){
        window.addEventListener("load", setMenuPosition, false);

    } else if(typeof window.attachEvent != "undefined"){
        window. attachEvent("onload", setMenuPosition);
    }


});