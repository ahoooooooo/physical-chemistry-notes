---
chapter: 4
page: 14
title: "de Broglie Wavelength and Electron Waves"
source: "Text Chapter 11"
sections:
  - Photon momentum
  - de Broglie wavelength
  - Electron acceleration example
  - Electron diffraction
tags:
  - de Broglie wavelength
  - photon momentum
  - electron wave
  - electron diffraction
  - matter waves
  - atomic scale
---

# Chapter 4 — de Broglie Wavelength and Electron Waves

## 1. Photon Momentum

對 photon 而言：

$$
E=h\nu
$$

上一頁也已知：

$$
E=pc
$$

又因為：

$$
\nu=\frac{c}{\lambda}
$$

所以：

$$
E=h\nu=h\frac{c}{\lambda}
$$

與 $E=pc$ 比較：

$$
pc=\frac{hc}{\lambda}
$$

因此：

$$
\boxed{
p=\frac{h}{\lambda}
}
$$

這是 photon momentum 和 wavelength 的關係。

原筆記一開始寫成：

$$
E=p_{\text{photon}}c
=p_{\text{photon}}\lambda\nu
=h\nu
$$

因為 $c=\lambda\nu$，所以這串式子最後也是推出 $p_{\text{photon}}=h/\lambda$。

## 2. de Broglie's Hypothesis

de Broglie 認為：如果 photon 可以同時具有 particle nature 和 wave nature，那麼一般 particles 也應該可以對應一個 wavelength。

因此定義 particle 的 wavelength 為：

$$
\boxed{
\lambda=\frac{h}{p}
}
$$

這個 $\lambda$ 稱為 de Broglie wavelength（德布羅意波長）。

對 non-relativistic particle，若：

$$
p=mu
$$

則：

$$
\boxed{
\lambda=\frac{h}{mu}
}
$$

原筆記使用 $u$ 表示 particle speed，也可讀成更常見的 $v$。

## 3. Example: Electron Accelerated by 100 V

題意：一顆 electron 被 $100\ \text{V}$ potential difference 加速，求其 de Broglie wavelength。

### 3.1 Kinetic Energy

電子經過 potential difference $V$ 加速後，獲得 kinetic energy：

$$
E_k=eV
$$

其中：

- $e=1.60\times10^{-19}\ \text{C}$
- $V=100\ \text{V}$

所以：

$$
E_k
=
(1.60\times10^{-19})(100)
=
1.60\times10^{-17}\ \text{J}
$$

### 3.2 Electron Speed

對 non-relativistic speed，可用：

$$
E_k=\frac{1}{2}mu^2
$$

所以：

$$
u=\sqrt{\frac{2E_k}{m}}
$$

代入 electron mass：

$$
m_e=9.11\times10^{-31}\ \text{kg}
$$

得：

$$
u
=
\sqrt{
\frac{2(1.60\times10^{-17})}
{9.11\times10^{-31}}
}
\approx
5.93\times10^6\ \text{m/s}
$$

也就是：

$$
u\approx \frac{1}{50}c
$$

因為速度遠小於 speed of light，所以使用 non-relativistic kinetic energy 公式是合理的。

### 3.3 de Broglie Wavelength

使用：

$$
\lambda=\frac{h}{mu}
$$

其中：

$$
h=6.626\times10^{-34}\ \text{J s}
$$

代入：

$$
\lambda
=
\frac{6.626\times10^{-34}}
{(9.11\times10^{-31})(5.93\times10^6)}
\approx
1.23\times10^{-10}\ \text{m}
$$

所以：

$$
\boxed{
\lambda\approx 1.23\times10^{-10}\ \text{m}
}
$$

這也等於：

$$
1.23\ \text{Å}
$$

## 4. Physical Meaning

電子的 de Broglie wavelength：

$$
\lambda\sim10^{-10}\ \text{m}
$$

和 atomic size 是同一個量級。

因此，在 atomic scale 下，electron 不能再只當成 classical particle，而必須把 wave nature 納入考慮。

這解釋為什麼 electron 在原子尺度會出現：

- interference
- diffraction
- standing-wave behavior

這也是後面會把 Bohr orbit 重新詮釋成 standing wave 的原因。

## 5. Experimental Evidence: Electron Diffraction

原筆記提到：

- G. P. Thomson
- 1937 Nobel Prize
- electron diffraction experiment

Electron diffraction experiment 直接觀察到 electrons 產生 diffraction pattern。

Diffraction 是 wave 的典型行為，因此這支持：

$$
\boxed{
\text{electrons have wave-like properties}
}
$$

這使 de Broglie hypothesis 得到強力支持。

## 6. Why Macroscopic Objects Do Not Show Visible Wave Behavior

對像 humans 這種 macroscopic objects，mass 和 momentum 都很大。

因為：

$$
\lambda=\frac{h}{p}
$$

所以 de Broglie wavelength 會非常小。原筆記寫約：

$$
\lambda\approx10^{-36}\ \text{m}
$$

這不是固定精確值，而是量級說明：對 macroscopic objects 而言，de Broglie wavelength 小到幾乎無法觀察，因此沒有 perceivable wave-like characteristics。

## Key Formulas

### Photon Momentum

$$
\boxed{
p=\frac{h}{\lambda}
}
$$

### de Broglie Wavelength

$$
\boxed{
\lambda=\frac{h}{p}
}
$$

For non-relativistic particles:

$$
\boxed{
\lambda=\frac{h}{mu}
}
$$

### Electron Accelerated by 100 V

$$
E_k=eV=1.60\times10^{-17}\ \text{J}
$$

$$
u\approx5.93\times10^6\ \text{m/s}
$$

$$
\boxed{
\lambda\approx1.23\times10^{-10}\ \text{m}
}
$$

