---
sidebar_position: 2
sidebar_label: Limiti di funzioni
---
 
# Limiti di funzioni

## Definizione
Siano $X \subseteq \mathbb{R}$, $f: X\to \mathbb{R}$ e $x_0 \in \mathbb{R*}$ un punto di accumulazione per $X$. Allora $l \in \mathbb{R}*$
si dice ***limite di $f(x)$ per $x$ che tende a $x_0$*** e si scrive
$$
\lim_{x \to x_0} f(x) = l
$$

oppure

$$
f(x) \to l \text{ per } x \to x_0
$$

per ogni intorno $\nu$ di $l,\; f(x) \in \nu$ definitivamente per $x \to x_0$.

In altre parole,

$\lim_{x \to x_0} f(x) = l \Leftrightarrow$
per ogni intorno $\nu$ di $l$ esiste un intorno $\mathcal{u}$ di $x_0$ tale che $f(x) \in \nu$ per ogni $x \in \mathcal{u} \cap X \setminus \{x_0\}$.