const form = document.getElementById('contact-form');
const msgTip = document.querySelector('.submit-msg');

form.addEventListener('submit', function () {
  msgTip.textContent = "正在提交，请稍候...";
  msgTip.style.color = "#165dff";
});

// 表单提交成功/失败提示（formspree 自带跳转，这里仅前置提示）
window.onbeforeunload = function() {
  if(msgTip.textContent.includes("正在提交")){
    msgTip.textContent = "提交成功！我会尽快联系您";
    msgTip.style.color = "#009944";
  }
}