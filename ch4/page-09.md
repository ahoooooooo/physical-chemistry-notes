---
chapter: 4
page: 9
title: "Einstein Photoelectric Effect"
source: "Text Chapter 11"
sections:
  - Photoelectric effect
  - Experimental observations
  - Einstein photoelectric equation
  - Work function
tags:
  - photoelectric effect
  - photon
  - threshold frequency
  - work function
  - Einstein equation
  - quantization of radiation
---

# Chapter 4 — Einstein Photoelectric Effect

## 1. Photoelectric Effect

Photoelectric effect（光電效應）是指：當適當頻率的 radiation 照射到 metal surface 時，金屬表面會放出 electrons。

這些放出的 electrons 稱為：

- photoelectrons（光電子）

Einstein 用這個現象說明：light energy 不是只像 continuous wave 一樣傳遞，而是由一個一個 photons 組成。

這是 radiation quantization 的重要證據。

## 2. Experimental Observations

### 2.1 Threshold Frequency

若入射光 frequency 太低，則不論 light intensity 多大，都不會有 photoelectrons 放出：

$$
\nu < \nu_0
\quad
\Rightarrow
\quad
\text{no photoelectrons}
$$

其中：

- $\nu_0$：threshold frequency（臨界頻率）

這表示 metal 中的 electron 要被打出來，至少需要一定最小能量。

### 2.2 Electron Kinetic Energy Depends on Frequency

實驗發現：

- 入射光 frequency $\nu$ 越高，放出電子的 maximum kinetic energy 越大。
- 對固定 frequency 來說，增加 light intensity 不會增加單個 electron 的 kinetic energy。

也就是：

> Electron kinetic energy is determined by frequency, not intensity.

更精確地說，和 frequency 線性相關的是 maximum kinetic energy：

$$
K_{\max}=h\nu-\phi
$$

### 2.3 Number of Photoelectrons Depends on Intensity

若 frequency 足夠高，即 $\nu>\nu_0$，則：

- light intensity 越強
- 每秒打出的 photoelectrons 越多

所以 photoelectrons 的數量與 light intensity 成正比。

## 3. Why Classical Wave Theory Fails

按照 classical wave theory，light energy 應該和 intensity 有關，所以它會預測：

- 光越強，electron 應該吸收到越多 energy。
- Electron kinetic energy 應該隨 intensity 增加。
- 即使 frequency 低，只要光夠強或照夠久，也應該能把 electron 打出來。

但實驗顯示：

- 存在 threshold frequency。
- Electron maximum kinetic energy 取決於 frequency，不取決於 intensity。
- Electrons 幾乎可以立即被放出，不需要慢慢累積 energy。

因此 classical wave picture 無法解釋 photoelectric effect。

## 4. Einstein's Photon Explanation

Einstein 提出：light 是由 photons（光子）組成，每個 photon 的 energy 為：

$$
\boxed{
E_{\text{photon}}=h\nu
}
$$

其中：

- $h$：Planck constant
- $\nu$：light frequency

一個 photon 和一個 electron 作用時，photon energy 會分成兩部分：

1. 克服 metal 對 electron 的束縛。
2. 剩下的 energy 變成 electron kinetic energy。

因此：

$$
\boxed{
h\nu = \phi + K.E.
}
$$

若寫成 maximum kinetic energy：

$$
\boxed{
h\nu = \phi + K_{\max}
}
$$

而：

$$
K_{\max}
=
\frac{1}{2}mv_{\max}^2
$$

所以也可寫成：

$$
\boxed{
h\nu
=
\phi
+
\frac{1}{2}mv_{\max}^2
}
$$

這就是 Einstein photoelectric equation。

## 5. Work Function

Work function（逸出功）通常用 $\phi$ 表示；原筆記使用 $W$。

它代表：

- 把 electron 從 metal surface 移出所需的 minimum energy。

Work function 和 threshold frequency 的關係為：

$$
\boxed{
\phi=h\nu_0
}
$$

因此：

- 若 $\nu<\nu_0$，則 $h\nu<\phi$，electron 無法逸出。
- 若 $\nu>\nu_0$，多出來的 energy 會變成 electron kinetic energy。

原筆記把 $W$ 稱作 potential energy，但更精確應稱為 work function。

## 6. Meaning of Intensity in the Photon Picture

在 photon picture 中：

- Frequency $\nu$ 決定每個 photon 的 energy $h\nu$。
- Intensity 主要決定 photons 的數量。

所以：

- 提高 frequency：單顆 photon energy 變大，electron maximum kinetic energy 增加。
- 提高 intensity：photon 數量增加，放出的 photoelectrons 數目增加。

這正好解釋 experimental observations。

## 7. Diagram Notes

原頁中間畫了三組對照圖，比較 classical prediction 與 experimental observation：

- Electron kinetic energy vs light intensity：classical 預測 electron energy 會隨 intensity 增加，但實驗不支持。
- Electron kinetic energy vs frequency $\nu$：實驗顯示存在 threshold frequency $\nu_0$，且 $\nu>\nu_0$ 後 maximum kinetic energy 隨 frequency 增加。
- Number of photoelectrons vs light intensity：實驗顯示 photoelectron number 隨 intensity 增加。

圖的重點是：intensity 控制 photoelectron number，frequency 控制 electron maximum kinetic energy。

## Key Formulas

### Photon Energy

$$
\boxed{
E_{\text{photon}}=h\nu
}
$$

### Einstein Photoelectric Equation

$$
\boxed{
h\nu=\phi+K_{\max}
}
$$

$$
\boxed{
K_{\max}=h\nu-\phi
}
$$

### Maximum Kinetic Energy

$$
K_{\max}
=
\frac{1}{2}mv_{\max}^2
$$

### Work Function and Threshold Frequency

$$
\boxed{
\phi=h\nu_0
}
$$

## Common Mistakes

1. 不要把 $\nu_0$ 看成 $V_0$；這裡是 threshold frequency，不是 voltage。
2. 原筆記的 $W$ 應理解為 work function，較標準符號是 $\phi$。
3. Intensity 不決定單個 electron 的 maximum kinetic energy；frequency 才決定。
4. Intensity 主要決定 photoelectrons 的數目。
5. 真正線性增加的是 maximum kinetic energy $K_{\max}$，不是每個 electron 都一定有同一 kinetic energy。
6. "Suitable radiation" 指的是 frequency 足夠高，使 $h\nu\ge \phi$。

## Original Page Notes

- 原頁標題為 Einstein's Photoelectric Effect。
- 原頁寫 evidence for the quantization of radiation。
- 原頁觀察到 suitable radiation 落在 metal surface 上時，electrons are emitted。
- 原頁列出 no electrons if $\nu<\nu_0$，其中 $\nu_0$ 是 threshold frequency。
- 原頁列出 electron kinetic energy increases with $\nu$ but is independent of light intensity。
- 原頁列出 number of photoelectrons is proportional to light intensity。
- 原頁下方寫出 $E_{\text{photon}}=h\nu$、$h\nu=\frac12mv^2+W$、$W=h\nu_0$。
- 原頁註解 $h\nu$ 是 photon energy，$\frac12mv^2$ 是 electron leaving the metal 的 kinetic energy，$W$ 是把 electron 移出所需能量。
