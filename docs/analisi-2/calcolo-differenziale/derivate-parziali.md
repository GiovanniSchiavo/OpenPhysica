---
sidebar_position: 3
sidebar_label: Derivate parziali
---

# Derivate parziali

## Definizione
Se $\vec{v}=\vec{e_k}$, $k-$esimo vettore della base canonica, $D_{\vec{e_k}}f(\vec{x_0})$ si dice derivata parziale di $f$ in $x_0$ rispetto a $x_k$ $(\vec{x}=(x_1,x_2,...,x_n))$ ed è indicata con uno dei simboli $\partial_{x_k}f(\vec{x_0})$, $\frac{\partial f}{\partial x_k}(\vec{x_0})$, $D_{x_k}f(\vec{x_0})$, $f_{x_k}'(\vec{x_0})$, $D_kf(\vec{x_0})$.
Se esistono tutte $n$ le derivate parziali di $f$ in $\vec{x_0}$, $\partial_{x_1}f(\vec{x_0}),\partial_{x_2}f(\vec{x_0}),...,\partial_{x_n}f(\vec{x_0})$, f si dice derivabile in $\vec{x_0}$ e il vettore $(\partial_{x_1}f(\vec{x_0}),\partial_{x_2}f(\vec{x_0}),...,\partial_{x_n}f(\vec{x_0}))$ si dice gradiente di $f$ in $\vec{x_0}$ e si scrive $\nabla f(\vec{x_0})$ o grad$f(\vec{x_0})$.

## Osservazione
$f,g:A\rightarrow\mathbb{R}$, $A\subseteq\mathbb{R}^n$ aperto e derivabile
$$
    \partial_{x_k}(\alpha f+\beta g)(\vec{x_0})=\alpha\partial_{x_k}f(\vec{x_0})+\beta\partial_{x_k}g(\vec{x_0}) \text{  per  }   \alpha,\beta\in\mathbb{R}
$$
$$
    \partial_{x_k}(f\cdot g)(\vec{x_0})=g(\vec{x_0})\partial_{x_k}f(\vec{x_0})+f(\vec{x_0})\partial_{x_k}g(\vec{x_0})
$$
$$
    \partial_{x_k}\left(\frac{f}{g}\right)(\vec{x_0})=\frac{g(\vec{x_0})\partial_{x_k}f(\vec{x_0})-f(\vec{x_0})\partial_{x_k}g(\vec{x_0})}{(g(\vec{x_0}))^2} \text{  per  } g(\vec{x_0})\neq 0.
$$
Regola della catena: $A\subseteq \mathbb{R}^n$ aperto, $g:A\rightarrow \mathbb{R}$, derivabile in $\vec{x_0}\in A$, $f:I\rightarrow\mathbb{R}$, $I$ intervallo, derivabile in $g(\vec{x_0})\in I$, allora $f\circ g$ è derivabile in $\vec{x_0}$ e 
$$
\begin{align*}
    \nabla(f \circ g)(\vec{x_0})&=f'(g(\vec{x_0}))\nabla g(\vec{x_0}),\\
    \partial_{x_k}(f\circ g)(\vec{x_0})&=f'(g(\vec{x_0}))\partial_{x_k}g(\vec{x_0})
\end{align*}
$$
Se $f:\mathbb{R}\rightarrow\mathbb{R}$ è derivabile in $x_0$, allora
    1. $f$ è continua in $x_0$
    2. posso definire la retta tangente al grafico di $f$ in $x_0$ come la retta di equazione
    $$
        y=f(x_0)+f'(x_0)(x-x_0).
    $$