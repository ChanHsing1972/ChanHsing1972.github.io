---
title: 🧑🏻‍💻 排序
description: The pseudocode of sorting in different ways and possible inplementations with C++.
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

### Procedure 𝐌𝐞𝐫𝐠𝐞-𝐒𝐨𝐫𝐭

**In**: An array $A$ of $n$ integers.    
**Out**: A permutation of that array $A$ that is sorted (monotonic).  

MergeSort($A[1...n]$):  
if n = 1:  
&emsp;&emsp;$sol[1...n] = [1...n]$  
else  
&emsp;&emsp;$solLeft[1...(n/2)] := MergeSort(A[1...(n/2)])$  
&emsp;&emsp;$solRight[1...(n/2)] := MergeSort(A[(n/2 + 1)...n])$  
&emsp;&emsp;$sol[1...n] := Merge(solLeft[1...(n/2)], solRight[1...(n/2)])$  
return $sol[1...n]$  

Merge($A[1...n], B[1...m]$):   
$Aindex := 1, Bindex := 1, Result := []$  
// Scan $A$ and $B$ from left to right,   
// Append the currently smallest to the result array.  
while $Aindex \leq A.length$ and $Bindex \leq B.length$  
&emsp;&emsp;if $A[Aindex] \leq B[Aindex]$  
&emsp;&emsp;&emsp;&emsp;$Result.AddLast(A[Aindex])$  
&emsp;&emsp;&emsp;&emsp;$Aindex := Aindex + 1$  
&emsp;&emsp;else  
&emsp;&emsp;&emsp;&emsp;$Result.AddLast(B[Bindex])$  
&emsp;&emsp;&emsp;&emsp;$Bindex := Bindex + 1$  

// Copy the remaining elements of  A and B  
while $Aindex \leq A.length$  
&emsp;&emsp;$Result.AddLast(A[Aindex])$  
&emsp;&emsp;$Aindex := Aindex + 1$  
while $Bindex \leq B.length$  
&emsp;&emsp;$Result.AddLast(B[Bindex])$  
&emsp;&emsp;$Bindex := Bindex + 1$  
return $Result$  

---

One possible inplementation with C++:  

```c++
#include <bits/stdc++.h>
using namespace std;

void merge(int a[], int result[], int left, int mid, int right)
{
	int i = left, j = mid + 1, k = left;

	while (i <= mid && j <= right)
	{
		if (a[i] <= a[j])
			result[k++] = a[i++];
		else
			result[k++] = a[j++];
	}

	while (i <= mid)
		result[k++] = a[i++];
	while (j <= right)
		result[k++] = a[j++];

	for (i = left; i <= right; i++)
		a[i] = result[i];
}

void merge_sort(int a[], int result[], int left, int right)
{
	if (left < right)
	{
		int mid = (left + right) / 2;
		merge_sort(a, result, left, mid);
		merge_sort(a, result, mid + 1, right);
		merge(a, result, left, mid, right);
	}
}

int main()
{
	int N;
	cin >> N;
	int *a = new int[N], *result = new int[N];

	for (int i = 0; i < N; i++)
		cin >> a[i];

	merge_sort(a, result, 0, N - 1);

	for (int i = 0; i < N; i++)
		cout << a[i] << (i == N - 1 ? "\n" : " ");

	delete[] a;
	delete[] result;
	return 0;
}
```