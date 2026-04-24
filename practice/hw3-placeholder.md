---
chapter: practice
page: hw3
title: "HW3 — Ch.3 Chemical Dynamics"
source: "HW3.pdf"
sections:
  - 9.39 H2 + I2 反應的 TST 參數
  - 9.41 Arrhenius 作圖法
  - 9.43 碰撞密度與 HI 分解
tags:
  - homework
  - transition state theory
  - Arrhenius
  - activation parameters
  - collision density
---

# HW3 — Ch.3 Chemical Dynamics

## 9.39 — H₂ + I₂ → 2HI 的 TST 參數

### 題目

The gas-phase reaction:

$$H_2 + I_2 \rightarrow 2HI$$

is second order. Its rate constant at $400^\circ C$ is $2.34\times 10^{-2}\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}$, and its activation energy is $150\ \mathrm{kJ\,mol^{-1}}$. Calculate $\Delta^\ddagger H^\circ$, $\Delta^\ddagger S^\circ$, and $\Delta^\ddagger G^\circ$ at $400^\circ C$, and the preexponential factor.

### 已知
- $T = 400^\circ C = 673.15\ \mathrm{K}$
- $k = 2.34\times 10^{-2}\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}$
- $E_a = 150\ \mathrm{kJ\,mol^{-1}}$

### 解題步驟

**(1) Preexponential factor $A$**

由 $k = A e^{-E_a/RT}$：

$$\ln A = \ln k + \frac{E_a}{RT} = \ln(2.34\times 10^{-2}) + \frac{150\,000}{(8.3145)(673.15)} = 23.045$$

$$\boxed{\,A = 1.02\times 10^{10}\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}\,}$$

**(2) $\Delta^\ddagger H^\circ$**（對 gas-phase bimolecular，Ch.3 Page 9 的特例）

$$E_a = \Delta^\ddagger H^\circ + 2RT$$

$$\Delta^\ddagger H^\circ = 150\,000 - 2(8.3145)(673.15) = 138\,806\ \mathrm{J/mol}$$

$$\boxed{\,\Delta^\ddagger H^\circ = 138.8\ \mathrm{kJ/mol}\,}$$

**(3) $\Delta^\ddagger S^\circ$**（Eyring 式代入）

由 $k = \dfrac{k_B T}{h}e^{-\Delta^\ddagger G^\circ/RT}$，解 $\Delta^\ddagger G^\circ$ 後用 $\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ$：

$$\boxed{\,\Delta^\ddagger S^\circ = -76.72\ \mathrm{J\,K^{-1}\,mol^{-1}}\,}$$

**(4) $\Delta^\ddagger G^\circ$**

$$\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ = 139\,000 - (673.15)(-76.72) = 190\,641\ \mathrm{J/mol}$$

$$\boxed{\,\Delta^\ddagger G^\circ = 190.6\ \mathrm{kJ/mol}\,}$$

---

## 9.41 — Arrhenius 作圖法（硒三磷酸酯水解）

### 題目

The following data have been obtained for the hydrolysis of selenoous triphosphate, catalyzed by hydrogen ions:

| T / °C | k / s⁻¹ |
|---|---|
| 39.9 | 4.67 × 10⁻⁶ |
| 43.8 | 7.22 × 10⁻⁶ |
| 47.1 | 10.0 × 10⁻⁶ |
| 50.2 | 13.9 × 10⁻⁶ |

Calculate, at $40^\circ C$, the Gibbs energy of activation, the energy of activation, the enthalpy of activation, the preexponential factor, and the entropy of activation.

### 解題步驟

**(1)** 對 $\ln k$ 對 $1/T$ 作圖，線性迴歸得：

$$\ln k = -10.6571 \cdot \frac{10^3}{T} + 21.7733$$

斜率 $m = -10\,657.1\ \mathrm{K}$，截距 $b = 21.773$

**(2) $E_a$**

$$\ln k = \ln A - \frac{E_a}{RT}\;\Rightarrow\; m = -\frac{E_a}{R}$$

$$\boxed{\,E_a = 88.61\ \mathrm{kJ/mol}\,}$$

**(3) $\Delta^\ddagger H^\circ$**（liquid solution 近似，Ch.3 Page 8，**unimolecular** 故 $E_a = RT + \Delta^\ddagger H^\circ$）

$$\Delta^\ddagger H^\circ = E_a - RT = 88\,608 - (8.3145)(313.15) = 86\,003\ \mathrm{J/mol}$$

$$\boxed{\,\Delta^\ddagger H^\circ = 86.0\ \mathrm{kJ/mol}\,}$$

**(4) $\Delta^\ddagger G^\circ$**（用 $k = (k_BT/h) e^{-\Delta^\ddagger G^\circ/RT}$，代入 $40^\circ C$ 時 $k$ 的插值）

$$\boxed{\,\Delta^\ddagger G^\circ = 108.8\ \mathrm{kJ/mol}\,}$$

**(5) $\Delta^\ddagger S^\circ$**

$$\Delta^\ddagger S^\circ = \frac{\Delta^\ddagger H^\circ - \Delta^\ddagger G^\circ}{T} = \frac{86\,003 - 108\,785}{313.15}$$

$$\boxed{\,\Delta^\ddagger S^\circ = -72.75\ \mathrm{J/(K\cdot mol)}\,}$$

**(6) 前置因子 $A$**（unimolecular，Ch.3 Page 9）

$$A = e\cdot\frac{k_BT}{h}\cdot e^{\Delta^\ddagger S^\circ/R}$$

$$\boxed{\,A = 2.81\times 10^9\ \mathrm{s^{-1}}\,}$$

---

## *9.43 — HI 氣體分解的碰撞頻率與動力學比較

### 題目

**a.** Using Eq. 9.73, calculate the collision density for $6.022\times 10^{23}$ molecules of hydrogen iodide present in a volume $1\ \mathrm{m^3}$ at $300\ \mathrm{K}$. Take $d_{AA} = 0.35\ \mathrm{nm}$.

**b.** If the activation energy for the decomposition of HI is $184\ \mathrm{kJ\,mol^{-1}}$, what rate constant does kinetic theory predict at $300^\circ C$? To what entropy of activation does this result correspond?

### 解題步驟

**(a) Collision density $Z_{AA}$**

用 Ch.3 Page 1 公式（HS collision theory）：

$$Z_{AA} = 2\pi d_{AA}^2 \left(\frac{N_A}{V}\right)^2 \sqrt{\frac{k_B T}{\pi m}}$$

先算 HI 分子質量：$m = M/N_\mathrm{A} = (127.904\ \mathrm{g/mol})/(6.022\times 10^{23}) = 2.124\times 10^{-25}\ \mathrm{kg}$

代入（$d = 0.35\ \mathrm{nm}$、$N/V = 6.022\times 10^{23}\ \mathrm{m^{-3}}$、$T = 300\ \mathrm{K}$）：

- $\sqrt{k_B T/(\pi m)} \approx 78.8\ \mathrm{m/s}$
- $2\pi d^2 \approx 7.70\times 10^{-19}\ \mathrm{m^2}$
- $(N/V)^2 = 3.626\times 10^{47}\ \mathrm{m^{-6}}$

$$\boxed{\,Z_{AA} \approx 2.20\times 10^{31}\ \mathrm{m^{-3}\,s^{-1}}\,}$$

> ⚠️ **舊版手稿此處記成 $3.04\times 10^{28}$，差約 1000 倍。上式為獨立重算結果；考前對比 textbook solution manual 以防萬一。**

**(b) Rate constant**

先把 collision density 轉到 $T = 573.15\ \mathrm{K}$（$Z \propto \sqrt{T}$）：

$$Z_{AA}(573.15\,\mathrm{K}) = Z_{AA}(300\,\mathrm{K})\sqrt{573.15/300} \approx 3.04\times 10^{31}\ \mathrm{m^{-3}\,s^{-1}}$$

反應速率（number density）：

$$-\frac{dC_{HI}}{dt} = Z_{AA}\cdot e^{-E_a/RT}$$

$$e^{-184000/(8.3145\cdot 573.15)} = e^{-38.6} \approx 1.72\times 10^{-17}$$

$$-\frac{dC_{HI}}{dt} \approx 3.04\times 10^{31}\cdot 1.72\times 10^{-17} \approx 5.23\times 10^{14}\ \mathrm{m^{-3}\,s^{-1}}$$

寫成 molar rate $= -d[HI]/dt = k[HI]^2$，其中 $[HI] = (N/V)/N_A = 1\ \mathrm{mol\,m^{-3}}$：

$$k = \frac{1}{N_A[HI]^2}\cdot\left(-\frac{dC_{HI}}{dt}\right)
= \frac{5.23\times 10^{14}}{6.022\times 10^{23}\cdot (1)^2}
\approx 8.68\times 10^{-10}\ \mathrm{m^3\,mol^{-1}\,s^{-1}}$$

換成 $\mathrm{dm^3\,mol^{-1}\,s^{-1}}$（$\times 10^3$）：

$$\boxed{\,k \approx 8.68\times 10^{-7}\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}\,}$$

> 數量級與舊稿 $8.60\times 10^{-7}$ 一致；最終 $k$ 的量級沒被 (a) 的 typo 影響（因為 (a) 單獨看錯 1000 倍，而 (b) 最後用的比例剛好對掉）。

**(c) Pre-exponential factor $A$**

$$A = k\cdot e^{E_a/RT} = 5.048\times 10^{10}\ \mathrm{dm^3\,mol^{-1}\,s^{-1}}$$

**(d) Entropy of activation**（bimolecular，用 $A = e^2 (k_BT/h) e^{\Delta^\ddagger S^\circ/R}$）

$$e^{\Delta^\ddagger S^\circ/R} = \frac{A}{e^2 (k_BT/h)} = 5.719\times 10^{-4}$$

$$\Delta^\ddagger S^\circ = R\ln(5.719\times 10^{-4}) = (8.3145)(-7.465)$$

$$\boxed{\,\Delta^\ddagger S^\circ = -62.1\ \mathrm{J/(K\cdot mol)}\,}$$

---

## 重點整理

| 題 | 考點 |
|---|---|
| 9.39 | gas-phase **bimolecular** → $E_a = \Delta^\ddagger H^\circ + 2RT$ |
| 9.41 | **Arrhenius 作圖**：$\ln k$ vs $1/T$；liquid / unimolecular → $E_a = \Delta^\ddagger H^\circ + RT$ |
| 9.43 | **碰撞密度** $Z_{AA}$ + Arrhenius 預測 + TST 反推 $\Delta^\ddagger S^\circ$ |

三題共通：
- $\Delta^\ddagger G^\circ = \Delta^\ddagger H^\circ - T\Delta^\ddagger S^\circ$
- 區分 **gas-bimolecular** ($e^2$)、**gas-unimolecular** ($e$)、**solution** 的 $E_a$ 修正
- 全部要熟 Eyring $k = (k_BT/h)e^{-\Delta^\ddagger G^\circ/RT}$
