---
chapter: 3
page: 5
title: "Arrhenius Form and Corrections (Steric Factor, TST intro)"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Evaluating the integral
  - Arrhenius form from HS theory
  - Steric factor correction
  - Transition State Theory motivation
tags:
  - HS collision theory
  - Arrhenius
  - preexponential factor
  - steric factor
  - transition state theory
  - activation energy
---

# Chapter 3 — Arrhenius Form and Corrections

## 1. 本頁在整章中的位置

本頁**有明確的主題切換**：

- **上半部**：收尾 Page 04 的積分，正式導出 $k = A\,e^{-E_a/RT}$（Arrhenius 形式）。**原頁右下特別標註「↑ 1st midterm」，代表這個結果是期中考重點。**
- **下半部**：開啟新主題 **Correction to HS Collision Theory**，先引入 **steric factor ($P$)** 這個最簡單修正，再引導到下一頁的 **Transition State Theory (TST)**。

## 2. 上半部：HS 積分收尾 → Arrhenius Form

### 2.1 起點（Page 04 的結果）

$$
k = N_\mathrm{A}\left(\frac{8}{\pi\mu k_B T}\right)^{1/2}\frac{\sigma}{k_B T}\int_{E_\min}^\infty (\varepsilon - E_\min)\,e^{-\varepsilon/(k_B T)}\,d\varepsilon
$$

### 2.2 變數代換 $x = \varepsilon - E_\min$

$$
\varepsilon = x + E_\min,\qquad d\varepsilon = dx
$$

上下限：

- $\varepsilon = E_\min \Rightarrow x = 0$
- $\varepsilon \to \infty \Rightarrow x \to \infty$

因此：

$$
k = N_\mathrm{A}\left(\frac{8}{\pi\mu k_B T}\right)^{1/2}\frac{\sigma}{k_B T}\int_0^\infty x\,e^{-(x+E_\min)/(k_B T)}\,dx
$$

### 2.3 提出常數指數項

$$
k = N_\mathrm{A}\left(\frac{8}{\pi\mu k_B T}\right)^{1/2}\frac{\sigma}{k_B T}\,e^{-E_\min/(k_B T)}\int_0^\infty x\,e^{-x/(k_B T)}\,dx
$$

### 2.4 積分（分部積分表格）

原頁右側用 D/I 表做 integration by parts，令 $a = k_B T$：

| D | I |
| --- | --- |
| $x$ | $e^{-x/a}$ |
| $-1$ | $-a\,e^{-x/a}$ |
| $0$ | $a^2\,e^{-x/a}$ |

$$
\int_0^\infty x\,e^{-x/a}\,dx = a^2 = (k_B T)^2
$$

### 2.5 代回化簡

$$
k = N_\mathrm{A}\left(\frac{8}{\pi\mu k_B T}\right)^{1/2}\frac{\sigma}{k_B T}\cdot (k_B T)^2\,e^{-E_\min/(k_B T)}
$$

整理（注意 $\frac{(k_BT)^2}{k_BT} = k_BT$ 併入平方根內變成 $8k_BT/(\pi\mu)$）：

$$
\boxed{\,k = N_\mathrm{A}\,\sigma\left(\frac{8 k_B T}{\pi\mu}\right)^{1/2}e^{-E_\min/(k_B T)}\,}
$$

### 2.6 用 $\langle u_{AB}\rangle$ 改寫

因平均相對速率

$$
\langle u_{AB}\rangle = \left(\frac{8 k_B T}{\pi\mu}\right)^{1/2}
$$

所以：

$$
\boxed{\,k = N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,e^{-E_\min/(k_B T)}\,}
$$

### 2.7 換成 molar 形式（Arrhenius）

用 $E_a = N_\mathrm{A}\,E_\min$、$R = N_\mathrm{A}\,k_B$：

$$
\frac{E_\min}{k_B T} = \frac{E_a}{RT}
$$

因此：

$$
\boxed{\,k = A\,e^{-E_a/RT}\,}
\qquad\text{where}\qquad
\boxed{\,A = N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,}
$$

⭐ **↑ 1st midterm**（原頁標註）

這就是 HS collision theory 對 Arrhenius form 的完整推導結果。

## 3. 下半部：Correction to HS Collision Theory

HS collision theory 的問題：

> 真實分子不是球形（原頁紅字），也不是任何方向碰上都能反應。

### 3.1 Simplest Correction: Steric Factor

在 HS 公式前乘上一個 **steric factor** $P$：

> 在能量足夠的碰撞中，只有一部分因取向正確而真正導致反應。

修正後的速率常數：

$$
\boxed{\,k = P\,N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,e^{-E_a/RT}\,}
$$

其中 $0 < P \le 1$。$P$ 越小代表對取向要求越嚴格。

### 3.2 More Satisfactory Treatment: Transition State Theory (TST)

> Assumes that the system must pass over a **Gibbs free energy barrier** to go from reactants to products; once at the top of the barrier... *(本頁寫到這裡被截斷，下一頁接續)*

TST 的核心想法：反應不再只是「碰到 + 能量夠」，而是要經過 **activated complex**（過渡態）；整體速率由 **Gibbs free energy of activation** $\Delta G^\ddagger$ 決定。下一頁會正式展開。

## Key Formulas

### 關鍵積分

$$
\int_0^\infty x\,e^{-x/(k_B T)}\,dx = (k_B T)^2
$$

### HS Rate Constant

$$
k = N_\mathrm{A}\,\sigma\left(\frac{8 k_B T}{\pi\mu}\right)^{1/2}e^{-E_\min/(k_B T)}
= N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,e^{-E_\min/(k_B T)}
$$

### Arrhenius Form

$$
\boxed{\,k = A\,e^{-E_a/RT},\quad A = N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,}
$$

### Average Relative Speed

$$
\langle u_{AB}\rangle = \sqrt{\frac{8 k_B T}{\pi\mu}},\qquad \mu = \frac{m_A m_B}{m_A + m_B}
$$

### With Steric Factor

$$
\boxed{\,k = P\,N_\mathrm{A}\,\sigma\,\langle u_{AB}\rangle\,e^{-E_a/RT},\quad 0 < P \le 1\,}
$$

### Microscopic ↔ Molar Correspondence

$$
E_a = N_\mathrm{A}\,E_\min,\qquad R = N_\mathrm{A}\,k_B
$$
