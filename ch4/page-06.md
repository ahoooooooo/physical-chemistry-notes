---
chapter: 4
page: 6
title: "Planck Oscillator Model and Boltzmann Distribution"
source: "Text Chapter 11"
sections:
  - Planck oscillator model
  - Energy quantization
  - Boltzmann distribution
  - Geometric series
tags:
  - Planck oscillator
  - energy quantization
  - Boltzmann distribution
  - geometric series
  - blackbody radiation
---

# Chapter 4 — Planck Oscillator Model and Boltzmann Distribution

## 1. Energy Quantization in Planck's Model

延續上一頁，Planck 把固體中的原子振動視為 oscillators，並假設每個振盪子的 fundamental vibrational frequency 為 $\nu$。

關鍵假設是：振盪子的 energy 不是 continuous，而只能取 discrete values：

$$
\varepsilon_n = nh\nu
\qquad
(n=0,1,2,3,\dots)
$$

因此可能的能量依序為：

$$
0,\ h\nu,\ 2h\nu,\ 3h\nu,\dots
$$

這就是 energy quantization（能量量子化）。

## 2. Number of Oscillators in Each Energy Level

令：

- $N_0$：能量為 $\varepsilon_0=0$ 的 oscillator 數。
- $N_1$：能量為 $\varepsilon_1=h\nu$ 的 oscillator 數。
- $N_2$：能量為 $\varepsilon_2=2h\nu$ 的 oscillator 數。
- $N_n$：能量為 $\varepsilon_n=nh\nu$ 的 oscillator 數。

整個系統裡的 oscillators 會分散在這些離散能階上。

## 3. Boltzmann Distribution

在 thermal equilibrium 下，不同能階上的 oscillator population 遵守 Boltzmann distribution：

$$
\frac{N_i}{N_j}
=
\exp\left[-\frac{\varepsilon_i-\varepsilon_j}{k_B T}\right]
$$

以 ground state $n=0$ 當參考，可得：

$$
\frac{N_1}{N_0}
=
\exp\left[-\frac{\varepsilon_1-\varepsilon_0}{k_B T}\right]
=
\exp\left(-\frac{h\nu}{k_B T}\right)
$$

更一般地：

$$
\frac{N_n}{N_0}
=
\exp\left[-\frac{\varepsilon_n-\varepsilon_0}{k_B T}\right]
=
\exp\left(-\frac{nh\nu}{k_B T}\right)
$$

所以：

$$
N_n = N_0 e^{-nh\nu/(k_B T)}
$$

這裡不是能量本身 obey Boltzmann，而是不同能階上的 oscillator population $N_n$ obey Boltzmann distribution。

## 4. Total Number of Oscillators

總 oscillator 數就是所有能階上的 population 加總：

$$
N=\sum_{n=0}^{\infty} N_n
$$

代入 $N_n=N_0 e^{-nh\nu/(k_B T)}$：

$$
N
=
N_0\sum_{n=0}^{\infty} e^{-nh\nu/(k_B T)}
$$

也就是：

$$
N
=
N_0\left(
1+e^{-h\nu/(k_B T)}
+e^{-2h\nu/(k_B T)}
+\cdots
\right)
$$

令：

$$
x=e^{-h\nu/(k_B T)}
$$

則：

$$
N=N_0(1+x+x^2+\cdots)
$$

這是一個 geometric series：

$$
1+x+x^2+\cdots=\frac{1}{1-x}
\qquad
(|x|<1)
$$

因為 $x=e^{-h\nu/(k_B T)}$，所以 $0<x<1$，級數會收斂。

因此：

$$
N
=
\frac{N_0}{1-x}
=
\frac{N_0}{1-e^{-h\nu/(k_B T)}}
$$

進一步可得：

$$
N_0
=
N\left(1-e^{-h\nu/(k_B T)}\right)
$$

這個結果下一頁會用來計算 total energy 與 average energy。

## 5. Why This Step Matters

這頁完成三件事：

1. 假設 oscillator energy 是離散的：$\varepsilon_n=nh\nu$。
2. 用 Boltzmann distribution 算各能階上的 oscillator population。
3. 把所有能階加總，得到 total number $N$ 和 ground-state population $N_0$ 的關係。

下一步就能求：

- total energy, $E$
- average energy, $\langle \varepsilon \rangle$

然後再導出 Planck 的 blackbody radiation formula。

## Key Formulas

### Quantized Energy Levels

$$
\varepsilon_n = nh\nu
\qquad
(n=0,1,2,\dots)
$$

### Boltzmann Population Ratio

$$
\frac{N_n}{N_0}
=
\exp\left(-\frac{nh\nu}{k_B T}\right)
$$

因此：

$$
N_n = N_0 e^{-nh\nu/(k_B T)}
$$

### Total Number of Oscillators

$$
N
=
\sum_{n=0}^{\infty}N_n
=
N_0\left(
1+e^{-h\nu/(k_B T)}
+e^{-2h\nu/(k_B T)}
+\cdots
\right)
$$

$$
N
=
\frac{N_0}{1-e^{-h\nu/(k_B T)}}
$$

### Geometric Series

$$
1+x+x^2+\cdots=\frac{1}{1-x}
\qquad
(|x|<1)
$$

### Series Used on the Next Page

右下角橘色式子推測是在預告下一頁會用到：

$$
x+2x^2+3x^3+\cdots=\frac{x}{(1-x)^2}
$$

這會用於計算：

$$
E=\sum_n N_n\varepsilon_n
$$

## Common Mistakes

1. 不要把 $N_n$ 當成能量；$N_n$ 是第 $n$ 能階上的 oscillator 數目。
2. $\varepsilon_n=nh\nu$ 是 Planck 的能量量子化假設。
3. Boltzmann distribution 用來描述 population ratio，不是說能量本身 obey Boltzmann。
4. 要能看出 $N=N_0(1+x+x^2+\cdots)$ 是 geometric series。
5. 這頁是在為下一頁求 average energy 做準備。

