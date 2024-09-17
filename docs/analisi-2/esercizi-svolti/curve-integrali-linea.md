---
sidebar_position: 5
sidebar_label: Curve regolari, curve semplici ed integrali di linea
---

import GeoGebraApplet from '@site/src/components/GeoGebraApplet';

# Curve regolari, curve semplici ed integrali di linea

## Esercizio 1
Sia $\gamma$ una curva nel piano $z=0$ di equazioni:
$$
\begin{cases}
    x(t)=\cos(t)\\
    y(t)=\sin(t)\\
    z(t)=0
\end{cases}
\quad
t\in[0,\pi]
$$

1. $\gamma$ è una curva semplice?
2. $\gamma$ è una curva regolare?

<details>
<summary>Soluzione</summary> 
#### Punto 1
La curva $\gamma$ è semplice se e solo se $\gamma(t_1)\neq\gamma(t_2)$ per ogni $t_1\neq t_2$.

Considero quindi due punti $t_1,t_2\in[0,\pi]$ tali che $t_1\neq t_2$ e verifico se esistono autointersezioni:

$$
\begin{cases}
    \cos{t_1}=\cos{t_2}\\
    \sin{t_1}=\sin{t_2}\\
    0 = 0
\end{cases}
$$

questo sistema non ha soluzioni diverse da $t_1=t_2$, quindi la curva è semplice.

#### Punto 2
Andiamo a calcolare le derivate prime:
$$
\begin{align*}
    x'(t)&=-\sin(t)\\
    y'(t)&=\cos(t)\\
    z'(t)&=0
\end{align*}
$$

La curva $\gamma$ è regolare se e solo se $\forall t\in[0,\pi]$ si ha $x'(t)^2+y'(t)^2+z'(t)^2\neq0$,
ovvero almeno una delle derivate prime è diversa da zero.

$x'(t) = -\sin(t)= 0$ per $t=0 \vee t=\pi$

$y'(t) = \cos(t)= 0$ per $t=\frac{\pi}{2}$

non avendo punti dove si annullano in comune, la curva è regolare.
</details>



## Esercizio 2
Si consideri la curva $\gamma$ di equazioni:

$$
\begin{cases}
    x(t)=t^2\\
    y(t)=t^3
\end{cases}
\quad
t\in[-2,1]
$$

1. $\gamma$ è una curva semplice?
2. $\gamma$ è una curva regolare? 

<details>
<summary>Soluzione</summary>
#### Punto 1
Consideriamo due generici punti $t_1, t_2 \in [-2,1]$ e poniamo a sistema le equazioni per trovare le intersezioni:
$$
\begin{cases}
    t_1^2=t_2^2\\
    t_1^3=t_2^3
\end{cases}
\to
\begin{cases}
    t_1=\pm t_2\\
    t_1=t_2
\end{cases}
$$
che ha come unica soluzione $t_1=t_2$, quindi la curva è semplice, non avendo intersezioni per $t_1 \neq t_2$.

#### Punto 2
Andiamo a calcolare le derivate prime:
$$
\begin{align*}
    x'(t)&=2t\\
    y'(t)&=3t^2
\end{align*}
$$

E valutiamo se esiste $t\in[-2,1]$ che le annulla entrambe:
$$
\begin{cases}
    2t=0\\
    3t^2=0
\end{cases}
$$

che ha come soluzione $t=0$, quindi la curva non è regolare.
</details>



## Esercizio 3
Si consideri la curva $\gamma$ di equazioni:

$$
\begin{cases}
    x(t)=t^3 + t^2\\
    y(t)=t^3 - t
\end{cases}
\quad
t\in[-2,1]
$$

1. $\gamma$ è una curva semplice?
2. $\gamma$ è una curva regolare?

<details>
<summary>Soluzione</summary>
#### Punto 1

Consideriamo due generici punti $t_1, t_2 \in [-2,1]$ tali che $t_1 \neq t_2$ e poniamo a sistema le equazioni per trovare le intersezioni:

$
\begin{cases}
    t_1^3 + t_1^2 = t_2^3 + t_2^2\\
    t_1^3 - t_1 = t_2^3 - t_2
\end{cases}
\to
\begin{cases}
    (t_1-t_2)(t_1^2+t_1t_2+t_2^2)=-(t_1+t_2)(t_1-t_2)\\
    (t_1-t_2)(t_1^2+t_1t_2+t_2^2) = t_1 - t_2
\end{cases}
$

che possiamo semplificare dividendo per $t_1-t_2$, poichè per ipotesi $t_1 \neq t_2$ e dunque $t_1 - t_2 \neq 0$. Si ottiene:

$
\begin{cases}
    t_1^2+t_1t_2+t_2^2=-(t_1+t_2)\\
    t_1^2+t_1t_2+t_2^2 = 1
\end{cases}
\to
\begin{cases}
    t_1=-1-t_2\\
    t_2(t_2 +1) = 0
\end{cases}
$

Che ha come soluzioni

$$
\begin{cases}
    t_1=-1\\
    t_2=0
\end{cases}
\quad
\begin{cases}
    t_1=0\\
    t_2=-1
\end{cases}
$$

La curva quindi non è semplice ma ha invece un punto di intersezione. Ricordando le equazioni parametriche che descrivono $\gamma$:
$$
\begin{cases}
    x(t)=t^3 + t^2\\
    y(t)=t^3 - t
\end{cases}
$$

si verifica facilmente che l'intersezione avviente nel punto $(0,0)$.


<GeoGebraApplet id="applet-3" filename="es3.ggb"/>

#### Punto 2
Andiamo a calcolare le derivate prime:
$$
\begin{align*}
    x'(t)&=3t^2 + 2t\\
    y'(t)&=3t^2 - 1
\end{align*}
$$

E valutiamo se esiste $t\in[-2,1]$ che le annulla entrambe:
$$
\begin{cases}
    3t^2 + 2t=0\\
    3t^2 - 1=0
\end{cases}
\to
\begin{cases}
    t(3t + 2)=0\\
    t = \pm\frac{1}{\sqrt{3}}
\end{cases}
$$

che non ha soluzioni, la curva è quindi regolare.
</details>