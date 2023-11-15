let $hamburgerBtn = $('.js-hamburger'); //ハンバーガーボタン
let $mainSlide = $('.p-menus-wrap'); //メニュースライド
let $childList = $('.menu-item-has-children'); //子メニューを持っているリスト

$(function(){
    //ロードした時に以前の処理を初期化する
    const mql = window.matchMedia("(max-width: 1200px)");
    const listener = (event) => {
        //1200px以下
        if(event.matches) {
            $($hamburgerBtn).addClass('is-close').removeClass('is-open');
        }
        //パソコン時
        else {
            $($hamburgerBtn).removeClass('is-open');
            $($childList).removeClass('is-open');
            $('.sub-menu').slideUp('fast').removeClass('is-open').hide();
            $($mainSlide).removeClass('is-open').addClass('is-close');
        }
    }
    //リスナー登録
    mql.addEventListener('change', listener);
    //初期化処理
    listener(mql);
});




//ハンバーガーメニューの処理
$(function(){
    $hamburgerBtn.addClass('is-close');
    $($hamburgerBtn).on('click', function(){
        //メインスライドが開く
        if($mainSlide.css('display') == 'none'){
            $mainSlide.addClass('is-open').removeClass('is-close').slideDown('fast');
            $($hamburgerBtn).removeClass('is-close').addClass('is-open');
        }
        //メインスライドが閉じる
        else{
            $mainSlide.addClass('is-close').removeClass('is-open').slideUp('fast');
            ($hamburgerBtn).removeClass('is-open').addClass('is-close');
            $childList.removeClass('is-open');
            //ハンバーガーメニューが閉じたら、サブメニューも閉じる
            $('.sub-menu').removeClass('is-open').slideUp('fast');
        }
    });
    
});


//サブメニューの設定
$(function(){
    $(window).on('load resize', function(){
        if(window.matchMedia('(max-width: 820px)').matches){
            $('body').addClass('sp');
        }else {
            $('body').removeClass('sp')
        }
        $($childList)
        //クリックすると
        .on('click', function(){
            //スマホ表示の場合
            if ($('body').hasClass('sp')){
                if($(this).find('.sub-menu').css('display') == 'none'){
                    $(this).addClass('is-open');
                    $(this).find('.sub-menu').stop(true).slideDown('fast');              
                }else{
                    $(this).removeClass('is-open');
                    $(this).find('.sub-menu').stop(true).slideUp('fast');
                }
            }
        })
        //マウスオーバー時
        .on('mouseover', function(){
            //スマホ表示じゃなかったら
            if (!$('body').hasClass('sp')){
                //もしクリックしたサブメニューが閉じていたら開ける
                if($(this).find('.sub-menu').css('display') == 'none'){
                    $(this).addClass('is-open');
                    $(this).find('.sub-menu').stop(true).slideDown('fast');
                }
            }
        })
        .on('mouseleave', function(){
            if (!$('body').hasClass('sp')){
                $(this).removeClass('is-open');
                $(this).find('.sub-menu').stop(true).slideUp('fast');
            }
        });
    });

    });
  

//  $(function(){
//      $('.menu-item-has-children').each(function(){
//         let subMenu = $(this).find('.sub-menu');
//         let allSubMenu = $('.p-menu .sub-menu');
//         let allBtn = $('.p-menus-wrap .menu-item-has-children');

//         $(this).addClass('is-close');
//         $(subMenu).addClass('is-close');

        //sp
        // $(this).on('click',function(){
        //     if($(this).hasClass('is-open')){
        //         $(this).removeClass('is-open').addClass('is-close');
        //         $(subMenu).hide().removeClass('is-open').addClass('is-close');
        //     }
        //     else{
        //         //初期化
        //         $(allSubMenu).removeClass('is-open').addClass('is-close');
        //         $(allBtn).removeClass('is-open').addClass('is-close');
        //         //開く
        //         $(subMenu).slideDown('fast').removeClass('is-close').addClass('is-open');
        //         $(this).removeClass('is-close').addClass('is-open');
        //     }
        // });
        
         //tab
//         $(this).hover(function(){
//             //サブメニューを閉じる場合
//             if($(this).hasClass('is-open')){
//                 $(this).removeClass('is-open').addClass('is-close');
//                 $(subMenu).hide().removeClass('is-open').addClass('is-close');
//             }
//             //サブメニューを開く場合
//             else{
//                 //初期化
//                 $(allSubMenu).removeClass('is-open').addClass('is-close');
//                 $(allBtn).removeClass('is-open').addClass('is-close');
//                 //開く
//                 $(subMenu).slideDown('fast').removeClass('is-close').addClass('is-open');
//                 $(this).removeClass('is-close').addClass('is-open');
//             }
//         });
//     });
//  });

// $(function(){
//     $('.p-menus-wrap li.menu-item-has-children').each(function(){
//         let subMenu = $(this).find('ul.sub-menu');
//         let allSubMenu = $('.p-menus-wrap ul.sub-menu');
//         let allBtn = $('.p-menus-wrap li.menu-item-has-children');
//         $(this).addClass('is-close');
//         $(subMenu).addClass('is-close');
//         $(this).on('click', function(){
//             //サブメニューが既に開いていた場合、閉じる
//             if($(this).hasClass('is-open')){
//                 $(this).removeClass("is-open").addClass("is-close");
//                 $(subMenu).removeClass('is-open').addClass('is-close');
//             }
//             //サブメニューを開く場合
//             else {
//                 $(this).removeClass('is-close').addClass('is-open');
//                 $(allSubMenu).removeClass('is-open').addClass('is-close');
//                 $(allBtn).removeClass('is-open').addClass('is-close');
//                 $(subMenu).slideDown('fast').removeClass('is-close').addClass('is-open');
//             }
//         });
//     });
// });
// $(function(){
//     $childList.on('click', function(){
//         //メニューが開く
//         if($('.sub-menu').css('display') == 'none'){
//             $(this).find('.sub-menu').addClass('is-open').removeClass('is-close').slideDown('fast');
//             $(this).addClass('is-open').removeClass('is-close');
//         }
//         //メニューが閉じる
//         else {
//             $(this).find('.sub-menu').addClass('is-close').removeClass('is-open').slideUp('fast');
//             $(this).addClass('is-close').removeClass('is-open');
//         }
//     });

// });

//tab
// $(function(){
//     $('.p-menus-wrap .menu-item-has-children').each(function(){
//         let subMenu = $(this).find('.sub-menu');
//         let allSubMenu = $('.p-menus-wrap .sub-menu');
//         let allBtn = $('.l-header__nav .menu-item-has-children');
//         $(this).addClass('is-close');
//         $(subMenu).addClass('is-close');
//         $(this).hover(function(){
//             //閉じる時
//             if($(this).hasClass('is-open')){
//                 $(this).removeClass('is-open').addClass('is-close');
//                 $(subMenu).hide().removeClass('is-open').addClass('is-close');
//             }
//             //開くとき
//             else{
//                 $(allSubMenu).hide().removeClass('is-open').addClass('is-close');
//                 $(allBtn).removeClass('is-open').addClass('is-close');
//                 $(subMenu).slideDown('fast').removeClass('is-close').addClass('is-open');
//                 $(this).removeClass('is-close').addClass('is-open');
//             }
//         });
//     });
// });



//tab
// $(function(){
//     $childList.each(function(){
//         let $subMenu = $(this).find('.sub-menu');
//         let $allSubMenu = $('.p-menus-wrap .sub-menu');
//         let $allChildList = $('.p-menu .menu-item-has-children');
//         $(this).addClass('is-close');
//         $subMenu.addClass('is-close');
//         $(this).hover(function() {
//             if($this.hasClass('is-open')){
//                 $(this).removeClass('is-open').addClass('is-close');
//                 $subMenu.hide().removeClass('is-open').addClass('is-close');
//             }else {
//                 $allSubMenu.hide().removeClass('is-open').addClass('close');
//                 $allChildList.removeClass('is-open').addClass('is-close');
//                 $subMenu.slideDown('fast').removeClass('is-close').addClass('is-open');
//                 $(this).removeClass('is-close').addClass('is-open');
//             }
//         });
//     });
// });







// function mediaQueriesWin() {
//     let width = $(window).width();
//     if(width <= 820) {
        // $childList.off('click');
        // $childList.removeClass('is-open'); 
        // $childList.children('ul').css("display",""); 

        // $childList.on('click', function() {
        //     if($('.sub-menu').css('display') == 'none'){
        //         $(this).addClass('is-open').removeClass('is-close');
        //         $(this).find('.sub-menu').addClass('is-open').removeClass('is-close').slideDown('fast');
        //     }else {
        //         $(this).addClass('is-close').removeClass('is-open');
        //         $(this).find('.sub-menu').addClass('is-close').removeClass('is-open').slideUp('fast');
        //     }
        // });
    // }else if(width <= 1200 && width >= 821) {
        //.menu-item-has-childrenクラスがついたaタグのonイベントを無効化
        // $childList.off('click');
        // $childList.removeClass('is-open'); 
        // $childList.children('ul').css("display",""); 
        // $childList.hover(
        //     function(){
        //         if($('.sub-menu').css('display') == 'none'){
        //             $(this).toggleClass('is-open').removeClass('is-close');
        //             $(this).find('.sub-menu').addClass('is-close').removeClass('is-open').slideDown('fast');
        //         }else{
        //             $()
        //         }
        //         }
        //     )
    // }else {
        //.menu-item-has-childrenクラスがついたaタグのhoverイベントを無効化
        // $childList.off('click');
        // $childList.off('hover');
        // $childList.removeClass('is-open'); 
        // $childList.children('ul').css("display",""); 
//     }
// }
// $(window).resize(function() {
//     mediaQueriesWin();
// });

// $(window).on('load',function() {
//     mediaQueriesWin();
// })

