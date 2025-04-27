 // 主站和 GitHub Pages 的 URL
  const mainSite = "www.zheep.top";
  const localSite = "127.0.0.1:4000";
  if (window.location.hostname === mainSite || window.location.hostname === localSite) {
  console.log("好！很有精神！！！");
} else {
  window.location.href = mainSite;
}
