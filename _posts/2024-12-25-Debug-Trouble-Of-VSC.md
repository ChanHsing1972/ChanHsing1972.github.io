---
title: 🧑🏻‍💻 VSCode 调试无法查看 STL 容器内元素值的问题
date: 2024-12-25 17:56:20 +0800
description: 本文解决了 VSCode 调试无法查看 STL 容器内元素值的问题，作备份用。
categories: [Schoolwork, Notes]
tags: [程序]
---

## **起因**

更新了 minGW 后，在 VSCode 中调试 C++ 程序时，发现无法查看 STL 容器内元素的具体值。例如 vector 数组，只能查看其起始指针等信息，而无法看到数组内元素的值。这样的问题给调试带来了极大的不便。于是上网查找资料，获得了许多可能的原因，列于此处。

1. 更改 launch.json，如下：
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python 调试程序: 当前文件",
      "type": "debugpy",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "justMyCode": false
    },
    {
      "name": "C/C++: gcc.exe 生成和调试活动文件",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "D:\\mingw32\\bin",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "D:\\mingw32\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "python import sys;sys.path.insert(0, 'D:\\mingw32\\share\\gcc-14.2.0\\python');from libstdcxx.v6.printers import register_libstdcxx_printers;register_libstdcxx_printers(None)",
          "ignoreFailures": false
        },
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        },
        {
          "description": "将反汇编风格设置为 Intel",
          "text": "-gdb-set disassembly-flavor intel",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "C/C++: gcc.exe 生成活动文件"
    }
  ]
}
```

2. 如果系统是 Windows x64，则不应下载 ming64，而应下载 ming32。[下载地址在此](https://github.com/niXman/mingw-builds-binaries/releases)。

选择 i686-14.2.0-release-win32-dwarf-msvcrt-rt_v12-rev0.7z

## **附：配置 mingw 的步骤**

1. 解压。

2. 打开：电脑属性 -> 高级选项 -> 环境变量 -> 双击 Path -> 添加，将 mingw 路径复制进去，点击三次确定。

3. 在 VSCode 中，ctrl+P，打开 launch.json，task.json，修改路径。