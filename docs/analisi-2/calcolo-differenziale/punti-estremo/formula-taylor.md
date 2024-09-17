---
sidebar_position: 5
sidebar_label: Formula di Taylor
---

# Formula di Taylor

$f: \mathbb{R} \rightarrow \mathbb{R}$ derivabile due volte in $x_0 \in \mathbb{R}$

$\Rightarrow f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{1}{2}f''(x_0)(x-x_0)^2+o(|x-x_0|^2)$

$f: \mathbb{R}^n \rightarrow \mathbb{R}$, differenziabile due volte in $\overline{x_0} \in \mathbb{R}^n $

$\Rightarrow f(\overline{x})=f(\overline{x_0})+\langle \nabla f(\overline{x_0}), 
\overline{x}-\overline{x_0} \rangle + \frac{1}{2} \langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}), 
\overline{x}-\overline{x_0} \rangle + o(\|\overline{x}-\overline{x_0}\|^2)=f(\overline{x_0})+\langle \nabla f(\overline{x_0}), 
\overline{x}-\overline{x_0} \rangle + \frac{1}{2} (\overline{x}-\overline{x_0})^TD^2 f(\overline{x_0})(\overline{x}-\overline{x_0})+o(\|\overline{x}-\overline{x_0}\|^2)$

$$
    T(\overline{x})=f(\overline{x_0}) +\langle\nabla f(\overline{x_0}),\overline{x}-\overline{x_0} \rangle +\frac{1}{2} \langle D^2f(\overline{x_0})(\overline{x} -\overline{x_0}),\overline{x}-\overline{x_0} \rangle
$$

polinomio di Taylor di ordine o grado $2$ di $f$ di centro $\overline{x_0}$.

## Teorema  

$A \subseteq \mathbb{R}^n$ aperto, $f: A \rightarrow \mathbb{R}$

1. Se $f$ è differenziabile $2$ volte in $\overline{x_0} \in A$, allora $f(\overline{x})=T(\overline{x})+o(\|\overline{x}-\overline{x_0}\|^2)$ per $\overline{x}\rightarrow \overline{x_0}$ e $T$ è l'unico polinomio di grado al più $2$ che sodddisfa  la formula di Taylor di ordine $2$ di $f$ di centro $\overline{x_0}$.
2. Se $f$ è differenziabile due volte in $A$ e $[\overline{x_0},\overline{x}]\subseteq A$, $\overline{x_0},\overline{x}\in A$ allora $ \exists\,\, \overline{\xi}\in ]\overline{x_0},\overline{x}[$ tale che $f(\overline{x})=f(\overline{x_0})+\langle \nabla f(\overline{x_0}),\overline{x} -\overline{x_0}\rangle +\frac{1}{2}\langle D^2 f(\overline{\xi})(\overline{x}-\overline{x_0}),\overline{x}-\overline{x_0} \rangle$.


## Dimostrazione della formula di Taylor

$\overline{x_0}, \overline{x}\in A$, $\overline{x}\neq \overline{x_0}$, $\phi:[0, \|\overline{x}-\overline{x_0}\|]\rightarrow \mathbb{R}$, $\overline{v}=\frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|}$

$\phi(t)=f(\overline{x_0}+t\overline{v})$, restrizione di $f$ lungo il segmento $[\overline{x_0},\overline{x}]$.

$\phi$ è derivabile due volte in $t=0$ perché $f$ lo è in $\overline{x_0}$.

$\phi(t)=\phi(0)+\phi'(0)t+\frac{1}{2}\phi''(0)t^2+o(t^2)$ per $t \rightarrow 0$.

$\phi'(t)=\langle\nabla f(\overline{x_0}+t\overline{v}),\overline{v}\rangle$

$\phi'(0)=\langle \nabla f(\overline{x_0}), \frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|}\rangle$

$\phi''(t)=\langle D^2f(\overline{x_0}+t\overline{v})\overline{v},\overline{v} \rangle$

$\phi''(0)=\langle D^2 f(\overline{x_0})\frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|}, \frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|}\rangle$.

$\phi(\|\overline{x}-\overline{x_0}\|)=\phi(0)+\phi'(0) \|\overline{x}-\overline{x_0}\|+\frac{1}{2}\phi''(0)\| \overline{x}-\overline{x_0}\|^2+o(\|\overline{x}-\overline{x_0}\|^2)$

$f(\overline{x})=f(\overline{x_0})+\langle \nabla f(\overline{x_0}), \frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|} \rangle \|\overline{x} -\overline{x_0}\|+ \frac{1}{2}\langle D^2 f(\overline{x_0})\frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|},\frac{\overline{x}-\overline{x_0}}{\|\overline{x}-\overline{x_0}\|}  \rangle \|\overline{x}-\overline{x_0}\|+o(\|\overline{x}-\overline{x_0}\|)$
