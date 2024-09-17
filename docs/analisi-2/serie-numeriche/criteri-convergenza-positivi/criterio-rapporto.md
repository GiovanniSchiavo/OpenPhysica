---
sidebar_position: 4
sidebar_label: Criterio del rapporto
---

# Criterio del rapporto

## Teorema

$\{a_k \}_{k \in \mathbb{N}}$ successione a termini definitivamente positivi 

1. Se $\exists r< 1 $ tale che $\frac{a_{k+1}}{a_k} \leq r$ definitivamente per $ k \rightarrow +\infty$, allora $\sum_{k=0}^{\infty} a_k $ converge;
2. Se $\frac{a_{k+1}}{a_k} \geq 1$ definitivamente per $ k\rightarrow +\infty$, allora $\sum_{k=0}^{\infty} a_k $ diverge.

### Dimostrazione

Per semplicità assumiamo che $a_k > 0 \forall k \in \mathbb{N}$

1. $\exists r < 1 | \frac{a_{k+1}}{a_k} \leq r \forall k \in \mathbb{N}$ allora $\frac{a_k}{a_{k-1}} \leq r \forall k \geq 1$ , $ a_k \leq ra_{k-1} \leq r^2 a_{k-2} \leq r^3 a_{k-3} \leq ... \leq r^k a_0 \Rightarrow a_k \leq r^k a_0 \forall k \in \mathbb{N}$ e $\sum_{k=0}^{\infty} r^k$ converge perché è una serie geometrica di ragione $ r \in ]0,1[ \Rightarrow$ per il criterio del confronto $\sum_{k=0}^{\infty} a_k$ converge.
    
2. $\frac{a_{k+1}}{a_k} \geq 1 \forall k \in \mathbb{N}$ allora $a_{k+1} \geq a_k \forall k \Rightarrow \{ a_k\}_{k \in \mathbb{N}}$ è successione crescente a termini strettamente positivi $\Rightarrow\lim_{k \rightarrow+\infty} a_k > 0 \Rightarrow \sum_{k=0}^{\infty} a_k$ diverge.   