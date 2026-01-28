/* Chirpy Custom MathJax Configuration
 * Enhanced support for additional LaTeX syntax
 * Fixed refresh issue
 * v1.0 - 2026-01-28
 */

window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    // 加载额外的 LaTeX 包
    packages: {'[+]': ['base', 'ams', 'noerrors', 'noundefined', 'boldsymbol', 'newcommand']},
    // 添加自定义宏以支持更多 LaTeX 语法
    macros: {
      // 支持 \left\{ 和 \right\}
      lcurl: '\\{',
      rcurl: '\\}',
      // 支持 \xRightarrow
      xRightarrow: ['\\overset{#1}{\\Longrightarrow}', 1],
      // 其他常用宏
      displaystyle: '\\displaystyle',
      boldsymbol: ['\\mathbf{#1}', 1],
      // 确保 \text 命令可用
      text: ['\\textrm{#1}', 1]
    }
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    // 页面加载时初始化
    pageReady: function () {
      return MathJax.startup.defaultPageReady().then(function () {
        console.log('MathJax: 初始化完成');
      });
    }
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  }
};

// 确保页面刷新后公式能正确渲染
(function() {
  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMathJax);
  } else {
    initMathJax();
  }

  function initMathJax() {
    // 如果 MathJax 已经加载，重新排版
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
      MathJax.typesetPromise().catch(function (err) {
        console.error('MathJax 排版失败:', err.message);
      });
    }
  }

  // 监听浏览器前进后退按钮（处理刷新问题）
  window.addEventListener('pageshow', function(event) {
    // 如果是从缓存恢复的页面
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      setTimeout(function() {
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
          MathJax.typesetPromise().catch(function (err) {
            console.error('MathJax 刷新排版失败:', err.message);
          });
        }
      }, 100);
    }
  });

  // 如果使用了 PJAX 或单页应用，添加路由变化监听
  if (window.history && window.history.pushState) {
    var originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      setTimeout(function() {
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
          MathJax.typesetPromise().catch(function (err) {
            console.error('MathJax 导航排版失败:', err.message);
          });
        }
      }, 100);
    };

    window.addEventListener('popstate', function() {
      setTimeout(function() {
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
          MathJax.typesetPromise().catch(function (err) {
            console.error('MathJax 返回排版失败:', err.message);
          });
        }
      }, 100);
    });
  }
})();
