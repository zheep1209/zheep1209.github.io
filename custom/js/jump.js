// 主站和 GitHub Pages 的 URL
const mainSite = "www.zheep.top";
const localSite = "localhost";

// 判断当前页面的主机名是否是主站或本地站
if (window.location.hostname === mainSite || window.location.hostname === localSite) {
  console.log("好！很有精神！！！");
} else {
  // 跳转到主站
  window.location.href = `https://${mainSite}`;
}
