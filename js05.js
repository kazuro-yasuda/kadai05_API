//   ＝＝＝＝＝＝＝＝＝＝
//    ショートコース
//   ================
$(".short-start").on("click", function () {
  // alert(1)

  const random = Math.floor(Math.random() * 4 + 1);
  console.log(random, "ランダムの数字");

  if (random === 1) {
    console.log("銀座・皇居");
    $(".course-result").text("銀座・皇居");
    $(".course-result").html(
      "<p>銀座・皇居</p>" +
        '<img src="ferrari/koukyo.jpeg" alt="銀座・皇居" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8616.83730158371!2d139.7351129505893!3d35.68329868987331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF44CB44CSMTAwLTgxMTEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Y2D5Luj55Sw77yR4oiS77yR!3m2!1d35.685175!2d139.75279949999998!5e0!3m2!1sja!2sjp!4v1649578891838!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  } else if (random === 2) {
    console.log("東京タワー");
    $(".course-result").text("東京タワー");
    $(".course-result").html(
      "<p>東京タワー</p>" +
        '<img src="ferrari/tokyotawer.jpeg" alt="東京タワー" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6483.929919470797!2d139.74367752826018!3d35.6532349386346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs6YO95riv5Yy66Iqd5YWs5ZyS77yU5LiB55uu77yS4oiS77yYIOadseS6rOOCv-ODr-ODvA!3m2!1d35.6585805!2d139.7454329!5e0!3m2!1sja!2sjp!4v1649579338145!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  } else if (random === 3) {
    console.log("浅草・スカイツリー");
    $(".course-result").text("浅草・スカイツリー");
    $(".course-result").html(
      "<p>浅草・スカイツリー</p>" +
        '<img src="ferrari/asakusa.png" alt="浅草・スカイツリー" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d51853.70792524178!2d139.7460328050809!3d35.68052919922315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs6YO95aKo55Sw5Yy65oq85LiK77yR5LiB55uu77yR4oiS77ySLCDjg4jjgqbjgq3jg6fjgqbjgrnjgqvjgqTjg4Tjg6rjg7w!3m2!1d35.7100627!2d139.8107004!5e0!3m2!1sja!2sjp!4v1649579426539!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  } else if (random === 4) {
    console.log("お台場・レインボーブリッジ");
    $(".course-result").text("お台場・レインボーブリッジ");
    $(".course-result").html(
      "<p>お台場・レインボーブリッジ</p>" +
        '<img src="ferrari/odaiba.jpeg" alt="お台場・レインボーブリッジ" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25940.87169196502!2d139.74655758349553!3d35.63736546148992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60188a1deb0ac2d7%3A0x7dd3beb4c8363729!2z5p2x5Lqs6YO95riv5Yy65Y-w5aC077yR5LiB55uu77yUIOOBiuWPsOWgtOa1t-a1nOWFrOWckg!3m2!1d35.6300488!2d139.77569119999998!5e0!3m2!1sja!2sjp!4v1649579381362!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  }
});

//   ＝＝＝＝＝＝＝＝＝＝
//    ロングコース
//   ================
$(".long-start").on("click", function () {
  // alert(1)

  const random = Math.floor(Math.random() * 3 + 1);
  console.log(random, "ランダムの数字");

  let view = "";

  if (random === 1) {
    console.log("大黒埠頭PA");
    $(".course-result").text("大黒埠頭PA");
    $(".course-result").html(
      "<p>大黒埠頭</p>" +
        '<img src="ferrari/daikoku.jpeg" alt="大黒埠頭" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d103868.83955566383!2d139.6632158372704!3d35.556141299109605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60185d7092f37e6f%3A0xf526152a55b3d3a6!2z56We5aWI5bed55yM5qiq5rWc5biC6ba06KaL5Yy65aSn6buS44G16aCt77yR77yVIOWkp-m7kuODkeODvOOCreODs-OCsOOCqOODquOCog!3m2!1d35.461905099999996!2d139.6805121!5e0!3m2!1sja!2sjp!4v1649579672322!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  } else if (random === 2) {
    console.log("海ほたる");
    $(".course-result").text("海ほたる");
    $(".course-result").html(
      "<p>海ほたる</p>" +
        '<img src="ferrari/umihotaru.jpeg" alt="海ほたるPA" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d207743.71953783234!2d139.64773107440394!3d35.55381042137696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x601871c81f4a5c0b%3A0x5ca8c5065c4722ce!2z5Y2D6JGJ55yM5pyo5pu05rSl5biC5Lit5bO2IOWcsOWFiCDmtbfjgbvjgZ_jgosg5rW344G744Gf44KL77yw77yh!3m2!1d35.464540899999996!2d139.8740867!5e0!3m2!1sja!2sjp!4v1649579584616!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  } else if (random === 3) {
    console.log("横浜・大桟橋");
    $(".course-result").text("横浜・大桟橋");
    $(".course-result").html(
      "<p>横浜・大桟橋</p>" +
        '<img src="ferrari/oosanbashi.jpeg" alt="横浜・大桟橋" width="600px">' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d207775.04968547839!2d139.56848282351336!3d35.541718625213065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x60188bb408dcbf5b%3A0x3d3b4cf5d047c154!2z55Sw55S66aeF44CB44CSMTA4LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yV5LiB55uu77yT77yT4oiS77yT77yW!3m2!1d35.6457361!2d139.7475624!4m5!1s0x60185cffc9d9e011%3A0x4d64cfcd40484eb9!2z56We5aWI5bed55yM5qiq5rWc5biC5Lit5Yy65rW35bK46YCa77yR5LiB55uuIOWkp-ahn-api-OBtemgrQ!3m2!1d35.4533445!2d139.6490503!5e0!3m2!1sja!2sjp!4v1649579631371!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
  }
});

//   ＝＝＝＝＝＝＝＝＝＝
//    ドライブ履歴メモ
//   ================

//1.save クリックイベント
$("#save").on("click", function () {
  const value = $("#text_area").val();
  localStorage.setItem("memo", value);
  alert("保存しました");
});

//2.削除 クリックイベント
$("#clear").on("click", function () {
  localStorage.removeItem("memo");
  alert("削除しました");
  $("#text_area").val("");
});

//3.ページ読み込み、保存データ取得・表示
if (localStorage.getItem("memo")) {
  const value = localStorage.getItem("memo");
  $("#text_area").val(value);
}



$.ajax(settings).done(function (response) {
	console.log(response);
});
