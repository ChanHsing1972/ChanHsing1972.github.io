---
title: 🎨 Github 风格 Markdown 模板分享
date: 2025-03-30 15:51:25 +0800
categories: [Schoolwork, Notes]
tags: [资源]
math: true
---

笔者使用 Typora 编辑 Markdown 文件。然而 Typora 自带的 Github 模板与正宗的 Github 模板格式相去甚远，在行间距、段间距、字体、颜色等许多方面差异巨大，使得整个模板呈现出一种怪异、别扭的风格。为此，在 gpt 大人的帮助下，我自制了一份与 Github 极为接近的 Markdown 模板。

复制粘贴为 `.css` 文件，拖入 Typora 主题文件夹即可使用。

效果图如下：

![alt text](<../assets/img/github-style (1).png>)
![alt text](<../assets/img/github-style (2).png>)


```css
:root {
    --side-bar-bg-color: #fafafa;
    --control-text-color: #777;
    --fgColor-default: #1f2328;
    --fgColor-muted: #59636e;
    --fgColor-accent: #0969da;
    --bgColor-default: #ffffff;
    --bgColor-muted: #f6f8fa;
    --borderColor-default: #d1d9e0;
    --borderColor-muted: #d1d9e0b3;
    --base-text-weight-semibold: 600;
    --base-size-16: 1rem;
    --base-size-24: 1.5rem;
    --base-size-40: 2.5rem;
    --fontStack-monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

@include-when-export url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/* open-sans-regular - latin-ext_latin */
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url('./github/open-sans-v17-latin-ext_latin-regular.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-italic - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    src: local('Open Sans Italic'), local('OpenSans-Italic'), url('./github/open-sans-v17-latin-ext_latin-italic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-700 - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src: local('Open Sans Bold'), local('OpenSans-Bold'), url('./github/open-sans-v17-latin-ext_latin-700.woff2') format('woff2'); 
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* open-sans-700italic - latin-ext_latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: bold;
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), url('./github/open-sans-v17-latin-ext_latin-700italic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    color: var(--fgColor-default);
    background-color: var(--bgColor-default);
    line-height: 1.5;
}

#write {
    max-width: 860px;
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

#write > ul:first-child,
#write > ol:first-child{
    margin-top: 30px;
}

a {
    color: var(--fgColor-accent);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: var(--base-size-24);
    margin-bottom: var(--base-size-16);
    font-weight: var(--base-text-weight-semibold);
    line-height: 1.25;
    position: relative;
    cursor: text;
}

h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit;
}
h2 tt,
h2 code {
    font-size: inherit;
}
h3 tt,
h3 code {
    font-size: inherit;
}
h4 tt,
h4 code {
    font-size: inherit;
}
h5 tt,
h5 code {
    font-size: inherit;
}
h6 tt,
h6 code {
    font-size: inherit;
}
h1 {
    font-size: 2em;
    line-height: 1.2;
    border-bottom: 1px solid var(--borderColor-muted);
    padding-bottom: 0.3em;
}
h2 {
    font-size: 1.5em;
    line-height: 1.225;
    border-bottom: 1px solid var(--borderColor-muted);
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.25em;
    line-height: 1.43;
}
h4 {
    font-size: 1em;
}
h5 {
    font-size: 0.875em;
}
h6 {
    font-size: 0.85em;
    color: var(--fgColor-muted);
}
p,
blockquote,
ul,
ol,
dl,
table{
    margin: 0.8em 0;
}
li>ol,
li>ul {
    margin: 0 0;
}
hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
}

li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0;
}
blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--fgColor-muted);
    border-left: 0.25em solid var(--borderColor-default);
}
blockquote blockquote {
    padding-right: 0;
}
table {
    padding: 0;
    word-break: initial;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
}
table tr {
    border: 1px solid var(--borderColor-default);
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n),
thead {
    background-color: var(--bgColor-muted);
}
table th {
    font-weight: bold;
    border: 1px solid var(--borderColor-default);
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
}
table td {
    border: 1px solid var(--borderColor-default);
    margin: 0;
    padding: 6px 13px;
}
table th:first-child,
table td:first-child {
    margin-top: 0;
}
table th:last-child,
table td:last-child {
    margin-bottom: 0;
}

.CodeMirror-lines {
    padding-left: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 8px;
}

.md-fences,
code,
tt {
    border: none; /* 移除边框 */
    background-color: var(--bgColor-muted);
    border-radius: 6px;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
    font-family: var(--fontStack-monospace);
    font-size: 85%;
}

code { 
    background-color: rgba(240, 241, 242); /* GitHub 行内代码背景色 */
    padding: 0.2em 0.4em;
    border-radius: 6px;
    white-space: break-spaces;
}

pre {
    background-color: #f6f8fa; /* GitHub 代码框背景色 */
    border-radius: 6px;
    margin: var(--base-size-16) 0;
    word-wrap: normal;
    white-space: pre;
    overflow: auto;
    font-size: 85%;
}

strong, b {
    font-weight: var(--base-text-weight-semibold);
}
```
{: file="github.css" }