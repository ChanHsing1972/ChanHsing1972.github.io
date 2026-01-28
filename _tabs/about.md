---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<style>
.lang-toggle {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin: 1.5rem 0 2rem;
}

.lang-btn {
  background-color: transparent;
  color: var(--text-muted-color, #858585);
  padding: 6px 18px;
  border: 1px solid var(--btn-border-color, #e9ecef);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  outline: none;
}

.lang-btn:hover {
  color: var(--link-color, #007bff);
  border-color: var(--link-color, #007bff);
}

.lang-btn.active {
  background-color: var(--link-color, #007bff);
  color: #fff;
  border-color: var(--link-color, #007bff);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.lang-content {
  display: none;
  animation: fade-in 0.4s ease;
}

.lang-content.active {
  display: block;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<div class="lang-toggle">
  <button class="lang-btn active" onclick="switchLang('zh')">中文</button>
  <button class="lang-btn" onclick="switchLang('en')">English</button>
</div>

<div id="zh-content" class="lang-content active" markdown="1">

### 🥳 欢迎！

*若加载速度缓慢，可使用魔法 🪄 访问~*

我叫尘心，是一名在 [NJU](https://www.nju.edu.cn/) [智能软件与工程学院](https://ise.nju.edu.cn/)修炼的萌新大学牲，男，未婚，非单身。

每日被早八晚九折磨得不成人形，梦想是实现终生赖床自由，最想做的事是放完寒假就放暑假，以及带焖焖猪一起到处旅行。

热衷于羽毛球 🏸、书法 🖋️、吉他 🎸、音乐 🎶 和**游戏** 🤩—— CS2，战地，GTA 5，刺客信条，杀鸡，地平线，原，MC……欲知详情，请移步[我的 Steam 主页](https://steamcommunity.com/id/ChanHsing1972/)。

### ⚙️ 更新日志

24/12/02 - 更换了新的渐变色图标。

24/11/26 - 个人网站启用了全新的域名，并通过 CDN 加速，访问速度显著提升！

24/09/09 - 调整了 Markdown 格式，完全放弃了 TOC。

24/08/11 - 更新了模板，为文章添加了"描述"功能，调整了布局，对"分类"和"标签"进行了重大更改。

24/04/02 - 更新了 logo 和网站图标。

24/03/07 - 替换了之前的模板。

24/02/23 - 建立了网站，添加了一些介绍。

</div>

<div id="en-content" class="lang-content" markdown="1">

### 🥳 Welcome!

I'm currently a second year undergraduate student from [School of Intelligent Software and Engineering](https://ise.nju.edu.cn/) of [Nanjing University](https://www.nju.edu.cn/). Call me Chen or Samuel if you like. 

I enjoy badminton, calligraphy, guitar, music, and **𝒄𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝒈𝒂𝒎𝒆𝒔**. Among my favorite games are - Black Myth: Wukong, Counter-Strike 2, Battlefield, Grand Theft Auto V, Assassin's Creed Odyssey, Dead by Daylight, Forza Horizon 4, Genshin Impact, Minecraft... Find more stuff about me on [my Steam homepage](https://steamcommunity.com/id/ChanHsing1972/). If we share mutual interests, feel free to send a friend request.

### ⚙️ Update Log

24/12/02 - Changed favicon into a brand new gradient-colored image.

24/11/26 - Now my personal website has acquired a completely new domain name and the speed of accessing it has been significantly enhanced with the application of CDN!

24/09/09 - Adjusted markdown format. Completely abandoned TOC. 

24/08/11 - Updated template. Added 'description' to articles. Adjusted layout. Breaking changes to 'categories' and 'tags'.

24/04/02 - Updated logos and favicons.

24/03/07 - Replaced previous template.

24/02/23 - Set up the website. Added some introduction.

</div>

<script>
function switchLang(lang) {
  // 保存用户的语言偏好
  localStorage.setItem('preferredLang', lang);
  
  // 切换内容显示
  const zhContent = document.getElementById('zh-content');
  const enContent = document.getElementById('en-content');
  const buttons = document.querySelectorAll('.lang-btn');
  
  if (lang === 'zh') {
    zhContent.classList.add('active');
    enContent.classList.remove('active');
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    zhContent.classList.remove('active');
    enContent.classList.add('active');
    buttons[0].classList.remove('active');
    buttons[1].classList.add('active');
  }
}

// 页面加载时恢复用户的语言偏好
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    switchLang(savedLang);
  }
});
</script>

![about](../assets/img/about-pic.jpg)