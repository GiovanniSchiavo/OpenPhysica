---
sidebar_position: 1
sidebar_label: Ripasso degli integrali secondo Riemann
---

# Ripasso degli integrali secondo Riemann

## Definizione
Data $f:[a,b]\rightarrow\mathbb{R}$ limitata si ha $a=x_0 < x_1 < ... < x_n =b$ si hanno

$S(f)=\sum_{i=1}^{n} \left(\sup_{[x_{i-1},x_i]} f(x)\right)\cdot (x_i-x_{i-1})$ somma superiore,

$s(f)=\sum_{i=1}^{n} \left(\inf_{[x_{i-1},x_i]} f(x)\right)\cdot (x_i-x_{i-1})$ somma inferiore.

Se $\inf_{a=x_0 < x_1 < ... < x_n =b} S(f) = \sup_{a=x_0 < x_1 < ... < x_n =b} s(f) =I \in \mathbb{R}$ 

allora $f$ si dice Riemann integrabile in $[a,b]$ e si pone 
$$
    \int_{a}^{b} f(x)dx=I.
$$