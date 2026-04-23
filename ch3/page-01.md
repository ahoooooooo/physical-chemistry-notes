---
chapter: 3
page: 1
title: "Chemical Dynamics — HS Collision Theory Setup"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Chapter summary
  - Preexponential factor from HS collision theory
  - Collision density (A + A)
  - Collision density (A + B)
  - Collision cross section
tags:
  - Chemical Dynamics
  - HS collision theory
  - preexponential factor
  - collision density
  - reduced mass
  - collision cross section
  - Arrhenius
---

# Chapter 3 — Chemical Dynamics Introduction

## 1. 本章 Summary

Ch.3 對應課本 9.8、9.9、9.11。主線有四條：

1. **Arrhenius law from HS collision theory**（← 本頁開始）
2. **Transition State Theory (TST)** using classical thermodynamics
3. **Potential Energy Surface (PES)**
4. **Reaction dynamics**

全章核心是 Arrhenius 形式：

$$
k = A\,e^{-E_a/RT}
$$

第一主題要解釋的是：**preexponential factor $A$** 的物理來源（→ 來自 HS collision theory）。

## 2. The Preexponential Factor

### 2.1 HS Collision Theory 的基本假設

最簡單的假設：

> 只要分子彼此接觸（collide），反應就有可能發生。

因此要估算反應速率，第一步要估算 **collision density**：每單位體積、每單位時間內有多少次碰撞發生。

### 2.2 Collision Density for Like Molecules (A + A)

對同種分子 $A$：

$$
Z_{AA}
=
\frac{\sqrt{2}\,\pi d_A^2\,\langle u_A\rangle\,N_A^2}{2V^2}
=
2\pi d_A^2\left(\frac{N_A}{V}\right)^2\sqrt{\frac{k_B T}{\pi m_A}}
$$

其中：

- $d_A$：分子 $A$ 的有效碰撞直徑
- $N_A/V$：分子 $A$ 的 number density
- $\langle u_A\rangle$：分子 $A$ 的 Maxwell–Boltzmann mean speed
- 前因子 $\dfrac{\sqrt{2}}{2}$：同種分子配對避免重複計數 + 由 relative speed 換回單分子 mean speed

單分子 mean speed：

$$
\langle u_A\rangle = \sqrt{\frac{8 k_B T}{\pi m_A}}
$$

代回整理後得到第二條等號後的形式 $2\pi d_A^2 (N_A/V)^2 \sqrt{k_B T/\pi m_A}$。

### 2.3 Collision Density for Unlike Molecules (A + B)

對不同分子 $A$ 與 $B$：

$$
Z_{AB}
=
\pi d_{AB}^2\left(\frac{N_A}{V}\right)\left(\frac{N_B}{V}\right)
\sqrt{\frac{8 k_B T}{\pi}\cdot\frac{m_A+m_B}{m_A m_B}}
$$

引入 **reduced mass**：

$$
\mu = \frac{m_A m_B}{m_A + m_B}
$$

因 $\dfrac{m_A+m_B}{m_A m_B} = \dfrac{1}{\mu}$，上式可寫為：

$$
Z_{AB}
=
\pi d_{AB}^2\left(\frac{N_A}{V}\right)\left(\frac{N_B}{V}\right)
\sqrt{\frac{8 k_B T}{\pi\mu}}
$$

### 2.4 Collision Cross Section

定義：

$$
\sigma = \pi d_{AB}^2
$$

稱為 **collision cross section**。因此 $Z_{AB}$ 也可寫成：

$$
Z_{AB} = \sigma\left(\frac{N_A}{V}\right)\left(\frac{N_B}{V}\right)\sqrt{\frac{8 k_B T}{\pi\mu}}
$$

### 2.5 Collision Density 的單位

$$
[Z_{AB}] = \mathrm{m^{-3}\,s^{-1}}
$$

物理意義：每立方公尺、每秒 A–B 碰撞的次數。

## 3. 與 Preexponential Factor 的關係

這頁尚未進到 activation energy，只建立到 collision density。後續推論線是：

- 反應速率 ∝ 碰撞頻率
- **preexponential factor $A$** 的物理來源是「碰撞幾何（cross section）＋ 分子熱運動速率」
- 後面幾頁會再加上：
  - 只有部分碰撞有足夠能量 → $e^{-E_a/RT}$ 項
  - 只有部分碰撞方向正確 → steric factor
  - Transition State Theory 的修正

## Key Formulas

### Arrhenius Form

$$
k = A\,e^{-E_a/RT}
$$

### Collision Density (A + A)

$$
Z_{AA}
=
\frac{\sqrt{2}\,\pi d_A^2\,\langle u_A\rangle\,N_A^2}{2V^2}
=
2\pi d_A^2\left(\frac{N_A}{V}\right)^2\sqrt{\frac{k_B T}{\pi m_A}}
$$

$$
\langle u_A\rangle = \sqrt{\frac{8 k_B T}{\pi m_A}}
$$

### Collision Density (A + B)

$$
Z_{AB}
=
\pi d_{AB}^2\left(\frac{N_A}{V}\right)\left(\frac{N_B}{V}\right)\sqrt{\frac{8 k_B T}{\pi\mu}}
$$

### Reduced Mass

$$
\mu = \frac{m_A m_B}{m_A + m_B}
$$

### Collision Cross Section

$$
\sigma = \pi d_{AB}^2
$$

### Unit of Collision Density

$$
[Z_{AB}] = \mathrm{m^{-3}\,s^{-1}}
$$
