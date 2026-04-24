---
chapter: 3
page: 6
title: "Transition State Theory — Framework and Two Assumptions"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Free energy diagram
  - Two TST assumptions
  - Quasi-equilibrium of activated complex
  - k = nu K-double-dagger
tags:
  - transition state theory
  - activated complex
  - Gibbs free energy of activation
  - reaction coordinate
  - rate constant
---

# Chapter 3 — Transition State Theory: Framework and Two Assumptions

## 1. 本頁在整章中的位置

承接 Page 05 下半部對 TST 的開場。本頁正式建立：

- TST 的能障圖像
- TST 的**兩個基本假設**
- 把 rate constant 寫成 $k = \nu K^\ddagger$

下一頁會把 $\nu$ 具體化為 $k_B T/h$，並接到 $\Delta G^\ddagger / \Delta H^\ddagger / \Delta S^\ddagger$ 的熱力學形式。

## 2. Free Energy Diagram

TST 把反應看成沿著 **reaction coordinate** 前進的過程。畫 $G$ 對 reaction coordinate：

```
G
|          ‡ transition state
|         ╱╲
|        ╱  ╲
|       ╱    ╲
|      ╱      ╲____________
|     ╱                   product
|___reactant______________________→ reaction coordinate
```

原頁標出**三個自由能量**：

| 符號 | 意義 |
| --- | --- |
| $\Delta^\ddagger G_1^\circ$ | reactants → transition state 的 forward activation free energy |
| $\Delta^\ddagger G_{-1}^\circ$ | products → transition state 的 reverse activation free energy |
| $\Delta G^\circ$ | reactants → products 的 overall reaction free energy |

關係：$\Delta G^\circ = \Delta^\ddagger G_1^\circ - \Delta^\ddagger G_{-1}^\circ$

## 3. Two Assumptions（原頁 ⭐ 標註重點）

### 3.1 假設一：reactants 與 activated complex 之間的 quasi-equilibrium

TST 把反應寫成：

$$
A + B \;\rightleftharpoons\; X^\ddagger \;\xrightarrow{\,k\,}\; Y + Z
$$

也就是 reactants 與 activated complex 之間建立近似平衡，activated complex 再以 rate constant $k$ 衰變為 products。

定義 activated complex 的 equilibrium constant：

$$
\boxed{\,K^\ddagger = \dfrac{[X^\ddagger]}{[A][B]}\,}
$$

因此：

$$
[X^\ddagger] = K^\ddagger [A][B]
$$

### 3.2 假設二：reaction coordinate 沿著鍵振動方向

對涉及**鍵斷裂**的反應，TST 假設 reaction coordinate 可以看成沿那條關鍵鍵的振動方向。意思是：

- activated complex 不是靜止不動
- 它沿 reaction coordinate 振動
- 一旦振動成功跨越 barrier，就變成 products

因此速率可寫成：

$$
r = \nu\,[X^\ddagger]
$$

其中 $\nu$ 是沿 reaction coordinate **跨越 barrier 往 product 前進的有效頻率**。

## 4. 推出 TST 的基本速率常數

把假設二的速率式代入假設一的平衡：

$$
r = \nu\,[X^\ddagger] = \nu\,K^\ddagger[A][B] = k[A][B]
$$

和 bimolecular rate law $r = k[A][B]$ 相比：

$$
\boxed{\,k = \nu\,K^\ddagger\,}
$$

單位（原頁標註）：

$$
[k] = \mathrm{s^{-1}\,M^{1-m}}
$$

其中 $m$ 是反應級數。

## 5. 這一頁真正要記住什麼

- $K^\ddagger$：reactants 與 activated complex 的 quasi-equilibrium 常數
- $\nu$：activated complex 沿 reaction coordinate 跨越 barrier 的頻率
- 基本骨架：**$k = \nu\,K^\ddagger$**

Page 07 會指出，barrier top 的振動模式可近似為 $\nu = k_B T/h$，於是

$$
k = \frac{k_B T}{h}\,K^\ddagger \qquad (\text{Eyring form})
$$

## Key Formulas

### TST 反應圖式

$$
A + B \;\rightleftharpoons\; X^\ddagger \;\xrightarrow{\,k\,}\; Y + Z
$$

### Activated Complex 平衡

$$
\boxed{\,K^\ddagger = \dfrac{[X^\ddagger]}{[A][B]}\,}
$$

### Rate Constant (TST 骨架)

$$
\boxed{\,k = \nu\,K^\ddagger\,},\qquad [k] = \mathrm{s^{-1}\,M^{1-m}}
$$

### 自由能關係（Free Energy Diagram）

$$
\Delta G^\circ = \Delta^\ddagger G_1^\circ - \Delta^\ddagger G_{-1}^\circ
$$
