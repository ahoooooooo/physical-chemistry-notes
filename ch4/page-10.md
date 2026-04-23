---
chapter: 4
page: 10
title: "Photoelectric Calculation and Compton Effect"
source: "Text Chapter 11"
sections:
  - Photoelectric calculation
  - Potassium example
  - Compton effect
  - Photon momentum
tags:
  - photoelectric effect
  - work function
  - potassium
  - Compton effect
  - photon momentum
  - X-ray scattering
---

# Chapter 4 — Photoelectric Calculation and Compton Effect

## 1. Photoelectric Effect Calculation

延續上一頁的 Einstein photoelectric equation：

$$
h\nu=\phi+K_{\max}
$$

因為：

$$
E_{\text{photon}}=h\nu=\frac{hc}{\lambda}
$$

所以也可寫成：

$$
\boxed{
\frac{hc}{\lambda}
=
\phi+\frac{1}{2}mv^2
}
$$

其中：

- $\phi$：work function（逸出功），原筆記使用 $W$。
- $m$：electron mass。
- $v$：ejected electron 的速度。

## 2. Potassium Example

原筆記中的條件可整理為：

- Metal：Potassium。
- Work function：$\phi\approx 2.0\ \text{eV}$。
- Incident wavelength：$\lambda=550\ \text{nm}$。

常用常數：

$$
m_e=9.11\times10^{-31}\ \text{kg}
$$

$$
1\ \text{eV}=1.60\times10^{-19}\ \text{J}
$$

$$
h=6.626\times10^{-34}\ \text{J s}
$$

$$
c=3.00\times10^8\ \text{m/s}
$$

### 2.1 Photon Energy

先算 photon energy：

$$
E_{\text{photon}}
=
\frac{hc}{\lambda}
$$

代入：

$$
E_{\text{photon}}
=
\frac{(6.626\times10^{-34})(3.00\times10^8)}
{550\times10^{-9}}
\approx
3.61\times10^{-19}\ \text{J}
$$

換算成 eV：

$$
E_{\text{photon}}
\approx
\frac{3.61\times10^{-19}}{1.60\times10^{-19}}
\approx
2.25\ \text{eV}
$$

### 2.2 Maximum Kinetic Energy

因此 maximum kinetic energy 為：

$$
K_{\max}
=
E_{\text{photon}}-\phi
\approx
2.25-2.0
=
0.25\ \text{eV}
$$

換成 joule：

$$
K_{\max}
\approx
0.25(1.60\times10^{-19})
=
4.0\times10^{-20}\ \text{J}
$$

### 2.3 Electron Speed

由：

$$
K_{\max}=\frac{1}{2}m_ev^2
$$

可得：

$$
v
=
\sqrt{\frac{2K_{\max}}{m_e}}
$$

代入：

$$
v
\approx
\sqrt{
\frac{2(4.0\times10^{-20})}
{9.11\times10^{-31}}
}
\approx
2.96\times10^5\ \text{m/s}
$$

這和原筆記上的結果一致。原筆記把速度寫成 $u$，此處整理為 electron speed $v$。

## 3. Compton Effect

Compton effect（康普頓效應）是 X-ray scattering 的實驗現象。Compton 在 1923 年提出解釋，並於 1927 年獲得 Nobel Prize。

![Compton scattering geometry](images/compton-scattering.png "Incident photon of wavelength $\lambda$ scatters off a nearly free electron; scattered photon has longer wavelength $\lambda'$ at angle θ, electron recoils (Wikipedia Commons).")

### 3.1 Experimental Observation

當 X-ray 撞擊 electron 後，scattered X-ray 具有：

- 較長 wavelength。
- 較低 frequency。
- 因此也具有較低 energy。

也就是：

$$
\lambda_f>\lambda_i
$$

其中：

- $\lambda_i$：incident photon 的 wavelength。
- $\lambda_f$：scattered photon 的 wavelength。

原筆記寫出：

$$
\Delta\lambda=\lambda_f-\lambda_i
$$

### 3.2 Physical Meaning

根據：

$$
E=\frac{hc}{\lambda}
$$

若 scattered photon 的 wavelength 變長，代表 photon energy 變小。這表示 incident photon 把一部分 energy transfer 給 electron。

同時，photon 在散射後改變方向與 momentum，因此 Compton effect 必須把 photon 當作具有：

- energy
- momentum

的 particle 來處理。

## 4. Photon-Electron Collision Picture

Compton effect 可理解為：

- 一個 incident photon 撞上一個原本靜止或近似靜止的 electron。
- Photon 被 scattered。
- Electron 獲得 energy 和 momentum，並 recoil（反衝）。

整個過程必須同時滿足：

$$
\text{conservation of energy}
$$

和：

$$
\text{conservation of momentum}
$$

這是 light 具有 particle nature 的重要證據。

## 5. Compton Shift

原頁先寫到 wavelength change：

$$
\Delta\lambda=\lambda_f-\lambda_i
$$

標準 Compton shift 公式為：

$$
\boxed{
\Delta\lambda
=
\lambda_f-\lambda_i
=
\frac{h}{m_ec}(1-\cos\theta)
}
$$

其中：

- $m_e$：electron mass。
- $\theta$：photon scattering angle。
- $\frac{h}{m_ec}$：Compton wavelength of electron。

這表示 scattering angle 不同，wavelength shift 也不同。最大 wavelength shift 出現在：

$$
\theta=180^\circ
$$

## 6. Photon Momentum

Compton effect 需要同時使用 photon energy 和 photon momentum。

Photon energy：

$$
E=h\nu=\frac{hc}{\lambda}
$$

Photon momentum：

$$
\boxed{
p_{\text{photon}}=\frac{h}{\lambda}
}
$$

這個公式要和 Compton effect 一起記，因為只考慮 energy conservation 不足以推導出正確的 wavelength shift；必須同時使用 momentum conservation。

## 7. Why Compton Effect Matters

在 classical wave picture 中，scattered light 不應該出現這種依 scattering angle 改變的 wavelength shift。

但實驗觀察到：

- scattered wavelength 真的變長。
- wavelength shift 符合 particle collision 的 energy 與 momentum conservation。

因此 Compton effect 提供直接證據：

> Photon has both energy $E=h\nu$ and momentum $p=h/\lambda$.

## Key Formulas

### Photoelectric Calculation

$$
\boxed{
\frac{hc}{\lambda}
=
\phi+\frac{1}{2}mv^2
}
$$

### Potassium Example

$$
\phi\approx 2.0\ \text{eV},
\qquad
\lambda=550\ \text{nm}
$$

$$
E_{\text{photon}}\approx 2.25\ \text{eV}
$$

$$
K_{\max}\approx 0.25\ \text{eV}
$$

$$
v\approx 2.96\times10^5\ \text{m/s}
$$

### Compton Wavelength Shift

$$
\boxed{
\Delta\lambda=\lambda_f-\lambda_i
}
$$

$$
\boxed{
\Delta\lambda
=
\frac{h}{m_ec}(1-\cos\theta)
}
$$

### Photon Momentum

$$
\boxed{
p_{\text{photon}}=\frac{h}{\lambda}
}
$$

