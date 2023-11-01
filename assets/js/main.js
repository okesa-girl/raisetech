//ハンバーガーメニューをクリックするとアコーディオンメニューが開く
$('.js-hamburger').on('click', function () {
    $('body').toggleClass('is-fixed')
    $(this).toggleClass('is-activ');
    $(this).next().slideToggle();
});

$(function() {
    if(window.matchMedia("(max-width: 820px)").matches){  
        //スマホ、タブ時の動作
        $('.js-menu > li').on('click', function() {//タイトル要素をクリックしたら
            $(this).toggleClass('is-activ')
            $(this).find('.sub-menu').slideToggle();
        });
    }else {
        //パソコン時の動作
        $('.js-menu > li').hover(
            function() {//タイトル要素をクリックしたら
                $(this).toggleClass('is-activ')
                $(this).find('.sub-menu').stop().slideDown('');
        }, function() {
            $(this).find('.sub-menu').css({'display':'none'});
        }
        );
    }
});

