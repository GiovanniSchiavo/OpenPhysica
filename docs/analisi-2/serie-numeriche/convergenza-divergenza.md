---
sidebar_position: 1
sidebar_label: Convergenza e divergenza delle serie
---

# Convergenza e divergenza delle serie

## Definizione

Una serie $\sum_{k=0}^{\infty} a_k$ si dice:
- **Convergente** se converge la successione delle ridotte, cioè se $\exists$ finito 
  $$
  \lim_{n\rightarrow +\infty} S_n = \lim_{n\rightarrow +\infty} \sum_{k=0}^{n} a_k
  $$
- **Divergente**:
  - a $+\infty$ se $\lim_{n\rightarrow +\infty} S_n = +\infty$
  - a $-\infty$ se $\lim_{n\rightarrow +\infty} S_n = -\infty$
  - a $\infty$ se $\lim_{n\rightarrow +\infty} S_n = \infty$, cioè se $\lim_{n\rightarrow +\infty} |S_n| = +\infty$
- **Irregolare** o **indeterminata** se $\lim_{n\rightarrow +\infty} S_n$ non esiste.


### Somma della Serie

Se la serie $\sum_{k=0}^{\infty} a_k$ converge, cioè se il $\lim_{n\rightarrow +\infty} S_n = \lim_{n\rightarrow +\infty} \sum_{k=0}^{n} a_k$, si dice ***somma della serie*** ed è indicato con $\sum_{k=0}^{\infty} a_k$.

### Proposizione

Sia $\sum_{k=0}^{\infty} a_k$ una serie a termini complessi. Allora $\sum_{k=0}^{\infty} a_k$ converge $\Longleftrightarrow$ convergono $\sum_{k=0}^{\infty} Re(a_k)$ e $\sum_{k=0}^{\infty} Im(a_k)$
$$
    a_k=\alpha_k +i\beta_k, \quad \alpha_k,\beta_k \in \mathbb{R}
$$
$\sum_{k=0}^{\infty} a_k$ converge $\Longleftrightarrow$ convergono entrambe le serie a termini in $\mathbb{R}$
$$
    \sum_{k=0}^{\infty} \alpha_k \quad \text{e} \quad \sum_{k=0}^{\infty} \beta_k.
$$

#### Dimostrazione $\Rightarrow$

Se $\sum_{k=0}^{\infty} a_k$ converge allora $\sum_{k=0}^{\infty} \alpha_k$ e $\sum_{k=0}^{\infty} \beta_k$ convergono.

Sia $S_a+iS_b$ la somma di $\sum_{k=0}^{\infty}a_k$, allora
$$
    S_a+iS_b=\lim_{n\rightarrow +\infty} \sum_{k=0}^{n} (\alpha_k + i\beta_k)
$$
Faccio vedere che 
$$
    \lim_{n \rightarrow +\infty} \sum_{k=0}^{n}\alpha_k = S_a \,\,\,\,\, \text{e} \,\,\,\,\, \lim_{n \rightarrow +\infty} \sum_{k=0}^{n}\beta_k = S_b
$$
allora

$
0 \leq \left\lvert \sum_{k=0}^{n} \alpha_k - S_a \right\rvert 
=\left\lvert Re(\sum_{k=0}^{n} a_k - (S_a +iS_b)) \right\rvert 
\leq \left\lvert \sum_{k=0}^{n} a_k - (S_a +iS_b) \right\rvert  \xrightarrow{n\rightarrow +\infty} 0.
$

Quindi per il Teorema dei Due Carabinieri

$
\lim_{n\rightarrow +\infty} \left\lvert \sum_{k=0}^{n} \alpha_k - S_a \right\rvert =
0 \Longleftrightarrow \lim_{n\rightarrow +\infty} \sum_{k=0}^{n} \alpha_k =S_a
$
In modo analogo si dimostra che $\lim_{n\rightarrow +\infty}\beta_k=S_b$

#### Dimostrazione $\Leftarrow$
$\sum_{k=0}^{\infty}\alpha_k$ e $\sum_{k=0}^{\infty} \beta_k \quad$ convergono $\Longrightarrow \sum_{k=0}^{\infty} a_k$
converge, ovvero
$$
\begin{align*}
    \lim_{n\rightarrow +\infty} \sum_{k=0}^{n} \alpha_k &= S_a \in \mathbb{R}, \\
    \lim_{n\rightarrow +\infty} \sum_{k=0}^{n} \beta_k &= S_b \in \mathbb{R}.
\end{align*}
$$
Quindi per $n\rightarrow +\infty$ si avrà la seguente disuguaglianza triangolare

$
0 \leq \left\lvert \sum_{k=0}^{n} a_k - (S_a +iS_b) \right\rvert  
= \left\lvert \left(\sum_{k=0}^{n} \alpha_k - S_a \right) + i\left(\sum_{k=0}^{n} \beta_k - S_b \right) \right\rvert  
\leq \left\lvert \sum_{k=0}^{n} \alpha_k - S_a \right\rvert  + \left\lvert \sum_{k=0}^{n} \beta_k -S_b \right\rvert 
\xrightarrow{n \rightarrow +\infty}0.
$

Si conclude con il Teorema dei Due Carabinieri.

### Teorema

Sia $\{a_n\}_{n\in \mathbb{N}}\subseteq \mathbb{C}(\mathbb{R})$. Se $\sum_{k=0}^{\infty} a_k$ converge, allora $\lim_{k\rightarrow +\infty} a_k=0$.

<span style={{"color": "grey"}}>(Se una serie è convergente il suo termine generale è infinitesimo)</span>

#### Dimostrazione del teorema

$\sum_{k=0}^{\infty} a_k$ converge, allora mi procuro la ridotta n-esima.
$$
\begin{align*}
    S_n&=\sum_{k=0}^{n} a_k \\
    \\
    S_{n-1}&=\sum_{k=0}^{n-1} a_k\\
    \\
    S_n-S_{n-1}&=\sum_{k=0}^{n} a_k - \sum_{k=0}^{n-1} a_k=\\
    &=a_n + \sum_{k=0}^{n-1} a_k - \sum_{k=0}^{n-1} a_k = a_n\\
    \\
    \lim_{n \rightarrow +\infty} a_n &= \lim_{n \rightarrow +\infty}(S_{n}-S_{n-1})\\
    &= \lim_{n \rightarrow +\infty}S_{n}-\lim_{n \rightarrow +\infty}S_{n-1}=0
\end{align*}
$$
Ove $S\in \mathbb{C}$ è la somma della serie.

### Proposizione

Siano $\sum_{k=0}^{\infty} a_k$ e $\sum_{k=0}^{\infty} b_k$ serie convergenti di somma $S_a$e $S_b$, allora $\sum_{k=0}^{\infty} (a_k+b_k)$ converge e la sua somma è $S_a+S_b$.

#### Dimostrazione
$
\sum_{k=0}^{n} a_k+b_k = \sum_{k=0}^{n} a_k +\sum_{k=0}^{n} b_k \xrightarrow{n\rightarrow+\infty} S_a+S_b.
$

### Proposizione
Sia $\sum_{k=0}^{\infty} a_k$ serie convergente di somma $S_a$ e sia $c \in \mathbb{C}$, allora $\sum_{k=0}^{\infty} (ca_k)$ converge e la sua somma è $cS_a$.

#### Dimostrazione
$$
  \nonumber  \sum_{k=0}^{\infty} (ca_k) = c\sum_{k=0}^{\infty} a_k \xrightarrow{n\rightarrow+\infty} cS_a
$$

### Proposizione
Sia data la serie
$\sum_{k=0}^{\infty} a_k$ e sia $n_0 \in \mathbb{N}, n_0 \geq 1$, allora $\sum_{k=0}^{\infty} a_k$ e $\sum_{k=n_0}^{\infty} a_k$ hanno lo stesso carattere.

<span style={{"color": "grey"}}>($\sum_{k=0}^{\infty} \frac{1}{k}$ e $\sum_{k=10^{10}}^{\infty} \frac{1}{k}$ hanno lo stesso carattere, $\sum_{k=10^{10}}^{\infty} \frac{1}{k}=+\infty$. 
Il carattere di una serie dipende solo dalla coda della successione dei suoi termini.)</span>

#### Dimostrazione
Fissato $n > n_0$ si ha
$$
   \nonumber \sum_{k=0}^{n} a_k = \sum_{k=0}^{n_0-1} a_k +\sum_{k=n_0}^{n} a_k,
$$
allora
$$
  \nonumber \exists \lim_{n \rightarrow +\infty} \sum_{k=0}^{n} a_k \Leftrightarrow \exists \lim_{n \rightarrow +\infty} \sum_{k=n_0}^{n} a_k
$$
e in tal caso 
$$
  \nonumber  \lim_{n \rightarrow +\infty} \sum_{k=0}^{n} a_k= \sum_{k=0}^{n_0-1} a_k +\lim_{n \rightarrow +\infty} \sum_{k=n_0}^{n} a_k .
$$
