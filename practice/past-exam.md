---
chapter: practice
page: past-exam
title: "考古題 — 第二次期中考"
source: "歷屆題目（圖片掃描）"
sections:
  - Q1 de Broglie 與分子間距
  - Q2 不確定性 / Rydberg / 光電 / 雷射 / Planck
  - Q3 CH3I 光解離
  - Q4 波函數合法性與動量本徵函數
tags:
  - past exam
  - de Broglie
  - Heisenberg
  - Rydberg
  - photoelectric
  - Planck
  - Stefan-Boltzmann
  - photodissociation
  - wavefunction acceptability
  - momentum eigenfunction
---

# 考古題 — 第二次期中考

> 5 題，總分 100%。下面每題給出**做法 + 計算 + 觀念連結**。

常用常數速查：

| 量 | 值 |
|---|---|
| $h$ | $6.626\times10^{-34}\ \text{J·s}$ |
| $\hbar = h/2\pi$ | $1.0546\times10^{-34}\ \text{J·s}$ |
| $k_B$ | $1.381\times10^{-23}\ \text{J/K}$ |
| $c$ | $3.00\times10^{8}\ \text{m/s}$ |
| $N_A$ | $6.022\times10^{23}\ \text{mol}^{-1}$ |
| $1\ \text{amu}$ | $1.6605\times10^{-27}\ \text{kg}$ |
| $1\ \text{eV}$ | $1.602\times10^{-19}\ \text{J}$ |
| $hc$ | $1240\ \text{eV·nm}$（速算用） |

---

## Q1 (16%) — de Broglie 與分子間距

**原題（16%）**

> (a) What is the de Broglie wavelength of an oxygen molecule at 298 K?
> (b) Estimate the average distance between oxygen molecules in a gas at 1 bar and 298 K.
> (c) Comment on whether quantum mechanical treatment is applicable to oxygen molecules at room temperature.
>
> Hint: you may use ideal gas assumptions.

### (a) de Broglie 波長

用 $v_{\text{rms}}$（thermal average）：$\frac12 m v^2 = \frac32 k_BT$

$$
v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}}
$$

$m(\text{O}_2) = 32 \times 1.6605\times10^{-27} = 5.314\times10^{-26}\ \text{kg}$

$$
v_{\text{rms}} = \sqrt{\frac{3(1.381\times10^{-23})(298)}{5.314\times10^{-26}}}
= \sqrt{2.324\times10^{5}} \approx 482\ \text{m/s}
$$

$$
\lambda = \frac{h}{m v_{\text{rms}}}
= \frac{6.626\times10^{-34}}{(5.314\times10^{-26})(482)}
\approx \boxed{2.59\times10^{-11}\ \text{m} \;(\approx 26\ \text{pm})}
$$

> 註：若用 thermal de Broglie wavelength $\lambda_{\text{th}} = h/\sqrt{2\pi m k_BT}$，會得到 $\approx 1.79\times10^{-11}\ \text{m}$。兩種寫法在判斷量子適用性上**結論一致**。

### (b) 分子平均間距

理想氣體 $PV = N k_B T$：

$$
\frac{N}{V} = \frac{P}{k_BT} = \frac{10^{5}}{(1.381\times10^{-23})(298)}
= 2.43\times10^{25}\ \text{m}^{-3}
$$

平均間距：

$$
d \approx \left(\frac{V}{N}\right)^{1/3}
= (2.43\times10^{25})^{-1/3}
\approx \boxed{3.45\times10^{-9}\ \text{m} \;(\approx 3.45\ \text{nm})}
$$

### (c) 是否需量子處理

$$
\frac{d}{\lambda} \approx \frac{3.45\times10^{-9}}{2.59\times10^{-11}} \approx 130
$$

$\lambda \ll d$（差兩個數量級以上），因此分子的波動性**遠小於**它們的平均間距 → wave packet 不重疊 → **classical / Maxwell-Boltzmann 處理足夠**，不必用量子統計。

---

## Q2 (40%) — 多題綜合

**原題（40%，共 (a)–(g) 七小題）**

> (a) What is the uncertainty in velocity if we wish to locate an electron within an atom for which Δx = 0.5 Å? mₑ = 9.11 × 10⁻³¹ kg and h = 6.626 × 10⁻³⁴ J·s.
>
> (b) The lifetime of a molecule in a certain electronic state is 10⁻¹⁰ s. What is the uncertainty in energy of this state? Give your answer in J mol⁻¹.
>
> (c) Given the Rydberg equation, 1/λ = 109680 · Z² (1/n₁² − 1/n₂²) cm⁻¹, calculate the ionization energy of He⁺ in eV.
>
> (d) If the work function of K is 2.2 eV, calculate the maximum velocity of the electrons emitted when violet light of wavelength 400 nm is applied.
>
> (e) A laser emits a pulse of 1064 nm radiation with average power 5 × 10⁶ W (J/s) and duration 20 ns. Find the number of photons emitted in this pulse.
>
> (f) Planck's radiation theory finds that the average energy per oscillator is ε̄ = hν / [exp(hν/k_BT) − 1]. Derive the limiting result of ε̄ when quantization of energy is unimportant.
>
> (g) Given that the emission rate of the radiant energy per unit surface area and per unit frequency range of a blackbody is written as R(ν) = (2πν²/c²) · hν / [exp(hν/k_BT) − 1], show that the total radiant energy emitted per second by unit area of a blackbody is 2π⁵k_B⁴T⁴ / (15c²h³). The sun's diameter is 1.4 × 10⁹ m and its surface temperature is 5800 K. Assume the sun is a blackbody and estimate the rate of energy loss by radiation from the sun.
>
> Hint: ∫₀^∞ x³/(eˣ − 1) dx = π⁴/15.

### (a) 把電子限制在 $\Delta x = 0.5\ \text{Å}$ 內，速度不確定度？

Heisenberg：$\Delta x\,\Delta p_x \ge \hbar/2$，所以 $\Delta v \ge \hbar/(2 m_e\,\Delta x)$。

$$
\Delta v_{\min} = \frac{1.0546\times10^{-34}}{2(9.11\times10^{-31})(0.5\times10^{-10})}
\approx \boxed{1.16\times10^{6}\ \text{m/s}}
$$

> 觀念：原子尺度限制電子位置 → 速度不確定度已達 ~10⁶ m/s 量級，明顯量子。

### (b) 電子態 lifetime $\tau = 10^{-10}\ \text{s}$，$\Delta E$？

Energy-time 不確定關係 $\Delta E\,\Delta t \ge \hbar/2$：

$$
\Delta E_{\min} = \frac{\hbar}{2\tau}
= \frac{1.0546\times10^{-34}}{2\times10^{-10}}
= 5.27\times10^{-25}\ \text{J/molecule}
$$

換成 J/mol：

$$
\Delta E = (5.27\times10^{-25})(6.022\times10^{23})
\approx \boxed{0.317\ \text{J/mol}}
$$

> 這是**自然線寬**（natural linewidth）的來源 — 短壽命 → 譜線變寬。

### (c) He⁺ 游離能（用 Rydberg）

題目給 $1/\lambda = 109680\,Z^2(1/n_1^2 - 1/n_2^2)\ \text{cm}^{-1}$。He⁺ 的 $Z=2$，游離 ionization 對應 $n_1=1,\ n_2=\infty$：

$$
\tilde\nu = 109680 \times 4 \times \left(1 - 0\right) = 4.387\times10^{5}\ \text{cm}^{-1}
$$

$$
E = hc\tilde\nu
= (6.626\times10^{-34})(3.00\times10^{8})(4.387\times10^{7}\ \text{m}^{-1})
= 8.72\times10^{-18}\ \text{J}
$$

$$
E = \frac{8.72\times10^{-18}}{1.602\times10^{-19}} \approx \boxed{54.4\ \text{eV}}
$$

> 一致性檢查：$E_{\text{H}}^{\text{ion}} \approx 13.6\ \text{eV}$，He⁺ 是 $Z^2=4$ 倍 → $54.4\ \text{eV}$ ✓。

### (d) 光電效應：K 在 400 nm 下發射電子的最大速度

$\phi = 2.2\ \text{eV}$，光子能量 $h\nu = hc/\lambda = 1240/400 = 3.10\ \text{eV}$。

$$
KE_{\max} = h\nu - \phi = 3.10 - 2.20 = 0.90\ \text{eV} = 1.442\times10^{-19}\ \text{J}
$$

$$
v_{\max} = \sqrt{\frac{2\,KE_{\max}}{m_e}}
= \sqrt{\frac{2(1.442\times10^{-19})}{9.11\times10^{-31}}}
\approx \boxed{5.63\times10^{5}\ \text{m/s}}
$$

### (e) 雷射 1064 nm，$\bar{P}=5\times10^{6}\ \text{W}$，pulse 20 ns，光子數？

Pulse 總能：

$$
E_{\text{pulse}} = \bar{P}\,\Delta t = (5\times10^{6})(20\times10^{-9}) = 0.10\ \text{J}
$$

每個光子能量：

$$
E_\gamma = \frac{hc}{\lambda} = \frac{(6.626\times10^{-34})(3\times10^{8})}{1064\times10^{-9}}
= 1.868\times10^{-19}\ \text{J}
$$

$$
N = \frac{E_{\text{pulse}}}{E_\gamma}
= \frac{0.10}{1.868\times10^{-19}}
\approx \boxed{5.35\times10^{17}\ \text{光子}}
$$

### (f) Planck 振子平均能量在「量子化不重要」極限

$$
\bar\varepsilon = \frac{h\nu}{\exp(h\nu/k_BT)-1}
$$

當量子化不重要 $\Rightarrow h\nu \ll k_BT$，令 $x = h\nu/k_BT \to 0$：

$$
e^{x} - 1 \approx x + \frac{x^2}{2} + \cdots \approx x
$$

代回：

$$
\bar\varepsilon \to \frac{h\nu}{h\nu/k_BT} = \boxed{k_BT}
$$

> 這就是**古典 equipartition** 結果（每個自由度 $\tfrac12 k_BT$，振子兩個自由度共 $k_BT$）。對應 Rayleigh–Jeans 在低頻的成功，但全頻積分發散 → ultraviolet catastrophe。

### (g) 從 R(ν) 推 Stefan–Boltzmann，估算太陽輻射功率

題目給：

$$
R(\nu) = \frac{2\pi\nu^{2}}{c^{2}}\cdot \frac{h\nu}{\exp(h\nu/k_BT)-1}
$$

**$R(\nu)$ 的物理意義**：spectral radiant emittance — 黑體在頻率 $\nu$ 附近、單位頻率區間 $d\nu$、單位表面積、單位時間所放出的輻射能（單位 $\text{W}\cdot\text{m}^{-2}\cdot\text{Hz}^{-1}$）。

**總輻射出射度** $M = \int_0^\infty R(\nu)\,d\nu$ 的物理意義：把所有頻率的貢獻加總，得到單位表面積每秒總放出的能量（$\text{W/m}^2$）。乘以表面積就是該物體的**總輻射功率**（光度）：

$$
M = \int_{0}^{\infty} R(\nu)\,d\nu
= \frac{2\pi h}{c^{2}} \int_{0}^{\infty} \frac{\nu^{3}}{e^{h\nu/k_BT}-1}\,d\nu
$$

換變數 $x = h\nu/k_BT \Rightarrow \nu = (k_BT/h)x,\ d\nu = (k_BT/h)dx$：

$$
M = \frac{2\pi h}{c^{2}} \left(\frac{k_BT}{h}\right)^{4} \int_{0}^{\infty}\frac{x^{3}}{e^{x}-1}dx
$$

用提示 $\int_0^\infty x^3/(e^x-1)\,dx = \pi^4/15$（這是 Bose–Einstein 形式的標準積分；用級數展開 $1/(e^x-1)=\sum_{n\ge1}e^{-nx}$ 並逐項積分得 $\Gamma(4)\,\zeta(4)=6\cdot\pi^4/90=\pi^4/15$，是讓 Stefan–Boltzmann 常數能寫成純常數的關鍵）：

$$
\boxed{M = \frac{2\pi^{5}\,k_B^{4}\,T^{4}}{15\,c^{2}\,h^{3}} \equiv \sigma T^{4}}
$$

也就是 Stefan–Boltzmann，常數 $\sigma = 2\pi^5 k_B^4/(15 c^2 h^3) \approx 5.67\times10^{-8}\ \text{W/m}^{2}\text{K}^{4}$。

**太陽估算**：直徑 $D = 1.4\times10^{9}\ \text{m}$，半徑 $R = 7\times10^{8}\ \text{m}$，$T = 5800\ \text{K}$。

表面通量：

$$
M = \sigma T^{4} = (5.67\times10^{-8})(5800)^{4}
= (5.67\times10^{-8})(1.132\times10^{15})
\approx 6.42\times10^{7}\ \text{W/m}^{2}
$$

表面積：

$$
A = 4\pi R^{2} = 4\pi(7\times10^{8})^{2} \approx 6.16\times10^{18}\ \text{m}^{2}
$$

太陽總輻射功率（光度）：

$$
L_\odot = M\cdot A \approx (6.42\times10^{7})(6.16\times10^{18})
\approx \boxed{3.95\times10^{26}\ \text{W}}
$$

> 與實測 $L_\odot \approx 3.83\times10^{26}\ \text{W}$ 吻合到 ~3%，黑體假設成立。

---

## Q3 (20%) — CH₃I 光解離後 I 與 CH₃ 的速度

**原題（20%）**

> When CH₃I molecules in the vapor state absorb 253.7 nm light, the following reaction occurs:
> CH₃I + hν → CH₃ + I.
> The energy required to rupture the C–I bond is 209 kJ mol⁻¹. What are the velocities of I and CH₃, assuming all of the excess energy goes into translational motion? The atomic masses: C = 12, H = 1, I = 126.9. Please state all your assumptions.

### Step 1：光子能量（per mol）

$$
E_\gamma = \frac{hc}{\lambda} = \frac{1240\ \text{eV·nm}}{253.7\ \text{nm}} = 4.888\ \text{eV}
$$

換成 kJ/mol（用 $1\ \text{eV} = 96.485\ \text{kJ/mol}$）：

$$
E_\gamma = 4.888 \times 96.485 = 471.6\ \text{kJ/mol}
$$

### Step 2：可用平移動能

$$
KE_{\text{tot}} = E_\gamma - D_0 = 471.6 - 209 = 262.6\ \text{kJ/mol}
$$

per molecule：

$$
KE_{\text{tot}} = \frac{262.6\times10^{3}}{6.022\times10^{23}} = 4.36\times10^{-19}\ \text{J}
$$

### Step 3：動量守恆 + 動能分配

母分子原靜止 ⇒ $m_I v_I = m_C v_C$（CH₃ 記作 C，反向飛行）。

設兩碎片動量大小 $p$，

$$
KE_{\text{tot}} = \frac{p^{2}}{2 m_I} + \frac{p^{2}}{2 m_C}
= \frac{p^{2}}{2\mu},\quad
\mu = \frac{m_I\,m_C}{m_I + m_C}
$$

質量：
- $m_I = 126.9 \times 1.6605\times10^{-27} = 2.107\times10^{-25}\ \text{kg}$
- $m_C = 15.0 \times 1.6605\times10^{-27} = 2.491\times10^{-26}\ \text{kg}$
- $\mu = \dfrac{(2.107\times10^{-25})(2.491\times10^{-26})}{2.356\times10^{-25}} = 2.228\times10^{-26}\ \text{kg}$

$$
\begin{aligned}
p &= \sqrt{2\mu\,KE_{\text{tot}}}
 = \sqrt{2(2.228\times10^{-26})(4.36\times10^{-19})} \\
 &= \sqrt{1.943\times10^{-44}}
 = 1.394\times10^{-22}\ \text{kg·m/s}
\end{aligned}
$$

### Step 4：個別速度

$$
v_I = \frac{p}{m_I} = \frac{1.394\times10^{-22}}{2.107\times10^{-25}}
\approx \boxed{6.6\times10^{2}\ \text{m/s}}
$$

$$
v_{\text{CH}_3} = \frac{p}{m_C} = \frac{1.394\times10^{-22}}{2.491\times10^{-26}}
\approx \boxed{5.6\times10^{3}\ \text{m/s}}
$$

檢驗：$v_C/v_I = m_I/m_C = 126.9/15 = 8.46$ ✓（與 $5600/660 \approx 8.5$ 吻合）。

### 假設

1. **母分子原靜止**（忽略熱運動的 ~ 100 m/s）
2. **單光子吸收**（一個 CH₃I 配一個光子）
3. **多餘能量全變平移動能**（碎片無轉動 / 振動激發）
4. **動量守恆**（光子動量 $h/\lambda \sim 10^{-27}$ kg·m/s 比碎片動量小 5 個量級，可忽略）

---

## Q4 (24%) — 波函數合法性 + 動量本徵函數

**原題（24%）**

> Consider the following functions:
> (i) tan⁻¹ x for 0 ≤ x ≤ ∞,
> (ii) e⁻ˣ sin x for 0 ≤ x ≤ ∞,
> (iii) 1/x² for −1 ≤ x ≤ 1,
> (iv) x²(L − x) for 0 ≤ x ≤ L.
>
> (a) Determine and explain whether each of them is acceptable as a wavefunction over the indicated interval.
>
> (b) For each acceptable one, determine and explain whether it is an eigenfunction of the linear momentum operator p̂ₓ = −iℏ d/dx.

### 合法波函數的條件

1. **單值**（single-valued）
2. **連續**（continuous，且通常需要 $d\psi/dx$ 連續，除非位能無限）
3. **有限**（finite / bounded）
4. **平方可積**（$\int|\psi|^{2}dx < \infty$）

### (a) 逐一檢查

#### (i) $\tan^{-1} x$，$0 \le x \le \infty$

- 單值、連續、smooth、有界（趨近 $\pi/2$）✓
- 平方可積？$\int_0^\infty (\tan^{-1}x)^2\,dx \to (\pi/2)^2 \cdot \infty$ **發散** ✗

→ **不合法**。

#### (ii) $e^{-x}\sin x$，$0 \le x \le \infty$

- 連續、smooth、有界 ✓
- $\int_0^\infty e^{-2x}\sin^2 x\,dx$ 收斂（指數衰減壓住）✓

→ **合法**。

#### (iii) $1/x^{2}$，$-1 \le x \le 1$

- $x \to 0$ 時發散 → **不有界、不連續** ✗
- $\int |1/x^2|^2\,dx = \int 1/x^4\,dx$ 在 $x=0$ 發散 ✗

→ **不合法**。

#### (iv) $x^{2}(L-x)$，$0 \le x \le L$

- 多項式，連續、smooth、有界 ✓
- 有限區間上有限多項式必平方可積 ✓
- $\psi(0) = \psi(L) = 0$（符合無限位井邊界條件，雖題目沒要求）

→ **合法**。

### (b) 是否為 $\hat p_x$ 本徵函數？

$\hat p_x = -i\hbar\,d/dx$。本徵：$\hat p_x \psi = c\psi$（$c$ 為常數）。

#### (ii) $\psi = e^{-x}\sin x$

$$
\frac{d\psi}{dx} = -e^{-x}\sin x + e^{-x}\cos x = e^{-x}(\cos x - \sin x)
$$

$$
\hat p_x\psi = -i\hbar\,e^{-x}(\cos x - \sin x)
$$

要與 $\psi = e^{-x}\sin x$ 成比例，需要 $\cos x - \sin x \propto \sin x$，但 $\cos x$ 不是 $\sin x$ 的常數倍 → **不是本徵函數**。

#### (iv) $\psi = x^{2}(L-x) = Lx^{2}-x^{3}$

$$
\frac{d\psi}{dx} = 2Lx - 3x^{2}
$$

$$
\hat p_x\psi = -i\hbar(2Lx - 3x^{2})
$$

不正比於 $x^{2}(L-x)$ → **不是本徵函數**。

### 結論

| 函數 | 合法 wavefunction？ | $\hat p_x$ 本徵？ |
|---|---|---|
| $\tan^{-1}x$ on $[0,\infty)$ | ✗（不平方可積） | — |
| $e^{-x}\sin x$ on $[0,\infty)$ | ✓ | ✗ |
| $1/x^{2}$ on $[-1,1]$ | ✗（在 $x=0$ 發散） | — |
| $x^{2}(L-x)$ on $[0,L]$ | ✓ | ✗ |

> 觀念：$\hat p_x$ 的本徵函數只有 plane wave $e^{ikx}$（具確定動量），實值或局域化的波函數都不會是 $\hat p_x$ 本徵函數，因為它們是不同 $\pm k$ 的疊加。
