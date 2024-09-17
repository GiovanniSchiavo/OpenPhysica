---
sidebar_position: 5
sidebar_label: Criterio asintotico del rapporto
---

# Criterio asintotico del rapporto 

## Teorema

$\{a_k\}_{k\in \mathbb{N}}$ successione a termini definitivamente positivi tale che 
$$
    \lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k} = l \in [0,+\infty[
$$

1. Se $l<1$ , la serie $\sum_{k=1}^{\infty} a_k$ converge.
2. Se $l> 1$ , la serie $\sum_{k=1}^{\infty} a_k$ diverge.


### Osservazione
Il teorema non dice nulla se $l=1$, infatti con $\sum_{k=1}^{\infty} \frac{1}{k}$ abbiamo $\lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k}=1$ e la serie diverge mentre per $\sum_{k=1}^{\infty} \frac{1}{k^2} $ abbiamo $\lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k}=1$ e la serie converge.

### Dimostrazione

1. $\lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k}=l < 1$. Fissiamo $r \in ]l, 1[$ allora definitivamente $\frac{a_{k+1}}{a_k}\leq r \Rightarrow$ la serie diverge per il criterio del rapporto.

2. $\lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k} = l > 1 \Rightarrow \frac{a_{k+1}}{a_k} \geq 1$ definitivamente $\Rightarrow$ la serie diverge per il criterio del rapporto.