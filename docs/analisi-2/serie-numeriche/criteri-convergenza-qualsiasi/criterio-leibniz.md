---
sidebar_position: 2
sidebar_label: Criterio di Leibniz
---

# Criterio di Leibniz

## Teorema

Sia $\{a_k\}_{k\in \mathbb{N}}$ successione a termini non negativi, decrescente, infinitesima. Allora

$$
    \sum_{k=0}^{\infty} (-1)^k a_k
$$

converge e, detta $S$ la sua somma, si ha

$$
    \left\lvert \sum_{k=0}^{\infty} (-1)^k a_k - S \right\rvert  \leq a_{k+1}
$$

$$
    S=\lim_{k \rightarrow +\infty} \sum_{k=0}^{\infty} (-1)^k a_k
$$

### Dimostrazione

1. $\{S_{2n}\}_{n\in\mathbb{N}}$, successione delle ridotte di indice pari, è decrescente, ovvero $S_{2n+2}\leq S_{2n} \forall n$ dunque, (visto che la successione $\{a_k\}_{k\in\mathbb{N}}$ è decrescente)

    $S_{2n+2} = \sum_{k=0}^{2n+2} (-1)^k a_k= \sum_{k=0}^{2n} (-1)^k a_k + (-1)^{2n+1} a_{2n+1} + (-1)^{2n+2}a_{2n+2}=\sum_{k=0}^{2n} (-1)^k a_k - a_{2n+1}+a_{2n+2}\leq S_{2n}.$

2. $\{S_{2n+1}\}_{n \in \mathbb{N}}$, successione delle ridotte di indice dispari, è crescente, ovvero $S_{2n+3} \geq S_{2n+1} \forall n \in \mathbb{N}$ dunque, (visto che la successione $\{a_k\}_{k\in\mathbb{N}}$ è decrescente)
   
    $S_{2n+3} = \sum_{k=0}^{2n+3} (-1)^k a_k = \sum_{k=0}^{2n+1} (-1)^k a_k + (-1)^{2n+2} a_{2n+2} +  (-1)^{2n+3} a_{2n+3}= S_{2n+1} + a_{2n+2} - a_{2n+3} \geq S_{2n+1}.$

3. $S_{2n} = S_{2n-1} + (-1)^{2n} a_{2n}= S_{2n-1}+a_{2n} \geq S_{2n-1} \geq S_1$
    dunque $\{S_{2n}\}$ è una successione decrescente inferiormente limitata $\Rightarrow $ ha limite finito.
    $S_{2n+1}=S_{2n}+(-1)^{2n+1} a_{2n+1}=S_{2n} - a_{2n+1} \leq S_{2n} \leq S_0$
    dunque $\{S_{2n+1}\}_{n \in \mathbb{N}}$ è crescente e superiormente limitata $\Rightarrow $ ha limite finito.
4. $\lim_{n \rightarrow +\infty} S_{2n}=S^0 \in \mathbb{R}, \quad \lim_{n \rightarrow +\infty} S_{2n+1}=S^1 \in \mathbb{R} \Rightarrow S^0=S^1=S$, somma della serie

    $\left\lvert S_{2n+1}-S_{2n}|=|a_{2n+1} \right\rvert \rightarrow 0$

    $\left\lvert S^0-S^1 \right\rvert \leq \left\lvert S^0-S_{2n} \right\rvert + \left\lvert S_{2n}-S_{2n+1} \right\rvert +\left\lvert S_{2n+1}-S^1 \right\rvert $

    $S^0=S^1=S \in \mathbb{R} \Longrightarrow$ la serie converge.

5. $S_{2n+1}\leq S \leq S_{2n+2} \forall n$ perchè la prima è crescente e la seconda è decrescente.

    $0\leq S-S_{2n+1} \leq S_{2n+2} - S_{2n+1} = \sum_{k=0}^{2n+2} (-1)^k a_k - \sum_{k=0}^{2n+1}( -1)^k a_k =a_{2n+2}$

    $0 \leq S_{2n}-S \leq S_{2n}-S_{2n+1}=a_{2n+1} \Rightarrow \left\lvert S_n -S \right\rvert  \leq a_{n+1}.$
