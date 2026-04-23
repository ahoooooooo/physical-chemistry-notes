---
chapter: 4
page: 17
title: "Energy-Time Uncertainty and Spectral Line Width"
source: "Text Chapter 11"
sections:
  - Energy-time uncertainty
  - Spectral line width
  - Natural broadening
tags:
  - energy-time uncertainty
  - spectral line width
  - line broadening
  - natural broadening
  - excited state lifetime
---

# Chapter 4 — Energy-Time Uncertainty and Spectral Line Width

## 1. Application of the Uncertainty Principle

這一頁是在說明 Heisenberg energy-time uncertainty relation 如何解釋 observed widths of spectral lines。

實際觀察到的 spectral lines 不是完全無限細的一條線，而是會有一定的 width。

這可以用 energy-time uncertainty relation 來理解：

$$
\boxed{
\Delta E\,\Delta t \ge \frac{\hbar}{2}
}
$$

## 2. Electron Transition from an Excited State

當 electron 處在 electronically excited state 時，它不會永遠停留在那個狀態。

經過有限時間後，electron 可能 transition 到 lower energy level，並 emit photon：

$$
\Delta E=h\nu
$$

如果這個 energy gap 完全固定、沒有任何 uncertainty，則 emitted photon frequency 也會完全固定，spectral line 會是無限窄。

但實際上 excited state 有 finite lifetime，因此 energy 也有 finite uncertainty。

## 3. Lifetime and Energy Uncertainty

在 energy-time uncertainty relation 中：

- $\Delta t$：excited state lifetime（激發態壽命）。
- $\Delta E$：該 energy state 的 energy uncertainty。

因此：

$$
\boxed{
\text{short lifetime}
\Rightarrow
\text{small } \Delta t
\Rightarrow
\text{large } \Delta E
}
$$

也就是 excited state 活得越短，對應的 energy uncertainty 越大。

## 4. Energy Uncertainty Causes Spectral Line Broadening

Emitted photon energy 為：

$$
E=h\nu=\frac{hc}{\lambda}
$$

若 transition energy 有一個範圍 $\Delta E$，則 photon frequency 也會有對應範圍：

$$
\Delta E=h\,\Delta\nu
$$

所以：

- Energy 不再是單一精確值。
- Frequency 不再是單一精確值。
- Spectral line 不會是無限細，而會展開成有限寬度。

這稱為 line broadening（譜線展寬）。

由 finite lifetime 造成的 line broadening 稱為：

- natural broadening
- natural linewidth

## 5. Main Logic

這頁的核心邏輯是：

$$
\boxed{
\text{short lifetime}
\Rightarrow
\text{small } \Delta t
\Rightarrow
\text{large } \Delta E
\Rightarrow
\text{broadened spectral line}
}
$$

換句話說：

> Excited state lifetime 越短，spectral line 越寬。

## 6. Notes on Interpretation

$\Delta t$ 不是單純儀器量到的發光時間，而是 electron 待在 excited state 中的 lifetime scale。

$\Delta E$ 大也不是說單顆 photon 無緣無故多拿能量，而是表示 transition energy 有一個分布寬度。因此在 spectrum 上會看到有寬度的 peak，而不是無限窄的 line。

這頁是在把前一頁抽象的 $\Delta E\,\Delta t$ 變成可觀察的 spectroscopy phenomenon。

## 7. Other Sources of Line Broadening

這頁主要討論最本質的 natural broadening。

真實實驗中，spectral line width 也可能受到其他因素影響，例如：

- Doppler broadening
- collision / pressure broadening
- instrumental broadening

但依照本頁筆記內容，重點是 finite excited-state lifetime 造成的 natural linewidth。

## Key Formulas

### Energy-Time Uncertainty

$$
\boxed{
\Delta E\,\Delta t \ge \frac{\hbar}{2}
}
$$

### Photon Energy and Frequency Width

$$
\Delta E=h\,\Delta\nu
$$

### Main Relation

$$
\boxed{
\text{short lifetime}
\Rightarrow
\text{large } \Delta E
}
$$

$$
\boxed{
\text{large } \Delta E
\Rightarrow
\text{broad spectral line}
}
$$

