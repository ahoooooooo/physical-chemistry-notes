---
chapter: 3
page: 8
title: "Relating Ea to ΔU‡ via van't Hoff"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Van't Hoff equation for K-dagger
  - Ea = RT + ΔU‡
  - Constant P form via ΔH‡ and PΔV‡
  - Eyring form in Arrhenius-like shape
  - Gas reaction PΔV‡
tags:
  - transition state theory
  - Arrhenius
  - activation energy
  - activation internal energy
  - van't Hoff
  - solution vs gas
---

# Chapter 3 — Relating Ea to ΔU‡ via van't Hoff

## 1. 本頁在整章中的位置

承接 Page 07 的 Eyring 形式。本頁用 **van't Hoff equation** 把 TST 的活化參數 ($\Delta^\ddagger U$、$\Delta^\ddagger H$) 和 Arrhenius 的 $E_a$ 連起來。上半部導出一般關係式並討論 solution 近似；下半部開始針對 gas-phase 的情況處理 $P\Delta^\ddagger V$ 項，為 Page 09 的 unimolecular / bimolecular 特例鋪路。

## 2. Van't Hoff Equation 出發

原頁用的是以 $\Delta^\ddagger U$ 表示的 van't Hoff equation（右上角）：

$$
\boxed{\,\dfrac{d\ln K^\ddagger}{dT} = \dfrac{\Delta^\ddagger U}{RT^2}\,}
$$

由 TST 骨架：

$$
k = \frac{k_B T}{h}\,K^\ddagger
\;\Longrightarrow\;
\ln k = \ln\!\left(\frac{k_B T}{h}\right) + \ln K^\ddagger
$$

微分：

$$
\frac{d\ln k}{dT} = \frac{1}{T} + \frac{d\ln K^\ddagger}{dT} = \frac{1}{T} + \frac{\Delta^\ddagger U}{RT^2} = \frac{RT + \Delta^\ddagger U}{RT^2}
$$

## 3. 與 Arrhenius 對齊

由 Arrhenius $\ln k = \ln A - E_a/RT$：

$$
\frac{d\ln k}{dT} = \frac{E_a}{RT^2}
$$

兩式比較：

$$
\boxed{\,E_a = RT + \Delta^\ddagger U\,}
$$

這是本頁最核心的結論。

## 4. 換成 $\Delta^\ddagger H$ 與 $P\Delta^\ddagger V$

在**定壓**下：

$$
\Delta^\ddagger H^\circ = \Delta^\ddagger U^\circ + P\Delta^\ddagger V^\circ
$$

即 $\Delta^\ddagger U^\circ = \Delta^\ddagger H^\circ - P\Delta^\ddagger V^\circ$，代回：

$$
\boxed{\,E_a = RT + \Delta^\ddagger H^\circ - P\Delta^\ddagger V^\circ\,}
$$

### 4.1 For Solution

在溶液中體積變化通常很小：

$$
\Delta^\ddagger V^\circ \approx 0
$$

因此：

$$
\boxed{\,E_a \approx RT + \Delta^\ddagger U^\circ \approx RT + \Delta^\ddagger H^\circ\,}
\qquad (\text{solution})
$$

## 5. Eyring Form 改寫成 Arrhenius-like

Page 07 得到：

$$
k = \frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-\Delta^\ddagger H/RT}
$$

對 solution 用 $\Delta^\ddagger H = E_a - RT$（此時 $\Delta^\ddagger V \approx 0$）代入：

$$
e^{-\Delta^\ddagger H/RT} = e^{-(E_a - RT)/RT} = e\cdot e^{-E_a/RT}
$$

因此：

$$
\boxed{\,k = e\cdot\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-E_a/RT}\,\;(M^{1-m})\,}
$$

原頁括號 $(M^{1-m})$ 標示 molarity-based 速率常數的單位（$m$ 是反應級數）。

⚠️ 注意：這個「Arrhenius-like」形式的前置因子仍含 $T$，所以 TST 的 $A$ 不是嚴格溫度無關的。

## 6. Ea of Gas Reactions（下半部開場）

在 gas reactions 不能忽略 $P\Delta^\ddagger V$。在定壓下：

$$
E_a = RT + \Delta^\ddagger H^\circ - P\Delta^\ddagger V^\circ
$$

對 ideal gas：

$$
\boxed{\,P\Delta^\ddagger V^\circ = \left(\sum \nu_i^\ddagger\right)RT\,}
$$

其中 $\sum \nu_i^\ddagger$ 是「由 reactants 形成 activated complex」的 stoichiometric sum（reactants 算負、$X^\ddagger$ 算正）。

下一頁會分別代入 **unimolecular**（$\sum \nu_i^\ddagger = 0$）與 **bimolecular**（$\sum \nu_i^\ddagger = -1$），得到具體的 $E_a$ 公式。

## Key Formulas

### Van't Hoff (原頁 $\Delta^\ddagger U$ 版)

$$
\frac{d\ln K^\ddagger}{dT} = \frac{\Delta^\ddagger U}{RT^2}
$$

### TST 與 Arrhenius 對應

$$
\frac{d\ln k}{dT} = \frac{1}{T} + \frac{\Delta^\ddagger U}{RT^2} = \frac{E_a}{RT^2}
\;\Longrightarrow\;
\boxed{\,E_a = RT + \Delta^\ddagger U\,}
$$

### Constant P 形式

$$
\Delta^\ddagger H^\circ = \Delta^\ddagger U^\circ + P\Delta^\ddagger V^\circ
\;\Longrightarrow\;
E_a = RT + \Delta^\ddagger H^\circ - P\Delta^\ddagger V^\circ
$$

### Solution

$$
\Delta^\ddagger V^\circ \approx 0
\;\Longrightarrow\;
E_a \approx RT + \Delta^\ddagger U^\circ \approx RT + \Delta^\ddagger H^\circ
$$

### Arrhenius-like TST（solution）

$$
\boxed{\,k = e\cdot\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-E_a/RT}\,\;(M^{1-m})\,}
$$

### Gas Reaction PΔV

$$
P\Delta^\ddagger V^\circ = \left(\sum \nu_i^\ddagger\right)RT
$$
