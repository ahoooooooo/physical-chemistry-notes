---
chapter: 3
page: 3
title: "Head-on Collision Model and Reactive Cross Section"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Head-on component as reaction criterion
  - Hard sphere collision geometry
  - Head-on energy vs total kinetic energy
  - Reactive cross section derivation
tags:
  - HS collision theory
  - head-on component
  - impact parameter
  - reactive cross section
  - activation energy
  - reduced mass
---

# Chapter 3 — Head-on Collision Model and Reactive Cross Section

## 1. 本頁在整章中的位置

承接 Page 02 下半部的 **Activation Energy from HS collision theory**。Page 02 建立了

$$
-\frac{d[A]}{dt} = Z_{AB}\times P(E\ge E_\min)
$$

但還沒處理「怎麼定義 $E$、怎麼算 $P$」。本頁引入 **head-on component** 的想法，並把「有足夠能量的碰撞」轉成幾何上的一個 **reactive cross section** 問題。下一頁會把這個 cross section 對 Maxwell–Boltzmann distribution 做平均。

## 2. Head-on Component 是反應判準

### 2.1 核心假設

> 只有沿兩分子中心連線方向（head-on）的碰撞動能才能用來克服活化能障。

因此定義：

- $\varepsilon$：兩分子相對平動總動能
- $\varepsilon_h$：沿中心連線方向的分量動能（head-on energy）

反應發生條件：

$$
\boxed{\,\varepsilon_h \ge E_\min\,}
$$

其中 $E_\min$ 是反應所需的最小能量門檻。這對應 Arrhenius 式中的 $E_a$：

$$
k = A\,e^{-E_a/RT}
\qquad
E_a \leftrightarrow E_\min
$$

## 3. Hard Sphere 幾何

### 3.1 Collision Cross Section 與有效直徑

$$
\sigma = \pi d_{AB}^2
\qquad
d_{AB} = \frac{d_A + d_B}{2}
$$

### 3.2 Impact Parameter $a$

不是每次碰撞都是正對正。定義 **impact parameter** $a$ 為兩分子中心連線與相對速度方向之間的垂直距離（平行偏移量）。當 $a=0$ 為正面碰撞；$a = d_{AB}$ 為擦邊而過。

### 3.3 幾何關係

由碰撞三角形（$d_{AB}$ 為斜邊、$a$ 為對邊）：

$$
\cos\theta = \frac{\sqrt{d_{AB}^2 - a^2}}{d_{AB}}
$$

因此 head-on 方向的速率分量為：

$$
u_{AB,h} = u_{AB}\cos\theta = u_{AB}\,\frac{\sqrt{d_{AB}^2 - a^2}}{d_{AB}}
$$

## 4. Head-on Energy vs 總動能

### 4.1 兩個能量定義

$$
\varepsilon = \frac12\mu u_{AB}^2
\qquad
\varepsilon_h = \frac12\mu u_{AB,h}^2
$$

### 4.2 兩者關係

代入 $u_{AB,h} = u_{AB}\cos\theta$：

$$
\varepsilon_h
= \frac12\mu u_{AB}^2\cos^2\theta
= \frac12\mu u_{AB}^2\,\frac{d_{AB}^2 - a^2}{d_{AB}^2}
= \varepsilon\,\frac{d_{AB}^2 - a^2}{d_{AB}^2}
$$

整理得：

$$
\boxed{\,\dfrac{\varepsilon_h}{\varepsilon} = 1 - \dfrac{a^2}{d_{AB}^2}\,}
$$

物理意義：impact parameter 越大（碰得越偏），head-on 有效能量越小。

## 5. Reactive Cross Section

### 5.1 由反應判準回推最大 impact parameter

反應要求 $\varepsilon_h \ge E_\min$。由 $\varepsilon_h = \varepsilon(1 - a^2/d_{AB}^2)$：

$$
\varepsilon\left(1 - \frac{a^2}{d_{AB}^2}\right) \ge E_\min
$$

解出：

$$
a^2 \le d_{AB}^2\left(1 - \frac{E_\min}{\varepsilon}\right)
$$

最大可反應 impact parameter 為：

$$
a_{\max}^2 = d_{AB}^2\left(1 - \frac{E_\min}{\varepsilon}\right)
$$

### 5.2 Reactive Cross Section $\sigma_h(\varepsilon)$

對應的有效反應截面 = 半徑 $a_{\max}$ 的圓面積：

$$
\boxed{\,\sigma_h(\varepsilon) = \pi a_{\max}^2 = \sigma\left(1 - \dfrac{E_\min}{\varepsilon}\right),\quad \varepsilon \ge E_\min\,}
$$

若總能量不足以突破門檻：

$$
\boxed{\,\sigma_h(\varepsilon) = 0,\quad \varepsilon < E_\min\,}
$$

## 6. 本頁的濃縮意義

> 固定的碰撞截面 $\sigma$ 被修正為 **能量依賴的 reactive cross section** $\sigma_h(\varepsilon)$；原本「碰就有效」的假設，改為「碰得夠正且能量夠大才算 reactive collision」。

下一頁會把 $\sigma_h(\varepsilon)$ 對 Maxwell–Boltzmann energy distribution 做平均，最終導出 $e^{-E_a/RT}$ 項。

## Key Formulas

### Reaction Criterion

$$
\varepsilon_h \ge E_\min
$$

### HS Geometry

$$
\sigma = \pi d_{AB}^2
\qquad
d_{AB} = \frac{d_A + d_B}{2}
$$

$$
\cos\theta = \frac{\sqrt{d_{AB}^2 - a^2}}{d_{AB}}
$$

### Head-on Energy

$$
\varepsilon_h = \varepsilon\left(1 - \frac{a^2}{d_{AB}^2}\right)
\qquad
\varepsilon = \frac12\mu u_{AB}^2
$$

### Reactive Cross Section

$$
\boxed{\,\sigma_h(\varepsilon) = \sigma\left(1 - \dfrac{E_\min}{\varepsilon}\right)\quad (\varepsilon \ge E_\min),\qquad \sigma_h(\varepsilon) = 0\quad (\varepsilon < E_\min)\,}
$$
