//ハンバーガーメニューをクリックするとアコーディオンメニューが開く
$('.js-hamburger').on('click', function () {
    $('body').toggleClass('is-fixed');
    $(this).toggleClass('is-activ');
    $(this).next().slideToggle();
});


function mediaQueriesWin() {
    let width = $(window).width();
    if(width <= 820) {
        $(".menu-item-has-children>a").off('click');
        $(".menu-item-has-children>a").off('hover');
        $(".menu-item-has-children").removeClass('is-activ'); 
        $(".menu-item-has-children").children('ul').css("display",""); //p-menuの表示なくす

        $(".menu-item-has-children>a").on('click', function() {
            let parentElem = $(this).parent(); //menu-item-has-childrenのこと
            $(parentElem).toggleClass('is-activ');
            $(parentElem).children('ul').stop().slideToggle('fast');
            return false;
        });
    }else if(width <= 1200 && width >= 821) {
        //.menu-item-has-childrenクラスがついたaタグのonイベントを無効化
        $(".menu-item-has-children>a").off('click');
        $(".menu-item-has-children>a").off('hover');
        $(".menu-item-has-children").removeClass('is-activ'); 
        $(".menu-item-has-children").children('ul').css("display",""); //p-menuの表示なくす
        $(".menu-item-has-children>a").hover(
            function(){
                let parentElem = $(this).parent(); //menu-item-has-childrenのこと
                $(parentElem).toggleClass('is-activ');
                $(parentElem).children('ul').stop().slideToggle('fast');
                }
            )
    }else {
        //.menu-item-has-childrenクラスがついたaタグのhoverイベントを無効化
        $(".menu-item-has-children>a").off('click');
        $(".menu-item-has-children>a").off('hover');
        $(".menu-item-has-children").removeClass('is-activ'); 
        $(".menu-item-has-children").children('ul').css("display",""); 
    }
}
$(window).resize(function() {
    mediaQueriesWin();
});

$(window).on('load',function() {
    mediaQueriesWin();
})

