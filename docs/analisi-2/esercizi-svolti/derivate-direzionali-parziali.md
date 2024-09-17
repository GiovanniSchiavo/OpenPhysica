---
sidebar_position: 2
sidebar_label: Derivate direzionali e derivate parziali
---

# Esercizi sulle derivate direzionali e sulle derivate parziali

:::tip[Mi raccomando!]

Prima di provare a risolvere gli esercizi, assicurati di sapere la teoria. La trovi qui:
- [Derivate direzionali](docs\analisi-2\calcolo-differenziale\derivate-direzionali.md)
- [Derivate parziali](docs\analisi-2\calcolo-differenziale\derivate-parziali.md)

:::


## Esercizio 1

$$
f(x,y)= \begin{cases}
\frac{x^3+\left\lvert x \right\rvert y^2 + y^3 }{x^2+y^2} & \text{se } (x,y)\neq(0,0)\\
0 & \text{se } (x,y)=(0,0)
\end{cases}
$$

Trovare la derivata direzionale di $f$ in $(0,0)$ nella direzione del vettore $\vec{v}=(1,-1)$.

<details>
<summary>Soluzione</summary>

Il vettore $\vec{v}=(1,-1)$ non è un versore, infatti $\left\lVert v \right\rVert = \sqrt{1^2 + (-1)^2} = \sqrt{2}.$ Il versore $\vec{u}$ parallelo a $\vec{v}$ è $\vec{u}=\frac{1}{\sqrt{2}}(\vec{v})=(\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}})$. Si ha:

$$
\begin{align*}
    f'_{\vec{u}}(0,0) &= \lim_{h \to 0} \frac{f(\frac{1}{\sqrt{2}}t,- \frac{1}{\sqrt{2}}t) - f(0,0)}{h}\\
    & = \lim_{h \to 0} \frac{\frac{1}{\sqrt{2}}t^3 + \frac{1}{2\sqrt{2}}\left\lvert h \right\rvert h^2 - \frac{h^3}{2\sqrt{2}}}{h^3}\\
    & = \lim_{h \to 0} \frac{1}{2\sqrt{2}} \frac{\left\lvert h \right\rvert }{h}
\end{align*}
$$

Il limite non esiste, infatti ha due limiti diversi a seconda del segno di $h$.
Si conclude quindi che la derivata direzionale di $f$ in $(0,0)$ nella direzione del vettore $\vec{v}=(1,-1)$ non esiste.

</details>

## Esercizio 2

$$
f(x,y) = x^2y
$$
Determinare le derivata direzionali in un punto generico $p=(x,y)$ nelle direzioni del versore $\vec{v}=(1,0)$ e del versore $\vec{w}=(0,1)$

<details>
<summary>Soluzione</summary>

#### Derivata lungo $\vec{v}=(1,0)$

$\lim_{h \to 0} \frac{f(x+h,y) - f(x,y)}{h} = \lim_{h \to 0} \frac{(x+h)^2 y - x^2 y}{h}=\lim_{h \to 0} \frac{x^2 y + 2hxy + h^2 - x^2y}{h}=\lim_{h \to 0} \frac{h(2xy + hy)}{h} = 2xy$

Questa derivata direzionale è chiamata [***derivata parziale***](/docs/analisi-2/calcolo-differenziale/derivate-parziali.md)
di $f$ rispetto a $x$ e si indica con $\frac{\partial f}{\partial x}$ oppure con $f'_x$.

#### Derivata lungo $\vec{w}=(0,1)$

In maniera analoga al caso precedente, si ha:

$\lim_{h \to 0} \frac{f(x,y+h) - f(x,y)}{h} = \lim_{h \to 0} \frac{x^2 (y+h) - x^2 y}{h}=\lim_{h \to 0} \frac{x^2h}{h} = x^2$

Questa derivata direzionale è chiamata [***derivata parziale***](/docs/analisi-2/calcolo-differenziale/derivate-parziali.md)
di $f$ rispetto a $y$ e si indica con $\frac{\partial f}{\partial y}$ oppure con $f'_y$.

</details>

