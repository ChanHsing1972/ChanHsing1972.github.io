---
title: 🧑🏻‍💻 插入排序 - Insertion Sort
description: The pseudocode of insertion sort & one possible inplementation with C++.
date: 2024-09-17 14:36:12 +0800
categories: [Schoolwork, Notes]
tags: [程序, 算法, 代码]
math: true
toc: false
---

### Procedure 𝐈𝐧𝐬𝐞𝐫𝐭𝐢𝐨𝐧-𝐒𝐨𝐫𝐭

**In**: An array $A$ of $n$ integers.  
**Out**: A permutation of that array $A$ that is sorted (monotonic).

for $i := 2$ to $A.length$  
&emsp;&emsp;$key := A[i]$  
&emsp;&emsp;// Insert $A[i]$ into the sorted subarray $A[1 : i - 1]$  
&emsp;&emsp;$j := i - 1$  
&emsp;&emsp;while $j > 0$ and $A[j] > key$  
&emsp;&emsp;&emsp;&emsp;$A[j + 1] := A[j]$  
&emsp;&emsp;&emsp;&emsp;$j := j - 1$  
&emsp;&emsp;$A[j + 1] := key$  
&emsp;&emsp;return $A$  

---

One possible inplementation with C++:

```c++
#include <iostream>
using namespace std;

int main()
{
  int arr[100], len;
  cin >> len;
  for (int t = 0; t < len; t++)
    cin >> arr[t];
  for (int i = 1; i < len; i++)
  {
    int key = arr[i];               // 把要比较的牌从手牌里单独抽出来
    int j = i - 1;
    while (j > 0 && arr[j] > key)   // 将此牌与前面的牌比较大小
    {
      arr[j + 1] = arr[j];          // 把前面的大牌依次往后挪，空出位置
      j--;
    }
    arr[j + 1] = key;               // 把此牌插入合适的位置
  }
  for (int t = 0; t < len; t++)
    cout << arr[t] << " ";
  return 0;
}
```
