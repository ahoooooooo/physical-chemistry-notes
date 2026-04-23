---
chapter: 4
page: 16
title: "Heisenberg Uncertainty Relations"
source: "Text Chapter 11"
sections:
  - Heisenberg uncertainty principle
  - Position-momentum uncertainty
  - Position-velocity uncertainty
  - Energy-time uncertainty
  - Angle-angular momentum uncertainty
tags:
  - Heisenberg uncertainty principle
  - position and momentum
  - energy and time
  - angular momentum
  - non-commutativity
  - wave-particle duality
---

# Chapter 4 — Heisenberg Uncertainty Relations

## 1. From Wave-Particle Duality to Uncertainty

Wave-particle duality leads to the Heisenberg uncertainty principle.

前一頁用 thought experiment 說明：

- 要更精確測量 position，就要用 short-wavelength photon。
- Short-wavelength photon 有較大 momentum，會更大幅改變 particle momentum。

因此，在 quantum world 中，position 和 momentum 的不確定度之間有基本限制。

## 2. Heuristic Estimate

由 wave nature 的觀點，可把 position uncertainty 粗略理解為：

$$
\Delta q \sim \lambda
$$

也就是 position resolution 大致受所用 wavelength 限制。

另一方面，wavelength 越短，對應的 photon / wave momentum 越大：

$$
p\sim\frac{h}{\lambda}
$$

因此 momentum uncertainty 可粗略看成：

$$
\Delta p\sim\frac{h}{\lambda}
$$

把兩者相乘：

$$
\Delta q\,\Delta p\sim h
$$

這裡的 $\sim h$ 是 order-of-magnitude estimate，不是精確等式。

## 3. Position-Momentum Uncertainty Relation

更精確的 quantum mechanical result 是：

$$
\boxed{
\Delta q\,\Delta p \ge \frac{\hbar}{2}
}
$$

因為：

$$
\hbar=\frac{h}{2\pi}
$$

所以也可寫成：

$$
\boxed{
\Delta q\,\Delta p \ge \frac{h}{4\pi}
}
$$

若把 $q$ 寫成熟悉的 position coordinate $x$：

$$
\boxed{
\Delta x\,\Delta p_x \ge \frac{\hbar}{2}
}
$$

這裡的 $q$ 是 generalized coordinate / position coordinate，不是 electric charge。

## 4. Position-Velocity Uncertainty Relation

對 non-relativistic particle：

$$
p=mu
$$

所以：

$$
\Delta p=m\,\Delta u
$$

代回 uncertainty relation：

$$
\Delta q(m\Delta u)\ge\frac{h}{4\pi}
$$

得到：

$$
\boxed{
\Delta q\,\Delta u
\ge
\frac{h}{4\pi m}
}
$$

也可寫成：

$$
\boxed{
\Delta x\,\Delta v
\ge
\frac{\hbar}{2m}
}
$$

這表示：

- Mass 越小，position 和 velocity 越難同時精確決定。
- Electron 等 microscopic particles 的 quantum effect 特別明顯。

注意：這個形式使用 $p=mu$，因此適用於 non-relativistic case。若速度接近 light speed，就不能直接使用簡單的 $p=mu$。

## 5. Energy-Time Uncertainty Relation

原筆記接著把 position-momentum relation 轉成 energy-time relation。

對 non-relativistic particle：

$$
E=\frac{1}{2}mu^2=\frac{p^2}{2m}
$$

微分可得：

$$
dE=\frac{p}{m}\,dp
$$

因為：

$$
\frac{p}{m}=u
$$

所以：

$$
dE=u\,dp
$$

另一方面，若 particle 在時間 $\Delta t$ 內移動距離 $\Delta q$，可近似：

$$
\Delta q\approx u\,\Delta t
$$

因此：

$$
\Delta q\,\Delta p
\approx
(u\Delta t)\Delta p
=
\Delta t(u\Delta p)
\approx
\Delta t\,\Delta E
$$

所以可得到：

$$
\boxed{
\Delta E\,\Delta t \ge \frac{\hbar}{2}
}
$$

也就是：

$$
\boxed{
\Delta E\,\Delta t \ge \frac{h}{4\pi}
}
$$

Energy-time uncertainty 的詮釋比 position-momentum 稍微微妙，因為 time 在一般 quantum mechanics 中通常不是和 position 一樣的 operator。不過在這份課堂筆記與常見物化考試層次，通常直接使用上式。

## 6. Angle-Angular Momentum Uncertainty Relation

原筆記也寫到 angle 和 angular momentum 的 uncertainty relation：

$$
\boxed{
\Delta \phi\,\Delta L \ge \frac{\hbar}{2}
}
$$

也可寫成：

$$
\boxed{
\Delta \phi\,\Delta L \ge \frac{h}{4\pi}
}
$$

若特別指定某一分量，可理解為：

$$
\boxed{
\Delta \phi\,\Delta L_z \gtrsim \frac{\hbar}{2}
}
$$

這表示：

- Angle $\phi$ 越精確。
- 對應的 angular momentum，例如 $L_z$，就越不精確。

原頁下方的 $x,y,z$ 三軸、角度 $\phi$ 與 $L_z$ 示意圖就是在表達這個共軛關係。

## 7. The Order of Measurement Matters

原筆記最後一句：

> The order of measurement matters!

在 quantum mechanics 中，這句話的意思是：

> 對某些 physical quantities，measurement order 會影響 result，因為對應的 operators 不可交換。

也就是 non-commutativity。

Position 和 momentum 正是典型例子，它們不是可同時被任意精確指定的一組 observables。

## Key Formulas

### Position-Momentum

$$
\boxed{
\Delta x\,\Delta p_x \ge \frac{\hbar}{2}
}
$$

Equivalent:

$$
\boxed{
\Delta x\,\Delta p_x \ge \frac{h}{4\pi}
}
$$

### Position-Velocity

$$
\boxed{
\Delta x\,\Delta v \ge \frac{\hbar}{2m}
}
$$

Equivalent:

$$
\boxed{
\Delta q\,\Delta u \ge \frac{h}{4\pi m}
}
$$

### Energy-Time

$$
\boxed{
\Delta E\,\Delta t \ge \frac{\hbar}{2}
}
$$

Equivalent:

$$
\boxed{
\Delta E\,\Delta t \ge \frac{h}{4\pi}
}
$$

### Angle-Angular Momentum

$$
\boxed{
\Delta \phi\,\Delta L \ge \frac{\hbar}{2}
}
$$

## Common Mistakes

1. $q$ 在這裡是 generalized coordinate / position coordinate，不是 charge。
2. $\Delta q\,\Delta p\sim h$ 是直觀量級估算，不是標準精確公式。
3. 標準 position-momentum uncertainty 是 $\Delta x\,\Delta p_x\ge\hbar/2=h/(4\pi)$。
4. Position-velocity 形式使用 $p=mu$，只適合 non-relativistic case。
5. Energy-time relation 和 position-momentum relation 的詮釋不完全相同，但課堂層次通常用同樣形式。
6. "The order of measurement matters" 背後是在講 non-commuting operators。

