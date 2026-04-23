---
chapter: 3
page: 2
title: "HS Rate Law and Transition to Activation Energy"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Elementary bimolecular rate law
  - Number density vs molar concentration
  - Derivation of k from Z_AB
  - Preexponential factor identification
  - Activation energy motivation
tags:
  - HS collision theory
  - rate law
  - preexponential factor
  - elementary reaction
  - number density
  - activation energy
---

# Chapter 3 — HS Rate Law and Transition to Activation Energy

## 1. 承接前頁

上一頁建立了 collision density $Z_{AB}$。若假設**所有碰撞都有效**，這個量**就是** $A$ 與 $B$ 的反應速率（number density 版本）。本頁上半部把它接到 **elementary reaction** 的 molar rate law，辨識出 rate constant $k$ 與 **preexponential factor**；下半部開始轉入 **activation energy from HS collision theory** 主題。

## 2. Elementary Bimolecular Reaction

$$
A + B \longrightarrow C \qquad (\text{elementary reaction})
$$

速率式：

$$
r_A = -\frac{d[A]}{dt} = k[A][B]
$$

$$
r_B = -\frac{d[B]}{dt} = k[A][B]
$$

$$
r_C = \frac{d[C]}{dt} = k[A][B]
$$

速率的兩種常見單位（原頁左側方框）：

- 若用 number density：$\mathrm{m^{-3}\,s^{-1}}$
- 若用 molar concentration：$\mathrm{mol\,m^{-3}\,s^{-1}}$

## 3. Number Density vs Molar Concentration

### 3.1 符號約定

- $[\,]$：**molar concentration**（$\mathrm{mol\,m^{-3}}$ 或 $\mathrm{mol\,L^{-1}}$）
- $C_i$：**number density**（$\mathrm{m^{-3}}$）

### 3.2 兩者的換算鏈

$$
C_i = \frac{N_i}{V} = \frac{n_i N_\mathrm{A}}{V} = [i]\,N_\mathrm{A}
$$

其中：

- $N_i$：species $i$ 的分子總數
- $n_i$：species $i$ 的 moles
- $N_\mathrm{A}$：**Avogadro constant**

### 3.3 ⚠️ 符號警示（原頁右側 legend）

| 符號 | 意義 |
| --- | --- |
| $N_a$（下標小寫 a） | species $A$ 的個數 |
| $N_\mathrm{A}$（下標大寫 A） | Avogadro constant |

關係式：

$$
N_a = N_\mathrm{A}\,n_a
$$

兩者**絕對不能混用**，本頁後面推導會同時出現。

## 4. 從 Z_AB 推到 k

### 4.1 Z_AB 和 dC/dt 的對應

若假設所有 $A$–$B$ 碰撞都有效：

$$
Z_{AB} = -\frac{dC_A}{dt} = -\frac{dC_B}{dt}
$$

物理意義：

- $Z_{AB}$：單位體積、單位時間的 $A$–$B$ 碰撞次數
- $-dC_A/dt$：單位體積、單位時間 $A$ 被消耗的個數

### 4.2 對 t 微分、移項

由 $C_A = N_\mathrm{A}[A]$：

$$
-\frac{d[A]}{dt}
=
\frac{1}{N_\mathrm{A}}\left(-\frac{dC_A}{dt}\right)
=
\frac{Z_{AB}}{N_\mathrm{A}}
$$

### 4.3 代入 Z_AB

由上一頁：

$$
Z_{AB} = \sigma\langle u_{AB}\rangle\left(\frac{N_a}{V}\right)\left(\frac{N_b}{V}\right)
= \sigma\langle u_{AB}\rangle\,C_A C_B
$$

再用 $C_A = N_\mathrm{A}[A]$、$C_B = N_\mathrm{A}[B]$：

$$
Z_{AB} = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}^2\,[A][B]
$$

因此：

$$
-\frac{d[A]}{dt}
=
\frac{Z_{AB}}{N_\mathrm{A}}
=
\sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,[A][B]
$$

### 4.4 辨識出 k

和 elementary rate law $-d[A]/dt = k[A][B]$ 相比：

$$
\boxed{\,k = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,}
$$

這就是 HS collision theory 在「所有碰撞都有效」假設下給出的 rate constant。

## 5. Preexponential Factor 的物理來源

將此 $k$ 對照 Arrhenius 式：

$$
k = A\,e^{-E_a/RT}
$$

若暫時忽略能量門檻（即 $e^{-E_a/RT}\to 1$），就得到：

$$
\boxed{\,A = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,}
$$

這就是 Arrhenius 式中 **preexponential factor**（又稱 **collision frequency factor**）的 HS collision 來源。三個物理量的角色：

- $\sigma$：碰撞截面（collision cross section）
- $\langle u_{AB}\rangle$：$A$–$B$ 平均相對速率
- $N_\mathrm{A}$：Avogadro constant（把 number density 換成 molar）

## 6. Activation Energy from HS Collision Theory（下半部開啟新主題）

### 6.1 問題起點

「所有碰撞都有效」顯然太理想。實際上：

> Only for cases whose energy is above a certain value ($E_\min$) can the reaction occur.
>
> 只有當碰撞能量大於某個門檻 $E_\min$ 時，反應才可能發生。

### 6.2 修正後的速率式

真正的反應速率應寫成：

$$
-\frac{d[A]}{dt}
=
(\text{collision density})
\times
(\text{probability that a collision has sufficient energy})
$$

即：

$$
-\frac{d[A]}{dt}
=
Z_{AB} \times P(E \ge E_\min)
$$

亦即原頁底下中文註解：「全部發生的碰撞次數 × 有足夠能量的占比」。

下一頁會繼續推導 $P(E \ge E_\min)$，並最終導出 Arrhenius 式中的 $e^{-E_a/RT}$ 項。

## Key Formulas

### Elementary Rate Law

$$
r = -\frac{d[A]}{dt} = -\frac{d[B]}{dt} = \frac{d[C]}{dt} = k[A][B]
$$

### Number Density ↔ Molar Concentration

$$
C_i = \frac{N_i}{V} = \frac{n_i N_\mathrm{A}}{V} = [i]\,N_\mathrm{A}
$$

$$
N_a = N_\mathrm{A}\,n_a
$$

### Z_AB 連到 rate

$$
Z_{AB} = -\frac{dC_A}{dt}
\qquad
-\frac{d[A]}{dt} = \frac{Z_{AB}}{N_\mathrm{A}} = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,[A][B]
$$

### Rate Constant（HS，all collisions effective）

$$
\boxed{\,k = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,}
$$

### Preexponential Factor

$$
\boxed{\,A = \sigma\langle u_{AB}\rangle\,N_\mathrm{A}\,}
$$

### 引入能量門檻後的速率式

$$
-\frac{d[A]}{dt} = Z_{AB} \times P(E \ge E_\min)
$$
