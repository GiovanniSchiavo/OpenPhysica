---
sidebar_position: 7
sidebar_label: Criterio asintotico della radice 
---

# Criterio asintotico della radice

## Teorema

$\{a_k\}_{k \in \mathbb{N}}$ successione a termini definitivametne non negativi tale che $\lim_{k \rightarrow +\infty} \sqrt[k]{a_k} = l \in [0,+\infty[$.

1. Se $l<1$ la serie $ \sum_{k=0}^{\infty} a_k$ converge.
2. Se $l> 1$ la serie $\sum_{k=0}^{\infty} a_k$ diverge.

### Dimostrazione

1. Per $\lim_{k \rightarrow +\infty} \sqrt[k]{a_k} = l < 1$ fisso $r\in \,\,]l,1[\,\, \Rightarrow \sqrt[k]{a_k} \leq r$  definitivamente $\Rightarrow \sum_{k=0}^{\infty} a_k$ converge per il criterio della radice.
2. Per $\lim_{k \rightarrow +\infty} \sqrt[k]{a_k} = l > 1 \Rightarrow \sqrt[k]{a_k}\geq 1$ definitivamente  $\Rightarrow \sum_{k=0}^{\infty} a_k$ diverge per il criterio della radice.

## Nota bene
Se $\{a_k\}_{k \in N}$ è a termini definitivamente positivi e  $\lim_{k \rightarrow +\infty} \frac{a_{k+1}}{a_k}=1$, allora $\lim_{k \rightarrow +\infty} \sqrt[k]{a_k}=l$.