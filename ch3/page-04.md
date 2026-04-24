---
chapter: 3
page: 4
title: "Energy Averaging via Maxwell–Boltzmann"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Reactive cross section plot
  - Rate for a fixed energy pair
  - Averaging via Maxwell–Boltzmann distribution
  - Variable change u to epsilon
  - Integral form of k
tags:
  - HS collision theory
  - reactive cross section
  - Maxwell-Boltzmann
  - reduced mass
  - activation energy
  - rate constant
---

# Chapter 3 — Energy Averaging via Maxwell–Boltzmann

## 1. 本頁在整章中的位置

承接 Page 03 得到的 reactive cross section $\sigma_h(\varepsilon)$。本頁做兩件事：

1. 把 $\sigma_h(\varepsilon)$ 圖像化，看清楚「門檻以上才反應」的形狀。
2. 把「固定 $\varepsilon$ 的速率」對 **Maxwell–Boltzmann distribution** 做平均，得到含積分的 rate constant $k$。

下一頁會把這個積分算出來，收到 Arrhenius 形式 $k = Ae^{-E_a/RT}$。

## 2. Reactive Cross Section 的形狀

分段形式：

$$
\sigma_h(\varepsilon) = \sigma\left(1 - \frac{E_\min}{\varepsilon}\right),\qquad \varepsilon \ge E_\min
$$

$$
\sigma_h(\varepsilon) = 0,\qquad \varepsilon < E_\min \quad (\text{不反應})
$$

把 $\sigma_h/\sigma$ 對 $\varepsilon/E_\min$ 作圖：

- $\varepsilon < E_\min$：平坦 0
- $\varepsilon = E_\min$：剛開始非零
- $\varepsilon \to \infty$：$\sigma_h/\sigma \to 1$（趨近總碰撞截面）

## 3. 對固定能量對的速率表達

對一對固定相對動能為 $\varepsilon$ 的分子而言，由 Page 02 的結構：

$$
-\frac{d[A]}{dt}
\propto
\sigma_h(\varepsilon)\,u_{AB}\,N_\mathrm{A}\,[A][B]
\qquad (\text{for any pair }A\text{–}B)
$$

其中 $\sigma_h(\varepsilon)\,u_{AB}\,N_\mathrm{A}$ 就是這對分子的「有效 $k$」。但真實氣體中不同分子對速度不同，必須對 **速率分布** 做平均。

## 4. Maxwell–Boltzmann Distribution

### 4.1 3D Relative Speed Distribution

對兩分子的相對速率 $u$：

$$
f(u)\,du = 4\pi u^2\left(\frac{\mu}{2\pi k_B T}\right)^{3/2}e^{-\mu u^2/(2 k_B T)}\,du
$$

其中 $\mu$ 是 reduced mass。

### 4.2 1D 對照（原頁左側綠色框）

$$
f(u_x) = \left(\frac{m}{2\pi k_B T}\right)^{1/2}e^{-m u_x^2/(2k_B T)}
$$

（1D 是為了對比用，實際計算要用 3D 版本。）

## 5. 把變數由 $u$ 換成 $\varepsilon$

定義相對平動能：

$$
\varepsilon = \frac12\mu u^2
\;\Longrightarrow\;
u = \sqrt{\frac{2\varepsilon}{\mu}}
\;\Longrightarrow\;
du = \frac{d\varepsilon}{\sqrt{2\mu\varepsilon}}
$$

把 $f(u)\,du$ 改寫成 $f(\varepsilon)\,d\varepsilon$ 形式，並注意 $u^2 = 2\varepsilon/\mu$、$e^{-\mu u^2/(2k_B T)} = e^{-\varepsilon/k_B T}$。

## 6. 對能量分布做平均

### 6.1 平均式

$$
-\frac{d[A]}{dt}
= N_\mathrm{A}\,[A][B]\int_0^\infty \sigma_h(\varepsilon)\,u\,f(\varepsilon)\,d\varepsilon
$$

因 $\sigma_h(\varepsilon) = 0$ 當 $\varepsilon < E_\min$，積分下限可改為 $E_\min$：

$$
-\frac{d[A]}{dt}
= N_\mathrm{A}\,[A][B]\int_{E_\min}^\infty \sigma_h(\varepsilon)\,u\,f(\varepsilon)\,d\varepsilon
$$

### 6.2 逐步代入

把以下三件代入：

1. $\sigma_h(\varepsilon) = \sigma(1 - E_\min/\varepsilon)$
2. $u = (2\varepsilon/\mu)^{1/2}$
3. $f(u)\,du = 4\pi u^2(\mu/2\pi k_B T)^{3/2}e^{-\varepsilon/k_B T}\,du$ 換成 $f(\varepsilon)\,d\varepsilon$

中間步驟（原頁完整寫出）：

$$
= \sigma\,N_\mathrm{A}\,[A][B]\int_{E_\min}^\infty \left(1 - \frac{E_\min}{\varepsilon}\right)\left(\frac{2\varepsilon}{\mu}\right)^{1/2}\cdot 4\pi\left(\frac{2\varepsilon}{\mu}\right)\left(\frac{\mu}{2\pi k_B T}\right)^{3/2}e^{-\varepsilon/k_B T}\,\frac{1}{\sqrt{2\mu\varepsilon}}\,d\varepsilon
$$

整理常數與 $\varepsilon$ 次方後：

$$
= N_\mathrm{A}\left(\frac{8}{\pi\mu k_B T}\right)^{1/2}\frac{1}{k_B T}\,\sigma\int_{E_\min}^\infty \left(1 - \frac{E_\min}{\varepsilon}\right)\varepsilon\,e^{-\varepsilon/k_B T}\,d\varepsilon\,[A][B]
$$

### 6.3 辨識出 k

與 $-d[A]/dt = k[A][B]$ 相比，並注意 $(1 - E_\min/\varepsilon)\varepsilon = \varepsilon - E_\min$：

$$
\boxed{\,k = N_\mathrm{A}\left(\dfrac{8}{\pi\mu k_B T}\right)^{1/2}\dfrac{\sigma}{k_B T}\int_{E_\min}^\infty (\varepsilon - E_\min)\,e^{-\varepsilon/k_B T}\,d\varepsilon\,}
$$

## 7. 本頁結果的物理結構

$k$ 可以看成三塊乘積：

| 因子 | 物理意義 |
| --- | --- |
| $\sigma$ | 碰撞幾何（cross section） |
| $\sqrt{8/(\pi\mu k_B T)}$ | 平均相對熱速率尺度（來自 Maxwell–Boltzmann） |
| 積分 $\displaystyle\int_{E_\min}^\infty (\varepsilon - E_\min)e^{-\varepsilon/k_B T}\,d\varepsilon$ | 「能量夠大且夠 head-on」的碰撞比例 |

下一頁會把這個積分算出來，收進 Arrhenius 的指數項 $e^{-E_a/RT}$。

## Key Formulas

### Reactive Cross Section（分段）

$$
\sigma_h(\varepsilon) = \sigma\left(1 - \frac{E_\min}{\varepsilon}\right)\;(\varepsilon \ge E_\min),\qquad \sigma_h(\varepsilon) = 0\;(\varepsilon < E_\min)
$$

### Maxwell–Boltzmann (3D Relative Speed)

$$
f(u)\,du = 4\pi u^2\left(\frac{\mu}{2\pi k_B T}\right)^{3/2}e^{-\mu u^2/(2k_B T)}\,du
$$

### Variable Change

$$
\varepsilon = \frac12\mu u^2,\quad u = \sqrt{2\varepsilon/\mu},\quad du = \frac{d\varepsilon}{\sqrt{2\mu\varepsilon}}
$$

### Rate Constant (積分形式)

$$
\boxed{\,k = N_\mathrm{A}\left(\dfrac{8}{\pi\mu k_B T}\right)^{1/2}\dfrac{\sigma}{k_B T}\int_{E_\min}^\infty (\varepsilon - E_\min)\,e^{-\varepsilon/k_B T}\,d\varepsilon\,}
$$
