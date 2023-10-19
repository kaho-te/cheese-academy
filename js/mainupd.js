// ヘッダーナビから各コンテンツにスクロールで飛ぶ
$('.header_navi a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。
	return false;
});

// 画像を流す(about)
$('.about_img').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出す
  autoplaySpeed: 0,//自動的に動き出す待ち時間0
  speed: 6000,//スライドのスピード
  infinite: true,//スライドをループ
  pauseOnHover: true,//オンマウスでスライドを一時停止
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止しない
  cssEase: 'linear',//動き方
  slidesToShow: 3,//スライドを画面に３枚見せる
  slidesToScroll: 1//1回のスライドで動かす要素１
});

// 画像を流す（news）
$('.news_slider').slick({
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true//下部ドットナビゲーションの表示
});


// 右から左にスライド(member)
$(function () {
  const fade_bottom = 200; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 400; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".member_odd").css({
    opacity: 0,
    transform: "translateX(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".member_odd").each(function () {
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

// 左から右にスライド(member)
$(function () {
  const fade_bottom = 400; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 400; // どのぐらい要素を動かすか(px)
  const fade_time = 800; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".member_even").css({
    opacity: 0,
    transform: "translateX(-" + fade_move + "px)",//マイナスをつけて逆向きの動きにする
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".member_even").each(function () {
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

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
  });
