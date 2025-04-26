var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '明日隔山岳，世事两茫茫 - ' + OriginTitle;
    clearTimeout(titleTime);
  } else {
    document.title = OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
