# Criteri di convergenza per integrali di funzioni di segno finito

## Proposizione

Sia $f:[a,b[\rightarrow \mathbb{R},\,\,\, b\in\mathbb{R}\cup \{+\infty\}$ tale che $f(x)\geq0$ definitivamente per $x \rightarrow b^-$ e tale che sia Riemann integrabile in $[a,c]\,\, \forall c\in [a,b[$. Allora esiste
$$
    \lim_{c \rightarrow b^-} \int_{a}^{c} f(x)dx
$$
cioè l'integrale improprio $\int_{a}^{b} f(x)dx$ è ben definito (converge o diverge a $+\infty$).

### Dimostrazione

Per semplicità assumiamo $f(x)\geq 0 \,\,\, \forall\,\, x\in[a,b[$. 
Sia allora $F(x)=\int_{a}^{c} f(x)dx$,\\$c\in [a,b[$. 
Allora $F$ è monotona crescente, dunque, presi $c_2 > c_1$ si ha

$$
\begin{align*}
    F(c_2)-F(c_1)&=\int_{a}^{c_2}f(x)dx - \int_{a}^{c_1} f(x)dx \\
    &= \int_{c_1}^{c_2} f(x)dx \geq 0
\end{align*}
$$

perchè $f(x)\geq 0 \,\,\forall x \in [c_1,c_2] \Rightarrow F(c_2)\geq F(c_1)$.

$F$ ha limite per $c \rightarrow b^-$, cioè esiste
$$
    \lim_{c \rightarrow b^-} F(c)=\lim_{c \rightarrow b^-} \int_{a}^{b} f(x)dx.
$$
Un risultato analogo si enuncia per funzioni definitivamente $\leq 0$ per $ x\rightarrow b^-$ o per una funzione $f:]a,b]\rightarrow \mathbb{R},\,\,\, a\in\mathbb{R}\cup\{-\infty\}$.
