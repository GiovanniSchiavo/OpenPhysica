---
sidebar_position: 2
sidebar_label: Criterio di Cauchy per le serie
---

# Criterio di Cauchy per le serie

## Teorema
Sia data una serie $\sum_{k=0}^{\infty} a_k$ in $\mathbb{R}$ o in $\mathbb{C}$. Allora la serie converge $\Leftrightarrow \forall \epsilon > 0 $ esiste $ N>0 $ tale che se $n>N$ e $p \geq 0$ allora $|\sum_{k=n}^{n+p} a_k| < \epsilon$.
Si ricava dal criterio di Cauchy per le successioni osservando che 
$\sum_{k=n}^{n+p} a_k =S_{n+p} - S_{n-1}$ con $\{S_n\}_{n\in \mathbb{N}}$ successione delle ridotte.

## Proposizione
Sia $\sum_{k=0}^{\infty} a_k$ serie a termini definitivamente non negativi ($ \exists N>0 \,\,|\,\,\forall k>N \Rightarrow a_k \geq 0 $). Allora la serie converge o diverge, non può essere indeterminata.

### Dimostrazione
Per semplicità assumiamo $a_k \geq 0 \,\, \forall k \in \mathbb{N}$. 
Devo far vedere che, se $\{S_n\}_{n \in \mathbb{N}}$ è la successione delle ridotte, questa ha limite, finito o infinito.
$$
  \nonumber  S_{n+1}= \sum_{k=0}^{n+1} a_k = a_{n+1} + \sum_{k=0}^{n} a_k = a_{n+1} + S_n \geq S_n
$$
$\{S_n\}_{n \in \mathbb{N}}$ è crescente e quindi ha limite (finito o $+\infty$).

## Proposizione
Sia data la serie $\sum_{k=0}^{\infty} a_k$ e si supponga che  $\sum_{k=0}^{\infty} \left\lvert a_k \right\rvert $ converga <span class={{"color": "grey"}}>(si dice che  $\sum_{k=0}^{\infty} a_k$ converge assolutamente)</span>.
Allora anche  $\sum_{k=0}^{\infty} a_k$ converge e in tal caso 
$$
    \left\lvert \sum_{k=0}^{\infty} a_k \right\rvert  \leq  \sum_{k=0}^{\infty} \left\lvert a_k \right\rvert 
$$

### Dimostrazione
Dimostriamo che vale il teorema di Cauchy per la serie.
Siccome  $\sum_{k=0}^{\infty} \left\lvert a_k \right\rvert $ converge, $\forall \epsilon > 0 $ esiste $ N>0 $ tale che se $n>N$ e $p \geq 0$
$$
\begin{align*}
     &\sum_{k=n}^{n+p} \left\lvert a_k \right\rvert  < \epsilon\\
    \left\lvert \sum_{k=n}^{n+p} a_k \right\rvert  & \leq  \sum_{k=n}^{n+p} \left\lvert a_k \right\rvert  < \epsilon
\end{align*}
$$
$\Rightarrow$ la serie soddisfa la condizione di Cauchy e quindi converge. In tal caso, per disuguaglianza triangolare avremo

$\left\lvert \sum_{k=0}^{\infty} a_k \right\rvert = \left\lvert \lim_{n\rightarrow + \infty} \sum_{k=0}^{n} a_k \right\rvert = \lim_{n\rightarrow + \infty} \left\lvert \sum_{k=0}^{n} a_k \right\rvert  \leq \lim_{n\rightarrow + \infty} \sum_{k=0}^{n} \left\lvert a_k \right\rvert = \sum_{k=0}^{\infty} \left\lvert a_k \right\rvert.$


## Definizione
Una serie si dice semplicemente convergente se converge, ma non necessariamente converge la serie dei moduli.

## Osservazione Importante
Il teorema non si può invertire. Una serie potrebbe convergere (semplicemente) ma non convergere assolutamente.
