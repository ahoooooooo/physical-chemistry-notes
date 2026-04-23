---
chapter: 4
page: 4
title: "Wavelength-Size Relations and Blackbody Radiation"
source: "Text Chapter 11"
sections:
  - Wavelength-size relation
  - Blackbody
  - Blackbody radiation
tags:
  - diffraction
  - transmission
  - blackbody
  - thermodynamic equilibrium
  - blackbody radiation
---

# Chapter 4 — Wavelength-Size Relations and Blackbody Radiation

## 1. EM Wave and Object Size

這一段延續上一頁，討論 electromagnetic wave 的 wavelength $\lambda$ 相對於物體、孔洞、障礙物或結構尺寸時，如何影響波的行為。

原筆記列出幾個簡化情況：

- 若 $\lambda < d$，wave is transmitted。
- 若 $\lambda \approx d$，wave is diffracted。
- 若 $\lambda \approx \sigma$，wave is diffracted。

其中：

- $d$：粒子之間的距離（相鄰散射中心的間距）。
- $\sigma$：粒子本身的直徑。

![Particle spacing d vs particle diameter sigma](images/diffraction-size-scale.png "A row of particles on a baseline — $d$ marks the inter-particle distance; $\sigma$ marks a single particle's diameter.")

### 1.1 Core Idea

當波長和物體的幾何尺度相比時：

- $\lambda$ 很小於結構尺度時，波較容易穿過，幾何光學近似較適用。
- $\lambda$ 與結構尺度相近時，容易出現 diffraction（繞射）。
- $\lambda$ 與散射中心尺寸相近時，也可能出現明顯 diffraction / scattering。

最重要的概念是：

> 繞射通常在波長和障礙物 / 孔徑尺寸可相比時最明顯。

### 1.2 Limitation of This Classification

原筆記把波的行為簡化成 $\lambda<d$ 時 transmitted、$\lambda\approx d$ 或 $\lambda\approx\sigma$ 時 diffracted。這可以拿來抓大方向，但不能當成絕對規則。

真實情況還會受到下列因素影響：

- 材料性質
- 邊界條件
- 結構形狀
- 入射角度
- 是否為週期性排列

比較安全的記法是：當 wavelength 和結構尺寸相近時，diffraction effect 會變得明顯。

## 2. Blackbody

### 2.1 Definition

Blackbody（黑體）是一種理想化物體，特性是能吸收所有入射輻射：

$$
\text{absorbs all incident radiation}
$$

也就是不論入射輻射的 frequency 或 angle of incidence，blackbody 都可以完全吸收。

換句話說，理想 blackbody 的 absorptivity 是 1。

### 2.2 Thermodynamic Equilibrium

當 blackbody 與周圍環境處在 perfect thermodynamic equilibrium 時：

- 它吸收外界來的輻射。
- 它同時也向外放射輻射。
- 在平衡狀態下，整體不會持續淨吸熱或淨放熱。

原筆記寫成：

> the radiation striking it would be equal in intensity to the radiation emitted by it

比較精確的理解是：在 thermodynamic equilibrium 下，吸收與放射整體達到平衡，沒有淨能量流失或累積。

### 2.3 Ideal Model

Blackbody 是理想模型。現實中沒有完美 blackbody，但很多系統可以近似看成 blackbody，因此它在物理與物理化學中是很重要的模型。

## 3. Blackbody Radiation

### 3.1 Definition

Blackbody radiation（黑體輻射）是：

$$
\text{the radiation emitted by a blackbody in thermodynamic equilibrium}
$$

也就是黑體在熱平衡狀態下所放出的 electromagnetic radiation。

### 3.2 Key Properties

Blackbody radiation 具有特定的：

- spectrum（光譜分布）
- intensity（強度分布）

而且這些分布只取決於 temperature $T$，不取決於 material。

也就是說：

- 同一溫度下，理想 blackbody 的 radiation spectrum 是固定的。
- 改變溫度，光譜分布就會改變。
- 這正是後面 Planck law 要處理的核心問題。

### 3.3 Why This Matters

"Independent of material" 是 blackbody radiation 的關鍵。意思不是說材料真的不存在，而是理想黑體的輻射分布由溫度決定，而不是由材質決定。

這件事會導向：

- classical theory 無法正確解釋 blackbody spectrum。
- Planck 需要提出 energy quantization 的假設。
- Quantum theory 開始形成。

## Key Ideas

### Diffraction

當 wavelength 與障礙物 / 孔徑 / 結構尺寸相近時，diffraction 會變得明顯。

### Blackbody

Blackbody 是能吸收所有 incident radiation 的理想物體，不論 frequency 或 angle of incidence。

### Blackbody Radiation

Blackbody radiation 是黑體在 thermodynamic equilibrium 下所放出的輻射。

### Temperature Dependence

Blackbody radiation 的 spectrum 與 intensity 只與 temperature 有關，與 material 無關。

