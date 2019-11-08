/* jslint devel: true */
/* global $ */

$(function () {

    /* Fixed Header */
    let header = $("#header"); /*переменная для селектора #header*/
    let intro = $("#intro"); /*переменная для селектора #intro*/
    let introH = intro.innerHeight(); /*переменная для высоты блока #intro*/
    let scrollPos = $(window).scrollTop(); /*позиция прокрутки от верха страницы*/
    let nav = $("#nav"); /*переменная для селектора #nav*/
    let navToggle = $("#navToggle"); /*переменная для burger-menu*/
    
    checkScroll(scrollPos, introH); /*вызываем функцию проверки скролла с переменными scrollPos и introH - при загрузке страницы*/
    
    $(window).on("scroll resize", function() { /*действия при скролле и при изменении размера окна*/
        
        introH = intro.innerHeight(); /*значение переменной = высоте шапки*/
        scrollPos = $(this).scrollTop(); /*значение переменной = величине прокрутки от верха страницы*/
        
        checkScroll(scrollPos, introH); /*функция проверки скролла - при скролле*/
        
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) { /*если позиция скролла больше высоты блока intro...*/
            header.addClass("fixed"); /*...то добавляем класс fixed к переменной header*/
            
        } else {
            header.removeClass("fixed"); /*...иначе убираем класс fixed*/
        }  
    }
    
    
    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) { /*событие при клике на ссылку с атрибутом data-scroll*/
        event.preventDefault(); /*отменяем стандартное действие при клике*/
        
        let elementId = $(this).data('scroll'); /*параметр data-scroll, по которому мы кликнули*/
        let elementOffset = $(elementId).offset().top; /*отступ элемента elementId от верха*/ 
        
        nav.removeClass("show"); /*скрываем меню навигации при клике*/
        
        $("html, body").animate({
           scrollTop: elementOffset - 60 /*прокрутка до элемента с elementId*/ 
        }, 750); /*длительность прокрутки*/
    });
    
    
    
    /* Nav Toggle */
    navToggle.on("click", function(event) { /*событие при клике на burger-menu*/
        event.preventDefault(); /*отменяем стандартное действие при клике*/
        
        nav.toggleClass("show"); /*при нажатии на burger-menu (#navToggle) показывается меню навигации (#nav)*/   
    });
    
    
    /* Reviews Slider: => https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider"); /*переменная для селектора #reviewsSlider*/
    
        slider.slick({
            infinite: true, /*бесконечный скроллинг*/
            slidesToShow: 1, /*сколько показывается слайдов*/
            slidesToScroll: 1, /*сколько скроллится за один раз*/
            fade: true, /*затемнение отзывов*/
            arrows: false, /*скрыть кнопки next и previous*/
            dots: true /*точки (количество слайдов)*/
        });
    
    
});
