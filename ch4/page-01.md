---
chapter: 4
page: 1
title: "Quantum Theory"
source: "Text Chapter 11"
sections:
  - Particle mechanics
  - Wave mechanics
tags:
  - Newton's second law
  - conservative force
  - potential energy
  - SHM
  - electromagnetic radiation
---

# Chapter 4 — Quantum Theory

## 1. Particle Mechanics

粒子運動常用的物理量包括：

- mass, $m$
- force, $\vec{F}$
- speed / velocity, $v,\ \vec{v}$
- acceleration, $\vec{a}$
- momentum, $\vec{p}$
- energy, $E$

### 1.1 Newton's Second Law

牛頓第二運動定律：

$$
\vec{F} = m\vec{a}
$$

若以位置表示：

$$
\vec{a} = \frac{d^2\vec{x}}{dt^2}
$$

因此：

$$
\vec{F}
= m\frac{d^2\vec{x}}{dt^2}
= m\frac{d\vec{v}}{dt}
= \frac{d\vec{p}}{dt}
$$

其中：

$$
\vec{p} = m\vec{v}
$$

### 1.2 Conservative Force and Potential Energy

若系統中的力是 conservative force（保守力），則：

$$
\vec{F} = -\nabla E_p
$$

在一維情況下，原筆記以向量串聯式寫成：

$$
\vec{F} = -\nabla E_p = -\frac{dE_p}{dx}\,\hat{x}
$$

取 $x$ 分量的標量形式：

$$
F_x = -\frac{dE_p}{dx}
$$

這表示力的方向會指向 potential energy 降低的方向。

若要表示完整的機械能守恆，通常會寫成：

$$
E = K + U = \text{constant}
$$

### 1.3 Simple Harmonic Motion, SHM

對彈簧系統，依 Hooke's law：

$$
F_s = -kx
$$

再由 Newton's second law：

$$
m\frac{d^2x}{dt^2} = -kx
$$

整理得：

$$
\frac{d^2x}{dt^2} + \frac{k}{m}x = 0
$$

其解為：

$$
x(t)=A\sin(\omega t+\delta)
$$

或也可寫成：

$$
x(t)=A\cos(\omega t+\delta)
$$

其中：

- $A$：amplitude（振幅，最大位移）
- $\omega$：angular frequency（角頻率）
- $\delta$：phase constant（初相位）

角頻率為：

$$
\omega=\sqrt{\frac{k}{m}}
$$

並且：

$$
\omega = 2\pi f = \frac{2\pi}{T}
$$

所以：

$$
f=\frac{1}{2\pi}\sqrt{\frac{k}{m}},
\qquad
T=2\pi\sqrt{\frac{m}{k}}
$$

### 1.4 Diagram Notes

原頁右側畫了一段彈簧連著質量塊，對應的位移 $x(t)$ 被畫成沿著時間軸（$t$）前進的 sinusoidal 曲線：彈簧提供 Hooke 恢復力 $F_s=-kx$，質量塊在平衡位置附近作 simple harmonic motion，位移隨時間呈正弦變化。

![Animated mass–spring system showing SHM](images/shm-spring.gif "Spring–mass SHM: mass oscillates sinusoidally about the equilibrium position (source: Wikipedia Commons).")

## 2. Wave Mechanics

### 2.1 Basic Parameters of Waves

波的特徵量包括：

- $\lambda$：wavelength（波長）
- $\nu$：frequency（頻率）
- $u$：wave speed（波速）
- $A$：amplitude（振幅）

### 2.2 Types of Waves

- **Transverse wave（橫波）**：介質振動方向垂直於波前進方向，例如 string wave（弦波）。
- **Longitudinal wave（縱波）**：介質振動方向平行於波前進方向，例如 sound wave（聲波）。

### 2.3 Electromagnetic Radiation

Electromagnetic radiation 可用波長 $\lambda$ 與頻率 $\nu$ 描述，兩者關係為：

$$
\lambda \nu = c
$$

其中：

$$
c = 3.00\times10^8\ \text{m/s}
$$

這是光在真空中的速度。

## Key Formulas

### Newton's Second Law

$$
\vec{F}
= m\vec{a}
= m\frac{d\vec{v}}{dt}
= \frac{d\vec{p}}{dt}
$$

### Conservative Force and Potential Energy

$$
\vec{F}=-\nabla E_p
$$

一維情況：

$$
F_x=-\frac{dE_p}{dx}
$$

### Simple Harmonic Motion

$$
m\ddot{x}=-kx
$$

$$
x(t)=A\sin(\omega t+\delta)
$$

$$
\omega=\sqrt{\frac{k}{m}},
\qquad
f=\frac{1}{2\pi}\sqrt{\frac{k}{m}},
\qquad
T=2\pi\sqrt{\frac{m}{k}}
$$

### Electromagnetic Wave

$$
\lambda\nu=c
$$

$$
c=3.00\times10^8\ \text{m/s}
$$

