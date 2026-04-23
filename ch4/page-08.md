---
chapter: 4
page: 8
title: "Classical Limit and Integrated Blackbody Energy"
source: "Text Chapter 11"
sections:
  - Classical limit
  - Classical viewpoint
  - Planck proposal
  - Integrated radiation energy density
  - Stefan-Boltzmann relation
tags:
  - classical limit
  - correspondence principle
  - equipartition
  - Planck proposal
  - Stefan-Boltzmann law
  - radiation energy density
---

# Chapter 4 — Classical Limit and Integrated Blackbody Energy

## 1. Quantum Theory Reduces to Classical Theory

這頁最重要的一句是：

$$
\boxed{
\text{Quantum theory reduces to classical theory at low frequency or high temperature}
}
$$

也就是當 frequency 低，或 temperature 高，使得：

$$
h\nu \ll k_B T
$$

時，quantum effect 會變得不明顯，系統就會表現得像 classical physics。

這有 correspondence principle（對應原理）的味道：新的理論在適當極限下，必須回到舊理論。

## 2. Classical Viewpoint

在 classical theory 中，對 oscillator 有兩個核心想法。

### 2.1 Energy Is Continuous

所有 possible energies 都允許存在，沒有 quantization 限制。

也就是說，vibrational energies 是 continuous distribution。

### 2.2 Mean Energy from Equipartition

每個 oscillator 的 mean energy 為：

$$
\boxed{
\langle \varepsilon \rangle = k_B T
}
$$

這是 equipartition theorem（能量均分定理）的結果。

意思是：在 thermal equilibrium 下，energy 會平均分配到系統可用的自由度中。

這兩個 classical assumptions 會導向 Rayleigh-Jeans equation，並在 high-frequency region 造成 ultraviolet catastrophe。

## 3. Planck's Proposal

Planck 的 quantum viewpoint 和 classical theory 不同，重點有兩個。

### 3.1 Allowed Energies Are Discrete

對 frequency 為 $\nu$ 的 EM oscillator，其 energy 只能取：

$$
\boxed{
\varepsilon_n = nh\nu
\qquad
(n=0,1,2,\dots)
}
$$

也就是：

$$
0,\ h\nu,\ 2h\nu,\ 3h\nu,\dots
$$

### 3.2 Populations Follow Boltzmann Distribution

不同 energy states 上的 oscillator population obey Boltzmann distribution：

$$
N_n \propto e^{-nh\nu/(k_B T)}
$$

因此 high-energy levels 的 population 會快速下降。

Planck 的關鍵可以濃縮成：

- Energy is discrete: $\varepsilon_n=nh\nu$。
- Energy-level populations follow Boltzmann distribution。

## 4. Quantum Result in the Classical Limit

由前一頁可知，Planck model 得到 oscillator average energy：

$$
\langle \varepsilon \rangle
=
\frac{h\nu}{e^{h\nu/(k_B T)}-1}
$$

當：

$$
h\nu \ll k_B T
$$

時，可近似：

$$
e^{h\nu/(k_B T)}
\approx
1+\frac{h\nu}{k_B T}
$$

因此：

$$
\langle \varepsilon \rangle
\approx
\frac{h\nu}{h\nu/(k_B T)}
=
k_B T
$$

所以：

$$
\boxed{
\langle \varepsilon \rangle \to k_B T
\quad
\text{when}
\quad
h\nu \ll k_B T
}
$$

這說明 quantum theory 在 low-frequency / high-temperature limit 下會回到 classical equipartition result。

## 5. Integrated Radiation Energy Density

若 blackbody 的 frequency distribution 為 $\rho_\nu$，則把所有 frequency 加總後，可得到 total radiation energy density：

$$
u(T)=\int_0^\infty \rho_\nu(\nu)\,d\nu
$$

其中：

$$
\rho_\nu
=
\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_B T)}-1}
$$

積分結果為：

$$
\boxed{
u(T)
=
\frac{8\pi^5 k_B^4}{15h^3c^3}T^4
}
$$

也可寫成：

$$
\boxed{
u(T)=aT^4
}
$$

其中 $a$ 是 radiation constant。

由於 $(hc)^3=h^3c^3$，所以上式也可寫成原筆記的形式：

$$
u(T)
=
\frac{8\pi^5}{15(hc)^3}(k_B T)^4
$$

## 6. Relation to Stefan-Boltzmann Law

這裡要分清楚兩個量。

### 6.1 Energy Density

$$
u(T)=aT^4
$$

這是單位體積內的 total radiation energy density。

### 6.2 Emitted Power per Unit Area

真正的 Stefan-Boltzmann law 常寫成：

$$
\boxed{
j^*=\sigma T^4
}
$$

這是 blackbody 單位面積所放出的 total radiated power。

兩者都呈現 $T^4$ dependence，且彼此有關，但不是完全同一個物理量：

- Integrating $\rho_\nu$ over frequency gives $u(T)$。
- Blackbody surface emission gives $j^*=\sigma T^4$。

## 7. Conceptual Thread

這頁把三件事串起來：

1. Planck result。
2. Classical limit。
3. Integrated blackbody energy。

也就是：

- 微觀上能量是 quantized。
- 在適當極限下回到 classical behavior。
- 對所有 frequency 積分後得到 macroscopic $T^4$ relation。

## Key Formulas

### Classical Limit Condition

$$
\boxed{
h\nu \ll k_B T
}
$$

### Classical Mean Energy

$$
\boxed{
\langle \varepsilon \rangle = k_B T
}
$$

### Planck Energy Levels

$$
\boxed{
\varepsilon_n=nh\nu
}
$$

### Integrated Radiation Energy Density

$$
\boxed{
u(T)=\int_0^\infty \rho_\nu(\nu)\,d\nu
}
$$

$$
\boxed{
u(T)
=
\frac{8\pi^5 k_B^4}{15h^3c^3}T^4
}
$$

### Stefan-Boltzmann-Type Relation

$$
u(T)\propto T^4
$$

For emitted power per unit area:

$$
j^*=\sigma T^4
$$

