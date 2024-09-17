---
sidebar_position: 6
sidebar_label: Criterio della radice
---

# Criterio della radice

## Teorema
Sia $\{ a_k\}_{k\in \mathbb{N}}$ una successione a termini definitivamente non negativi

1. Se $\exists r< 1$ tale che $\sqrt[k]{a_k} \leq r$ definitivamente, allora $\sum_{k=0}^{\infty}$ converge.
2. Se $\sqrt[k]{a_k} \geq 1$ definitivamente, allora $\sum_{k=0}^{\infty}$  diverge.


### Dimostrazione
1. $\sqrt[k]{a_k}\leq r$ definitivamente $\Rightarrow 0 \leq a_k \leq r^k$ definitivamente e dunque $\sum_{k=0}^{\infty} r^k$ converge (perché $r \in [0,1[$) $\Rightarrow \sum_{k=0}^{\infty} a_k$ converge per il criterio del confronto.
2. $\sqrt[k]{a_k} \geq 1$ definitivamente $\Rightarrow a_k \geq 1$ definitivamente $\Rightarrow \lim_{k \rightarrow + \infty} a_k \geq 1$, se esiste $\Rightarrow \sum_{k=0}^{\infty} a_k$ diverge. 
