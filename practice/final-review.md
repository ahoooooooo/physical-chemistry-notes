---
chapter: practice
page: final-review
title: "考前總複習 — 4/27 第二次期中考"
source: "Ch.3 p5下半~p13 + Ch.4 全部 + HW3/4/5"
sections:
  - 考試範圍
  - Ch.3 TST 核心
  - Ch.3 PES 與反應動力學
  - Ch.4 古典基礎
  - Ch.4 黑體輻射
  - Ch.4 光電 / Compton
  - Ch.4 Bohr / Rydberg
  - Ch.4 de Broglie / Heisenberg
  - 作業題型速查
tags:
  - final review
  - transition state theory
  - PES
  - quantum theory
  - Bohr
  - de Broglie
  - Heisenberg
---

# 考前總複習 — 4/27 第二次期中考

## 考試範圍

- **Ch.3 第 5 頁下半起 → 第 13 頁（結尾）** — TST + PES + Reaction Dynamics
- **Ch.4 全部（第 1–17 頁）** — 古典基礎 → 量子理論 → 不確定原理
- **作業**：HW3 全部、HW4 全部、HW5 11.10 / 11.39 / 11.42（11.16、11.21 不考）

---

## Ch.3 — Transition State Theory 核心

### 1. Eyring 方程式（**必背**）

$$
k = \frac{k_B T}{h}\,e^{-\Delta^\ddagger G^\circ/RT}
$$

改寫成 $\Delta H$、$\Delta S$ 形式：

$$
k = \frac{k_B T}{h}\,e^{\Delta^\ddagger S^\circ/R}\,e^{-\Delta^\ddagger H^\circ/RT}
$$

### 2. 熱力學關係

$$
\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ
$$

### 3. $E_a$ 與 $\Delta^\ddagger H^\circ$ 的對應（**分情境**）

| 情境 | $E_a$ 與 $\Delta^\ddagger H^\circ$ 的關係 | 對應前置因子 $A$ |
|---|---|---|
| **Gas-phase unimolecular** | $E_a = \Delta^\ddagger H^\circ + RT$ | $A = e\cdot\dfrac{k_BT}{h}\cdot e^{\Delta^\ddagger S^\circ/R}$ |
| **Gas-phase bimolecular** | $E_a = \Delta^\ddagger H^\circ + 2RT$ | $A = e^2\cdot\dfrac{k_BT}{h}\cdot e^{\Delta^\ddagger S^\circ/R}$ |
| **Solution（液相）** | $E_a = \Delta^\ddagger H^\circ + RT$（$\Delta^\ddagger V^\circ\approx 0$） | — |

**考試最容易錯的地方**：氣相 bimolecular 是 $+2RT$，其他（unimolecular、solution）是 $+RT$。

### 4. 對齊 Arrhenius 和 TST

由 $k = A e^{-E_a/RT} = \dfrac{k_BT}{h}e^{-\Delta^\ddagger G^\circ/RT}$：

$$
\Delta^\ddagger G^\circ = E_a + RT\ln\!\left(\frac{k_B T}{Ah}\right)
$$

### 5. Arrhenius 作圖

對 $\ln k$ 對 $1/T$ 作圖，**斜率 $= -E_a/R$**，**截距 $= \ln A$**。

---

## Ch.3 — PES 與反應動力學

### Stripping vs Rebound 對照（**考試重點**）

| 面向 | **Stripping** | **Rebound** |
|---|---|---|
| 接近方式 | 側邊、不必正對 | **Head-on** |
| $AB$ 散射方向 | **Forward** | **Backward** |
| Reaction cross section | **Large** | **Small** |
| PES 本質 | **Attractive** | **Repulsive** |
| Barrier 位置 | **Early-downhill**（$X^\ddagger$ 在大 $r_{AB}$，反應早期） | **Late-downhill**（$X^\ddagger$ 在大 $r_{BC}$，反應後期） |
| 產物能量分配 | 偏向振動 / 內能 | 偏向 **平動** |
| 代表 | Harpooning | 普通 direct collision |

### Harpooning 機制

- 長程 electron transfer（電子先「丟」過去產生 ion pair）
- 之後 Coulomb attraction 把兩 ion 拉在一起 → 反應 cross section 很大
- 產物振動能量大（典型 $K{+}Br_2 \to KBr{+}Br$）

### Early vs Late barrier

- **Early barrier**：transition state 長得像 reactants → 反應物動能有效幫助跨越 barrier
- **Late barrier**：transition state 長得像 products → 反應物振動能量才有效

---

## Ch.4 — 古典基礎

### 1. SHM（**HW4 11.5**）

$$
T = 2\pi\sqrt{\frac{m}{k}},\qquad \omega = \sqrt{\frac{k}{m}},\qquad v_{\max} = A\omega
$$

### 2. Waves

$$
\lambda\nu = c,\qquad k = \frac{2\pi}{\lambda},\qquad \omega = 2\pi\nu
$$

波動方程：$\dfrac{\partial^2 y}{\partial x^2} = \dfrac{1}{u^2}\dfrac{\partial^2 y}{\partial t^2}$

### 3. Standing wave 邊界條件

兩端固定、長度 $l$：$\lambda_n = \dfrac{2l}{n}$，$n$ 是 mode number = antinode 數

---

## Ch.4 — 黑體輻射

### Planck 的量子化假設

光子能量必須為 $\hbar\omega$ 的整數倍：

$$
E = h\nu = \hbar\omega,\qquad \hbar = \frac{h}{2\pi}
$$

### Stefan-Boltzmann 定律

$$
M = \sigma T^4,\qquad \sigma = 5.67\times 10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}
$$

### Wien's displacement law

$$
\lambda_{\max}T = 2.898\times 10^{-3}\ \mathrm{m\cdot K}
$$

---

## Ch.4 — 光電效應 / Compton

### Einstein 光電方程（**HW4 11.13**）

$$
h\nu = \phi + \frac{1}{2}m_e v^2
$$

- $\phi$：work function（功函數）
- Threshold：$h\nu_{\min} = \phi$ → $\lambda_{\max} = hc/\phi$

### 光子動量

$$
p = \frac{h}{\lambda} = \frac{h\nu}{c}
$$

### Compton scattering

$$
\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1-\cos\theta)
$$

- Compton wavelength：$\lambda_C = h/(m_e c) = 2.426\times 10^{-12}\ \mathrm{m}$
- $\theta = 0$：沒變化；$\theta = \pi$：$\Delta\lambda = 2\lambda_C$

---

## Ch.4 — Bohr / Rydberg

### 1. Bohr 假設

- 角動量量子化：$L = mur = n\dfrac{h}{2\pi}$
- 定態不輻射
- 能階間躍遷放/吸光子：$h\nu = E_m - E_n$

### 2. 軌道半徑與速度

$$
r_n = \frac{n^2 a_0}{Z},\qquad a_0 = \frac{\varepsilon_0 h^2}{\pi m e^2} = 5.292\times 10^{-11}\ \mathrm{m}
$$

氫原子基態速度（**HW5 11.39**）：

$$
u = \frac{h}{2\pi m a_0} = 2.19\times 10^6\ \mathrm{m/s}
$$

### 3. 能階與 Rydberg

$$
E_n = -\frac{Z^2}{n^2}\cdot 13.6\ \mathrm{eV}
$$

$$
\frac{1}{\lambda} = R_H Z^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right),\quad R_H = 1.0968\times 10^7\ \mathrm{m^{-1}}
$$

### 4. 光譜系列（$n_1$ 是較低能階）

| 系列 | $n_1$ | 範圍 |
|---|---|---|
| Lyman | 1 | UV |
| Balmer | 2 | Visible |
| Paschen | 3 | IR |
| Brackett | 4 | IR |
| Pfund | 5 | far IR |

---

## Ch.4 — de Broglie / Heisenberg

### 1. de Broglie 物質波

$$
\lambda = \frac{h}{p} = \frac{h}{mu}
$$

Bohr 軌道上：圓周 = 整數個 de Broglie 波長 → 駐波條件

$$
2\pi r = n\lambda \;\Rightarrow\; \lambda = \frac{2\pi r}{n} = 2\pi n a_0\ (Z=1)
$$

### 2. Heisenberg 不確定原理（**HW5 11.10**）

$$
\Delta q\cdot\Delta p \ge \frac{\hbar}{2}
$$

常用改寫（質量已知時）：

$$
\Delta q\cdot\Delta u \ge \frac{\hbar}{2m} = \frac{h}{4\pi m}
$$

也有能量-時間形式：$\Delta E\cdot\Delta t \ge \hbar/2$

**物理意義**：宏觀粒子（$m$ 大）→ $\Delta u$ 很小 → 不重要；微觀粒子（電子）→ $\Delta u$ 巨大 → 決定性影響。

---

## 作業題型速查

### HW3（Ch.3）

| 題 | 情境 | 關鍵操作 |
|---|---|---|
| 9.39 | 氣相 bimolecular H₂+I₂ | $E_a = \Delta^\ddagger H^\circ + 2RT$；對齊 Arrhenius-TST 求 $\Delta^\ddagger S^\circ$ |
| 9.41 | 液相 unimolecular 水解 | Arrhenius 作圖；$E_a = \Delta^\ddagger H^\circ + RT$ |
| 9.43 | 碰撞密度 → 預測 $k$ | $Z_{AA} = 2 d_{AA}^2 N_A^2\sqrt{\pi k_B T/m}$；$k = Z_{AA}e^{-E_a/RT}$ |

### HW4（Ch.4）

| 題 | 情境 | 關鍵操作 |
|---|---|---|
| 11.1 | 325 nm 光子參數 | $\nu = c/\lambda$、$E = h\nu$、$p = h/\lambda$ |
| 11.5 | 彈簧 SHM | $T = 2\pi\sqrt{m/k}$、$v_{\max} = A\omega$ |
| 11.13 | Pt 光電效應 | $\lambda_{\max} = hc/\phi$；$\frac{1}{2}mv^2 = h\nu - \phi$ |

### HW5（Ch.4，只考 3 題）

| 題 | 情境 | 關鍵操作 |
|---|---|---|
| 11.10 | 膠體粒子 $\Delta u$ | $\Delta u = h/(4\pi m\Delta q)$；結論：宏觀不重要 |
| 11.39 | 氫原子 Bohr + de Broglie | $u = h/(2\pi m a_0)$；$\lambda = 2\pi n a_0$；$C:\lambda = n$ |
| 11.42 | $n=4\to 5$ transition | Rydberg 直接代；Brackett series，IR |

---

## 考試臨場 checklist

- [ ] 題目給氣相/液相？bimolecular/unimolecular？→ 決定 $E_a$ 修正是 $+RT$ 還是 $+2RT$
- [ ] 單位：$A$ 帶 $\mathrm{dm^3\,mol^{-1}\,s^{-1}}$ 還是 $\mathrm{s^{-1}}$？
- [ ] Rydberg 題目給 $n_1, n_2$？注意 $n_1 < n_2$ 才有正的 $1/\lambda$
- [ ] Bohr 題目牽涉到 $Z$ 嗎？氫原子 $Z=1$ 可略；He⁺ / Li²⁺ 不能
- [ ] 光電效應：$\phi$ 是 eV 還是 J？先統一單位再代

---

## 常數速查

| 常數 | 值 |
|---|---|
| $h$ | $6.626\times 10^{-34}\ \mathrm{J\cdot s}$ |
| $\hbar = h/2\pi$ | $1.055\times 10^{-34}\ \mathrm{J\cdot s}$ |
| $k_B$ | $1.381\times 10^{-23}\ \mathrm{J/K}$ |
| $c$ | $2.998\times 10^8\ \mathrm{m/s}$ |
| $R$ | $8.3145\ \mathrm{J/(mol\cdot K)}$ |
| $N_A$ | $6.022\times 10^{23}\ \mathrm{mol^{-1}}$ |
| $m_e$ | $9.109\times 10^{-31}\ \mathrm{kg}$ |
| $e$ | $1.602\times 10^{-19}\ \mathrm{C}$ |
| $a_0$ | $5.292\times 10^{-11}\ \mathrm{m}$ |
| $R_H$ | $1.0968\times 10^7\ \mathrm{m^{-1}}$ |
| 13.6 eV | $2.18\times 10^{-18}\ \mathrm{J}$ |

$1\ \mathrm{eV} = 1.602\times 10^{-19}\ \mathrm{J}$
