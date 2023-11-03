//ハンバーガーメニューをクリックするとアコーディオンメニューが開く
$('.js-hamburger').on('click', function () {
    $('body').toggleClass('is-fixed');
    $(this).toggleClass('is-activ');
    $(this).next().slideToggle();
});

// $(function() {
//     if(window.matchMedia("(max-width: 820px)").matches){  
//         //スマホ、タブ時の動作
//         $('.menu-item-has-children').off('click');
//         $('.menu-item-has-children').on('click', function() {//タイトル要素をクリックしたら
//             $(this).toggleClass('is-activ');
//             $(this).find('.sub-menu').stop().slideToggle();
//             return false; //リンクの無効化
//         });
//     }else {//パソコン時の動作
//         //menu-item-has-childrenクラスが付いたliタグイベントの無効化
//         $('.menu-item-has-children').off('click');
//         $('.menu-item-has-children').removeClass('is-activ');
//         $('.menu-item-has-children').find('.sub-menu').css('display','');
//         $('.menu-item-has-children').hover(
//             function() {//タイトル要素をクリックしたら
//                 $(this).toggleClass('is-activ');
//                 $(this).find('.sub-menu').stop().slideToggle('fast');
//         });
//     }
// });


function mediaQueriesWin() {
    let width = $(window).width();
    if(width <= 820) {
        $(".menu-item-has-children>a").off('click');
        $(".menu-item-has-children>a").off('hover');
        $(".menu-item-has-children").removeClass('is-activ'); 
        $(".menu-item-has-children").children('ul').css("display",""); 

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
        $(".menu-item-has-children").children('ul').css("display",""); 
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
        //パソコン時のホバーアクション
        $(".menu-item-has-children>a").hover(
            function(){
                $(this).parent().toggleClass('is-activ'); //menu-item-has-childrenにクラス付与
            }
        )
    }
}
$(window).resize(function() {
    mediaQueriesWin();
});

$(window).on('load',function() {
    mediaQueriesWin();
})


//ドロップダウンの設定を関数でまとめる
// function mediaQueriesWin(){
//     var width = $(window).width();
//     if(width <= 768) {//横幅が768px以下の場合
//       $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
//       $(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
//         var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
//         $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
//         $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
//         return false;//リンクの無効化
//       });
//     }else{//横幅が768px以上の場合
//       $(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
//       $(".has-child").removeClass('active');//activeクラスを削除
//       $('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
//     }
//   }
  
//   // ページがリサイズされたら動かしたい場合の記述
//   $(window).resize(function() {
//     mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load',function(){
//   mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
// });