---
chapter: 4
page: 5
title: "Blackbody Spectrum and Planck Quantization"
source: "Text Chapter 11"
sections:
  - Blackbody radiation spectrum
  - Radiant energy density
  - Planck formula
  - Quantization hypothesis
tags:
  - blackbody radiation
  - radiant energy density
  - Planck law
  - quantization
  - quantum
  - oscillator
---

# Chapter 4 — Blackbody Spectrum and Planck Quantization

## 1. Blackbody Radiation Spectrum

這一頁上方的圖是在畫：

$$
\rho_\nu \text{ vs. } \nu
$$

也就是在不同 frequency $\nu$ 下，單位體積、單位頻率區間內的 radiation energy density 如何分布。

### 1.1 Graph Features

對不同 temperature $T$：

- 溫度越高，整體輻射強度越大。
- 輻射峰值會往較高 frequency 移動。
- Blackbody radiation spectrum 不是一直增加，而是會先上升、到達峰值，再下降。

這正是 classical physics 當時很難完整解釋的地方。

### 1.2 Diagram Notes

原頁左上畫了一張 radiant energy density 對 frequency 的曲線圖：

- 橫軸：$\nu$，frequency。
- 縱軸：$\rho_\nu$，或原筆記中可能寫成 $P_\nu$。
- 圖中有多條不同溫度的曲線，例如 $T=3500\ \text{K}$、$4000\ \text{K}$、$5000\ \text{K}$、$5500\ \text{K}$。

這張圖同時表達：

- $T$ 越高，radiation intensity 越大。
- Peak 會往 high-frequency direction 移動。

後面會連到 Wien displacement law、Stefan-Boltzmann law 和 Planck law。

![Blackbody radiation spectrum at multiple temperatures](images/blackbody-spectrum.svg "Spectral radiance vs wavelength for a blackbody — higher temperature raises total intensity and shifts the peak toward shorter wavelengths / higher frequencies (Wikipedia Commons).")

## 2. Radiant Energy Density

Radiant energy density 可寫成：

$$
\rho_\nu = \frac{dE}{dV\,d\nu}
$$

意思是：

- 在 frequency $\nu$ 附近
- 每單位體積 $dV$
- 每單位頻率範圍 $d\nu$

所包含的 radiation energy。

也就是說，$\rho_\nu$ 描述的是 blackbody radiation 的能量如何分布在不同 frequency 上，而不是總能量。

## 3. Planck Formula

原筆記寫的是 Planck's empirical formula：

$$
\rho_\nu
=
\frac{\alpha \nu^3}{\exp(\beta \nu/T)-1}
$$

這是在用常數 $\alpha$、$\beta$ 表示 blackbody frequency spectrum 的形式。

更完整、標準的 Planck radiation law 寫法是：

$$
\rho_\nu
=
\frac{8\pi \nu^2}{c^3}
\cdot
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
$$

也可合併寫成：

$$
\rho_\nu
=
\frac{8\pi h\nu^3}{c^3}
\cdot
\frac{1}{e^{h\nu/(k_B T)}-1}
$$

所以若和原筆記形式比較，可以對應為：

$$
\alpha \sim \frac{8\pi h}{c^3},
\qquad
\beta \sim \frac{h}{k_B}
$$

這裡的 "empirical formula" 可理解成課堂從經驗式長相切入；但正式脈絡中，Planck law 來自 energy quantization 的假設。

## 4. Planck's Quantization Hypothesis

Planck 為了解釋 blackbody radiation，提出關鍵假設。

### 4.1 Energy Is Transferred in Packets

Radiant energy 不是連續任意交換，而是以小包形式傳遞。

這些小包稱為：

- quantum（單數）
- quanta（複數）

### 4.2 Energy of Each Quantum

每一個能量小包的大小為：

$$
E=h\nu
$$

其中：

- $h$：Planck's constant
- $\nu$：振動頻率 / 輻射頻率

這是 quantum theory 最重要的起點之一。

## 5. Atomic Oscillator Model

Planck 把固體中的原子想像成很多會振動的 oscillators（振盪子）。

### 5.1 Heating a Solid

當固體被加熱，原子的 vibrations increase，因此會影響它和 electromagnetic radiation 的能量交換。

原筆記句子可修正為：

> When atoms in a solid are heated, their vibrations increase.

### 5.2 Oscillators and Frequency

本頁最後一點原筆記沒有寫完：

> All atoms have the same fundamental vibrational ...

依前後文，應是在說：在這個模型中，oscillator 對應某一個 fundamental vibrational frequency $\nu$。

下一頁會接著進入真正的量子化推導：

- oscillator 的能量不是連續的。
- oscillator 的能量只能取 $0,\ h\nu,\ 2h\nu,\ 3h\nu,\dots$。
- 再用 Boltzmann distribution 分配各能階上的粒子數。

## Key Formulas

### Radiant Energy Density

$$
\rho_\nu=\frac{dE}{dV\,d\nu}
$$

### Planck-Type Distribution

$$
\rho_\nu
=
\frac{\alpha \nu^3}{\exp(\beta \nu/T)-1}
$$

### Planck Radiation Law

$$
\rho_\nu
=
\frac{8\pi h\nu^3}{c^3}
\cdot
\frac{1}{e^{h\nu/(k_B T)}-1}
$$

### Energy Quantum

$$
E=h\nu
$$

