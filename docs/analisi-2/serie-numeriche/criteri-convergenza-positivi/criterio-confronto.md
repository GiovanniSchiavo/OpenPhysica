---
sidebar_position: 1
sidebar_label: Criterio del confronto
---

# Criterio del confronto

## Teorema
$\{a_k\}_{k \in \mathbb{N}},\{b_k\}_{k \in \mathbb{N}}$ successioni a termini definitivamente non negativi tali che $0 \leq a_k\leq b_k$ definitivamente per $ k \rightarrow+\infty$. Allora

- Se $\sum_{k=0}^{\infty} b_k$ converge, allora $\sum_{k=0}^{\infty} a_k$ converge
- Se $\sum_{k=0}^{\infty} a_k$ diverge, allora $\sum_{k=0}^{\infty} b_k$ diverge

### Dimostrazione
$$
    S_{b}=\sum_{k=0}^{\infty} b_k, \quad S_{a}=\sum_{k=0}^{\infty} a_k
$$
Per semplicità assumiamo che $a_k \leq b_k \forall k \geq0$, allora
$\lim_{n\rightarrow +\infty} S_a $ e $\lim_{n\rightarrow +\infty} S_b$ esistono perchè le serie sono a termini definitivamente non negativi.

Se $\sum_{k=0}^{\infty}  b_{k}$ converge $\Rightarrow \lim_{n\rightarrow +\infty} S_{b_n}=S_b <+\infty$, e se $a_k \leq b_k \forall k \Rightarrow S_{a_n} \leq S_{b_n} \forall n$ si ha che
$\lim_{n\rightarrow +\infty} S_{a_n} \leq \lim_{n\rightarrow +\infty} S_{b_n} < +\infty \Rightarrow \sum_{k=0}^{\infty}  a_k $ converge.

Se invece $\sum_{k=0}^{\infty}  a_k$ diverge $\Rightarrow \lim_{n\rightarrow +\infty} S_{a_n} = +\infty$ e quindi $S_{b_n} \geq S_{a_n} \forall n$ e quindi
$ \lim_{n\rightarrow +\infty} S_{b_n}=+\infty$ per il teorema del confronto, ovvero $\sum_{k=0}^{\infty} b_k$ diverge.
