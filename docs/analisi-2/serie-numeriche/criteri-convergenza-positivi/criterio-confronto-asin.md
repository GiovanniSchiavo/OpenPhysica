---
sidebar_position: 2
sidebar_label: Criterio del confronto asintotico
---

# Criterio del confronto asintotico

## Teorema
Siano $\{a_k\}_{k \in \mathbb{N}},\{b_k\}_{k \in \mathbb{N}}$ successioni definitivamente $\geq 0$ tali che 
$$
  \nonumber  \lim_{n \rightarrow +\infty} \frac{a_k}{b_k}=l \in[0,+\infty]
$$
allora
1. se $l\in \mathbb{R},l\neq0,+\infty$ allora $\sum_{k=0}^{\infty} a_k$ converge $\Leftrightarrow\sum_{k=0}^{\infty} b_k$ converge;
2. se $l=0$ e $\sum_{k=0}^{\infty} b_k$ converge, allora $\sum_{k=0}^{\infty} a_k$ converge;
3. se $l=+\infty $ e $ \sum_{k=0}^{\infty} b_k $ diverge, allora $\sum_{k=0}^{\infty} a_k$ diverge.

### Dimostrazione

1. $l\in ]0,+\infty[,l=\lim_{n \rightarrow + \infty} \frac{a_k}{b_k}$ per la definizione di limite $\frac{l}{2}\leq\frac{a_k}{b_k} \leq 2l$ definitivamente perché l'intervallo $]\frac{l}{2},2l[$ è un intorno di l, quindi
        1. $\Leftarrow$ se $a_k\leq (2l)b_k$ definitivamente e $\sum_{k=0}^{\infty} b_k$ converge $\Rightarrow \sum_{k=0}^{\infty} a_k$ converge per il criterio del confronto;
        2. $\Rightarrow$ se $b_k \leq \frac{2}{l} a_k$ defintivamente e $\sum_{k=0}^{\infty} a_k$ converge $\Rightarrow \sum_{k=0}^{\infty} \frac{2}{l} a_k$ converge $\Rightarrow \sum_{k=0}^{\infty} b_k$ converge per il criterio del confronto.

2. $l=0=\lim_{n \rightarrow +\infty} \frac{a_k}{b_k} \Rightarrow \frac{a_k}{b_k} \leq 1$ definitivamente, ovvero $0\leq a_k \leq b_k $ definitivamente.
Dunque se $\sum_{k=0}^{\infty} b_k $ converge $\Rightarrow \sum_{k=0}^{\infty} a_k $ converge

3. $l=+\infty = \lim_{n \rightarrow +\infty} \frac{a_k}{b_k} \Rightarrow \frac{a_k}{b_k} \geq 1$ definitivamente, cioè $a_k \geq b_k \geq 0$ definitivamente.
    Se $\sum_{k=0}^{\infty} b_k$ diverge $ \Rightarrow \sum_{k=0}^{\infty} a_k$ diverge per il criterio del confronto.
