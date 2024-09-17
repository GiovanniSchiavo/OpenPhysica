---
sidebar_position: 2
sidebar_label: Successioni in spazi metrici
---

# Successioni in spazi metrici

## Definizione
$\{x_k\}_{k\in \mathbb{N}} \subseteq X$ successione, con $(X,d)$ spazio metrico. Si dice che $\{ x_k\}_{k\in\mathbb{N}}$ converge ad $x \in X$ e si scrive
$x_k \rightarrow x$ o $\lim_{k\rightarrow +\infty} x_k = x \Leftrightarrow \lim_{k \rightarrow +\infty} d(x_k,x)=0$,
(in $(\mathbb{R},|\cdot|)$ ad esempio $\lim_{k \rightarrow+\infty} |x_k - x |=0$) cioè $\Leftrightarrow \forall \,\, \epsilon >0 \,\, \exists\,\, N >0 $ tale che $k > N \Rightarrow d(x_k,x)<\epsilon$.
$x$ viene detto limite della successione.

## Teorema
Sia $\{ x_k \}_{k \in \mathbb{N}} \subseteq X, (X,d)$ spazio metrico, tale che $ x_k \rightarrow l_1 \in X$ e $x_k \rightarrow l_2 \in X$. Allora $l_1=l_2$.

## Proposizione
$\{\overline{x_k}\}_{k\in\mathbb{N}} \subseteq R^n$ tale che $\overline{x_k } = (x_{k_1},x_{k_2},...,x_{k_n})$. Allora $\overline{x_k}\rightarrow \overline{x}=(x_1,...,x_n) \Leftrightarrow x_{kj} \rightarrow x_j \,\,  \forall \,\, j=1,...,n$ cioè $\Leftrightarrow \forall \,\, j = 1,...,n$ la successione di numeri reali $\{ x_{kj}\}_{k\in\mathbb{N}}$ converge a $x_j$.

### Dimostrazione
$(\mathbb{R}^n, |\cdot|)$\\
Se $\overline{y}=(y_1,..,y_n)\in \mathbb{R}^n$, allora $|y_j|\leq |\overline{y}|\leq \sum_{i=1}^{n}|y_i| \forall j$

$|y_j| = \sqrt{|y_j|^2} \leq \sqrt{\sum_{i=1}^{n}|y_i|^2} = |\overline{y}|$.

Abbiamo dimostrato che, se $0 <p<1$, $(a+b)^p\leq a^p+b^p \,\, \forall\,\, a,b \geq 0$.

Questa disuguaglianza si può generalizzare.

$(a_1+a_2+...+a_n)^p\leq a_1^p+a_2^p+...+a_n^p \,\, \forall\,\, a_i \geq 0$

$|\overline{y}|=\sqrt{\sum_{i=1}^{n}|y_i|^2} \leq (|y_1|^2)^{\frac{1}{2}}+(|y_2|^2)^{\frac{1}{2}}+...+(|y_n|^2)^{\frac{1}{2}}= |y_1|+|y_2|+...+|y_n|= \sum_{i=1}^{n}|y_i|$

$|y_j|\leq |\overline{y}| \leq \sum_{i=1}^{n}|y_i|$

$\overline{x}_k \rightarrow \overline{x} \Leftrightarrow x_{k_j} \rightarrow x_j \,\, \forall\,\, j=1,...,n$

$|x_{k_j}-x_j|\leq |\overline{x_k}-\overline{x}| \leq \sum_{i=1}^{n}|x_{k_i}-x_i|$.

Se $|\overline{x_k} - \overline{x}|\rightarrow 0 $, cioè se $\overline{x_k}\rightarrow \overline{x}$, allora

$0 \leq |x_{kj}-x_j|\leq |\overline{x_k}-\overline{x}| \Rightarrow x_{kj} \rightarrow x_j \,\, \forall \,\, j$

D'altra parte, se $x_{ki} \rightarrow  x_i \,\, \forall \,\, i=1,...,n $

$\Rightarrow \sum_{i=1}^{n}|x_{k_i}- x_i| \rightarrow 0 $ per $k \rightarrow + \infty$
$\Rightarrow 0 \leq |x_{k}- x| \leq \sum_{i=1}^{n}|x_{k_i}- x_i| \Rightarrow \overline{x_k} \rightarrow \overline{x}$.
