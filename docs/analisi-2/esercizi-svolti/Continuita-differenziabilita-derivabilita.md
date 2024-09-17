---
sidebar_position: 3
sidebar_label: Continuità, differenziabilità e derivabilità
---

import GeoGebraApplet from '@site/src/components/GeoGebraApplet';

# Esercizi sulla continuità, differenziabilità e derivabilità di una funzione a due variabili

## Esercizio 1

$$
f(x,y)=\begin{cases}
\frac{x^{2}y}{x^4+y^2} & \text{se } (x,y) \neq (0,0)\\
0 & \text{se } (x,y) = (0,0)
\end{cases}
$$

Dire se la funzione è continua, derivabile e differenziabile nell'origine.

<details>
<summary>Soluzione</summary>
#### Derivabilità
Calcoliamo le componenti del gradiente, ovvero le derivate parziali di $f$ nell'origine:
- $f'_x f(0,0) = \lim_{h \to 0} \frac{f(h,0)-f(0,0)}{h}
    =\lim_{h \to 0} \frac{h^2 0}{h^5} = 0$
- $f'_y f(0,0) = \lim_{k \to 0} \frac{f(0,k)-f(0,0)}{k}
    =\lim_{k \to 0} \frac{0k}{k^3} = 0$

Le due derivate esistono finite e coincidono, dunque nel punto $(0,0)$ la funzione è derivabile.

Nota bene: non abbiamo determinato che le derivate 
parziali sono continue nell'origine, ma solo il loro valore nel punto $(0,0)$.

#### Continuità
Calcoliamo il limite della funzione in $(0,0)$:

$\lim_{(x,y) \to (0,0)} f(x,y) = \lim_{(x,y) \to (0,0)} \frac{x^{2}y}{x^4+y^2}$

Studiamo le restrizioni:
- per $y=0$ si ha $\lim_{x \to 0} \frac{x^{2}0}{x^4+0} = 0$
- per $x=0$ si ha $\lim_{y \to 0}  \frac{0y}{0+y^2}= 0$
- per $y=x^2$ si ha $\lim_{x \to 0} \frac{x^{2}x^2}{x^4+x^4} = \lim_{x \to 0} \frac{x^{4}}{2x^{4}} = \frac{1}{2}$

Esiste quindi un cammino per cui il limite non è nullo, dunque la funzione non è continua nell'origine.

#### Differenziabilità
Poichè la funzione non è continua nell'origine, non può essere differenziabile in $(0,0)$.
</details>



## Esercizio 2

$$
f(x,y)=\begin{cases}
\frac{x^3+y^3}{\left\lvert x \right\rvert + \left\lvert y \right\rvert} & \text{se } (x,y) \neq (0,0)\\
0 & \text{se } (x,y) = (0,0)
\end{cases}
$$

Dire se la funzione è continua, derivabile e differenziabile nell'origine.

<details>
<summary>Soluzione</summary>
#### Continuità
Calcoliamo il limite della funzione in $(0,0)$:

$\lim_{(x,y) \to (0,0)} f(x,y) = \lim_{(x,y) \to (0,0)} \frac{x^3+y^3}{\left\lvert x \right\rvert + \left\lvert y \right\rvert}$

Utilizziamo le coordinate polari, ponendo $x=\rho \cos(\theta) \,$ e $\, y=\rho \sin(\theta)$:

$\lim_{\rho \to 0} \frac{\rho^3(\cos^3(\theta)+\sin^3(\theta))}{\rho(\left\lvert \cos(\theta) \right\rvert + \left\lvert \sin(\theta) \right\rvert)} 
= \lim_{\rho \to 0} \frac{\rho^2(\cos^3(\theta)+\sin^3(\theta))}{\left\lvert \cos(\theta) \right\rvert + \left\lvert \sin(\theta) \right\rvert}
= 0 = f(0,0)$

La funzione è continua nell'origine.

#### Derivabilità
Calcoliamo la derivata direzionale di $f$ in $(0,0)$ per un generico versore $\vec{u}=(a,b)$

$f'_{\vec{u}} (0,0) = \lim_{h \to 0} \frac{f(ah,bh) - f(0,0)}{h} 
= \lim_{h \to 0} \frac{h^3(a^3+b^3)}{h \left\lvert h \right\rvert (\left\lvert a \right\rvert + \left\lvert b \right\rvert)}
= \lim_{h \to 0} \frac{ \left\lvert h \right\rvert (a^3+b^3)}{\left\lvert a \right\rvert + \left\lvert b \right\rvert} = 0$

La derivata direzionale esiste e vale $0$ per ogni versore $\vec{u}$, in particolare $f'_x (0,0) = f'_y (0,0)= 0$.
la funzione è quindi derivabile nell'origine.


#### Differenziabilità
Poichè la funzione è sia continua che derivabile nell'origine, per determinare la differenziabilità dobbiamo
applicarne la definizione.

$\lim_{(h,k) \to (0,0)} \frac{f(h,k) - f(0,0) - (h \cdot f'_x(0,0) + k \cdot f'_y(0,0))}{\left\lVert (h,k) \right\rVert}$

$= \lim_{(h,k) \to (0,0)} \frac{f(h,k)}{\sqrt{h^2 + k^2}} 
=\lim_{(h,k) \to (0,0)} \frac{h^3 + k^3}{\left\lvert h \right\rvert + \left\lvert k \right\rvert} \cdot \frac{1}{\sqrt{h^2 + k^2}}$

che risolviamo con le coordinate polari, ponendo $h=\rho \cos(\theta) \,$ e $\, k=\rho \sin(\theta)$:

$= \lim_{\rho \to 0}\frac{\rho^3}{\left\lvert \rho \right\rvert} \frac{1}{\left\lvert \rho \right\rvert} \frac{\cos^3(\theta)+\sin^3(\theta)}{\left\lvert \cos(\theta) \right\rvert + \left\lvert \sin(\theta) \right\rvert} = 0$

Il limite risulta $0$, dunque la funzione è differenziabile nell'origine. 
</details>

## Esercizio 3

$$
f(x,y)=\begin{cases}
\frac{x \ln(1+y)}{\sqrt{x+y}} & \text{se } x>0 \land y>0\\
y^{2} & \text{altrimenti}
\end{cases}
$$

1. Studiare i punti di continuità di $f$.
2. Dire se la funzione è differenziabile nei punti $(0,1)$ e $(1,0)$.

## Esercizio 4

$$
f(x,y)=\begin{cases}
\frac{x^{2}y}{x^{2}+y^{2}} & \text{se } (x,y)\neq(0,0)\\
0 & \text{se } (x,y)=(0,0)
\end{cases} 
$$

Calcolare le derivate direzionali di $f$ nel punto $(0,0)$. Dire se la funzione è differenziabile nell'origine.

<details>
<summary>Soluzione</summary>
#### Derivata orizzontale

##### Osservazioni
1. Se $\left\lVert v \right\rVert = 1$ vale $D_v f(0,0) =(\nabla f(0,0),v)$. Tuttavia,
possiamo utilizzare questa formula solo quando la funzione ammette derivate parziali nell'origine, ovvero quando
il gradiente della funzione $f(x,y)$ nell'origine $\nabla f(0,0)$ esiste.

2. $D_v f(0,0) =(\nabla f(0,0),v)$ è lineare in $v$: se $v$ e $w$ sono vettori di lunghezza
unitaria, $\left\lVert v \right\rVert = \left\lVert w \right\rVert = 1$, e chiamo 
$\widetilde{v+w}  = \frac{v+w}{\left\lVert v + w \right\rVert }$ allora
$$
\begin{align*}
    D_{\widetilde{v+w}} f(0,0) &= (\nabla f(0,0),\frac{v+w}{\left\lVert v + w \right\rVert}) \\
    &= \frac{1}{\left\lVert v+w \right\rVert }\left( (\nabla f(0,0),v)+(\nabla f(0,0),w)\right) \\
    &= \frac{1}{\left\lVert v+w \right\rVert } \left( D_v f(0,0) + D_w f(0,0) \right)
\end{align*}
$$

##### Calcolo delle derivate direzionali

Sia $v=(v_1,v_2) \; \left\lVert v \right\rVert = 1$, per definizione:
$$
\begin{align*}
    D_v f(0,0) &= \lim_{t \to 0} \frac{f(tv_1,tv_2)-f(0,0)}{t}\\
    &= \lim_{t \to 0} \frac{t^{3}v_1^{2}v_2}{t^{3}(v_1^{2}+v_2^{2})}\\
    &= \lim_{t \to 0} \frac{v_1^{2}v_2}{v_1^{2}+v_2^{2}} = \frac{v_1^{2}v_2}{v_1^{2}+v_2^{2}} \\ 
\end{align*}
$$

##### osservazione
$D_v f(0,0) = \frac{v_1^{2}v_2}{v_1^{2}+v_2^{2}} = \frac{v_1^{2}v_2}{\left\lVert v \right\rVert^{2}} = v_1^{2}v_2$
questa espressione non è lineare in $v$.

##### Conclusione
La funzione $f(x,y)$ non ammette derivate parziali nell'origine.

#### differenziabilità in $(0,0)$
La funzione $f(x,y)$ non è differenziabile nell'origine, poiché non ammette derivate parziali in $(0,0)$.
</details>




## Esercizio 5

$$
f(x,y)=\begin{cases}
    x\sqrt{y}-x^2 & \text{se } y \gt x^2\\
    y \sqrt{x^2-y} & \text{se } y \leq x^2
\end{cases}
$$

<details>
<summary>Soluzione</summary>
Nota: $f(x,y)$ è da due rami:
1. Un ramo definito nell'insieme $D^+=\{(x,y)\in \mathbb{R}^{2}\vert y \gt x^2\}$
2. Un ramo definito nell'insieme $D^-=\{(x,y)\in \mathbb{R}^{2}\vert y \leq x^2\}$

#### Continuità
Il primo ramo è continuo su tutto $D^+$, il secondo ramo è continuo su tutto $D^-$.
Sia $f(p)$ con $p \in \{(x,y) \in \mathbb{R}^2 \vert y=x^2\}$, $p$ ha dunque forma $(t,t^2)$, si ha $f(p) = 0$.

Dobbiamo verificare che
$$ 
    \lim_{(x,y) \to (t,t^2)} f(x,y) = f(t,t^2) = 0 \quad \text{con } (x,y) \in D^+
$$

Si ha dunque
$$
\lim_{(x,y) \to (t,t^2)} x \sqrt{y} -x^2= t\sqrt{t^2}-t^2 = \begin{cases}
    0 & \text{se } t \gt 0\\
    -2t^{2} & \text{se } t \lt 0
\end{cases}
$$

Dunque la funzione è continua nel primo ramo, mentre è discontinua nel secondo ramo.
In sintesi, la funzione è continua in tutto $\mathbb{R}^2$ tranne che sulla parabola $y=x^2$, in simboli
$$\mathbb{R^2} \setminus \{ (x,y) \in \mathbb{R}^2 \vert y = x^2 \land x \lt 0 \}$$

#### Derivabilità
1. Il primo ramo è derivabile in $y \gt x^2$, il suo insieme di definizione. 
2. Il primo ramo è derivabile in $y \lt x^2$, il suo insieme di definizione. 

Andiamo a studiare la derivabilità nell'insieme di raccordo $y=x^2$.

$\{y=x^2\} = \{ 0,0 \} \cup \{ y=x^2 \land x \lt 0\} \cup \{ y=x^2 \land x \gt 0 \}$.

In $(0,0)$ dobbiamo calcolare $f_x \vert_{(0,0)}$ e $f_y \vert_{(0,0)}$,
se queste due quantità esistono allora $f$ è derivabile in $(0,0)$.

$f_x \vert_{(0,0)}= Df(x,0) = D 0 = 0$ esiste.

$f_y \vert_{(0,0)}= Df(0,y)$, sapendo che
$$
\begin{align*}
    f(0,y) &= 0 &\text{ per } y \gt 0\\
    &=y\sqrt{-y} &\text{ per }y \leq 0 \\
\end{align*}
$$

$f_y \vert_{(0,0)}= Df(0,y) = D \begin{cases}
    0 & \text{per } y \gt 0\\
    y\sqrt{-y} & \text{per } y \leq 0
    \end{cases}$

$= \lim_{h \to 0} \frac{f(0,h)-f(0,0)}{h} = \lim_{h \to 0} \frac{f(0,h)}{h}= \begin{cases}    
    \lim_{h \to 0^+} \frac{f(0,h)}{h} = \lim_{h \to 0^+} \frac{0}{h} = 0 \\
    \lim_{h \to 0^-} \frac{f(0,h)}{h} = \lim_{h \to 0^-} \frac{h\sqrt{-h}}{h} = 0
\end{cases}$
I due limiti esistono e sono uguali, dunque $f_y \vert_{(0,0)}$ esiste.

In conclusione, $f$ è derivabile in $(0,0)$ e vale $\partial_x f(0,0) = \partial_y f(0,0) = 0$.

Studiamo ora la derivabilità in $\{ y=x^2 \land x \lt 0 \}$.
un punto generico di questa curva è $(t,t^2)$ con $t \lt 0$.

Derivata rispetto a $x$:

$\lim_{h \to 0^+} \frac{f(t+h,t^2)-f(t,t^2)}{h}= \lim_{h \to 0^+} \frac{(t+h)\sqrt{t^2}-(t+h)^2}{h}=
\lim_{h \to 0^+} \frac{-(t+h)(2t+h)}{h}= \frac{-t \cdot 2t}{0}= - \infty$

Dunque la derivata rispetto a $x$ non esiste. $f$ non è derivabile in $\{ y=x^2 \land x \lt 0 \}$.

Studiamo per ultima la derivabilità in $\{ y=x^2 \land x \gt 0 \}$.
un punto generico di questa curva è $(t,t^2)$ con $t \gt 0$.

Derivata rispetto a $x$:

$\lim_{h \to 0^+} \frac{f(t+h,t^2)-f(t,t^2)}{h} = \lim_{h \to 0^+} \frac{t^2 \sqrt{t^2=2th=h^2} - 0}{h}
= \lim_{h \to 0^+} t^2 \sqrt{\frac{2t}{h}+1} = + \infty$

Dunque la derivata rispetto a $x$ non esiste. $f$ non è derivabile in $\{ y=x^2 \land x \gt 0 \}$.

In conclusione, la funzione $f$ è derivabile in $\mathbb{R^2} \setminus \{ y=x^2 \} \cup \{ (0,0) \}$.

#### differenziabilità

Nota: Se $f$ è differenziabile in un punto $p$ allora $f$ ammette derivate parziali in $p$.

$f$ può essere differenziabile solo in:
1. $\mathbb{R^2} \setminus \{ y=x^2 \}$
2. $(0,0)$

Sappiamo che:
1. In questo insieme la funzione è di classe $C^1$. Dal teorema del differenziale totale sappiamo che $f$ è differenziabile in questo insieme.

Studiamo la differenziabilità in $(0,0)$.

$$
\lim_{(h,k) \to (0,0)} \frac{f(h,k)-f(0,0)-(\nabla f(0,0),(h,k))}{\sqrt(h^2+k^2)} = 0
$$

Se è vero, allora $f$ è differenziabile in $(0,0)$.

a. in $D^+$, $\lim_{(h,k) \to (0,0)} \frac{h\sqrt{k}-h^2-0-0}{\sqrt{h^2+k^2}} =\lim_{(h,k) \to (0,0)} \frac{h\sqrt{k}-h^2}{\sqrt{h^2+k^2}}$

$\left\lvert \frac{h\sqrt{k}-h^2}{\sqrt{h^2+k^2}} \right\rvert \leq \frac{\left\lvert h \right\rvert \sqrt{h} }{\sqrt{h^2+k^2}} + \frac{\left\lvert h \right\rvert^2}{\sqrt{h^2 + k^2}}$

Nota: $\frac{\left\lvert h \right\rvert}{\sqrt{h^2+k^2}} = \frac{\sqrt{h^2}}{\sqrt{h^2 + k^2}} = \sqrt{\frac{h^2}{h^2+k^2}} \leq 1$

Dunque

$\left\lvert \frac{h\sqrt{k}-h^2}{\sqrt{h^2+k^2}} \right\rvert \leq \frac{\left\lvert h \right\rvert \sqrt{h} }{\sqrt{h^2+k^2}} + \frac{\left\lvert h \right\rvert^2}{\sqrt{h^2 + k^2}} \leq \sqrt(k) + \left\lvert h \right\rvert $

Si ha dunque $\lim_{(h,k) \to (0,0)} \frac{h\sqrt{k}-h^2-0-0}{\sqrt{h^2+k^2}} =\lim_{(h,k) \to (0,0)} \frac{h\sqrt{k}-h^2}{\sqrt{h^2+k^2}} = 0$

b. in $D^-$, $\lim_{(h,k) \to (0,0)} \frac{k\sqrt{h^2-k}}{\sqrt{h^2+k^2}}$

Nota: $\left\lvert \frac{k\sqrt{h^2-k}}{\sqrt{h^2+k^2}} \right\rvert = \frac{\left\lvert k \right\rvert \sqrt{h^2 - k}}{\sqrt{h^2+k^2}} \leq \sqrt{h^2 - k}$

Si conclude come nel caso a.
Dunque $f$ è differenziabile in $(0,0)$.
</details>




## Esercizio 6

Studiare continuità e differenziabilità in $(0,0)$ della funzione $f: \mathbb{R} \to \mathbb{R}$

$$
f(x,y)=\begin{cases}
    \frac{y(1-cos(xy))}{\log(1+x^4+y^4)} & \text{se } (x,y) \neq (0,0)\\
    0 & \text{se } (x,y) = (0,0)
    \end{cases}
$$

<details>
<summary>Soluzione</summary>

<GeoGebraApplet id="applet-6" filename="/geogebra/analisi-2/esercizi-svolti/continuita-differenziabilita-derivabilita/es6.ggb" />

#### Continuità
Al fine di determinare la continuità della funzione $f(x,y)$ in $(0,0)$, calcoliamo il limite della funzione in $(0,0)$:

$$
\lim_{(x,y) \to (0,0)} \frac{y(1-cos(xy))}{\log(1+x^4+y^4)}
$$

osserviamo che per $xy=0 \land x \neq y$ si ha $1-cos(xy)=0$, dunque la funzione è nulla.

Poniamo $xy \neq 0$, possiamo ora sfruttare i limiti notevoli:
$$
\begin{align*}
    \lim_{t \to 0}  \frac{1-\cos(t)}{t^2} &= \frac{1}{2}\\
    \lim_{t \to 0} \frac{\log(1+t)}{t} &= 1
\end{align*}
$$

Riscrivendo il limite come:

$
\lim_{(x,y) \to (0,0)} \frac{y(1-cos(xy))x^2y^2}{x^2y^2} \cdot \frac{x^4+y^4}{\log(1+x^4+y^4)(x^4+y^4)} = 
\lim_{(x,y) \to (0,0)} \frac{x^2y^3}{2(x^4+y^4)} 
$

procediamo a risolverlo con le coordinate polari:

$x=\rho \cos(\theta) \,$ e $\, y=\rho \sin(\theta)$

$
\lim_{\rho \to 0} \frac{\rho^5(\cos^2\theta \sin^3\theta)}{2\rho^4(\sin^4\theta + \cos^4\theta)}=
\lim_{\rho \to 0} \frac{\rho(\cos^2\theta \sin^3\theta)}{2(\sin^4\theta + \cos^4\theta)} = 0
$

Si conclude che

$$
\lim_{(x,y) \to 0} f(x,y) = 0 = f(0,0) 
$$

Dunque la funzione è continua in $(0,0)$.

#### Derivate parziali
Per definizione

$
f'_x (0,0) = \lim_{h \to 0} \frac{f(h,0)-f(0,0)}{h} = 0
$

$
f'_y (0,0) = \lim_{k \to 0} \frac{f(0,k)-f(0,0)}{k} = 0
$

Le due derivate parziali esistono e sono nulle nell'origine.

#### Differenziabilità
Per determinare la differenziabilità della funzione $f(x,y)$ in $(0,0)$, siamo dunque costretti a verificare che:

$
\lim_{(x,y) \to (0,0)} \frac{f(x,y)-f(0,0)-f'_x(0,0)x-f'_y(0,0)y }{\sqrt{x^2+y^2}} = 0
$

Che si semplifica in:

$
= \lim_{(x,y) \to (0,0)} \frac{f(x,y)}{\sqrt{x^2+y^2}} = \lim_{(x,y) \to (0,0)} \frac{y(1-cos(xy))}{\log(1+x^4+y^4)\sqrt{x^2+y^2}}
$

applicando i limiti notevoli come in precedenza, si ha:

$
\lim_{(x,y) \to (0,0)} \frac{x^2y^3}{2(x^4+y^4)\sqrt{x^2+y^2}}
$

che risolviamo con le coordinate polari, ricordando che $\rho = \sqrt{x^2+y^2}$
$
\lim_{\rho \to 0} \frac{\rho^5(\cos^2\theta \sin^3\theta)}{2\rho^4(\sin^4\theta + \cos^4\theta)\rho} =
\lim_{\rho \to 0} \frac{\cos^2\theta \sin^3\theta}{2(\sin^4\theta + \cos^4\theta)} = \frac{\cos^2\theta \sin^3\theta}{2(\sin^4\theta + \cos^4\theta)}
$

Non riusciamo a concludere che il limite è nullo in quanto dipende da $\theta$. Proviamo a dimostrare invece che il limite è sempre $\neq 0$.

Scegliamo la semiretta $R = \{ (t,t): t \geq 0\}$, e valutiamo il limite lungo questa restrizione:

$
\lim_{t \to 0^+} \frac{t^2t^3}{2(t^4+t^4)\sqrt{t^2 + t^2}} = \lim_{t \to 0^+} \frac{t^5}{4 t^5 \sqrt{2}} = \frac{1}{4\sqrt{2}} \neq 0
$

come volevasi dimostrare, la funzione $f(x,y)$ non è differenziabile in $(0,0)$.
</details>


## Esercizio 7

$$
f(x,y)=\begin{cases}
    \frac{(e^{xy}-1)(1-\cos(xy))}{x^4+y^4} & \text{se } (x,y) \neq (0,0)\\
    0 & \text{se } (x,y) = (0,0)
    \end{cases}
$$

1. Dove la funzione $f$ è continua?
2. Calcolare, dove esistono, le derivate parziali di $f$.
3. Qual è il più grande aperto di $\mathbb{R}^2$ in cui $f$ è di classe $C^1$?
4. Calcolare il gradiente di $f$ nei punti in cui $f$ è differenziabile.

<details>
<summary>Soluzione</summary>
#### Punto 1
La funzione $f$ è continua in ogni $(x,y) \neq (0,0)$ perchè prodotto e composizione di funzioni continue.

Se $xy=0$, la funzione è nulla.
Per determinare la continuità della funzione $f(x,y)$ con $xy \neq 0$ in $(0,0)$, calcoliamo il limite della funzione in $(0,0)$:

$$
\lim_{(x,y) \to 0} \frac{(e^{xy}-1)(1-\cos(xy))}{x^4+y^4}
$$

Ricordando i limiti notevoli:

$$
\lim_{t \to 0} \frac{e^{t}-1}{t} = 1
$$

$$
\lim_{t \to 0} \frac{1-\cos(t)}{t^2} = \frac{1}{2}
$$

Il limite diventa:

$$
\lim_{(x,y) \to 0} \frac{x^3y^3}{2(x^4+y^4)} = 0
$$

continua....

</details>