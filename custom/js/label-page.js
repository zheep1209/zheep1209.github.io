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

// 等待 DOM 加载
document.addEventListener("DOMContentLoaded", function() {
  const targetNode = document.querySelector("#subtitle"); // 替换成你的打字机效果容器

  if (!targetNode) return;

  // 创建 MutationObserver 监听文本变化
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach((mutation) => {
      // 检查新增的文本节点
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          replaceColorCharacter(node);
        }
      });
    });
  });

  // 开始观察
  observer.observe(targetNode, {
    childList: true,  // 监听子节点变化
    subtree: true,    // 监听所有后代节点
    characterData: true, // 监听文本内容变化
  });

  // 替换“色”字为红色 span
  function replaceColorCharacter(textNode) {
    const parent = textNode.parentNode;
    const text = textNode.nodeValue;

    // 如果“色”字出现
    if (text.includes("色")) {
      // 创建新 HTML，用 span 包裹“色”
      const newHTML = text.replace(/色/g, '<span class="c1">色</span>');

      // 替换原始文本节点
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = newHTML;

      // 插入新节点，移除旧文本节点
      while (tempDiv.firstChild) {
        parent.insertBefore(tempDiv.firstChild, textNode);
      }
      parent.removeChild(textNode);
    }
    if (text.includes("彩")) {
      // 创建新 HTML，用 span 包裹“色”
      const newHTML = text.replace(/彩/g, '<span class="c2">彩</span>');

      // 替换原始文本节点
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = newHTML;

      // 插入新节点，移除旧文本节点
      while (tempDiv.firstChild) {
        parent.insertBefore(tempDiv.firstChild, textNode);
      }
      parent.removeChild(textNode);
    }
  }
});
