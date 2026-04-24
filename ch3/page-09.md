---
chapter: 3
page: 9
title: "Gas Reactions: Uni- vs Bimolecular, and PES Intro"
source: "Text 9.8, 9.9, 9.11"
sections:
  - General gas-phase Ea formula
  - Unimolecular case
  - Bimolecular case
  - Potential Energy Surface (definition)
tags:
  - transition state theory
  - unimolecular
  - bimolecular
  - Arrhenius
  - activation enthalpy
  - potential energy surface
---

# Chapter 3 — Gas Reactions (Uni/Bi) and PES Introduction

## 1. 本頁在整章中的位置

**有明確主題切換**：

- **上半部**：承接 Page 08 的 $E_a = RT + \Delta^\ddagger U$ 與 $P\Delta^\ddagger V = (\sum\nu)RT$，對 gas reactions 導出：
  $$
  E_a = RT + \Delta^\ddagger H^\circ - \left(\textstyle\sum\nu\right)RT
  $$
  並分別代入 **unimolecular**（$\sum\nu = 0$）與 **bimolecular**（$\sum\nu = -1$）兩個特例。
- **下半部**：開始新主題 **Potential Energy Surface (PES)** 的定義。Page 10 會進一步畫圖說明。

## 2. 上半部：Gas Reactions 的 $E_a$ 通式

由 Page 08：

- $E_a = RT + \Delta^\ddagger U$（const V van't Hoff）
- $\Delta^\ddagger H^\circ = \Delta^\ddagger U^\circ + P\Delta^\ddagger V^\circ$（const P）
- Ideal gas：$P\Delta^\ddagger V^\circ = \left(\sum\nu\right)RT$

所以 $\Delta^\ddagger U = \Delta^\ddagger H^\circ - \left(\sum\nu\right)RT$，代入得：

$$
\boxed{\,E_a = RT + \Delta^\ddagger H^\circ - \left(\textstyle\sum\nu\right)RT\,}
$$

相對應的 Arrhenius-like 速率常數：

$$
\boxed{\,k = e^{\,1-\sum\nu}\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}\,e^{-E_a/RT}\cdot (M^{\sum\nu})\,}
$$

其中 $M^{\sum\nu}$ 標示 molarity-based 的濃度維度（與反應級數對應）。

## 3. ① Unimolecular Reactions

$$
A \longrightarrow X^\ddagger
$$

Stoichiometric sum：$\sum\nu = +1 - 1 = 0$。

### Ea

$$
\boxed{\,E_a = RT + \Delta^\ddagger H^\circ\,}
$$

### k

$$
\boxed{\,k = \underbrace{e\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}}_{A}\,e^{-E_a/RT}\,}
$$

單位：$\mathrm{s^{-1}}$（$M^0$）

## 4. ② Bimolecular Reactions

$$
A + B \longrightarrow X^\ddagger
$$

Stoichiometric sum：$\sum\nu = +1 - 1 - 1 = -1$。

### Ea

$$
\boxed{\,E_a = 2RT + \Delta^\ddagger H^\circ\,}
$$

### k

$$
\boxed{\,k = \underbrace{e^2\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}}_{A}\,e^{-E_a/RT}\cdot(M^{-1})\,}
$$

單位：$\mathrm{M^{-1}\,s^{-1}}$

## 5. 上半部的速記

| Molecularity | $\sum\nu$ | $E_a$ | 前置因子 $A$ 中的 $e^{1-\sum\nu}$ | 濃度次方 |
| --- | --- | --- | --- | --- |
| Unimolecular | $0$ | $RT + \Delta^\ddagger H^\circ$ | $e$ | $M^0$ |
| Bimolecular | $-1$ | $2RT + \Delta^\ddagger H^\circ$ | $e^2$ | $M^{-1}$ |

## 6. 下半部：Potential Energy Surface（定義）

§ **Potential Energy Surface (PES)**

> A theoretical description of the system energy in terms of atomic coordinates. It can be a **3D energy plot** or a **2D contour plot** with equipotential lines.

意思是：

- PES 是一張用「原子幾何座標 → 系統位能」的地圖
- 可以是 3D 位能曲面
- 也可以是 2D 等位能線圖（像地形圖）

下一頁會正式用圖說明 PES 上的 reactant valley、product valley、saddle point、reaction path 等幾何特徵。

## Key Formulas

### Gas Reaction Ea 通式

$$
E_a = RT + \Delta^\ddagger H^\circ - \left(\textstyle\sum\nu\right)RT
$$

### Unimolecular

$$
E_a = RT + \Delta^\ddagger H^\circ,\quad
k = e\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}\,e^{-E_a/RT}
$$

### Bimolecular

$$
E_a = 2RT + \Delta^\ddagger H^\circ,\quad
k = e^2\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}\,e^{-E_a/RT}\cdot(M^{-1})
$$

### PES 定義

> 用原子座標描述系統位能的理論曲面；可用 3D surface 或 2D contour plot 呈現。
