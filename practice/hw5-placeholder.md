---
chapter: practice
page: hw5
title: "HW5 — Heisenberg、Wavefunctions、Bohr"
source: "HW5.pdf"
sections:
  - 11.10 不確定性原理
  - 11.16 Wavefunction Normalization
  - 11.21 Eigenfunctions of d/dx
  - 11.39 Bohr Theory velocity & de Broglie
  - 11.42 Hydrogen n=4→5 transition
tags:
  - homework
  - Heisenberg uncertainty
  - wavefunction
  - normalization
  - eigenfunction
  - Bohr model
  - de Broglie
---

# HW5 — Heisenberg、Wavefunctions、Bohr

> ⚠️ **考試範圍提醒（老師 4/27 第二次期中考公告）**
>
> - ✅ **11.10、11.39、11.42** — **在考試範圍**（11.10、11.39 對應當天上課內容）
> - ❌ **11.16、11.21** — **不在考試範圍**（wavefunction normalization 和 eigenfunction 屬後面章節）

## 11.10 — 膠體粒子位置不確定性（對應上課內容）

### 題目

Consider a colloidal particle with a mass of $6\times 10^{-16}\ \mathrm{kg}$. Suppose that its position is measured to within $1.0\ \mathrm{nm}$, which is about the resolving power of an electron microscope. Calculate the uncertainty in the velocity and comment on the significance of the result.

### 已知
$m = 6\times 10^{-16}\ \mathrm{kg}$, $\Delta q = 1.0\ \mathrm{nm}$

### 解答

由 position-velocity uncertainty（Ch.4 Page 16）：

$$\Delta q\cdot\Delta u \ge \frac{\hbar}{2m} = \frac{h}{4\pi m}$$

$$\Delta u = \frac{h}{4\pi m\Delta q} = \frac{6.626\times 10^{-34}}{4\pi(6\times 10^{-16})(10^{-9})}$$

$$\boxed{\,\Delta u = 9\times 10^{-11}\ \mathrm{m/s}\,}$$

**結論**：這個速度不確定 × 1 秒 = $2\times 9\times 10^{-11}\ \mathrm{m}$ = 0.18 nm，僅為粒子直徑的 0.18%。**對這種宏觀尺度的粒子，不確定性原理不重要**；但對分子尺度粒子則非常重要。

---

## 11.16 — Wavefunction Normalization ❌ 不在考試範圍

### 題目

Assume that the three real functions $\psi_1$, $\psi_2$, $\psi_3$ are normalized and orthogonal. Normalize the following:

- **a.** $\psi_1 + \psi_2$
- **b.** $\psi_1 - \psi_3$
- **c.** $\psi_1 + \psi_2 + \psi_3$
- **d.** $\psi_1 - \dfrac{1}{\sqrt{2}}\psi_2 + \dfrac{\sqrt{3}}{\sqrt{2}}\psi_3$

### 解題原理

Normalization condition：

$$\int \psi^*\psi\,d\tau = 1$$

對實函數 $\psi_i$：
- Normalized: $\int\psi_i^2\,d\tau = 1$
- Orthogonal: $\int\psi_i\psi_j\,d\tau = 0\;(i\ne j)$

乘上歸一化因子 $N$ 使 $\int |N\psi|^2\,d\tau = 1$。

### 解答

**a.** $N^2\int(\psi_1+\psi_2)^2d\tau = N^2(1+1+0) = 2N^2 = 1$

$$\boxed{\,\frac{1}{\sqrt{2}}(\psi_1+\psi_2)\,}$$

**b.** 同理

$$\boxed{\,\frac{1}{\sqrt{2}}(\psi_1-\psi_3)\,}$$

**c.** $N^2(1+1+1+0+0+0) = 3N^2 = 1$

$$\boxed{\,\frac{1}{\sqrt{3}}(\psi_1+\psi_2+\psi_3)\,}$$

**d.** 係數平方和：$1 + \frac{1}{2} + \frac{3}{2} = 3$，所以 $3N^2 = 1$

$$\boxed{\,\frac{1}{\sqrt{3}}\psi_1 - \frac{1}{\sqrt{6}}\psi_2 + \frac{1}{\sqrt{2}}\psi_3\,}$$

**Tip**：對實正交函數線性組合，只要算係數平方和 $\sum c_i^2$，歸一化因子為 $1/\sqrt{\sum c_i^2}$。

---

## 11.21 — d/dx 的本徵函數 ❌ 不在考試範圍

### 題目

Which of the following functions is an eigenfunction of the operator $d/dx$?

- **a.** $k$
- **b.** $kx^2$
- **c.** $\sin kx$
- **d.** $\exp(kx)$
- **e.** $\exp(kx^2)$
- **f.** $\exp(ikx)$

Give the eigenvalue where appropriate.（$k$ 為常數，$i = \sqrt{-1}$）

### 原理

若 $\hat{O}f = cf$（返回自己乘以常數），則 $f$ 是 $\hat{O}$ 的 eigenfunction, $c$ 是 eigenvalue。

### 解答

| 選項 | $\dfrac{d}{dx}f$ | 是否 eigenfunction | eigenvalue |
|---|---|---|---|
| a. $k$ | $0 = 0\cdot k$ | ✓ | **0** |
| b. $kx^2$ | $2kx$（不是 $c\cdot kx^2$） | ✗ | — |
| c. $\sin kx$ | $k\cos kx$（變成 cos） | ✗ | — |
| d. $e^{kx}$ | $ke^{kx}$ | ✓ | **$k$** |
| e. $e^{kx^2}$ | $2kx\cdot e^{kx^2}$（多了 $2kx$ 因子） | ✗ | — |
| f. $e^{ikx}$ | $ik\cdot e^{ikx}$ | ✓ | **$ik$** |

---

## 11.39 — Bohr Theory 速度、de Broglie 波長（對應上課內容）

### 題目

Calculate, on the basis of the Bohr theory, the linear velocity of an electron (mass = $9.11\times 10^{-31}\ \mathrm{kg}$) in the ground state of the hydrogen atom. To what de Broglie wavelength does this velocity correspond? Deduce an equation for the de Broglie wavelength, in a Bohr orbit of quantum number $n$, with $Z=1$, in terms of $a_0$ and $n$. What is the ratio of the circumference of a Bohr orbit of quantum number $n$ to the de Broglie wavelength?

### 解答

**(1) Electron velocity in ground state** ($n=1$, $Z=1$)

由 Bohr angular momentum quantization $L = mur = nh/(2\pi)$，$r_1 = a_0 \approx 5.292\times 10^{-11}\ \mathrm{m}$：

$$u = \frac{nh}{2\pi mr_1} = \frac{h}{2\pi m a_0} = \frac{6.626\times 10^{-34}}{2\pi(9.11\times 10^{-31})(5.292\times 10^{-11})}$$

$$\boxed{\,u = 2.19\times 10^6\ \mathrm{m/s}\,}$$

**(2) de Broglie wavelength**

$$\lambda = \frac{h}{mu} = \frac{6.626\times 10^{-34}}{(9.11\times 10^{-31})(2.19\times 10^6)}$$

$$\boxed{\,\lambda = 3.33\times 10^{-10}\ \mathrm{m} = 333\ \mathrm{pm}\,}$$

**(3) General formula** $\lambda(n)$

由 $u = nh/(2\pi mr)$ 與 $r = n^2 a_0$（$Z=1$）：

$$\lambda = \frac{h}{mu} = \frac{h\cdot 2\pi mr}{mnh} = \frac{2\pi r}{n} = \frac{2\pi n^2 a_0}{n}$$

$$\boxed{\,\lambda = 2\pi n\, a_0\,}$$

**(4) Ratio of circumference to $\lambda$**

Circumference $C = 2\pi r = 2\pi n^2 a_0$

$$\frac{C}{\lambda} = \frac{2\pi n^2 a_0}{2\pi n a_0} = n$$

$$\boxed{\,C : \lambda = n : 1\,}$$

即 Bohr 軌道上剛好容納 $n$ 個 de Broglie 波長（Ch.4 Page 15 的 standing wave condition）。

---

## 11.42 — 氫原子 n=4 → n=5 transition

### 題目

Calculate the wavelength and energy corresponding to the $n = 4$ to $n = 5$ transition in the hydrogen atom.

### 解答

由 Rydberg equation（Ch.4 Page 12）：

$$\frac{1}{\lambda} = R_H\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = (1.0968\times 10^7)\left(\frac{1}{16} - \frac{1}{25}\right)$$

$$\lambda = 4.0522\times 10^{-6}\ \mathrm{m} = 4052\ \mathrm{nm}$$

$$\boxed{\,\lambda \approx 4.05\ \mu\mathrm{m}\,}\;(\text{infrared, Brackett series})$$

Energy：

$$E = \frac{hc}{\lambda} = \frac{(6.626\times 10^{-34})(2.998\times 10^8)}{4.0522\times 10^{-6}}$$

$$\boxed{\,E = 4.90\times 10^{-20}\ \mathrm{J}\,}$$

---

## 重點整理

| 題 | 考點 | 關鍵公式 | 考試範圍 |
|---|---|---|---|
| 11.10 | 不確定性原理（宏觀不顯著） | $\Delta q\Delta u \ge h/(4\pi m)$ | ✅（對應上課） |
| 11.16 | Wavefunction normalization | 係數平方和 → 歸一因子 | ❌ 不考 |
| 11.21 | Eigenfunction 判別 | $\hat{O}f = cf$ | ❌ 不考 |
| 11.39 | Bohr + de Broglie 連結 | $\lambda = 2\pi n a_0$, $C:\lambda = n$ | ✅（對應上課） |
| 11.42 | Rydberg / Brackett series | $1/\lambda = R_H(1/n_1^2 - 1/n_2^2)$ | ✅ |

**考試準備優先順序**：
1. **11.39**（Bohr velocity + de Broglie + $C:\lambda=n$）
2. **11.10**（Heisenberg $\Delta u$）
3. **11.42**（Rydberg 代入不同 $n_1, n_2$）
4. ❌ 11.16、11.21 可略過
