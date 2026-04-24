---
chapter: 3
page: 10
title: "PES Geometry and Molecular Beams"
source: "Text 9.8, 9.9, 9.11"
sections:
  - PES for A + BC reaction
  - Saddle point and reaction path
  - 1D slices along reaction coordinate
  - Molecular beam technique
tags:
  - potential energy surface
  - saddle point
  - reaction path
  - activated complex
  - molecular beams
  - reaction dynamics
---

# Chapter 3 — PES Geometry and Molecular Beams

## 1. 本頁在整章中的位置

**有明確主題切換**：

- **上半部**：承接 Page 09 的 PES 定義，用三原子反應 $A+BC\to AB+C$ 的例子，畫出 PES 上的幾何特徵（3D 視角、2D 等高線視角、以及沿反應座標切下的 1D 剖面）。
- **下半部**：開始新主題 **Molecular Beams**，介紹用交叉分子束研究 state-to-state 反應動力學的實驗方法。

## 2. 上半部：PES Geometry for $A + BC \to AB + C$

### 2.1 座標系與 valleys

以兩個鍵長 $r_{AB}$ 與 $r_{BC}$ 為內部座標，系統位能畫成曲面。

- **Reactant valley**：$r_{AB}$ 大、$r_{BC}$ 小 → 對應 $A + BC$
- **Product valley**：$r_{AB}$ 小、$r_{BC}$ 大 → 對應 $AB + C$
- **$A + B + C$**（完全分離態）：$r_{AB}$ 和 $r_{BC}$ 都大，位於 PES 的高能平台

### 2.2 Reaction path & saddle point

連接兩個 valley 最省能量的通道稱為 **reaction path**（原頁亦標為 "most probable route"）。在這條路徑的最高點是：

**Saddle point（鞍點）**= **Activated complex / Transition state**（標記 $\ddagger$）

鞍點的幾何特徵：

- 沿 reaction path 方向：位能最高點
- 沿垂直於 reaction path 的方向：位能最低點（通道底）

所以它不是一般的「山頂」，而是「馬鞍形」。

![2D contour PES for H+H2 reaction](images/pes-h-h2-contour.jpg "2D 等高線 PES（$H_a + H_b H_c \\leftrightarrow H_a H_b + H_c$）—— 概念等同 $A+BC \\to AB+C$：左上是 reactant valley、右下是 product valley、兩者之間的鞍點就是 transition state（Wikipedia Commons）")

![3D potential energy surface (water molecule example)](images/pes-water-3d.png "3D PES 的視覺示意（以水分子幾何為例，$q_1$=鍵長、$q_2$=鍵角）—— PES 本質是多維曲面；反應性 PES 的具體幾何請對照上面的 2D 等高線圖（Wikipedia Commons）")

### 2.3 原頁的三張輔助剖面

除了 3D 曲面和 2D 等高線外，原頁還畫了**三張一維剖面**幫助理解：

1. **P.E. vs $r_{BC}$**（固定 $r_{AB}$）：一條谷的剖面
2. **$r_{AB}$ vs P.E.**（固定 $r_{BC}$）：另一條谷的剖面
3. **P.E. vs reaction coordinate**：整個 reaction path 拉直的樣子，中間有個能障峰頂標 $\ddagger$，兩側分別標 $A+BC$、$AB+C$

第三張就是大家最熟悉的「能量—反應座標圖」，但要記得它只是 PES 上沿 reaction path 的一條剖面，不是全部資訊。

### 2.4 為什麼要 PES

PES 直接決定：

- 反應能不能走通（barrier 高不高）
- transition state 的位置（early / late barrier）
- reaction path 的彎曲程度 → 能量分配到平動、轉動、振動的比例
- 反應機制（direct、stripping、rebound、harpooning…）

所以後面幾頁討論 reaction dynamics 機制時，都會回到 PES 的幾何。

## 3. 下半部：Molecular Beams

### 3.1 實驗圖像

> Making use of narrow beams of atoms or molecules that cross one another, we obtain information about the state-to-state dynamics (cross section & rate constant) and reaction mechanisms. The transition species can also be detected (through the combination with chemiluminescence information).

原頁左下畫出兩支狹縫管（beams）以某個角度 $\theta$ 交叉，末端有一個 detector 偵測散射產物。

![Crossed molecular beam apparatus](images/molecular-beam-apparatus.png "A beam 與 B beam 以角度 $\theta$ 交叉；碰撞點產生散射產物往各方向飛，detector 接收特定角度範圍內的粒子以分析 state-to-state dynamics。")

### 3.2 可以得到的資訊

| 項目 | 內容 |
| --- | --- |
| State-to-state dynamics | 特定初始量子態 → 特定最終量子態的反應訊息 |
| Cross section | 反應或散射的有效截面 |
| Rate constant | 由碰撞統計與反應機率推得 |
| Reaction mechanism | direct / complex / stripping / rebound / harpooning 分辨 |

### 3.3 Transition / Transient Species 的偵測

結合 **chemiluminescence**（化學發光）或其他光譜訊號，可以偵測壽命極短的 transition species / transient species。這對研究反應中間過程（例如 activated complex 附近的結構）很有用。

## Key Points

### PES 上的核心元素

- Reactant valley（$A + BC$）
- Product valley（$AB + C$）
- **Reaction path / most probable route**
- **Saddle point = Transition state ($\ddagger$)**
- 沿垂直 reaction path 方向為能谷通道

### Molecular Beams 的價值

- 提供單次碰撞層級的動力學資訊
- 可解析 state-to-state 反應
- 可結合 chemiluminescence 偵測 transition species
