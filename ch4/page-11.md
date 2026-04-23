---
chapter: 4
page: 11
title: "Wave-Particle Duality and Bohr Atomic Theory"
source: "Text Chapter 11"
sections:
  - Wave-particle duality
  - Bohr atomic theory
  - Angular momentum quantization
  - H-like atoms
  - Bohr radius
tags:
  - wave-particle duality
  - Bohr model
  - stationary states
  - angular momentum
  - H-like atoms
  - Bohr radius
---

# Chapter 4 — Wave-Particle Duality and Bohr Atomic Theory

## 1. Wave-Particle Duality of EM Radiation

前面幾個重要實驗都說明：light / electromagnetic radiation 不能只用 classical wave 描述，也不能只看成普通粒子，而是具有 wave-particle duality。

支持這個觀念的三個經典例子：

1. Blackbody radiation：classical theory 失敗，需要 Planck 的 quantization hypothesis。
2. Photoelectric effect：photon energy 是離散的，每個 photon 有 $E=h\nu$。
3. Compton effect：photon 不只有 energy，也有 momentum $p=h/\lambda$。

這一段是在總結前面量子論導論的核心：EM radiation 具有 wave nature 和 particle nature。

## 2. Bohr's Atomic Theory

Bohr 為了解釋 hydrogen atom 的 line spectrum，提出 Bohr atomic theory。

### 2.1 Stationary States

電子只能存在於某些特定軌道，這些軌道稱為 stationary states（定態）。

在 stationary states 中：

- Electron 雖然在繞 nucleus 運動。
- Electron 不會連續輻射 energy。

這是 Bohr model 最關鍵、也最 non-classical 的假設之一。

Classical electrodynamics 會預測帶電粒子做圓周運動時應持續輻射 energy，軌道會越縮越小並掉進 nucleus。但 Bohr 直接假設某些特定軌道上 electron 不會輻射 energy，用來解釋 atomic stability。

### 2.2 Angular Momentum Quantization

Bohr 假設 electron 的 angular momentum 只能取 discrete values：

$$
\boxed{
L=mvr=n\hbar=\frac{nh}{2\pi}
}
\qquad
(n=1,2,3,\dots)
$$

其中：

- $m$：electron mass。
- $v$：electron speed，原筆記用 $u$。
- $r$：orbit radius。
- $n$：principal quantum number。
- $\hbar=\dfrac{h}{2\pi}$。

因此 electron speed 也可整理為：

$$
\boxed{
v=\frac{nh}{2\pi mr}
}
$$

原筆記中的 $u$ 建議讀成 $v$，比較不容易和 frequency $\nu$ 或 wave speed $u$ 混淆。

## 3. H-Like Atoms

H-like atoms（氫樣原子）是指只有一顆 electron 的 atom / ion，例如：

- H
- He$^+$
- Li$^{2+}$
- Be$^{3+}$

對這類系統，electron 繞 nucleus 的 centripetal force 由 Coulomb attraction 提供：

$$
\boxed{
\frac{Ze^2}{4\pi\varepsilon_0 r^2}
=
\frac{mv^2}{r}
}
$$

其中：

- $Z$：nuclear charge number。
- $e$：elementary charge。
- $\varepsilon_0$：vacuum permittivity。

Bohr radius 的推導要聯立兩個關係式：

1. Coulomb force = centripetal force。
2. Angular momentum quantization。

也就是：

$$
\frac{Ze^2}{4\pi\varepsilon_0 r^2}
=
\frac{mv^2}{r}
$$

和：

$$
mvr=\frac{nh}{2\pi}=n\hbar
$$

## 4. Bohr Radius and Allowed Radii

聯立 Coulomb force 與 angular momentum quantization，可得第 $n$ 軌道半徑：

$$
\boxed{
r_n
=
\frac{4\pi\varepsilon_0 n^2\hbar^2}{mZe^2}
}
$$

也常寫成：

$$
\boxed{
r_n=\frac{n^2}{Z}a_0
}
$$

其中 $a_0$ 是 Bohr radius：

$$
\boxed{
a_0
=
\frac{4\pi\varepsilon_0\hbar^2}{me^2}
\approx
0.529\ \text{Å}
}
$$

所以對 hydrogen atom 的 ground state，即 $Z=1$、$n=1$：

$$
r_1=a_0\approx 0.53\ \text{Å}
$$

Bohr radius 的物理意義是 hydrogen atom ground state 的 orbit radius。

## 5. Kinetic Energy

Electron 在軌道上的 kinetic energy 為：

$$
E_k=\frac{1}{2}mv^2
$$

由：

$$
\frac{mv^2}{r}
=
\frac{Ze^2}{4\pi\varepsilon_0 r^2}
$$

可得：

$$
mv^2
=
\frac{Ze^2}{4\pi\varepsilon_0 r}
$$

因此：

$$
\boxed{
E_k
=
\frac{1}{2}mv^2
=
\frac{Ze^2}{8\pi\varepsilon_0 r}
}
$$

若再代入 $r_n=\dfrac{n^2}{Z}a_0$，可寫成：

$$
\boxed{
E_k
=
\frac{Z^2e^2}{8\pi\varepsilon_0 a_0 n^2}
}
$$

注意 kinetic energy 是 positive。下一頁會接 potential energy 是 negative，total energy 也是 negative，對應 bound state。

## Key Formulas

### Wave-Particle Duality Evidence

- Blackbody radiation。
- Photoelectric effect。
- Compton effect。

### Stationary States

Electron 只能在某些 stationary states 上運動，且在這些軌道上不輻射 energy。

### Angular Momentum Quantization

$$
\boxed{
mvr=n\hbar=\frac{nh}{2\pi}
}
$$

### Coulomb Force Equals Centripetal Force

$$
\boxed{
\frac{Ze^2}{4\pi\varepsilon_0 r^2}
=
\frac{mv^2}{r}
}
$$

### Allowed Radius

$$
\boxed{
r_n=\frac{n^2}{Z}a_0
}
$$

$$
\boxed{
a_0\approx 0.53\ \text{Å}
}
$$

### Kinetic Energy

$$
\boxed{
E_k
=
\frac{1}{2}mv^2
=
\frac{Ze^2}{8\pi\varepsilon_0 r}
}
$$

## Common Mistakes

1. 不要把原筆記的 $u$ 和 frequency $\nu$ 混淆；在 Bohr model 中可讀成 electron speed $v$。
2. $Z$ 是 nuclear charge number，不是 atomic mass。
3. $r_n=(n^2/Z)a_0$ 來自 Coulomb force = centripetal force 和 angular momentum quantization 的聯立。
4. $a_0$ 是 hydrogen ground state radius，即 $n=1$、$Z=1$ 時的半徑。
5. 這頁只先得到 kinetic energy；potential energy 和 total energy 會在下一頁接著處理。

## Original Page Notes

- 原頁最上方寫 wave-particle duality of EM radiation，並列出 blackbody radiation、photoelectric effect、Compton effect。
- 原頁後半開始 Bohr's Atomic Theory。
- 原頁第 1 點寫 stationary states in which electrons do not emit energy。
- 原頁第 2 點寫 angular momentum quantization：$L=I\omega=mur=nh/(2\pi)=n\hbar$。
- 原頁推出 $u=nh/(2\pi mr)$。
- 原頁第 3 點討論 H-like atoms，例如 H、He$^+$、Li$^{2+}$、Be$^{3+}$。
- 原頁寫 Coulomb force = centripetal force：$Ze^2/(4\pi\varepsilon_0r^2)=mu^2/r$。
- 原頁推出 $r_n=4\pi\varepsilon_0n^2\hbar^2/(mZe^2)$ 與 $r_n=(n^2/Z)a_0$。
- 原頁註記 $a_0=0.53\ \text{Å}$。
- 原頁第 4 點開始 kinetic energy，寫出 $E_k=\frac12mu^2$ 並推出 $E_k=Ze^2/(8\pi\varepsilon_0r)$。
