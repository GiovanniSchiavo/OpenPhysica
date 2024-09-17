---
sidebar_position: 4
sidebar_label: Massimi e minimi di funzioni a due variabili
---

import GeoGebraApplet from '@site/src/components/GeoGebraApplet';




# Esercizi su massimi e minimi di funzioni a due variabili

## Esercizio 1
Sia $f: \mathbb{R^3} \to \mathbb{R}$ una funzione tale che
$$
f(x,y,z) = x^3 + y^3 + 5xy - z^2 + 2z
$$

Determinare gli eventuali punti stazionari e la loro natura.

<details>
<summary>Soluzione</summary>

Osserviamo che $f$ è una funzione polinomiale, quindi è continua e differenziabile su tutto $\mathbb{R}^3$.

#### Derivate parziali
Calcoliamo le derivate parziali di $f$:

$$
\begin{align*}
    \partial_x f &= 3x^2 + 5y\\
    \partial_y f &= 3y^2 + 5x\\
    \partial_z f &= -2z + 2
\end{align*}
$$

#### Punti stazionari
Affinche un punto $(x, y, z)$ sia stazionario, le derivate parziali devono annullarsi:

$
\begin{cases}
    3x^2 + 5y = 0\\
    3y^2 + 5x = 0\\
    -2z + 2 = 0
\end{cases}
\to
\begin{cases}
    y = - \frac{3x^2}{5}\\
    3y^2 + 5x = 0\\
    z=1
\end{cases}
$

Sostituiamo $y$ nella seconda equazione:

$$
\begin{align*}
    0 &= 3 \big(-\frac{3x^2}{5}\big)^2 + 5x\\
    &= \frac{27}{25}x^4 + 5x\\
    &= x\bigg(\frac{27}{25}x^3 + 5\bigg)
\end{align*}
$$

che ha come soluzioni $x = 0$ e $x = -\sqrt[3]{\frac{125}{27}} = - \frac{5}{3}$.

Andando a sostituire i valori di $x$ trovati nel sistema troviamo $(0,0,1)$ e $(-\frac{5}{3}, -\frac{5}{3}, 1)$,
che sono i punti stazionari della funzione.

#### Determinazione della natura dei punti
Andiamo a studiare la matrice hessiana di $f$, ricordando che

$$
\begin{align*}
    \partial_x f &= 3x^2 + 5y\\
    \partial_y f &= 3y^2 + 5x\\
    \partial_z f &= -2z + 2
\end{align*}
$$

sono le derivate di $f$. Si ha quindi:

$$
H f(x,y,z)= 
\begin{pmatrix}
    6x & 5 & 0\\
    5 & 6y & 0\\
    0 & 0 & -2
\end{pmatrix}
$$

Andiamo quindi a valutarla nel punto $(0,0,1)$:
$$
H f(0,0,1) =
\begin{pmatrix}
    0 & 5 & 0\\
    5 & 0 & 0\\
    0 & 0 & -2
\end{pmatrix}
$$

Troviamo ora i suoi autovalori:

$
\det(H f(0,0,1) - \lambda I) = 
\det\begin{pmatrix}
    -\lambda & 5 & 0\\
    5 & -\lambda & 0\\
    0 & 0 & -2 -\lambda
\end{pmatrix}
= 0
$

Da qui si ottiene il polinomio caratteristico:

$$
(-2-\lambda)(\lambda^2 - 25) = 0
$$

che ha come radici $\lambda_1 = -2$, $\lambda_2 = 5$ e $\lambda_3 = -5$.

la matrice hessiana è indefinita, poichè ha autovalori di segno diverso, diversi da zero, dunque il punto $(0,0,1)$ è un punto di sella.

Andiamo ora a valutare la matrice nel punto $(-\frac{5}{3}, -\frac{5}{3}, 1)$:
$$
H f(-\frac{5}{3}, -\frac{5}{3}, 1) =
\begin{pmatrix}
    -10 & 5 & 0\\
    5 & -10 & 0\\
    0 & 0 & -2
\end{pmatrix}
$$

Troviamo ora i suoi autovalori:

$
\det(H f(0,0,1) - \lambda I) = 
\det\begin{pmatrix}
    -10-\lambda & 5 & 0\\
    5 & -10-\lambda & 0\\
    0 & 0 & -2 -\lambda
\end{pmatrix}
= 0
$

Da qui si ottiene il polinomio caratteristico:

$$
(-2-\lambda)((-15-\lambda)^2 - 25) = 0\\
(-2-\lambda)(\lambda^2 + 20\lambda + 75) = 0 
$$

che ha come radici $\lambda_1 = -2$, $\lambda_2 = -5$ e $\lambda_3 = -15$.

la matrice hessiana è definita negativa, poichè ha tutti e tre gli autovalori di segno negativo, dunque il punto $(-\frac{5}{3}, -\frac{5}{3}, 1)$ è un punto di massimo locale.
</details>

## Esercizio 2

$$
f(x,y) = x^3 + 2y^3 - 3x - 3y^2
$$

Determinare gli eventuali punti stazionari e la loro natura.

<details>
<summary>Soluzione</summary>


#### Insieme di definizione
La funzione $f$ è definita su tutto $\mathbb{R}^2$.

#### Calcolo dei punti stazionari
Procediamo a determinare i punti stazionari annullando il gradiente di $f$:

$$\nabla f(x,y)= (f'_x,f'_y)=0$$

Bisogna dunque risolvere il sistema:

$
\begin{cases}
f'_x = 3x^2 - 3 = 0\\
f'_y = 6y^2 -6y = 0
\end{cases}
\to
\begin{cases}
(x+1)(x-1) = 0\\
y(y-1) = 0
\end{cases}
$

Otteniamo i punti stazionari $A = (-1,0)$, $B = (-1,1)$, $C = (1,0)$ e $D = (1,1)$ soluzioni del sistema.

#### Determinazione della natura dei punti
Scriviamo la matrice hessiana di $f$:

$$
H (x,y) = \begin{pmatrix}
    6x & 0\\
    0 & 12y - 6
\end{pmatrix}
$$

valutiamo la matrice nei vari punti stazionari:

- $A$:  $\left\lvert H(-1,0) \right\rvert = \left\lvert \begin{matrix} \textcolor{red}{-6} & 0 \\ 0 & -6 \end{matrix} \right\rvert \gt 0$ punto di massimo relativo
- $B$:  $\left\lvert H(-1,1) \right\rvert = \left\lvert \begin{matrix} \textcolor{red}{-6} & 0 \\ 0 & 6 \end{matrix} \right\rvert \lt 0$ punto di sella
- $C$:  $\left\lvert H(1,0) \right\rvert = \left\lvert \begin{matrix} 6 & 0 \\ 0 & -6 \end{matrix} \right\rvert \lt 0$ punto di sella
- $D$:  $\left\lvert H(1,1) \right\rvert = \left\lvert \begin{matrix} \textcolor{red}{6} & 0 \\ 0 & 6 \end{matrix} \right\rvert \gt 0$ punto di minimo relativo

Abbiamo utilizzato il criterio di Sylvester, che dice che:

- La matrice è **definita positiva** se tutti i minori principali (determinanti delle sotto-matrici principali) sono **positivi**.
- La matrice è **definita negativa** se i minori principali hanno segni alternati: il primo è **negativo**, il secondo è **positivo**, il terzo è **negativo**, e così via.
- La matrice è **indefinita** se uno o più minori principali hanno segni differenti (cioè, non tutti positivi o non alternati secondo il criterio per le matrici definite negative).
- La matrice è **semidefinita** (positiva o negativa) se i minori principali sono tutti non negativi o tutti non positivi, ma almeno uno è uguale a zero.

I minori principali si ottengono calcolando i determinanti delle sotto-matrici ottenute prendendo le prime $k \times k$ righe e colonne della matrice Hessiana, per $k = 1, 2, \dots, n$, dove $n$ è la dimensione della matrice.

</details>


## Esercizio 3

$$
f(x,y) = x^3y^2 - x^2y^3
$$

Determinare gli eventuali punti stazionari e la loro natura.

<details>
<summary>Soluzione</summary>
<GeoGebraApplet id="applet-2" filename="es2.ggb" />

#### Insieme di definizione
La funzione $f$ è definita su tutto $\mathbb{R}^2$.

#### Calcolo dei punti stazionari
Procediamo a determinare i punti stazionari annullando il gradiente di $f$:

$$\nabla f(x,y)= (f'_x,f'_y)=0$$

Bisogna dunque risolvere il sistema:

$
\begin{cases}
f'_x = 3x^2y^2 - 2xy^3 = 0\\
f'_y = 2x^3y - 3x^2y^2 = 0
\end{cases}
\to
\begin{cases}
xy^2(3x-2y) = 0\\
x^2y(2x-3y) = 0
\end{cases}
$

Si nota che tutti i punti del tipo $(0,y)$ e $(x,0)$ sono punti stazionari. 
Inoltre, risolvendo il sistema si ottiene il punto $A = (0,0)$ che già appartiene
ai due luoghi geometrici.

#### Determinazione della natura dei punti
Scriviamo la matrice hessiana di $f$:

$$
H (x,y) = \begin{pmatrix}
    6xy^2 - 2y^3 & 6x^2y - 6xy^2\\
    6x^2y - 6xy^2 & 2x^3 - 6x^2y
\end{pmatrix}
$$

valutiamo la matrice nei vari punti stazionari:

- $(0,y)$:  $\left\lvert H(0,y) \right\rvert = \left\lvert \begin{matrix} -2y^3 & 0\\ 0 & 0 \end{matrix} \right\rvert = 0$ 
- $(x,0)$:  $\left\lvert H(x,0) \right\rvert = \left\lvert \begin{matrix}  0 & 0 \\ 0 & 2x^3 \end{matrix} \right\rvert = 0$ 

La matrice è semidefinita in entrambi i casi, quindi non ci torna utile.

#### Linee di livello zero
Iniziamo fattorizzando la funzione:

$f(x,y) = x^3y^2 - x^2y^3 = x^2y^2(x-y) \gt 0$

le linee di livello zero, ovvero tutti i punti del piano dove la funzione assume il valore $0$, risultano:
- $x = 0$
- $y = 0$
- $x = y$

Dal punto precedente, sappiamo che i punti $(0,y)$ e $(x,0)$ sono punti stazionari, e inoltre sono i generici punti appartenenti alle linee di livello zero, $y = 0$ e $x = 0$.
Sappiamo inoltre che la funzione è positiva per $x-y \gt 0,  x \gt y$, ovvero a destra della retta $x = y$ bisettrice del primo e terzo quadrante.

Da queste considerazioni possiamo concludere che tutti i punti delle linee di livello zero a destra della retta $x=y$ sono punti di minimo relativo, infatti
sono punti stazionari e sono punti dove la funzione ha valore $0$ che è invece positiva nello spazio attorno, ovvero

$A= \{ (x,y) | x=0 \land y \lt 0 \} \cup \{ (x,y) | y=0 \land x \gt 0 \}$ è il luogo geometrico dei punti di minimo relativo.

Analogamente, tutti i punti delle linee di livello zero a sinistra della retta $x=y$ sono punti di massimo relativo, ovvero

$B= \{ (x,y) | x=0 \land y \gt 0 \} \cup \{ (x,y) | y=0 \land x \lt 0 \}$ è il luogo geometrico dei punti di massimo relativo.
 
Nell'origine, invece, la funzione assume valore $0$, e sappiamo essere un punto stazionario, e non essendo nè di massimo nè di minimo, è un punto di sella.

</details>


## Esercizio 4

Sia $f: \mathbb{R^2} \to \mathbb{R}$ una funzione tale che

$$
f(x,y) = \ln(2 + x^2 + y^2) -xy
$$

Determinare i punti stazionari e la loro natura.

<details>
<summary>Soluzione</summary>
#### Continuità
La funzione è continua e differenziabile su tutto $\mathbb{R}^2$ perchè somma e composizione di funzioni continue e differenziabili,
infatti l'argomento del logaritmo $2 + x^2 + y^2 \gt 0 \; \forall x,y \in \mathbb{R^2}$. 

#### Derivate parziali
Calcoliamo le derivate parziali di $f$:

$$
\begin{align*}
\partial_x f(x,y) &= \frac{2x}{2 + x^2 + y^2} -y\\
\partial_x f(x,y) &= \frac{2y}{2 + x^2 + y^2} -x
\end{align*}
$$

#### Punti stazionari
Affinche un punto $(x, y)$ sia stazionario, le derivate parziali devono annullarsi:

$
\begin{cases}
    \frac{2x}{2 + x^2 + y^2} -y = 0\\
    \frac{2y}{2 + x^2 + y^2} -x = 0
\end{cases}
\to
\begin{cases}
    2x = y(2 + x^2 + y^2) \\
    2y=x(2 + x^2 + y^2)
\end{cases}
$

Osserviamo che se $x=0$ allora anche $y=0$, e viceversa, dunque il punto $(0,0)$ è stazionario.

Consideriamo ora $x,y \neq 0$, possiamo quindi dividere la prima equazione per $y$ e la seconda per $x$, si ottiene:

$$
\begin{cases}
    \frac{2x}{y} = 2 + x^2 + y^2 \\
    \frac{2y}{x} = 2 + x^2 + y^2
\end{cases}
$$

ovvero $2x^2 = 2y^2$ da cui $x = \pm y$. Consideriamo i due casi:

$$
\begin{cases}
    x=y \\
    \frac{2y}{y} = 2 + 2y^2
\end{cases}
\to
\begin{cases}
    x=y \\
    2y^2 = 0
\end{cases}
$$

che ha come unica soluzione $x=y=0$, già trovato in precedenza e, inoltre, in disaccordo con l'ipotesi $x,y \neq 0$.

$$
\begin{cases}
    x=-y \\
    -\frac{2y}{y} = 2 + 2y^2 
\end{cases}
\to
\begin{cases}
    x=-y \\
    x^2 + 2 = 0 
\end{cases}
$$

che non ha soluzioni reali, dunque il punto $(0,0)$ è l'unico punto stazionario della funzione.

#### Determinazione della natura del punto stazionario
Ricordando le derivate parziali
$$
\begin{align*}
\partial_x f(x,y) &= \frac{2x}{2 + x^2 + y^2} -y\\
\partial_x f(x,y) &= \frac{2y}{2 + x^2 + y^2} -x
\end{align*}
$$

calcolando la matrice hessiana nell'origine si ottiene:

$$
H f(0,0)= 
\begin{pmatrix}
    1 & -1\\
    -1 & 1
\end{pmatrix}
$$

Che ha determinante $1 - 1 = 0$, ed è quindi indefinita, non possiamo perciò determinare la natura del punto stazionario con la matrice hessiana.

Andiamo allora a valutare la natura del punto in alcune restrizioni, sperando di poter dimostrare così che è un punto di sella. Consideriamo
la retta, passante per l'origine, $d_1 = \{(t,t):t \in \mathbb{R}\}$. La funzione, lungo questa restrizione, è

$$
\begin{align*}
    f_1(t) &= f(t,t)= \ln(2+2t^2)-t^2\\
    f'_1(t) &= \frac{4t}{2+2t^2} - 2t\\
    &= 2t\bigg(\frac{2}{2+2t^2}-1\bigg)\\
    &= 2t\frac{2-2-2t^2}{2+2t^2}\\
    &= \frac{-4t^3}{2+2t^2}
\end{align*}
$$ 

Studiando il segno della derivata, si nota che $f'_1(t) \gt 0 \; \forall t \lt 0$ e $f'_1(t) \lt 0 \; \forall t \gt 0$, ovvero la funzione $f(t)$ è crescente per $t \lt 0$ e decrescente $t \gt 0$.
Nella restrizione $d_1$ la funzione ha un massimo relativo in $(0,0)$.

Consideriamo ora la retta $d_2 = \{(t,-t):t \in \mathbb{R}\}$. La funzione, lungo questa restrizione, è:

$$
\begin{align*}
    f_2(t) &= f(t,-t)= \ln(2+2t^2) + t^2\\
    f'_1(t) &= \frac{4t}{2+2t^2} + 2t\\
    &= 2t\bigg(\frac{2}{2+2t^2}+1\bigg)
\end{align*}
$$ 

Studiando il segno della derivata, si nota che, al contrario, la funzione $f(t)$ è decrescente per $t \lt 0$ e crescente $t \gt 0$.
Nella restrizione $d_2$ la funzione ha un minimo relativo in $(0,0)$.

Se ne deduce quindi che, in generale, il punto $(0,0)$ è un punto di sella.

In questa rappresentazione grafica sono evidenziate le due restrizioni 
<GeoGebraApplet id="applet-4" filename="es4.ggb" />
</details>



## Esercizio 5
Sia data la funzione $f: \mathbb{R^2} \to \mathbb{R}$ definita da

$$
f(x,y) = 5(y^2 -x^2)\exp(x+y)
$$

1. Determinare i punti critici di $f$ e studiarne la natura.
2. Determinare, se esistono, i punti di massimo e minimo di $f$ su
$$
\begin{align*}
    A&= \{ (x,y) \in \mathbb{R^2} : \left\lvert y \right\rvert \leq \left\lvert x \right\rvert \leq \left\lvert 1 \right\rvert \}
    B&= \{ (x,y) \in \mathbb{R^2} : \left\lvert y \right\rvert \leq \left\lvert x \right\rvert\}
\end{align*}
$$

<details>
<summary>Soluzione</summary>
#### Continuità
La funzione è continua e differenziabile su tutto $\mathbb{R}^2$ perchè somma e composizione di funzioni continue e differenziabili.

#### Primo punto
Determiniamo innanzitutto il gradiente $\nabla f(x,y) = (\partial_x f(x,y),\partial_y f(x,y))$ della funzione:

$\partial_x f(x,y) = -10x\exp(x+y) + 5(y^2 - x^2)\exp(x+y)$

$\partial_y f(x,y) = 10y\exp(x+y) + 5(y^2 - x^2)\exp(x+y)$

Un punto $P$ è critico se vale $\nabla f(P) = 0$. Risolviamo il sistema:

$
\begin{cases}
    -10x\exp(x+y) + 5(y^2 - x^2)\exp(x+y)=0\\
    10y\exp(x+y) + 5(y^2 - x^2)\exp(x+y)=0
\end{cases}
$

Poichè $\exp(x+y) \neq 0 \; \forall x,y \in \mathbb{R}$, possiamo dividere entrambe le equazioni per $\exp(x+y)$ e otteniamo:

$
\begin{cases}
    -10x + 5(y^2 - x^2)=0\\
    10y + 5(y^2 - x^2)=0
\end{cases}
\to
\begin{cases}
    y^2 - x^2 =2x\\
    y^2 - x^2 =-2y
\end{cases}
\to
\begin{cases}
    y^2 - (-y)^2 =2(-y)\\
    x = -y
\end{cases}
\to
\begin{cases}
    y = 0\\
    x = -y
\end{cases}
$

Dunque l'unico punto critico è $P = (0,0)$.

Andiamo ora ad analizzare la natura del punto critico. Calcoliamo la matrice hessiana di $f$:

$
H f(x,y) = \begin{pmatrix}
    5e^{x+y}(y^2-x^2-4x-2) & 5e^{x+y}(y^2-x^2-2x+2y)\\
    5e^{x+y}(y^2-x^2-2x+2y) & 5e^{x+y}(y^2-x^2+4y+2)
\end{pmatrix}
$

valutiamo la matrice nel punto critico:

$$
H f(0,0) = 
\begin{pmatrix}
    -10 & 0\\
    0 & 10
\end{pmatrix}
$$

In quanto matrice diagonale, i suoi autovalori sono $-10$ e $10$, discordi ed
entrambi diversi da zero, dunque la matrice è indefinita e il punto critico 
è perciò un punto di sella.

#### Secondo punto
Valutiamo la restrizione in $A= \{ (x,y) \in \mathbb{R^2} : \left\lvert y \right\rvert \leq \left\lvert x \right\rvert \leq \left\lvert 1 \right\rvert \}$.

Iniziamo valutando l'esistenza di massimi e minimi nell'insieme. Osserviamo che:
- $A$ è un insieme chiuso, ovvero $\partial A \subset A$
- $A$ è un insieme limitato, $\left\lvert x \right\rvert \leq 1 \land \left\lvert y \right\rvert \leq 1$
- $f$ è continua su $A$

soddisfa le ipotesi del teorema di Weierstrass, dunque esistono $\max_A f$ e $\min_A f$.

continua...
</details>


















## Esercizio 6
Sia

$$
f(x,y) = x^2 - 2x + y^2 +1
$$

funzione a due variabili e sia 

$$
v(x,y)=x^2-y^2-1=0
$$

il vincolo. Determinare gli eventuali punti di estremo vincolati e la loro natura.

<details>
<summary>Soluzione</summary>

#### Insieme di definizione
La funzione $f$ è definita su tutto $\mathbb{R}^2$.

#### Calcolo della Lagrangiana
$F(x,y,\lambda) =x^2 - 2x + y^2 +1 - \lambda(x^2-y^2-1)$

$F'_x = 2x - 2\lambda x$

$F'_y = 2y - 2\lambda y$

$F'_\lambda = x^2 - y^2 - 1$

le annulliamo e risolviamo il sistema:
$
\begin{cases}
2x -2 + 2\lambda x = 0\\
2y - 2\lambda y = 0\\
x^2 - y^2 - 1 = 0
\end{cases}
\to
\begin{cases}
x + \lambda x -1 =0\\
y(1-\lambda) = 0\\
x^2 - y^2 - 1 = 0
\end{cases}
$

CONTINUA...  
</details>


