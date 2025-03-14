/**
 * 返回当前的主题模式（dark或light）
 * @returns {string} 当前的主题模式
 */
function getThemeMode() {
  const theme = localStorage.getItem('Fluid_Color_Scheme');
  return theme === null ? 'light' : 'dark';
}

/**
 * 根据主题模式和设备类型设置背景图片
 * @param {String} themeMode - 'light' 或 'dark'
 */
function setBackgroundImage(themeMode) {
  const isMobile = window.innerWidth < 768;
  const webBgElement = document.querySelector('#web_bg');

  if (isMobile) {
    webBgElement.style.backgroundImage = `var(--mobile-bg-image)`;
  } else if (themeMode === 'dark') {
    webBgElement.style.backgroundImage = `var(--desktop-bg-image-night)`;
  } else {
    webBgElement.style.backgroundImage = `var(--desktop-bg-image-normal)`;
  }
}

/**
 * 初始化背景图片设置
 * @returns {void}
 */
function initBackground() {
  const theme = getThemeMode();
  setBackgroundImage(theme);
}

/**
 * 重置Banner样式，隐藏背景图片和遮罩层
 * @returns {void}
 */
function resetBannerStyles() {
  document.querySelector("#banner").setAttribute('style', 'background-image: none');
  document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');
}

// 监听主题切换按钮点击事件
const themeBtn = document.querySelector('#color-toggle-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const theme = getThemeMode();
    setBackgroundImage(theme);
    console.log(`切换到${theme === 'light' ? '日间' : '夜间'}模式`);
  });
}

// 初始化背景和样式
initBackground();
resetBannerStyles();

// 监听窗口大小变化，做防抖处理调整背景
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    setBackgroundImage(getThemeMode());
  }, 200);
}, {
  passive: true // 防止默认事件
});

/**
 * 如果你想实现不同的文章为不同的背景图片，
 * 可以定义一个数组用于存放不同文章的路径，通过pathname判断当前文章路径，设置对应的背景图片。
 * 例如：
 * --------分割线--------
 * const articleBgMap = {
 *   '/article1': 'url(https://example.com/bg1.jpg)',
 *   '/article2': 'url(https://example.com/bg2.jpg)',
 *   '/article3': 'url(https://example.com/bg3.jpg)',
 * };
 * const currentPathname = window.location.pathname;
 * const bgUrl = articleBgMap[currentPathname] || 'url(https://example.com/bg-default.jpg)';
 * document.querySelector('#web_bg').style.backgroundImage = bgUrl;
 **/
