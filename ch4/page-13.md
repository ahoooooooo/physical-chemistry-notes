---
chapter: 4
page: 13
title: "Rydberg-Ritz Equation and de Broglie Wave Nature"
source: "Text Chapter 11"
sections:
  - Rydberg-Ritz equation
  - Bohr model limitations
  - Foundations of quantum mechanics
  - de Broglie wavelength
tags:
  - Rydberg-Ritz equation
  - Rydberg constant
  - Bohr model
  - fine structure
  - de Broglie
  - matter waves
---

# Chapter 4 — Rydberg-Ritz Equation and de Broglie Wave Nature

## 1. Rydberg-Ritz Equation

由 Bohr model 的 energy levels：

$$
E_n
=
-\frac{13.6Z^2}{n^2}\ \text{eV}
$$

可知 electron 在兩個 energy levels 之間 transition 時，會 emit 或 absorb photon：

$$
h\nu=\Delta E
$$

又因為：

$$
\nu=\frac{c}{\lambda}
$$

所以可得到 spectral line 的 wavelength 公式。

對 hydrogen atom，$Z=1$：

$$
\boxed{
\frac{1}{\lambda}
=
R_H
\left(
\frac{1}{n_1^2}
-
\frac{1}{n_2^2}
\right)
}
\qquad
(n_2>n_1)
$$

其中：

- $R_H$：Rydberg constant。
- $n_1$：lower energy level。
- $n_2$：upper energy level。

Rydberg constant 為：

$$
\boxed{
R_H\approx 1.097\times10^7\ \text{m}^{-1}
}
$$

原筆記寫作 $109.7\times10^5\ \text{m}^{-1}$，等價於 $1.097\times10^7\ \text{m}^{-1}$。

## 2. Conditions on $n_1$ and $n_2$

原筆記寫：

$$
n_1=1,2,3,\dots
$$

$$
n_2=n_1+1,\ n_1+2,\ n_1+3,\dots
$$

這表示：

- 先選定一個 lower level $n_1$。
- Electron 可從 higher level $n_2$ transition 下來。
- 每一種 transition 都對應一條特定 wavelength 的 spectral line。

因此 line spectrum 是 discrete，而不是 continuous。

### 2.1 Named Spectral Series

原頁左上畫出 hydrogen energy level diagram，依 lower level $n_1$ 分成五個 named series：

| Series | $n_1$ | Spectral Region |
| --- | --- | --- |
| Lyman | 1 | Ultraviolet |
| Balmer | 2 | Visible |
| Paschen | 3 | Infrared |
| Brackett | 4 | Far infrared |
| Pfund | 5 | Far infrared |

圖中也標出各 level 的能量值（單位 $10^{-19}\ \text{J}$）：

$$
E_1\approx -21.76,\quad
E_2\approx -5.43,\quad
E_3\approx -2.42,\quad
E_4\approx -1.36,\quad
E_5\approx -0.87
$$

這些能量值和 $E_n=-13.6/n^2\ \text{eV}$ 換算後的結果一致，因為 $1\ \text{eV}=1.60\times10^{-19}\ \text{J}$。

![Hydrogen energy levels and spectral series](images/hydrogen-transitions.png "Electron transitions in hydrogen; the named series (Lyman, Balmer, Paschen, Brackett, Pfund) correspond to transitions terminating at $n_1=1,2,3,4,5$ (Wikipedia Commons).")

## 3. Electronic Transition and Spectral Lines

當 electron 在兩個 energy states 之間 transition 時：

- 從 higher level 到 lower level：emit photon。
- 從 lower level 到 higher level：absorb photon。

Photon wavelength $\lambda$ 由 energy gap 決定：

$$
\boxed{
\Delta E
=
h\nu
=
\frac{hc}{\lambda}
}
$$

所以一條 spectral line 對應一個特定 energy gap。

Rydberg-Ritz equation 是 Bohr model 成功解釋 hydrogen line spectrum 的代表公式。

## 4. Limitations of Bohr's Model

Bohr model 成功解釋了：

- Hydrogen atom 的 stability。
- H-like atom 的 line spectrum。
- Rydberg equation 的形式。

但它仍有重要限制。

### 4.1 Fine Structure

原筆記寫：

> fails to describe fine structures

Bohr model 能預測主要 spectral lines，但不能解釋更細的光譜分裂，例如：

- relativistic corrections
- electron spin
- spin-orbit coupling

造成的細微 energy differences。

### 4.2 Multi-Electron Atoms

原筆記寫：

> isn't applicable to atoms with more electrons

多電子原子中，除了 electron-nucleus attraction 外，還有 electron-electron repulsion 與更複雜的 energy structure。

因此 Bohr 的簡單 circular orbit model 不能精確處理 atoms with more than one electron。

這些限制就是後來必須發展真正 quantum mechanics 的原因。

## 5. Foundations of Quantum Mechanics

Bohr model 還不是完整的 quantum mechanics。真正進一步的關鍵是 de Broglie 提出：

> 不只 light 有 wave-particle duality，particles such as electrons can also have wave properties.

也就是：

$$
\boxed{
\text{matter has wave-like properties}
}
$$

這是 quantum mechanics 的核心思想之一。

## 6. de Broglie's Reasoning

前面已知 photon 同時具有 wave nature 和 particle nature。

Photon energy：

$$
E=h\nu
$$

相對論 energy-momentum relation：

$$
\boxed{
E^2=p^2c^2+m_0^2c^4
}
$$

對 photon 而言，rest mass 為：

$$
m_0=0
$$

因此：

$$
\boxed{
E=pc
}
$$

又因為：

$$
\nu=\frac{c}{\lambda}
$$

所以：

$$
E=h\nu=h\frac{c}{\lambda}
$$

結合 $E=pc$：

$$
pc=\frac{hc}{\lambda}
$$

整理得：

$$
p=\frac{h}{\lambda}
$$

de Broglie 進一步認為，如果 photon 可以有這種 momentum-wavelength relation，那麼一般 particle 也應該對應一個 wavelength：

$$
\boxed{
\lambda=\frac{h}{p}
}
$$

這就是 de Broglie wavelength（德布羅意波長）。

## 7. Conceptual Transition

這頁是在做一個重要轉折：

1. Bohr model 可以解釋 hydrogen line spectrum。
2. 但 Bohr model 有限制。
3. 因此需要更深入的 atomic theory。
4. de Broglie 提出 electrons 也具有 wave nature。
5. 這會導向真正的 quantum mechanics，例如 electron diffraction、standing waves on orbits 和 Schrodinger equation。

## Key Formulas

### Rydberg-Ritz Equation

$$
\boxed{
\frac{1}{\lambda}
=
R_H
\left(
\frac{1}{n_1^2}
-
\frac{1}{n_2^2}
\right)
}
\qquad
(n_2>n_1)
$$

### Rydberg Constant

$$
\boxed{
R_H\approx 1.097\times10^7\ \text{m}^{-1}
}
$$

### Photon Energy from Energy Gap

$$
\boxed{
\Delta E=h\nu=\frac{hc}{\lambda}
}
$$

### Relativistic Energy-Momentum Relation

$$
\boxed{
E^2=p^2c^2+m_0^2c^4
}
$$

For photon:

$$
\boxed{
E=pc
}
$$

### de Broglie Wavelength

$$
\boxed{
\lambda=\frac{h}{p}
}
$$

