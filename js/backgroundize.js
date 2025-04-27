/**
 * 获取当前主题模式（dark 或 light）
 * @returns {string}
 */
function getThemeMode() {
  return localStorage.getItem('Fluid_Color_Scheme') === 'dark' ? 'dark' : 'light';
}

/**
 * 根据主题模式设置背景样式
 * @param {string} themeMode
 */
function setBackgroundImage(themeMode) {
  const webBgElement = document.querySelector('#web_bg');
  const dropdownItems = document.querySelectorAll('.dropdown-menu');

  if (!webBgElement || dropdownItems.length < 2) return;

  if (themeMode === 'dark') {
    webBgElement.style.background = '#1A1A1A';
    dropdownItems[0].style.boxShadow = '0 0 5px #000';
    dropdownItems[1].style.boxShadow = '0 0 5px #000';
  } else {
    webBgElement.style.background = '#ffffff';
    dropdownItems[0].style.boxShadow = '0 0 5px #999';
    dropdownItems[1].style.boxShadow = '0 0 5px #999';
  }
}

/**
 * 初始化背景
 */
function initBackground() {
  setBackgroundImage(getThemeMode());
}

/**
 * 重置 Banner 样式
 */
function resetBannerStyles() {
  const banner = document.querySelector("#banner");
  const mask = document.querySelector("#banner .mask");
  if (banner) banner.style.backgroundImage = 'none';
  if (mask) mask.style.backgroundColor = 'rgba(0,0,0,0)';
}

// 主题切换按钮监听
const themeBtn = document.querySelector('#color-toggle-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const newTheme = getThemeMode();
    setBackgroundImage(newTheme);
    console.log(`切换到${newTheme === 'light' ? '日间' : '夜间'}模式`);
  });
}

// 初始化
initBackground();
resetBannerStyles();

// 窗口大小变化监听（防抖处理）
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    setBackgroundImage(getThemeMode());
  }, 200);
}, { passive: true });
