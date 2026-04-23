---
chapter: 4
page: 3
title: "Standing Wave Boundary Conditions and EM Radiation Interactions"
source: "Text Chapter 11"
sections:
  - Standing wave boundary conditions
  - Quantization of standing waves
  - EM radiation interactions
tags:
  - boundary conditions
  - standing wave
  - quantization
  - antinode
  - absorption
  - electronic transition
---

# Chapter 4 — Standing Wave Boundary Conditions and EM Radiation Interactions

## 1. Standing Wave Boundary Conditions

若一條長度為 $l$ 的弦兩端固定，則駐波必須滿足：

$$
y(0,t)=0,
\qquad
y(l,t)=0
$$

這就是固定端的 boundary conditions（邊界條件）。

### 1.1 Standing Wave Equation

由前一頁可知，駐波可寫成：

$$
y(x,t)=2A\sin(kx)\cos(\omega t)
$$

其中：

$$
k=\frac{2\pi}{\lambda}
$$

所以也可寫成：

$$
y(x,t)
=
2A\sin\left(\frac{2\pi x}{\lambda}\right)\cos(\omega t)
$$

### 1.2 Apply Boundary Conditions

在 $x=0$：

$$
y(0,t)=2A\sin(0)\cos(\omega t)=0
$$

這個條件會自動滿足。

在 $x=l$：

$$
y(l,t)
=
2A\sin\left(\frac{2\pi l}{\lambda}\right)\cos(\omega t)
=0
$$

要對所有時間都成立，必須有：

$$
\sin\left(\frac{2\pi l}{\lambda}\right)=0
$$

因此：

$$
\frac{2\pi l}{\lambda}=n\pi
\qquad
(n=1,2,3,\dots)
$$

整理得允許波長：

$$
\lambda=\frac{2l}{n}
$$

## 2. Quantization of Standing Waves

固定邊界條件會限制駐波只能取某些特定波長。也就是說，在固定長度 $l$ 的系統中，只允許：

$$
\lambda_1=2l,
\qquad
\lambda_2=l,
\qquad
\lambda_3=\frac{2l}{3},
\dots
$$

因此 standing wave 的波長是 discrete（離散）的，而不是 continuous（連續任意）的。

這個概念很重要，因為後面 quantum mechanics 會用類似想法描述電子波函數：波函數必須符合 boundary conditions，因此允許的狀態與能量也會變成離散的。

### 2.1 Meaning of $n$

在兩端固定的弦中：

- $n$ 是 mode number（振動模態編號）。
- $n$ 也可視為 number of antinodes（腹點數）。

例如：

- $n=1$：fundamental mode / first harmonic，有 1 個腹點，$\lambda=2l$。
- $n=2$：second harmonic，有 2 個腹點，$\lambda=l$。

### 2.2 Diagram Notes

原頁上方畫出 $n=1$ 與 $n=2$ 的 standing wave 模式：

- $n=1$：兩端固定，中間 1 個 antinode。
- $n=2$：兩端固定，中間多 1 個 node，共 2 個 antinodes。
- 圖中也畫出不同時刻的波形位置變化，但整體型態固定，表示這是 standing wave。

圖上的重點是：

- nodes 固定不動。
- antinodes 振幅最大。
- 不同 mode 對應不同 wavelength。
- $n$ 越大，波長越短。

## 3. Properties of EM Radiation Interacting with Matter

當 electromagnetic wave 打到物體上時，可能發生多種現象，例如：

- absorption（吸收）
- transmission（穿透 / 透射）
- reflection（反射）
- refraction（折射）
- diffraction（繞射）
- scattering（散射）

### 3.1 Frequency Matches Natural Frequency: Absorption

若 EM wave 的頻率剛好和物體內部某種運動的 natural frequency 相符，則輻射容易被吸收。

這種 absorption 可能導致：

- molecular rotation（分子轉動）
- molecular vibration（分子振動）
- electronic transition（電子躍遷）
- bond breaking（鍵結斷裂）
- ionization（游離）

這裡原筆記的 "electron transmission" 應修正為 **electronic transition**。

### 3.2 Frequency Does Not Match

若 EM wave 的頻率不符合材料可吸收的能階或自然頻率，則它可能：

- 被 transmitted（透射）
- 被 reflected（反射）
- 被 diffracted（繞射）

### 3.3 Relation Between Wavelength and Size

頁尾開始討論 wavelength $\lambda$ 和物體尺寸 / 孔洞尺寸 $d$ 的相對大小，會如何影響波的行為。

本頁先寫到：

$$
\lambda > d
$$

原筆記接著寫成 "the wave is reflected"。

這是一個簡化分類，實際上波和物體的互動還與材料性質、邊界條件、幾何形狀與入射方式有關。比較安全的理解方式是：當波長和障礙物 / 孔徑大小 $d$ 的比例不同時，reflection、transmission、diffraction 的表現會不同。這段需要接第 4 頁一起看。

## Key Formulas

### Fixed-End Boundary Conditions

$$
y(0,t)=0,
\qquad
y(l,t)=0
$$

### Allowed Wavelengths

$$
\sin\left(\frac{2\pi l}{\lambda}\right)=0
$$

$$
\frac{2\pi l}{\lambda}=n\pi
$$

$$
\lambda=\frac{2l}{n},
\qquad
n=1,2,3,\dots
$$

### Meaning of Mode Number

For a string fixed at both ends:

$$
n=\text{mode number}=\text{number of antinodes}
$$

