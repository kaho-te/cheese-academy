// jsを記述する際はここに記載していく
$('.header_navi a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

// 画像を流す(about)
$('.about_img').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6000,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: true,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 3,//スライドを画面に4枚見せる
  slidesToScroll: 1//1回のスライドで動かす要素数
//   responsive: [
//     {
//     breakpoint: 769,//モニターの横幅が769px以下の見せ方
//     settings: {
//       slidesToShow: 2,//スライドを画面に2枚見せる
//     }
//   },
//   {
//     breakpoint: 426,//モニターの横幅が426px以下の見せ方
//     settings: {
//       slidesToShow: 1.5,//スライドを画面に1.5枚見せる
//     }
//   }
// ]
});

// 画像を流す（news）
$('.news_content').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true//下部ドットナビゲーションの表示
//   responsive: [
//     {
//     breakpoint: 769,//モニターの横幅が769px以下の見せ方
//     settings: {
//       slidesToShow: 2,//スライドを画面に2枚見せる
//       slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
//     }
//   },
//   {
//     breakpoint: 426,//モニターの横幅が426px以下の見せ方
//     settings: {
//       slidesToShow: 1,//スライドを画面に1枚見せる
//       slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
//     }
//   }
// ]
});

// 右から左にスライド
$(function () {
  const fade_bottom = 200; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 400; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".course_odd").css({
    opacity: 0,
    transform: "translateX(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".course_odd").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});

// 左から右にスライド
$(function () {
  const fade_bottom = 300; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 400; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".course_even").css({
    opacity: 0,
    transform: "translateX(-" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".course_even").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200){//200pxスクロールしたら
    $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
      $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
      $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
  }
  
  var wH = window.innerHeight; //画面の高さを取得
  var footerPos =  $('#footer').offset().top; //footerの位置を取得
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
      $('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});