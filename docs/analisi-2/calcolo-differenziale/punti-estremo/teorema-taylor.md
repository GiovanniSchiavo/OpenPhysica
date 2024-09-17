---
sidebar_position: 3
sidebar_label: Derivate di ordine superiore e polinomio di Taylor
---

# Derivate di ordine superiore e polinomio di Taylor

## Ripasso in $\mathbb{R}$
$f: \mathbb{R} \rightarrow \mathbb{R}$, $x_0\in\mathbb{R} \mid f'(x_0)=0$. Guardo $f''(x_0)$
%$f''(x_0)<0$ %IMMAGINE\\
%$f''(x_0)>0$ %IMMAGINE\\

$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{1}{2}f''(x_0)(x-x_0)^2+o((x-x_0)^2)=f(x_0)+\frac{1}{2}f''(x_0)(x-x_0)^2+o((x-x_0)^2)$

$y=f(x_0)+\frac{1}{2}f''(x_0)(x-x_0)^2$

$f(x)=f(x_0)+\frac{1}{2}f''(x_0)(x-x_0)^2+o((x-x_0)^2)=f(x_0)+(x-x_0)^2\left[ \frac{1}{2} f''(x_0)+o(1) \right]$ che è $> f(x_0)$ o $< f(x_0)$ vicino a $x_0$ se $f''(x_0)< 0$ o $f''(x_0)>0$.

Il criterio della derivata seconda per studiare la natura di un punto critico discende dalla possibilità di scrivere una formula di Taylor al secondo ordine.

## Definizione

$A \subseteq \mathbb{R}^n$ aperto, $f: A \rightarrow \mathbb{R}$ derivabile rispetto a $x_i$ in un intorno $U$ di $\overline{x_0}$. Se $\partial_{x_i}f:U\rightarrow \mathbb{R}$, $\overline{x} \mapsto \partial_{x_i}f(\overline{x})$ è derivabile rispetto a $x_j$ in $\overline{x_0}$, allora si dice che $f$ ha derivata parziale seconda in $\overline{x_0}$, $\partial_{x_j}(\partial_{x_i}f)(\overline{x_0})$ ed è indicata con $\partial_{x_jx_i}^2f(\overline{x_0})$, $ \frac{\partial^2 f}{\partial_{x_j}\partial_{x_i}}(\overline{x_0})$, $D_{x_jx_i}^2f(\overline{x_0})$.

1. $f$ si dice derivabile due volte in $\overline{x_0} $ se in $\overline{x_0}$ ha tutte le $n^2$ derivate parziali seconde.
2. $f$ si dice differenziabile due volte in $\overline{x_0}$ se è differenziabile in un intorno di $\overline{x_0}$ e le sue derivate parziali prime sono differenziabili in $\overline{x_0}$.
3. $f$ si dice di classe $C^2$ in $A$ e si scrive $f \in C^2(A)$ se è derivabile due volte in $A$ e le sue derivate parziali seconde sono continue in $A$. In tal caso $f$ è differenziabile due volte in $A$ per il teorema differenziale totale. 


## Definizione 
In generale, se $A \subseteq \mathbb{R}^n$ è aperto e $f:A\rightarrow\mathbb{R}$, $f$ si dice di classe $C^k$ in $A$ e si scrive $f \in C^k(A)$, $k \geq 1$, se $f$ è derivabile $k$ volte in $A$ e le sue derivate parziali di ordine $k$ sono continue. $f$ si dice di classe $C^\infty$ in $A$ e si scrive $f \in C^\infty(A)$ se $f\in C^k(A) \,\, \forall \,\, k \geq 1$.