---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

> 若加载速度缓慢，可使用魔法 🪄 访问
{: .prompt-info }

<style>
.lang-toggle {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
}

.lang-btn {
  background-color: transparent;
  color: var(--text-muted-color, #858585);
  padding: 6px 18px;
  border: 1px solid var(--btn-border-color, #e9ecef);
  border-radius: 50px;
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
  <button class="lang-btn active" id="btn-zh">中文</button>
  <button class="lang-btn" id="btn-zh-guangdong">粤語</button>
  <button class="lang-btn" id="btn-en">English</button>
</div>

<div id="zh-content" class="lang-content active" markdown="1">


## 🥳 欢迎！

<!-- ![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=chanhsing1972){: width="972" height="589" .w-50 .right} -->

我是尘心，四川成都人，[南京大学](https://www.nju.edu.cn/) [智能软件与工程学院](https://ise.nju.edu.cn/) 在读本科生。高中毕业于成都七中高新校区，并在那里度过了三年美好的高中时光，详见[《吹梦到西洲》](https://chanhsing1972.github.io/posts/Blow-Dream-To-The-West-Isle/)。每日被早八晚九折磨得不成人形 😫，梦想是实现终生懒觉自由 🛏️，最想做的事是放完寒假就放暑假，最讨厌的事是写自我介绍。

尘心热衷于：Coding、羽毛球、书法、吉他、唱歌、音乐、摄影、美食、设计、游戏。

- 🧑🏻‍💻 关于 Coding：痴迷于鼓捣新技术，探索新事物，并想方设法让他们按照我所想的方式运转。这给我带来极大的成就感与满足感。当前主要使用 C/C++、Java、Python、JavaScript 等编程语言，开发过 Web 应用、小程序、桌面应用、自制游戏。
- 🏸 关于羽毛球：比上不足，比下有余。
- 🖋️ 关于书法：酷爱硬笔书法。钢笔不离手，练字不间断。
- 🎸 关于吉他：自学流，入门级别，尚需练习。
- 🎤 关于唱歌：浴室歌神，感情不足，音准来凑。
- 🎵 关于音乐：生活不能没有音乐！尤爱粤语流行、爵士与古典。歌手当中，最爱陈奕迅，并因此爱上粤语，企图学习掌握该语言，未遂。喜欢的歌曲详见 [Apple Music 喜爱列表](https://music.apple.com/cn/playlist/favorite-songs/pl.u-b6Ud2vd1K)。
- 📷 关于摄影：单纯喜爱，没啥技术。
- 🦐 关于美食：作为成都人，吃是生活的第一要义。
- 🎨 关于设计：平面设计爱好者，奉行极简主义与留白。对排版细节充满偏执的追求，喜爱并欣赏一切美的设计。
- 🎮 关于游戏：CS2 入门级玩家，长期遭受电子阳痿困扰中。欲知详情，请移步[我的 Steam 主页](https://steamcommunity.com/id/ChanHsing1972/)。

## ⚙️ 更新日志

- 24/12/02 - 更换了新的渐变色图标。
- 24/09/09 - 调整了 Markdown 格式，完全放弃了 TOC。
- 24/08/11 - 更新了模板，为文章添加了“描述”功能，调整了布局，对“分类”和“标签”进行了重大更改。
- 24/04/02 - 更新了 logo 和网站图标。
- 24/03/07 - 替换了之前的模板。
- 24/02/23 - 建立了网站，添加了一些介绍。

</div>

<div id="zh-guangdong-content" class="lang-content" markdown="1">

## 🥳 歡迎！

我係塵心，四川成都人，依家喺[南京大學](https://www.nju.edu.cn/) [智能軟件與工程學院](https://ise.nju.edu.cn/)讀緊本科生。高中畢業於成都七中高新校區，並喺嗰度度過咗三年美好嘅高中時光，詳見[《吹夢到西洲》](https://chanhsing1972.github.io/posts/Blow-Dream-To-The-West-Isle/)。每日畀早八晚九折磨到唔似人形 😫，夢想係實現終身瞓懶覺自由 🛏️，最想做嘅事係放完寒假就放暑假，最唔鍾意嘅事係寫自我介紹。

塵心熱衷於：Coding、羽毛球、書法、結他、唱歌、音樂、攝影、美食、設計、打機。

- 🧑🏻‍💻 關於 Coding：痴迷於鼓搗新技術，探索新事物，並想方設法令佢哋照我意思運作。呢啲帶嚩好大成就感同滿足感。依家主要用 C/C++、Java、Python、JavaScript 等語言，開發過 Web 應用、小程序、桌面應用、自製遊戲。
- 🏸 關於羽毛球：中規中矩，唔算勁但都唔差。
- 🖋️ 關於書法：好鍾意硬筆書法，鋼筆唔離手，練字唔停。
- 🎸 關於結他：自學流，入門級別，仲要多啲練習。
- 🎤 關於唱歌：浴室歌神，感情唔夠，靠音準頂住。
- 🎵 關於音樂：生活冇音樂唔得！特別鍾意粵語流行、爵士同古典。歌手入面，最愛陳奕迅，因為佢愛上粵語，想學識但未成功。鍾意嘅歌可以睇 [Apple Music 喜愛列表](https://music.apple.com/cn/playlist/favorite-songs/pl.u-b6Ud2vd1K)。
- 📷 關於攝影：純粹鍾意，冇乜技術。
- 🦐 關於美食：作為成都人，食係生活第一要義。
- 🎨 關於設計：平面設計愛好者，奉行極簡主義與留白。對排版細節有偏執追求，鍾意欣賞一切靚設計。
- 🎮 關於打機：CS2 入門級玩家，長期受電子陽痿困擾中。想知詳情請去[我嘅 Steam 主頁](https://steamcommunity.com/id/ChanHsing1972/)。

## ⚙️ 更新日誌

- 24/12/02 - 換咗新嘅漸變色圖標。
- 24/09/09 - 調整咗 Markdown 格式，完全放棄咗 TOC。
- 24/08/11 - 更新咗模板，文章加咗「描述」功能，調整咗佈局，「分類」同「標籤」有重大更改。
- 24/04/02 - 更新咗 logo 同網站圖標。
- 24/03/07 - 換咗新模板。
- 24/02/23 - 建立網站，加咗啲介紹。

</div>

<div id="en-content" class="lang-content" markdown="1">

## 🥳 Welcome!

I'm Chenxin, from Chengdu, Sichuan, currently an undergraduate at the [School of Intelligent Software and Engineering](https://ise.nju.edu.cn/) of [Nanjing University](https://www.nju.edu.cn/). I graduated from Chengdu No.7 High School (Gaoxin Campus), where I spent three wonderful years—see [Blow Dream To The West Isle](https://chanhsing1972.github.io/posts/Blow-Dream-To-The-West-Isle/) for details. The daily grind from 8am to 9pm nearly broke me 😫. My dream is to sleep in forever 🛏️, my greatest wish is to have summer vacation right after winter vacation, and my least favorite thing is writing self-introductions.

My interests include: Coding, Badminton, Calligraphy, Guitar, Singing, Music, Photography, Food, Design, Gaming.

- 🧑🏻‍💻 About Coding: I'm passionate about tinkering with new technologies and exploring new things, always trying to make them work the way I want. This brings me great satisfaction. I mainly use C/C++, Java, Python, and JavaScript, and have developed web apps, mini-programs, desktop apps, and my own games.
- 🏸 About Badminton: Not the best, not the worst.
- 🖋️ About Calligraphy: Love pen calligraphy. Always have a pen in hand, never stop practicing.
- 🎸 About Guitar: Self-taught, beginner level, still need more practice.
- 🎤 About Singing: Bathroom singer, lacking emotion but making up for it with pitch.
- 🎵 About Music: Can't live without music! Especially love Cantonese pop, jazz, and classical. My favorite singer is Eason Chan, which made me fall in love with Cantonese and try to learn it (not quite there yet). Check out my [Apple Music favorites](https://music.apple.com/cn/playlist/favorite-songs/pl.u-b6Ud2vd1K).
- 📷 About Photography: Just a hobby, not much skill.
- 🦐 About Food: As a Chengdu native, eating is the top priority in life.
- 🎨 About Design: Enthusiast of graphic design, advocate of minimalism and whitespace. Obsessed with typography details, love and appreciate all beautiful designs.
- 🎮 About Gaming: Entry-level CS2 player, long-term victim of "electronic ED". For more, visit [my Steam homepage](https://steamcommunity.com/id/ChanHsing1972/).

## ⚙️ Update Log

- 24/12/02 - Changed to a new gradient icon.
- 24/09/09 - Adjusted Markdown format, completely abandoned TOC.
- 24/08/11 - Updated the template, added "description" to articles, adjusted layout, and made major changes to "categories" and "tags".
- 24/04/02 - Updated logo and website icon.
- 24/03/07 - Replaced the previous template.
- 24/02/23 - Website established, added some introduction.

</div>

<script>
function switchLang(lang) {
  // 保存用户的语言偏好
  localStorage.setItem('preferredLang', lang);
  
  const zhContent = document.getElementById('zh-content');
  const zhGuangdongContent = document.getElementById('zh-guangdong-content');
  const enContent = document.getElementById('en-content');
  const contents = [zhContent, zhGuangdongContent, enContent];
  contents.forEach(el => el && el.classList.remove('active'));
  
  const btnZh = document.getElementById('btn-zh');
  const btnZhGuangdong = document.getElementById('btn-zh-guangdong');
  const btnEn = document.getElementById('btn-en');
  const buttons = [btnZh, btnZhGuangdong, btnEn];
  buttons.forEach(btn => btn && btn.classList.remove('active'));
  
  if (lang === 'zh') {
    if (zhContent) zhContent.classList.add('active');
    if (btnZh) btnZh.classList.add('active');
  } else if (lang === 'zh-guangdong') {
    if (zhGuangdongContent) zhGuangdongContent.classList.add('active');
    if (btnZhGuangdong) btnZhGuangdong.classList.add('active');
  } else if (lang === 'en') {
    if (enContent) enContent.classList.add('active');
    if (btnEn) btnEn.classList.add('active');
  }
}

// 页面加载时恢复用户的语言偏好
document.addEventListener('DOMContentLoaded', function() {
  // 绑定事件监听器
  const btnZh = document.getElementById('btn-zh');
  const btnZhGuangdong = document.getElementById('btn-zh-guangdong');
  const btnEn = document.getElementById('btn-en');

  if (btnZh) btnZh.addEventListener('click', function() { switchLang('zh'); });
  if (btnZhGuangdong) btnZhGuangdong.addEventListener('click', function() { switchLang('zh-guangdong'); });
  if (btnEn) btnEn.addEventListener('click', function() { switchLang('en'); });

  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    switchLang(savedLang);
  }
});
</script>

![about](../assets/img/about-pic.jpg)

<!-- 正在学习和使用的技术与工具： -->
<!-- <div align=left>
<img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white" alt="C">
<img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white" alt="C++">
<img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"  alt="Python">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL">
<img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux">
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Kubernetes-326ce5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes">
<img src="https://img.shields.io/badge/LaTeX-473d48?style=flat-square&logo=latex&logoColor=white" alt="LaTeX">
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git">
</div> -->
