---
sidebar_position: 1
---

## Definizione

$(X,d)$ spazio metrico. $K \subseteq X$ si dice ***(sequenzialmente) compatto*** se ogni successione a valori in $K$ ammette una sottosuccessione convergente ad un elemento di $K$.

## Teorema
$(X,d_x),(Y,d_y)$ spazi metrici, $K \subseteq X$ compatto e $f:K \rightarrow Y$ continua. Allora $f(K)$ è compatto in $Y$ (l'immagine continua di un compatto è compatta).

## Corollario (Teorema di Weierstrass)
$(X,d)$ spazio metrico, $K \subseteq X$ compatto, $f:K \rightarrow\mathbb{R}$ continua. Allora $f$ ha massimo e minimo.

## Dimostrazione del corollario
$f(K)\subseteq \mathbb{R}$ è un compatto, quindi è chiuso e limitato $\Rightarrow$ è un insieme con $\max$ e $\min$, che banalmente coincidono con massimo e minimo di $f$ per definizione. 


## Dimostrazione del teorema
Sia $\{y_j\}_{j\in\mathbb{N}}\subseteq f(K)$ una successione. Dobbiamo trovare una sottosuccessione convergente ad un elemento di $K$.\\
$\forall j \in \mathbb{N} \,\,\exists\,\, x_j\in K \,\,|\,\, f(x_j)=y_j$\\
$\{x_j\}_{j \in \mathbb{N}} \subseteq K$ è una successione, $K$ è compatto $\Rightarrow \,\, \exists\,\, x \in K$ e una sottosuccessione $\{x_{j_i}\}_{i\in \mathbb{N}}$ tali che $x_{j_i}\rightarrow x$ in $(X,d_x)$.\\
Sia $y_{j_i}=f(x_{j_i})$, cosicchè $\{y_{j_i}\}_{i\in\mathbb{N}}$ è sottosuccessione di $\{y_j\}_{j\in\mathbb{N}}$.\\
$f:K\rightarrow Y$ è continua\\
$x_{j_i}\rightarrow x \in K$ in $(X,d_x)$\\
$y_{j_i}=f(x_{j_i})\rightarrow f(x) \in f(K)$ in $(Y,d_y)$
