---
chapter: 4
page: 15
title: "Standing Wave Interpretation and Heisenberg Uncertainty"
source: "Text Chapter 11"
sections:
  - Bohr stationary orbit interpretation
  - Standing wave condition
  - Heisenberg uncertainty principle
  - Position-momentum trade-off
tags:
  - Bohr orbit
  - standing wave
  - de Broglie wavelength
  - angular momentum quantization
  - Heisenberg uncertainty principle
  - position and momentum
---

# Chapter 4 — Standing Wave Interpretation and Heisenberg Uncertainty

## 1. Interpreting Bohr's Stationary Orbits with de Broglie Waves

Bohr 原本假設 electron 只能存在於某些 stationary orbits。

如果把 electron 看成具有 wave nature 的 particle，則可以進一步理解：

> 只有當 electron wave 在整個 circular orbit 上形成 standing wave 時，這個 orbit 才是 allowed。

也就是說，允許軌道不是任意存在，而是來自 electron wave 必須首尾相接、不互相抵消。

## 2. Standing Wave Condition on a Circular Orbit

若 electron 繞著半徑 $r$ 的 circular orbit 運動，orbit circumference 為：

$$
2\pi r
$$

若 electron wave 要形成 stable standing wave，必須滿足：

$$
\boxed{
2\pi r=n\lambda
}
\qquad
(n=1,2,3,\dots)
$$

這表示：

- Orbit circumference 必須剛好容納 integer number of wavelengths。
- 若不能剛好首尾相接，electron wave 會 destructive interference，無法形成穩定狀態。

原頁右側的圓形軌道與波紋圖就是在表達這個概念。

![de Broglie standing wave around a Bohr orbit](images/de-broglie-electron-orbit.png "Electron as standing wave wrapping a circular orbit — only when $2\pi r = n\lambda$ does the wave close on itself, giving Bohr's quantization (Wikipedia Commons).")

## 3. Recovering Bohr's Angular Momentum Quantization

由 de Broglie relation：

$$
\lambda=\frac{h}{p}
$$

對 non-relativistic electron：

$$
p=mu
$$

所以：

$$
\lambda=\frac{h}{mu}
$$

代入 standing wave condition：

$$
2\pi r
=
n\frac{h}{mu}
$$

整理得：

$$
mur=\frac{nh}{2\pi}
$$

也就是：

$$
\boxed{
L=mur=\frac{nh}{2\pi}=n\hbar
}
$$

這正好就是 Bohr 的 angular momentum quantization condition。

因此，從 de Broglie 觀點來看：

> Bohr quantization condition 可以理解為 standing wave condition。

原筆記使用 $u$ 表示 electron speed，也可寫成較常見的 $v$。

## 4. Heisenberg Uncertainty Principle

Heisenberg uncertainty principle（海森堡不確定性原理）的核心想法是：

> 對微觀粒子，例如 electron，不可能同時無限精確地知道它的位置與動量。

也就是：

- Position 越精確，momentum 就越不精確。
- Momentum 越精確，position 就越不精確。

這不是單純儀器不夠好，而是 quantum mechanics 中 position 和 momentum 本身不能同時被指定為任意精確的 classical variables。

## 5. Thought Experiment: Observing an Electron with a Photon

原筆記是在描述一個 thought experiment：

> 假設 experimenter 想同時測量 electron 的 position 和 momentum，方法是用 photon 去照射 electron，並觀察散射後的 photon。

這個方法會產生 position 與 momentum 的 trade-off。

## 6. Measuring Position Accurately

位置解析度和所用 radiation 的 wavelength 有關。

若要更準確知道 electron 在哪裡，就需要使用：

$$
\text{short } \lambda \text{ radiation}
$$

Short wavelength radiation 具有：

- high frequency $\nu$
- high photon energy $E=h\nu$
- large photon momentum $p=h/\lambda$

因此 short-wavelength photon 撞到 electron 時，會明顯改變 electron momentum。

結果是：

> Position 較準，但 electron momentum 被嚴重擾動。

## 7. Measuring Momentum with Less Disturbance

如果改用 long wavelength、low frequency photon：

$$
\text{long } \lambda \text{ radiation}
$$

則 photon energy 和 momentum 比較小，對 electron 的 disturbance 較小，因此較不會明顯改變 electron momentum。

但是：

- Wavelength 越長，spatial resolution 越差。
- Position 越不容易精確定義。

結果是：

> Momentum disturbance 較小，但 position 變得不精確。

## 8. Physical Meaning

Heisenberg uncertainty principle 不是在說「儀器不夠精密」。

它真正表達的是：

> 微觀世界本身不允許 particle 同時具有完全確定的 position 和 momentum。

這是 quantum mechanics 和 classical mechanics 的根本差別之一。

這一頁主要建立物理直覺；更標準的數學形式會寫成：

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}
$$

或較粗略地表示為：

$$
\Delta q\,\Delta p \gtrsim h
$$

## Key Formulas

### Standing Wave Condition

$$
\boxed{
2\pi r=n\lambda
}
$$

### de Broglie Relation

$$
\boxed{
\lambda=\frac{h}{p}=\frac{h}{mu}
}
$$

### Bohr Angular Momentum Quantization

$$
\boxed{
mur=\frac{nh}{2\pi}=n\hbar
}
$$

### Photon Momentum

$$
p_{\text{photon}}=\frac{h}{\lambda}
$$

### Uncertainty Principle

$$
\boxed{
\Delta x\,\Delta p \ge \frac{\hbar}{2}
}
$$

