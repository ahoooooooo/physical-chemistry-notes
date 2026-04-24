---
chapter: practice
page: hw4
title: "HW4 — Ch.4 Quantum Theory 基礎計算"
source: "HW4.pdf"
sections:
  - 11.1 光子參數計算
  - 11.5 彈簧 SHM
  - 11.13 光電效應
tags:
  - homework
  - photon
  - SHM
  - photoelectric effect
  - Planck
---

# HW4 — Ch.4 Quantum Theory 基礎計算

## 11.1 — 325 nm 光的基本參數

### 題目

Calculate, for light of 325 nm wavelength:
- **a.** the frequency
- **b.** the wavenumber
- **c.** the photon energy in J, eV, and kJ/mol
- **d.** the momentum of the photon

### 已知
$\lambda = 325\ \mathrm{nm} = 325\times 10^{-9}\ \mathrm{m}$

### 解答

**a. Frequency** $\nu = c/\lambda$

$$\nu = \frac{2.998\times 10^8}{325\times 10^{-9}} = 9.22\times 10^{14}\ \mathrm{s^{-1}}$$

**b. Wavenumber** $\tilde{\nu} = 1/\lambda$

$$\tilde{\nu} = \frac{1}{325\times 10^{-7}\ \mathrm{cm}} = 30\,769\ \mathrm{cm^{-1}} = 3.08\times 10^4\ \mathrm{cm^{-1}}$$

**c. Photon energy**

$$E = h\nu = (6.626\times 10^{-34})(9.22\times 10^{14}) = 6.11\times 10^{-19}\ \mathrm{J}$$

$$E = \frac{6.11\times 10^{-19}}{1.602\times 10^{-19}} = 3.82\ \mathrm{eV}$$

$$E\cdot N_\mathrm{A} = (6.11\times 10^{-19})(6.022\times 10^{23}) = 368\ \mathrm{kJ/mol}$$

**d. Photon momentum** $p = h/\lambda$

$$p = \frac{6.626\times 10^{-34}}{325\times 10^{-9}} = 2.04\times 10^{-27}\ \mathrm{kg\cdot m/s}$$

---

## 11.5 — 彈簧質量系統的 SHM

### 題目

A mass of **0.2 kg** attached to a spring has a period of vibration of **3.0 s**.
- **a.** What is the force constant of the spring?
- **b.** If the amplitude of vibration is **0.010 m**, what is the maximum velocity?

### 已知
$m = 0.2\ \mathrm{kg}$, $T = 3.0\ \mathrm{s}$, $A = 0.010\ \mathrm{m}$

### 解答

**a. Force constant $k$**

由 $T = 2\pi\sqrt{m/k}$：

$$k = m\left(\frac{2\pi}{T}\right)^2 = 0.2\left(\frac{2\pi}{3.0}\right)^2 = 0.877\ \mathrm{N/m}$$

$$\boxed{\,k = 0.88\ \mathrm{N/m}\,}$$

**b. Maximum velocity**

由 $x(t) = A\sin(\omega t+\delta)$ 微分得 $v = A\omega\cos(\omega t+\delta)$，最大值：

$$v_{\max} = A\omega = A\sqrt{\frac{k}{m}} = (0.010)\sqrt{\frac{0.877}{0.2}}$$

$$\boxed{\,v_{\max} = 2.1\times 10^{-2}\ \mathrm{m/s}\,}$$

---

## 11.13 — 鉑的光電效應

### 題目

Photoelectric experiments show that about **5 eV** of energy are required to remove an electron from platinum.
- **a.** What is the maximum wavelength of light that will remove an electron?
- **b.** If light of **150 nm** wavelength were used, what is the velocity of the emitted electron?

### 已知
$E_a = \phi = 5\ \mathrm{eV}$（Pt work function）

### 解答

**a. Maximum wavelength**（threshold）

臨界條件 $E = h\nu_{\max} = \phi$：

$$\lambda_{\max} = \frac{ch}{E} = \frac{(2.998\times 10^8)(6.626\times 10^{-34})}{(5)(1.602\times 10^{-19})}$$

$$\boxed{\,\lambda_{\max} = 2.48\times 10^{-7}\ \mathrm{m} = 248\ \mathrm{nm}\,}$$

**b. Electron velocity for $\lambda = 150\ \mathrm{nm}$**

先算 photon energy：

$$\nu = c/\lambda = 1.999\times 10^{15}\ \mathrm{s^{-1}}$$

$$E_{photon} = h\nu = (6.626\times 10^{-34})(1.999\times 10^{15}) = 1.324\times 10^{-18}\ \mathrm{J}$$

扣除 work function：

$$E_{\text{excess}} = E_{photon} - \phi = 1.324\times 10^{-18} - (5)(1.602\times 10^{-19}) = 5.233\times 10^{-19}\ \mathrm{J}$$

由 $E_{\text{excess}} = \frac{1}{2}m_e u^2$：

$$u = \sqrt{\frac{2\cdot 5.233\times 10^{-19}}{9.11\times 10^{-31}}}$$

$$\boxed{\,u = 1.072\times 10^6\ \mathrm{m/s}\,}$$

---

## 重點整理

| 題 | 考點 | 關鍵公式 |
|---|---|---|
| 11.1 | 光子 $\nu/\tilde{\nu}/E/p$ | $E=h\nu=hc/\lambda$, $p=h/\lambda$ |
| 11.5 | 彈簧 SHM 週期、最大速度 | $T=2\pi\sqrt{m/k}$, $v_{\max}=A\omega$ |
| 11.13 | Einstein 光電方程 | $h\nu = \phi + \frac{1}{2}mv^2$ |

三題基礎，全部考 Ch.4 Page 1–2（SHM, wave）和 Page 9–10（光電效應）。
