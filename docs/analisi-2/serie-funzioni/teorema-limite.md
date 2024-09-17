---
sidebar_position: 2
sidebar_label: Teorema del limite
---

# Teorema del limite per le serie di funzioni

## Teorema 

Sia $A \subseteq \mathbb{R}$, sia $x_0$ un punto di accumulazione per $A$, ovvero $x_0 \in D(A)$ e sia:

$$
\sum_{n=}^{\infty} f_n(x) = f_1(x) + f_2(x) + \ldots + f_n(x)
$$

una serie di funzioni. Supponiamo inoltre che esistano finiti i limiti:

$$
\begin{align*}
\lim_{x \to x_0}& f_1(x) = l_1\\
\lim_{x \to x_0}& f_2(x) = l_2\\
\lim_{x \to x_0}& f_n(x) = l_n
\end{align*}
$$

Consideriamo la funzione somma:
$$
F(x) = f_1(x) + f_2(x) + \ldots + f_n(x)
$$

allora vale che:

$$
\lim_{x \to x_0} F(x) = l_1 + l_2 + \ldots + l_n
$$

se e solo se $\sum_{n=}^{\infty} f_n(x)$ **converge uniformemente** in $A$.

Vale dunque che:
$$
\lim_{x \to x_0} F(x) = l
$$

e quindi la la funzione somma converge a $l$ per $x \to x_0$.