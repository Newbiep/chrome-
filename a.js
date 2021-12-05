$(document).ready(function () {

  // 注入js强制禁止alert弹窗
  var script = $('<script type="text/javascript">window.alert = function () {return false;}</script>');
  $("#layer_pause").after(script)
  eval(script)


  // 选择题
  var selectSolutionDom = $("ul li:first-child").children().filter('.s-jx').children().filter('.right');
  selectSolutionDom.each((index, element) => {
    const dom = $(`#answer_${index}`).get(0);
    dom.value = $(element).text();
  })


  // 填空题
  var solutionDom = $("ul li:first-child").children().filter('.so-timu');
  // console.log(solutionDom)
  var solutionInput = $('.e__textarea');
  solutionInput.each((index, element) => {
    element.value = ltrim(solutionDom.eq(index).text())
  });


  // 提交按钮10s后自动提交
  var submitButton = $("#btn__submit").get(0);
  if (submitButton) {
    setTimeout(() => {--
      submitButton.click();
      // // 提交后返回页面刷新
      // setTimeout(() => {
      //   const isHome = $('.course-home');
      //   console.log(isHome)
      //   if (isHome) {
      //     window.location.reload();
      //   }
      // }, 2000)
    }, 4000)
  }



  console.log($("#e__timer").text());
  $("#e__timer").on('click', function () {
    var form = $('#paperForm').serializeArray();
    console.log(form)
  })
})
function ltrim(str) {
  var pattern = new RegExp("^[\\s]+", "gi");
  var pattern2 = new RegExp("[\\s]+$", "gi");
  return str.replace(pattern, "").replace(pattern2, "");
}