---
chapter: 3
page: 7
title: "Thermodynamic Formulation of TST"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Barrier crossing frequency
  - Gibbs free energy form
  - Enthalpy-entropy form
  - Connecting TST to Arrhenius A and Ea
tags:
  - transition state theory
  - Eyring equation
  - Gibbs free energy of activation
  - enthalpy of activation
  - entropy of activation
  - Arrhenius
---

# Chapter 3 — Thermodynamic Formulation of TST

## 1. 本頁在整章中的位置

承接 Page 06 得到的 TST 骨架 $k = \nu K^\ddagger$。本頁三個主要步驟：

1. 把 $\nu$ 具體寫成 $k_B T/h$
2. 把 $K^\ddagger$ 用 $\Delta G^\ddagger$、再拆成 $\Delta H^\ddagger/\Delta S^\ddagger$
3. **（⭐ 原頁星號重點）** 再用 $\Delta H^\ddagger = \Delta U^\ddagger + \Delta(PV)^\ddagger$ 把 TST 的結果顯式對齊 Arrhenius 式 $k = A\,e^{-E_a/RT}$

## 2. Barrier Crossing Frequency

> $\nu$ is the vibrational frequency of the energy barrier.

TST 中近似：

$$
\boxed{\,\nu = \dfrac{k_B T}{h}\,}
$$

因此：

$$
\boxed{\,k = \dfrac{k_B T}{h}\,K^\ddagger\,}
$$

這是 Eyring form 的基本骨架。

## 3. Thermodynamic Formulation of T.S.T.

### ① 用 $\Delta G^\ddagger$ 表示

$$
\Delta^\ddagger G_1^\circ = -RT\ln K^\ddagger
\;\Longrightarrow\;
K^\ddagger = e^{-\Delta^\ddagger G_1^\circ/RT}
\;\Longrightarrow\;
\boxed{\,k = \dfrac{k_B T}{h}\,e^{-\Delta^\ddagger G_1^\circ/RT}\,}
$$

其中 $\Delta^\ddagger G_1^\circ \equiv \Delta^\ddagger G^\circ$ 是 **standard molar Gibbs free energy of activation**：

$$
\Delta^\ddagger G^\circ = G^\circ(\text{activated complex}) - G^\circ(\text{reactants})
$$

### ② 拆成 $\Delta H^\ddagger$ 與 $\Delta S^\ddagger$

由 $\Delta^\ddagger G_1^\circ = \Delta^\ddagger H - T\Delta^\ddagger S$：

$$
\boxed{\,k = \dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-\Delta^\ddagger H/RT}\,}
$$

對照 Arrhenius 式 $k = A\,e^{-E_a/RT}$，若只看大概對應：

$$
A \sim \frac{k_B T}{h}\,e^{\Delta^\ddagger S/R},\qquad E_a \sim \Delta^\ddagger H
$$

但這對應還不完整，下一步才精確。

### ③ ⭐ 把 $\Delta H^\ddagger$ 化為 $\Delta U^\ddagger$ 並對齊 Arrhenius

由熱力學：

$$
\Delta^\ddagger H = \underbrace{\Delta^\ddagger U}_{=\,E_a} + \underbrace{\Delta^\ddagger(PV)}_{=\,\Delta n^\ddagger RT}
$$

其中對 ideal gas，$\Delta^\ddagger(PV) = \Delta n^\ddagger RT$，而

$$
\Delta n^\ddagger = \sum_i \nu_i \;\; (\text{stoichiometric sum for reactants → activated complex})
$$

代入 $k$：

$$
k
= \frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-(\Delta^\ddagger U + \Delta n^\ddagger RT)/RT}
= \frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-\Delta n^\ddagger}\,e^{-\Delta^\ddagger U/RT}
$$

再用 $E_a = \Delta^\ddagger U + RT$（由 Arrhenius 定義 $d\ln k/dT = E_a/RT^2$ 推出，見下方補充）整理出 $(1-\Delta n^\ddagger)$ 係數的形式：

$$
\boxed{\,k = e^{\,1-\Delta n^\ddagger}\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-E_a/RT}\,}
$$

因此 Arrhenius pre-exponential 和 TST 參數的**精確對應**為：

$$
\boxed{\,A = e^{\,1-\Delta n^\ddagger}\,\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,}
$$

- 對 bimolecular 氣相反應：$\Delta n^\ddagger = 1-2 = -1$，所以 $e^{1-(-1)} = e^2 \approx 7.39$
- 對液相反應（常取 $\Delta n^\ddagger = 0$）：$A \approx e\cdot\dfrac{k_B T}{h}\,e^{\Delta^\ddagger S/R}$

## 4. Entropy Term 的化學意義

原頁結尾：

> Effects of orientation and solvent are incorporated in the entropy term.

也就是：

- 需要特定取向才能形成 activated complex → $\Delta^\ddagger S$ 更負
- 溶劑使系統更受限、更有序 → $\Delta^\ddagger S$ 更負

$e^{\Delta^\ddagger S/R}$ 因此可以看成比 steric factor $P$ 更深層、熱力學化的「取向與組態懲罰」。

## Key Formulas

### Eyring 骨架

$$
\nu = \frac{k_B T}{h}
\qquad
k = \frac{k_B T}{h}\,K^\ddagger
$$

### Gibbs Free Energy Form

$$
k = \frac{k_B T}{h}\,e^{-\Delta^\ddagger G^\circ/RT}
$$

### Enthalpy–Entropy Form

$$
k = \frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-\Delta^\ddagger H/RT}
$$

### ⭐ TST ↔ Arrhenius 精確對應

$$
\Delta^\ddagger H = \Delta^\ddagger U + \Delta n^\ddagger RT,\qquad \Delta n^\ddagger = \sum_i \nu_i
$$

$$
\boxed{\,k = e^{\,1-\Delta n^\ddagger}\,\frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,e^{-E_a/RT}\,}
$$

$$
\boxed{\,A = e^{\,1-\Delta n^\ddagger}\,\frac{k_B T}{h}\,e^{\Delta^\ddagger S/R}\,}
$$
