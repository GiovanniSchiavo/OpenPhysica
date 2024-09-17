---
sidebar_position: 1
sidebar_label: Limiti di funzioni a due variabili
---

# Limiti di funzioni a due variabili

## Esercizio 1

$$
\lim_{(x,y) \to (0,0)} f(x,y) = \lim_{(x,y) \to (0,0)} \frac{xy^2}{x^2+y^4}
$$

<Details>
<summary>Soluzione</summary>                                        

Sfruttiamo il teorema di unicità del limite, che afferma che se il limite di una funzione esiste, allora è unico.

Procediamo ponendoci in diverse restrizioni di $y$ e $x$.
1. $y=0: \qquad \lim_{x \to 0} \frac{x0^2}{x^2+0^4}= 0$
2. $x=0: \qquad \lim_{y \to 0} \frac{0y^2}{0^2+y^4}= 0$

È evidente che non possiamo procedere ad analizzare tutte le possibili restrizioni singolarmente,
procediamo dunque generalizzando il problema.

Consideriamo una generica retta passante per l'origine di equazione $y=mx$. Sostituendo $y$ nella funzione si ha:
$$
\begin{align*}
    \lim_{(x,mx) \to (0,0)} f(x,mx) &= \lim_{x \to 0} \frac{x(mx)^2}{x^2+(mx)^4}\\ 
    &= \lim_{x \to 0} \frac{m^2x^3}{x^2+m^4x^4} \\
    &= \lim_{x \to 0} \frac{m^2x}{1+m^4x^2} = 0
\end{align*}
$$

Quindi lungo qualsiasi retta passante per l'origine il limite della funzione è nullo.
Questo non è sufficiente, infatti il limite deve coincidere anche lungo qualsiasi curva passante per il punto.

Consideriamo dunque la curva $x=y^2$. Sostituendo $x$ nella funzione si ha:
$$
\begin{align*}
    \lim_{y \to 0} f(y^2,y) &= \lim_{y \to 0} \frac{y^2y^2}{y^4+y^4} \\ 
&= \lim_{y \to 0} \frac{y^4}{2y^4} = \frac{1}{2}
\end{align*}
$$

Abbiamo trovato una curva passante per l'origine lungo la quale il limite della funzione non è nullo, quindi il limite della funzione non esiste.

</Details>


## Esercizio 2
$$
\lim_{(x,y) \to (0,0)} \frac{x^3y^2}{x^4 + y^4}
$$

<details>
<summary>Soluzione</summary>

#### Teorema del confronto
$$
0 \leq \left\lvert \frac{x^3y^2}{x^4 + y^4} \right\rvert
$$

Ponendoci in coordinate polari, $x=\rho \cos(\theta)$ e $y=\rho \sin(\theta)$, $\rho = \sqrt{x^2 + y^2}$, si ha:
$$
\begin{align*}
    0 &\leq \left\lvert \frac{\rho^5 \cos^3(\theta) \sin^2(\theta)}{\rho^4(\cos^4(\theta)+\sin^4(\theta))} \right\rvert \\
    & = \left\lvert \rho \frac{\overbrace{\cos^3(\theta) \sin^2(\theta)}^{\leq 1}}{\underbrace{\cos^4(\theta)+\sin^4(\theta)}_{\geq \frac{1}{2}, \;\; \leq 1} } \right\rvert \leq 2\rho
\end{align*}
$$

si ha dunque
$$
0 \leq \left\lvert \frac{x^3y^2}{x^4 + y^4} \right\rvert \leq 2\sqrt{x^2 + y^2} \to 0
$$

Si conclude quindi che il limite della funzione è $0$.

</details>
