// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);

  r = window.scrollY + document.documentElement.clientHeight;
  p = document.getElementById('post-comment') || document.getElementById('footer');

  p.offsetTop + p.offsetHeight / 2 < r || 90 < result
    ? (document.querySelector('#nav-totop').classList.add('long'), (btn.innerHTML = '返回顶部'))
    : (document.querySelector('#nav-totop').classList.remove('long'), (btn.innerHTML = result));
}

document.getElementById("page-name").innerText = document.title.split(" | Farone")[0];