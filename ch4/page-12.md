---
chapter: 4
page: 12
title: "Bohr Energy Levels and Rydberg Equation"
source: "Text Chapter 11"
sections:
  - Potential energy
  - Total energy
  - Ionization energy
  - Spectral lines
  - Rydberg equation
tags:
  - Bohr model
  - potential energy
  - total energy
  - ionization energy
  - Rydberg equation
  - line spectrum
---

# Chapter 4 — Bohr Energy Levels and Rydberg Equation

## 1. Potential Energy

對 H-like atom，electron 和 nucleus 之間是 Coulomb attraction，因此 potential energy 可定義為：

$$
E_p(r)
=
-\int_r^\infty
\frac{Ze^2}{4\pi\varepsilon_0 r^2}\,dr
$$

積分得到：

$$
\boxed{
E_p
=
-\frac{Ze^2}{4\pi\varepsilon_0 r}
}
$$

這個負號表示：

- Electron 被束縛在 nucleus 附近時，system energy 低於 electron 在無限遠時的基準。
- 這是一個 bound state（束縛態）。

Potential energy 也可理解成：把 electron 從距離 $r$ 的位置移到 infinity 所需外加功的負值。

## 2. Relation Between Potential Energy and Kinetic Energy

上一頁已得：

$$
E_k
=
\frac{Ze^2}{8\pi\varepsilon_0 r}
$$

因此可看出：

$$
\boxed{
E_p=-2E_k
}
$$

這是 Coulombic circular orbit 在 Bohr model 下的重要結果。

## 3. Total Energy

Total energy 為：

$$
E=E_k+E_p
$$

代入 $E_p=-2E_k$：

$$
E=E_k-2E_k=-E_k
$$

所以：

$$
\boxed{
E
=
-E_k
=
-\frac{Ze^2}{8\pi\varepsilon_0 r}
}
$$

再代入上一頁得到的 orbit radius：

$$
r_n=\frac{n^2}{Z}a_0
$$

可得第 $n$ 軌道能量：

$$
\boxed{
E_n
=
-\frac{Z^2e^2}{8\pi\varepsilon_0 a_0 n^2}
}
$$

這就是 Bohr model 的 discrete energy levels。

### 3.1 Standard Form

對 H-like atoms，常見標準形式為：

$$
\boxed{
E_n
=
-\frac{13.6Z^2}{n^2}\ \text{eV}
}
$$

特別對 hydrogen atom，$Z=1$：

$$
E_n
=
-\frac{13.6}{n^2}\ \text{eV}
$$

例如：

- $n=1$：$E_1=-13.6\ \text{eV}$。
- $n=2$：$E_2=-3.40\ \text{eV}$。
- $n=3$：$E_3=-1.51\ \text{eV}$。

能量為負值代表 electron 處於 bound state。當 $n\to\infty$ 時，$E_n\to0$，代表 electron 脫離束縛。

## 4. Ionization Energy

因為 electron 在 bound state 時 total energy 是 negative，若要把 electron 移到 infinity，即 $E=0$，就需要提供 positive energy。

因此第 $n$ 軌道的 ionization energy 為：

$$
\boxed{
E_{\text{ion}}=-E_n
}
$$

對 hydrogen atom ground state：

$$
E_{\text{ion}}=13.6\ \text{eV}
$$

對一般 H-like atom：

$$
\boxed{
E_{\text{ion}}
=
\frac{13.6Z^2}{n^2}\ \text{eV}
}
$$

注意：

- Energy level $E_n$ 是 negative。
- Ionization energy $E_{\text{ion}}$ 是 positive。

## 5. Electron Transitions and Spectral Lines

當 electron 從 higher energy level 躍遷到 lower energy level 時，會 emit photon。

若由 $n_2\to n_1$，其中 $n_2>n_1$，則 emitted photon energy 為：

$$
\boxed{
h\nu
=
E_{n_2}-E_{n_1}
}
$$

更一般地，寫成正的 photon energy：

$$
\boxed{
h\nu
=
E_{\text{upper}}-E_{\text{lower}}
}
$$

若改用 wavelength 表示：

$$
h\nu=\frac{hc}{\lambda}
$$

因此：

$$
\boxed{
\frac{1}{\lambda}
=
\frac{E_{\text{upper}}-E_{\text{lower}}}{hc}
}
$$

這裡要注意 upper / lower energy 的順序，因為 Bohr energy levels 都是 negative values。

## 6. Wavenumber and Rydberg Equation

因為：

$$
E_n\propto -\frac{Z^2}{n^2}
$$

所以 spectral line 的 wavenumber 可寫成：

$$
\boxed{
\tilde{\nu}
=
\frac{1}{\lambda}
=
R_H Z^2
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

- $\tilde{\nu}$：wavenumber（波數）。
- $R_H$：Rydberg constant for hydrogen。
- $n_1$：lower energy level。
- $n_2$：upper energy level。

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
$$

這就是 Bohr model 對 line spectrum 的成功解釋。

## 7. Meaning of Line Spectrum

因為 energy levels 是 discrete，所以 electron 只能在特定 energy levels 之間 transition。

放出的 photon energy 也只能取特定值：

$$
h\nu=\Delta E
$$

因此：

- Frequency 不是 continuous。
- Wavelength 不是 continuous。
- Spectrum 會是一條一條的 line spectrum，而不是 continuous spectrum。

## 8. Hydrogen Visible Spectrum (Balmer Lines)

原筆記底部畫出 gas discharge tube、slits、prism 產生的 hydrogen spectrum，並標出四條落在可見光範圍的 Balmer series 譜線（$n_2\to n_1=2$）：

| Transition | Wavelength | Color |
| --- | --- | --- |
| $n=6\to 2$ | $410.0\ \text{nm}$ | blue violet |
| $n=5\to 2$ | $434.0\ \text{nm}$ | blue violet |
| $n=4\to 2$ | $486.1\ \text{nm}$ | blue green |
| $n=3\to 2$ | $656.2\ \text{nm}$ | red |

這四條線就是 hydrogen 在玻璃放電管中常見的「紅、藍綠、藍紫、紫」色特徵光。

![Visible hydrogen emission spectrum](images/hydrogen-emission-spectrum.png "Balmer series: the four visible hydrogen emission lines (656 nm red, 486 nm cyan, 434 nm blue, 410 nm violet) from n=3,4,5,6 → n=2 transitions (Wikipedia Commons).")

## Key Formulas

### Potential Energy

$$
\boxed{
E_p
=
-\frac{Ze^2}{4\pi\varepsilon_0 r}
}
$$

### Energy Relations

$$
\boxed{
E_p=-2E_k
}
$$

$$
\boxed{
E=-E_k=\frac{1}{2}E_p
}
$$

### Bohr Energy Levels

$$
\boxed{
E_n
=
-\frac{13.6Z^2}{n^2}\ \text{eV}
}
$$

### Ionization Energy

$$
\boxed{
E_{\text{ion}}=-E_n
}
$$

### Photon Energy from Transition

$$
\boxed{
h\nu=\Delta E
}
$$

$$
\boxed{
\frac{hc}{\lambda}=\Delta E
}
$$

### Rydberg Equation

$$
\boxed{
\frac{1}{\lambda}
=
R_H Z^2
\left(
\frac{1}{n_1^2}
-
\frac{1}{n_2^2}
\right)
}
$$

