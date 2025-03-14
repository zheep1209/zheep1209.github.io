var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '哎呦~你干嘛~ - ' + OriginTitle;
    clearTimeout(titleTime);
  } else {
    document.title = OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
