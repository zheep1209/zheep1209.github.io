const url = "https://linux.zheep.top:8080/tools/bbdc";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = JSON.parse((await response.json()).data); // 直接解析为对象
    // console.log(data);  // 打印出完整的返回数据，查看其结构

    // 确保 data.data_body 和 data.data_body.learnList, data.data_body.durationList 存在
    if (data.data_body && Array.isArray(data.data_body.learnList) && Array.isArray(data.data_body.durationList)) {
      //   console.log("存在")
      const todayData = data.data_body.learnList.find(item => item.date === "今日");
      const todayDuration = data.data_body.durationList.find(item => item.date === "今日");

      const learnNum = todayData ? todayData.learnNum : 0;
      const reviewNum = todayData ? todayData.reviewNum : 0;
      const duration = todayDuration ? todayDuration.duration : 0;

      // 创建一个新的元素来显示数据
      const dataElement = document.createElement("div");
      dataElement.textContent = `不背单词今日数据：单词数: ${learnNum} | 复习数: ${reviewNum} | 学习时间: ${duration} 分钟`;

      // 设置样式
      dataElement.style.fontSize = "14px";
      dataElement.style.textAlign = "center";
      dataElement.style.marginTop = "10px";
      dataElement.style.color = "#3B5771";  // 设置文字颜色

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
    } else {
      console.error('数据格式不正确，缺少 learnList 或 durationList');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
