---
chapter: practice
page: q2
title: "Quiz 2 — TST & Arrhenius 對齊題"
source: "Q2_sol.pdf"
sections:
  - 題目
  - 解題思路
  - 完整計算
  - 最終答案
tags:
  - transition state theory
  - Arrhenius
  - activation enthalpy
  - activation entropy
  - liquid solution
  - quiz solution
---

# Quiz 2 — TST & Arrhenius 對齊題

## 題目

For a given reaction $B + C \to P$, the transition state theory gives:

$$
k = \frac{k_B T}{h}\,e^{-\Delta^\ddagger G^\circ/RT}
$$

The activation energy per mole is:

$$
E_a = RT + \Delta^\ddagger H^\circ
$$

Assume this reaction is **in a liquid solution at constant pressure**. If such a reaction is fitted empirically with:

- $A = 4.07 \times 10^5\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}$（preexponential factor）
- 溫度 $T = 300\ \text{K}$
- activation energy $E_a = 65.43\ \mathrm{kJ\,mol^{-1}}$

What are $\Delta^\ddagger S^\circ$ and $\Delta^\ddagger H^\circ$ for the reaction?

## 解題思路

三個關鍵式子要同時用：

1. **Arrhenius form**：$k = A\,e^{-E_a/RT}$
2. **TST form**：$k = \dfrac{k_B T}{h}\,e^{-\Delta^\ddagger G^\circ/RT}$
3. **Thermodynamic**：$\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ$

## 完整計算

### Step 1：用 $k$ 對齊 Arrhenius 與 TST

$$
A\,e^{-E_a/RT} = \frac{k_B T}{h}\,e^{-\Delta^\ddagger G^\circ/RT}
$$

取 $\ln$ 並整理：

$$
\boxed{\,\Delta^\ddagger G^\circ = E_a + RT\ln\!\left(\dfrac{k_B T}{Ah}\right)\,}
$$

### Step 2：算 $\Delta^\ddagger H^\circ$

定壓下：

$$
\Delta^\ddagger H^\circ = \Delta^\ddagger U^\circ + p\,\Delta^\ddagger V^\circ
$$

**液相反應**使 $\Delta^\ddagger V^\circ \approx 0$（Ch.3 Page 8 結論），因此：

$$
\Delta^\ddagger H^\circ = E_a - RT
$$

代入數值：

$$
\Delta^\ddagger H^\circ = 65{,}430 - 8.314 \times 300 = 62{,}935.8\ \mathrm{J/mol}
$$

$$
\boxed{\,\Delta^\ddagger H^\circ \approx 62.94\ \mathrm{kJ/mol}\,}
$$

### Step 3：算 $\Delta^\ddagger S^\circ$

由 $\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ$：

$$
\Delta^\ddagger S^\circ = \frac{\Delta^\ddagger H^\circ - \Delta^\ddagger G^\circ}{T}
$$

代入 Step 1 的 $\Delta^\ddagger G^\circ$ 和 Step 2 的 $\Delta^\ddagger H^\circ$：

$$
\Delta^\ddagger S^\circ
= \frac{(E_a - RT) - \big(E_a + RT\ln(k_B T/(Ah))\big)}{T}
= -R - R\ln\!\left(\frac{k_B T}{Ah}\right)
$$

也就是：

$$
\boxed{\,\Delta^\ddagger S^\circ = -R\left[1 + \ln\!\left(\dfrac{k_B T}{Ah}\right)\right]\,}
$$

### Step 4：代入常數

- $k_B = 1.381 \times 10^{-23}\ \mathrm{J/K}$
- $h = 6.626 \times 10^{-34}\ \mathrm{J\cdot s}$
- $T = 300\ \mathrm{K}$
- $A = 4.07 \times 10^5\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}$

$$
\Delta^\ddagger S^\circ
= -8.314 \times 10^{-3}\left[1 + \ln\!\dfrac{1.381\times 10^{-23}\times 300}{4.07\times 10^5 \times 6.626\times 10^{-34}}\right]
$$

算出來：

$$
\Delta^\ddagger S^\circ = -0.1459\ \mathrm{kJ/(mol\cdot K)}
$$

即：

$$
\boxed{\,\Delta^\ddagger S^\circ \approx -145.9\ \mathrm{J/(mol\cdot K)}\,}
$$

## 最終答案

$$
\boxed{\,\Delta^\ddagger H^\circ \approx 62.94\ \mathrm{kJ/mol}\,}
$$

$$
\boxed{\,\Delta^\ddagger S^\circ \approx -145.9\ \mathrm{J/(mol\cdot K)}\,}
$$

## 這題的考點重點

1. **認出 Arrhenius 和 TST 是兩個同值的 $k$ 表達式**，用等號對齊 → 得 $\Delta^\ddagger G^\circ$
2. **液相假設 $\Delta^\ddagger V^\circ \approx 0$** → $\Delta^\ddagger H^\circ = E_a - RT$（這是 Ch.3 Page 8 的關鍵結論）
3. **$\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ$ 回推 $\Delta^\ddagger S^\circ$**
4. **$\Delta^\ddagger S^\circ$ 負值**代表反應物→TS 的組態變得更有序（normal bimolecular 反應特徵）
5. **單位處理**：$A$ 帶濃度維度（$\mathrm{dm^3\,mol^{-1}\,s^{-1}}$），$\ln(k_BT/Ah)$ 隱含標準態 $c^\circ$；考試只要算出數字正確即可
