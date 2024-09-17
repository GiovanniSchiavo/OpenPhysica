---
sidebar_position: 1
sidebar_label: Criterio del confronto
---

# Criterio del confronto

## Teorema 

$f,g:[a,b[\rightarrow\mathbb{R}, \,\, b\in\mathbb{R}\cup\{+\infty\}$, Riemann integrabili in $[a,c] \,\, \forall c \in [a,b[$ e tali che $0\leq f(x) \leq g(x)$ definitivamente per $x \rightarrow b^-$.

1. Se $\int_{a}^{b}g(x)dx$ converge, allora converge anche $\int_{a}^{b} f(x)dx$.
2. Se $\int_{a}^{b} f(x)dx$ diverge, allora diverge anche $\int_{a}^{b}g(x)dx$.

Un risultato analogo vale per funzioni $f,g:]a,b]\rightarrow\mathbb{R}, \,\, a\in\mathbb{R}\cup\{-\infty\}$, con ovvie modifiche.

### Dimostrazione
Per semplicità assumiamo $0 \leq f(x)\leq g(x) \,\,\, \forall x \in [a,b[$.

1. $\exists$ finito $\lim_{c \rightarrow b^-} \int_{a}^{c} g(x) dx \,\, \forall c \in [a,b[,\,\,\, \int_{a}^{c}f(x)dx \leq \int_{a}^{c} g(x)dx$ 
perchè $f(x)\leq g(x)$. Allora $\lim_{c \rightarrow b^-} \int_{a}^{c} f(x)dx \leq \lim_{c \rightarrow b^-} \int_{a}^{c} g(x)dx$ 
(che esistono perchè $f(x)\geq 0$) e quindi 
$\lim_{c \rightarrow b^-} \int_{a}^{c} f(x)dx $ esiste finito e $\int_{a}^{b} f(x)dx$ è convergente.
2. $\lim_{c \rightarrow b^-} \int_{a}^{c} f(x) dx = +\infty $ ($f(x)\geq 0$), 
    allora $\int_{a}^{c} g(x)dx \geq \int_{a}^{c} f(x) dx \,\,\, \forall c \in [a,b[$ 

    $\Rightarrow \lim_{c \rightarrow b^-} \int_{a}^{c} g(x)dx =+\infty$ per il teorema del confronto sui limiti.
