---
sidebar_position: 2
sidebar_label: Derivate direzionali
---

# Derivate direzionali

Sia $f(x,y): \Omega \subseteq \mathbb{R^2}\;$ e $\; p=(x_0,y_0) \in \Omega$.
Sia $\vec{v} = (a,b)$ un generico vettore. Ricordando che un versore è un vettore di modulo unitario,
troviamo il versore $\vec{u}$ con la stessa direzione di $\vec{v}$:
$$
\begin{align*}
    \left\lVert \vec{v} \right\rVert &= \sqrt{a^2 + b^2}\\
\vec{u} &= \frac{\vec{v}}{\left\lVert \vec{v} \right\rVert} = \left(\frac{a}{\sqrt{a^2 + b^2}},\frac{b}{\sqrt{a^2 + b^2}}\right) 
\end{align*}
$$

In maniera più compatta rinominiamo 

$\vec{u} = \left(\frac{a}{\sqrt{a^2 + b^2}},\frac{b}{\sqrt{a^2 + b^2}}\right) = (a_1,b_1)$.

La derivata direzionale di $f$ in $\vec{p}$ nella direzione di $\vec{v}$ è definita come:

$f'_{\vec{u}}(x_0,y_0) = \lim_{h \to 0} \frac{f(x_0 + a_1t,y_0 + b_1t) - f(x_0,y_0)}{h}$


## Definizione 
Se $\phi_{\vec{v}}$ è derivabile in $h=0$ allora 

$\phi_{\vec{v}}'(0)=\lim_{h\rightarrow0}\frac{\phi_{\vec{v}}(h)-\phi_{\vec{v}}(0)}{h}
=\lim_{h\rightarrow 0}\frac{f(\vec{x_0}+h\vec{v})-f(\vec{x_0})}{h}=D_{\vec{v}}f(\vec{x_0})$

si dice derivata di $f$ in $\vec{x_0}$ nella direzione $\vec{v}$ e $f$ 
si dice derivabile in $\vec{x_0}$ nella direzione $\vec{v}$ o lungo $\vec{v}$.

[Vai agli esercizi](/docs/analisi-2/esercizi-svolti/derivate-direzionali-parziali.md)

