---
chapter: 4
page: 2
title: "Electromagnetic Radiation and Waves"
source: "Text Chapter 11"
sections:
  - Electromagnetic radiation
  - Traveling wave
  - Standing wave
tags:
  - electromagnetic radiation
  - transverse wave
  - wave equation
  - traveling wave
  - standing wave
  - superposition
---

# Chapter 4 — Electromagnetic Radiation and Waves

## 1. Electromagnetic Radiation

### 1.1 Basic Properties

Electromagnetic radiation（電磁輻射）可以在真空中傳播，不需要像聲波那樣依賴介質。

電磁波是由：

- 振盪的 electric field, $E$
- 振盪的 magnetic field, $B$（有些筆記也寫 $H$）

所構成，且：

- $E$ 與 $B$ 彼此垂直。
- $E$、$B$ 都垂直於波的傳播方向。
- 因此 electromagnetic wave 是 transverse wave（橫波）。

### 1.2 Interaction with Matter

當 electromagnetic radiation 與 matter 接觸時，分子或原子中的電荷分布會和外加的振盪電場／磁場耦合。

這種 coupling 可能產生：

- absorption（吸收）
- scattering（散射）
- excitation（激發）
- molecular vibration、rotation 或 electronic transition

這一點是後續量子理論與光譜學的重要基礎。

### 1.3 Diagram Notes

原頁左上畫了一個 electromagnetic wave 示意圖：

- 波沿 $x$ 方向前進。
- Electric field $E$ 與 magnetic field $H$ 彼此垂直。
- 圖中標出 wavelength, $\lambda$。

完整概念是 $E$、$B/H$ 與傳播方向三者互相垂直。

## 2. Traveling Wave

### 2.1 Physical Situation

若對一條弦施加固定頻率的上下振動，擾動會沿弦向外傳播，形成 traveling wave（行進波）。

### 2.2 Wave Equation

一維波動方程式可寫為：

$$
\frac{\partial^2 y}{\partial x^2}
=
\frac{1}{u^2}\frac{\partial^2 y}{\partial t^2}
$$

其中：

- $y(x,t)$：位置 $x$ 處、時間 $t$ 時的位移
- $u$：wave speed（波速）

### 2.3 General Form

Traveling wave 的標準形式可寫成：

$$
y(x,t)=A\sin(kx-\omega t+\phi)
$$

或：

$$
y(x,t)=A\sin(kx+\omega t+\phi)
$$

其中：

- $A$：amplitude（振幅）
- $k$：wave number（波數）
- $\omega$：angular frequency（角頻率）
- $\phi$：phase constant（相位常數）

若用波長與週期表示：

$$
k=\frac{2\pi}{\lambda},
\qquad
\omega=\frac{2\pi}{T}
$$

所以也可寫成：

$$
y(x,t)
=
A\sin\left[
2\pi\left(\frac{x}{\lambda}-\frac{t}{T}\right)+\phi
\right]
$$

### 2.4 Wave Speed

波速與角頻率、波數、波長、週期和頻率的關係為：

$$
u=\frac{\omega}{k}
=\lambda\nu
=\frac{\lambda}{T}
$$

其中：

$$
\nu=\frac{1}{T}
$$

## 3. Standing Wave

### 3.1 Formation

兩個振幅相同、頻率相同、波長相同、方向相反的 traveling waves 疊加時，就會形成 standing wave（駐波）。

### 3.2 Superposition of Two Traveling Waves

若兩個行進波為：

$$
y_1(x,t)=A\sin(kx-\omega t)
$$

$$
y_2(x,t)=A\sin(kx+\omega t)
$$

則總和為：

$$
y(x,t)=y_1+y_2
$$

利用三角恆等式：

$$
\sin\alpha+\sin\beta
=
2\sin\frac{\alpha+\beta}{2}
\cos\frac{\alpha-\beta}{2}
$$

可得：

$$
y(x,t)=2A\sin(kx)\cos(\omega t)
$$

若用 $\lambda$ 與 $u$ 表示，因為 $k=2\pi/\lambda$ 且 $\omega=ku=2\pi u/\lambda$：

$$
y(x,t)
=
2A\sin\left(\frac{2\pi x}{\lambda}\right)
\cos\left(\frac{2\pi ut}{\lambda}\right)
$$

### 3.3 Features of Standing Waves

駐波中有：

- **Nodes（節點）**：永遠不振動的位置。
- **Antinodes（腹點）**：振幅最大的地方。

駐波本身不是整體往前傳播，而是空間中固定位置的振動型態。

## Key Formulas

### One-Dimensional Wave Equation

$$
\frac{\partial^2 y}{\partial x^2}
=
\frac{1}{u^2}\frac{\partial^2 y}{\partial t^2}
$$

### Traveling Wave

$$
y(x,t)=A\sin(kx-\omega t+\phi)
$$

$$
k=\frac{2\pi}{\lambda},
\qquad
\omega=\frac{2\pi}{T},
\qquad
u=\frac{\omega}{k}=\lambda\nu=\frac{\lambda}{T}
$$

### Standing Wave

$$
y(x,t)=2A\sin(kx)\cos(\omega t)
$$

## Common Mistakes

1. 原筆記中的 $k=\pi/\lambda$ 很可能少了係數 2，標準定義是 $k=2\pi/\lambda$。
2. 原筆記中的 $\omega=\pi/T$ 很可能少了係數 2，標準定義是 $\omega=2\pi/T$。
3. 駐波公式由兩個反向行進波相加而來，結果前面應有 $2A$。
4. 只記得 $E\perp B$ 不夠，$E$ 與 $B$ 也都垂直於傳播方向。
5. Traveling wave 會整體傳播；standing wave 是固定空間型態的振動。

## Original Page Notes

- 原頁承接上一頁的 electromagnetic radiation。
- 原頁提到 EM radiation can be transmitted without medium。
- 原頁提到 electric field 與 magnetic field 的 fluctuations at right angles to one another。
- 原頁左上有電磁波示意圖，標出 $E$、$H$、$x$ 方向與 $\lambda$。
- 原頁 traveling wave 區塊提到對弦施加 fixed frequency vertical oscillation。
- 原頁 standing wave 區塊強調 confined space 與 superposition。
