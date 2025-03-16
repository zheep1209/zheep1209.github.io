const url = "http://47.120.43.70:5000/api/bbdc";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const todayData = data.data_body.learnList.find(item => item.date === "今日");
    const todayDuration = data.data_body.durationList.find(item => item.date === "今日");

    const learnNum = todayData ? todayData.learnNum : 0;
    const reviewNum = todayData ? todayData.reviewNum : 0;
    const duration = todayDuration ? todayDuration.duration : 0;

    // 创建一个新的元素来显示数据
    const dataElement = document.createElement("div");
    dataElement.textContent = `单词数: ${learnNum} | 复习数: ${reviewNum} | 学习时间: ${duration} 分钟`;

    // 设置样式
    dataElement.style.fontSize = "14px";
    dataElement.style.textAlign = "center";
    dataElement.style.marginTop = "10px";
    dataElement.style.color = "#fff";  // 设置文字颜色

    // 获取容器并插入新元素
    const container = document.querySelector(".banner-text.text-center.fade-in-up");
    if (container) {
      // 通过 flex 布局使内容竖直排列
      container.style.display = "flex";
      container.style.flexDirection = "column"; // 设置竖直排列
      container.style.alignItems = "center"; // 水平居中
      container.style.justifyContent = "center"; // 竖直居中

      // 将新元素插入到容器中
      container.appendChild(dataElement);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
