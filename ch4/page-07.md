---
chapter: 4
page: 7
title: "Planck Average Energy and Ultraviolet Catastrophe"
source: "Text Chapter 11"
sections:
  - Total oscillator energy
  - Average oscillator energy
  - Planck radiation law
  - Rayleigh-Jeans equation
  - Ultraviolet catastrophe
tags:
  - Planck oscillator
  - average energy
  - Planck radiation law
  - Rayleigh-Jeans equation
  - ultraviolet catastrophe
  - classical limit
---

# Chapter 4 — Planck Average Energy and Ultraviolet Catastrophe

## 1. Total Energy of the Oscillators

延續上一頁：

$$
\varepsilon_n = nh\nu
$$

$$
N_n = N_0 e^{-nh\nu/(k_B T)}
$$

所以所有 oscillators 的 total energy 為：

$$
E=\sum_{n=0}^{\infty} N_n \varepsilon_n
$$

代入後：

$$
E
=
\sum_{n=0}^{\infty}
N_0 e^{-nh\nu/(k_B T)}(nh\nu)
$$

把 $N_0h\nu$ 提出：

$$
E
=
N_0h\nu
\sum_{n=0}^{\infty}
n e^{-nh\nu/(k_B T)}
$$

令：

$$
x=e^{-h\nu/(k_B T)}
$$

則：

$$
E
=
N_0h\nu
\sum_{n=0}^{\infty} nx^n
$$

因為 $n=0$ 那項為 0，所以：

$$
E
=
N_0h\nu
(x+2x^2+3x^3+\cdots)
$$

利用級數公式：

$$
x+2x^2+3x^3+\cdots
=
\frac{x}{(1-x)^2}
\qquad
(|x|<1)
$$

因此：

$$
E
=
N_0h\nu
\frac{x}{(1-x)^2}
$$

再代回 $x=e^{-h\nu/(k_B T)}$：

$$
E
=
\frac{
N_0h\nu e^{-h\nu/(k_B T)}
}{
\left(1-e^{-h\nu/(k_B T)}\right)^2
}
$$

這裡的 $E=\sum N_n\varepsilon_n$ 是 weighted sum：每個能階的人數乘上該能階能量，再全部相加。

## 2. Average Energy per Oscillator

由上一頁：

$$
N=\frac{N_0}{1-x}
$$

平均能量為：

$$
\langle \varepsilon \rangle
=
\bar{\varepsilon}
=
\frac{E}{N}
$$

代入：

$$
\langle \varepsilon \rangle
=
\frac{
N_0h\nu \dfrac{x}{(1-x)^2}
}{
N_0 \dfrac{1}{1-x}
}
=
h\nu\frac{x}{1-x}
$$

因為：

$$
x=e^{-h\nu/(k_B T)}
$$

所以：

$$
\langle \varepsilon \rangle
=
h\nu
\frac{e^{-h\nu/(k_B T)}}{1-e^{-h\nu/(k_B T)}}
$$

分子分母同乘 $e^{h\nu/(k_B T)}$，可得更常見形式：

$$
\boxed{
\langle \varepsilon \rangle
=
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
}
$$

這是 Planck oscillator model 的核心結果，也是導出 blackbody spectrum 的關鍵。

## 3. Classical Limit

若：

$$
h\nu \ll k_B T
$$

表示 quantum spacing $h\nu$ 相對於 thermal energy $k_B T$ 很小，可以近似為：

$$
e^{h\nu/(k_B T)}
\approx
1+\frac{h\nu}{k_B T}
$$

因此：

$$
e^{h\nu/(k_B T)}-1
\approx
\frac{h\nu}{k_B T}
$$

帶回平均能量：

$$
\langle \varepsilon \rangle
=
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
\approx
\frac{h\nu}{h\nu/(k_B T)}
=
k_B T
$$

所以：

$$
\boxed{
\langle \varepsilon \rangle \approx k_B T
}
$$

這是 classical physics 的 equipartition 結果。這個極限對應 low frequency 或 high temperature。

## 4. Radiant Energy Density

Blackbody 在 frequency $\nu$ 處的 radiation energy density 可理解為：

$$
\rho_\nu
=
\left(\text{每單位體積的模式數}\right)
\times
\left(\text{每個模式的平均能量}\right)
$$

在電磁場中，每單位體積、每單位頻率區間的 mode density 為：

$$
g(\nu)=\frac{8\pi \nu^2}{c^3}
$$

乘上平均能量：

$$
\langle \varepsilon \rangle
=
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
$$

得到：

$$
\boxed{
\rho_\nu
=
\frac{8\pi \nu^2}{c^3}
\cdot
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
}
$$

也可寫成：

$$
\boxed{
\rho_\nu
=
\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_B T)}-1}
}
$$

這就是 Planck radiation law。

## 5. Rayleigh-Jeans Equation and Ultraviolet Catastrophe

當：

$$
h\nu \ll k_B T
$$

時：

$$
\langle \varepsilon \rangle \approx k_B T
$$

因此：

$$
\rho_\nu
\approx
\frac{8\pi \nu^2}{c^3}k_B T
$$

即：

$$
\boxed{
\rho_\nu^{\text{RJ}}
=
\frac{8\pi \nu^2}{c^3}k_B T
}
$$

這就是 Rayleigh-Jeans equation。

Rayleigh-Jeans equation 在 low-frequency region 是合理近似，但在 high-frequency region 會預測 $\rho_\nu$ 隨 frequency 無限制上升，與實驗不符。

這個 classical theory 的失敗稱為：

$$
\boxed{\text{ultraviolet catastrophe}}
$$

Planck 的量子化公式則能正確給出：

- low frequency 時近似 classical result。
- high frequency 時不會發散。
- 整體曲線會先上升、到達 peak，再下降。

## 6. Diagram Notes

原頁底部畫了一張 $\rho_\nu$ 對 frequency 的示意圖：

- Rayleigh-Jeans curve：隨 frequency 一直往上升。
- Planck curve：先上升後下降，有 peak。

圖的核心意義是 classical prediction 在 high-frequency region 失敗，而 quantum prediction 能符合實驗。

## Key Formulas

### Total Energy

$$
E=\sum_n N_n\varepsilon_n
$$

$$
E
=
N_0h\nu(x+2x^2+3x^3+\cdots)
$$

$$
E
=
N_0h\nu\frac{x}{(1-x)^2}
\qquad
\left(x=e^{-h\nu/(k_B T)}\right)
$$

### Average Energy

$$
\boxed{
\langle \varepsilon \rangle
=
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
}
$$

### Classical Limit

$$
h\nu \ll k_B T
\Rightarrow
\langle \varepsilon \rangle \approx k_B T
$$

### Planck Radiation Law

$$
\boxed{
\rho_\nu
=
\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_B T)}-1}
}
$$

### Rayleigh-Jeans Equation

$$
\boxed{
\rho_\nu^{\text{RJ}}
=
\frac{8\pi \nu^2}{c^3}k_B T
}
$$

## Common Mistakes

1. 不要把 total energy $E$ 和 average energy $\langle\varepsilon\rangle$ 搞混。
2. $E=\sum N_n\varepsilon_n$ 是 weighted sum，不是單純加總 $N_n$。
3. Classical limit 來自 $h\nu\ll k_B T$，也就是 low frequency 或 high temperature。
4. $\frac{8\pi\nu^2}{c^3}$ 是 EM mode density，不是任意常數。
5. Rayleigh-Jeans equation 不是完全沒用；它在 low-frequency region 是 Planck law 的近似，但在 high-frequency region 失敗。
6. Ultraviolet catastrophe 指的是 classical prediction 在 high frequency 導致 energy density 發散。

