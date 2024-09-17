---
sidebar_position: 1
sidebar_label: Criterio di Abel
---

# Criterio di Abel

## Teorema
Sia $a\in\mathbb{R},\,\,\,f,G:[a,+\infty[\rightarrow\mathbb{R}$ di classe $C^1$ tali che

1. $f'(x)\leq 0 \,\,\, \forall x \geq a$ e $\lim_{x \rightarrow +\infty} f(x)=0$
2. $G$ è limitata, cioè $\exists C > 0 $ tale che $ |G(x)|\leq C \,\,\, \forall x \geq a$

Allora $\int_{a}^{+\infty}f(x)G'(x)dx$ converge.

## Dimostrazione

$ \int_{a}^{+\infty}f(x)G'(x)dx =\lim_{\omega \rightarrow+\infty}\int_{a}^{\omega}f(x)G'(x)dx $

$\int_{a}^{\omega}f(x)G'(x)dx = f(x)G(x)|_{a}^{\omega}-\int_{a}^{\omega}f'(x)G(x)dx=f(\omega)G(\omega)-f(a)G(a)-\int_{a}^{\omega}f'(x)G(x)dx$

$\int_{a}^{+\infty}f(x)G'(x)dx =-f(a)G(a)-\lim_{\omega \rightarrow +\infty}\int_{a}^{\omega}f'(x)G(x)dx$

Se dimostro che $\lim_{\omega \rightarrow +\infty} \int_{a}^{\omega}f'(x)G(x)dx$ esiste finito, cioè che $\int_{a}^{+\infty}f'(x)G(x)dx$ è convergente, deduco che converge anche $\int_{a}^{+\infty}f(x)G'(x)dx$.



Dimostriamo che l'integrale $\int_{a}^{+\infty}f'(x)G(x)dx$ converge assolutamente

$\int_{a}^{+\infty}|f'(x)G(x)|dx= \lim_{\omega \rightarrow +\infty}\int_{a}^{\omega} |f'(x)G(x)|dx\leq Cf(a)< +\infty$

(Il limite esiste ma devo far vedere che è finito)

$\int_{a}^{\omega}|f'(x)G(x)|dx\leq C\int_{a}^{\omega}|f'(x)|dx= -C\int_{a}^{\omega}f'(x)dx=C[f(a)-f(\omega)]\leq Cf(a)\,\,\, \forall \omega.$
