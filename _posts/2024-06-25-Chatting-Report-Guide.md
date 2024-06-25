---
title: 微信聊天记录报告制作指南
date: 2024-06-25 14:46:29 +0800
categories: [Blogging, Article]
tags: [article]
---

*Witten by Chen Xin*

## **目录**

- 0 - 前期准备
- 1 - 导出记录
  - 1.1 - 传输聊天记录至电脑
  - 1.2 - 获取聊天记录内容
- 2 - 统计数据
- 3 - 生成词云
- 4 - 制作报告
- 5 - 参考文献

## 0 - **前期准备**

可能需要使用的工具有：
- 安卓模拟器（此处使用的是[雷电模拟器](https://www.ldmnq.com/?n=6000)），软件，需下载，用于导出聊天记录数据。
- [Sqlcipher](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1Rg35hFES-gvE6bir0SPBJA%3Fpwd%3Dooqe)，软件，需下载，用于获取聊天记录内容。
- [ROSTCM6](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1FzBaI_jUugq9kXr5k2Zynw%3Fpwd%3Dgpba)，软件，需下载，用于统计词频。
- [MD5 散列计算器](https://link.zhihu.com/?target=https%3A//md5calculator.chromefans.org/%3Flangid%3Dzh-cn)，网页，用于计算 MD5 散列值。
- [微词云](https://www.weiciyun.com/)，网页，用于制作词云。
- [易企秀](https://store.eqxiu.com/)，网页，用于制作报告。

## 1 - **导出记录**

基本思路：将手机聊天记录迁移至电脑上的模拟器（可理解为另一台手机），利用模拟器的 ROOT 权限，获得微信数据库文件 EnMicroMsg.db，再对其进行处理。

### 1.1 - 传输聊天记录至电脑


1. 在电脑上安装[雷电模拟器](https://www.ldmnq.com/?n=6000)。
2. 在模拟器的设置中打开 ROOT 权限。以雷电模拟器为例，进行如下操作：“设置 - 基本设置 - ROOT 权限 - 开启 ROOT 权限”。
3. 在模拟器上安装微信。注意：此时不必登录。
4. 将手机与模拟器连接至同一网络。
5. 进入手机微信，依次点击：“设置 - 聊天 - 聊天记录备份与迁移 - 迁移 - 迁移到手机 / 平板微信”，选择需要迁移的聊天、时间跨度，选择“含图片 / 视频 / 文件”。
6. 点击“开始”，获得二维码。此时，在模拟器上登录该微信账号，用电脑自带摄像头扫描该二维码，即可开始同步。若电脑没有摄像头，可先将图片传至电脑并打开，使用模拟器的“实时截取屏幕”功能扫描。
7. 同步完成后，打开模拟器中的文件管理器，根据路径：`/data/data/com.tencent.mm/MicroMsg/一个 32 位字符串命名的文件夹`{: .filepath}，找到 EnMicroMsg.db 文件，利用模拟器的共享文件夹功能，将该文件拷贝至电脑。

> 第 3 步中，如果模拟器无法更改默认网络，可打开手机 USB 传输热点功能，将数据线接入电脑，随后在模拟器中进行如下操作：“设置 - 网络设置 - 开启桥连接”，在下拉菜单中，选择对应于手机热点的一项，“确定 - 重启模拟器”。
{: .prompt-info }








### 1.2 - 获取聊天记录内容


