---
chapter: 3
page: 12
title: "Stripping PES Features and Rebound Mechanism"
source: "Text 9.8, 9.9, 9.11"
sections:
  - Stripping PES summary
  - Attractive / early-downhill surface
  - Rebound mechanism
  - Backward scattering
  - Translational energy products
tags:
  - reaction dynamics
  - stripping mechanism
  - rebound mechanism
  - attractive surface
  - early-downhill
  - PES
  - backward scattering
---

# Chapter 3 — Stripping PES Features and Rebound Mechanism

## 1. 本頁在整章中的位置

承接 Page 11。本頁**並非全新主題**，而是把 reaction dynamics 的對照做完整：

- **上半部**：補完 Page 11 stripping / harpooning 對應的 **PES 形狀特徵**（attractive、early-downhill、large cross section）。
- **下半部**：引入另一類 direct reaction —— **Rebound mechanism**。Page 13 會接續把 rebound 的 **repulsive / late-downhill surface** 說完整。

## 2. 上半部：Stripping 對應的 PES 特徵

### 2.1 Large reaction cross section

> Large reaction cross-section defined by $r_{AB}$.

在 stripping / attractive 情況下，反應不需要完全正對，稍有偏移也能被 PES 的吸引面「抓進」反應通道，因此 **reaction cross section 較大**。

### 2.2 Attractive surface

> Attractive surface (attraction between $A$ and $BC$).

$A$ 和 $BC$ 之間有明顯的吸引作用：在還沒非常靠近之前，系統已感受到往反應通道走的傾向，因此能平順滑進通道。

### 2.3 Early-downhill surface

原頁寫：

> $X^\ddagger$ forms with large $r_{AB} \gg d_{AB}$

意思是 **transition state 出現在很早的位置**（$r_{AB}$ 還遠大於平衡鍵長 $d_{AB}$），系統很早就開始朝產物側「下坡」。這就是 **early barrier**（或 early-downhill）的意思。

### 2.4 三者的綁定

Stripping-type reaction 的 PES 對應鏈通常是：

$$
\text{attractive surface}\;\longrightarrow\;\text{early-downhill}\;\longrightarrow\;\text{large cross section}\;\longrightarrow\;\text{forward scattering}
$$

## 3. 下半部：Rebound Mechanism

### 3.1 反應式

$$
A + BC \longrightarrow AB + C
$$

### 3.2 核心特徵

> After the reactant $A$ has combined with $B$, it rebounds.

- $A$ 從前方接近 $BC$（近似 **head-on approach**）
- 形成新鍵 $A{-}B$ 後，$AB$ **反彈回去**
- 產物 $AB$ 的前進方向**和入射 $A$ 相反**（或明顯偏轉）

### 3.3 原頁散射示意圖

beam 幾何（原頁中段）：

- 入射：$A$ 從左往右；$BC$ 從右下往左上
- 交會後：$AB$ 朝左上（**與 $A$ 原方向相反的方向**），$C$ 朝右下
- 虛線標：c.o.m path

這和 Page 11 的 stripping 圖剛好相反——stripping 的 $AB$ 是沿 $A$ 前進方向繼續走（forward），rebound 的 $AB$ 是往回彈（backward）。

![Rebound scattering geometry](images/rebound-scattering.png "Rebound mechanism 的散射幾何：$A$ 從左水平入射、$BC$ 從右下斜入射；反應後 $AB$ 朝左上反彈（**backward scattering**，和 stripping 相反），$C$ 被推向右方。")

### 3.4 PES 上的 reaction path

原頁左下畫 $r_{AB}$ vs $r_{BC}$ 的等高線圖，反應路徑從 reactant valley 出發後，需要較深入地壓縮 $r_{AB}$（靠得很近）才越過 saddle point，再進入 product valley。這是 **late-barrier / late-downhill surface** 的典型圖像，Page 13 會正式展開。

### 3.5 分步圖（原頁右下）

類似 Page 11 harpooning 的 5 步分解，但結果不同：

| 步驟 | 描述 |
| --- | --- |
| 1 | $A$ 與 $B{-}C$ 分離 |
| 2 | $A\to$、$B{-}C\leftarrow$ 彼此接近 |
| 3 | 正面相碰：$A{-}B$ 開始形成，$C$ 被推走 |
| 4 | **$\leftarrow A{-}B$**、$C\to$（AB 往回彈） |
| 5 | $\leftarrow A{-}B$、$C\to$ 各自加速飛離 |

![Rebound mechanism 5-step cartoon](images/rebound-5step.png "Rebound 5 步分解：head-on approach → 第 3 步的 $A{-}\times{-}B{-}C$ 標記 TS → $AB$ 反彈回去（往左），$C$ 被推向右；產物帶有強 translational energy。")

### 3.6 產物能量分配

> Products have strong translational energy.

Rebound 像硬碰硬的正面撞擊，較多能量以**平動動能**（translational energy）形式被產物帶走，而不是灌進振動。這和 harpooning（振動激發為主）形成明顯對照。

## 4. Stripping vs Rebound 對照

| 面向 | Stripping | Rebound |
| --- | --- | --- |
| 接近方式 | 側邊接近，不必正對 | 近似 **head-on** |
| $AB$ 方向 | **Forward scattering** | **Backward scattering** |
| Cross section | 大 | 小 |
| PES 形狀 | Attractive / early-downhill | Repulsive / late-downhill |
| 產物能量 | 偏向振動 / 內能 | 偏向 **translational** |

## Key Points

### Stripping PES 綁定

Attractive surface → early-downhill → large cross section → forward scattering

### Rebound Mechanism

- $A$ 近似正面撞 $B$，$AB$ 形成後向後彈
- 對應 backward scattering
- 產物帶強 translational energy
- 對應 **repulsive / late-downhill surface**（Page 13 詳述）
