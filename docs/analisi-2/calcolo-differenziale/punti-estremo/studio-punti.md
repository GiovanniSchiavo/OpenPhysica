---
sidebar_position: 6
sidebar_label: Studio della natura dei punti critici
---

# Studio della natura dei punti critici

Sia $Q: \mathbb{R}^n$ forma quadratica. $Q(\overline{x})=\overline{x}^T A \overline{x}$, con $A$ matrice simmetrica $n\times n$.

## Definizione
1. $Q$ si dice ***definita positiva*** se $Q(\overline{x}) >0\,\, \forall\,\, \overline{x} \neq \overline{0}$.
2. $Q$ si dice ***definita negativa*** se $Q(\overline{x})<0 \,\, \forall \,\, \overline{x} \neq \overline{0}$.
3. $Q$ si dice ***semidefinita positiva*** se $Q(\overline{x})\geq 0 \,\, \forall \,\, \overline{x} \in \mathbb{R}^n$.
4. $Q$ si dice ***semidefinita negativa*** se $Q(\overline{x})\leq 0 \,\, \forall \,\, \overline{x} \in \mathbb{R}^n$.
5. $Q$ si dice ***indefinita*** se $\exists \,\,\overline{x_1},\overline{x_2}\in \mathbb{R}^{n}$ tali che $Q(\overline{x_1})>0$ e $Q(\overline{x_2})<0$.

## Proposizione
$Q$ forma quadratica su $\mathbb{R}^n$. Sia $A$ la matrice simmetrica $n \times n$ associata a $Q$ e siano $\lambda_1,...,\lambda_n$ gli autovalori di $A$ contati con la loro molteplicità.

1. $Q$ è definita positiva $\Leftrightarrow \lambda_i >0 \,\, \forall i =1,...,n$ e in tal caso $\exists \,\, c >0 \mid Q(\overline{x})\geq c\|\overline{x}\|^2\,\, \forall \overline{x} \in \mathbb{R}^n$.
2. $Q$ è semidefinita positiva $\Leftrightarrow \lambda_i \geq 0 \,\, \forall i=1,...,n$.
3. $Q$ è definita negativa $\Leftrightarrow \lambda_i <0 \,\, \forall i =1,...,n$ e in tal caso $\exists \,\, c >0 \mid Q(\overline{x})\leq -c\|\overline{x}\|^2\,\, \forall \overline{x} \in \mathbb{R}^n$.
4. $Q$ è semidefinita negativa $\Leftrightarrow \lambda_i \leq 0 \,\, \forall i=1,...,n$.
5. $Q$ è indefinita $\Leftrightarrow \exists\,\, i,j \in \{1,...,n\} \mid \lambda_i <0$ e $\lambda_j>0$.


## Osservazione
Se $Q$ è la forma quadratica nulla, è contemporaneamente semidefinita positiva e semidefinita negativa.

## Definizione
Sia $A$ matrice $n \times n$ nella forma
$$
A= \begin{pmatrix}
    a_{11}&a_{12} &\cdots &a_{1n} \\
    a_{21}&a_{22} &\cdots &a_{2n} \\
    \vdots&\vdots &\ddots &\vdots \\
    a_{n1}&a_{n2} &\cdots &a_{nn} \\
    \end{pmatrix}
$$
I minori principali di $A$ sono i determinanti delle sottomatrici lungo la diagonale principale cioè $\alpha_1=a_{11}$, 
$\alpha_2=\det\begin{pmatrix}
    a_{11}&a_{12} \\
    a_{21}&a_{22}
\end{pmatrix}$, 
$\alpha_3=\det\begin{pmatrix}
    a_{11}&a_{21}&a_{31} \\
    a_{21}&a_{22}&a_{32} \\
    a_{31}&a_{23}&a_{33} 
\end{pmatrix}$
etc.

## Proposizione
Sia $Q$ forma quadratica, sia $A$ la matrice simmetrica ad essa associata e sia $\alpha_1,...,\alpha_n$ i suoi minori principali.
1. $Q$ è definita positiva $\Leftrightarrow \alpha_i >0\,\, \forall \,\, i =1,...,n$
2. $Q$ è definita negativa $\Leftrightarrow \alpha_i <0 $ per i dispari e $\alpha_i>0$ per i pari. 

In particolare, se $A$ è matrice $2 \times 2$, allora
1. se $\det A <0 \Rightarrow Q$ è indefinita,
2. se $\det A=0 \Rightarrow Q$ è semidefinita.

## Notazione
Con abuso di notazione si usa dire
1. $Q$ definita positiva: $A >0$; 
2. $Q$ definita negativa: $A<0$;
3. $Q$ semidefinita positiva: $A \geq 0$;
4. $Q$ semidefinita negativa: $A \leq 0$.

## Teorema
$A \subseteq \mathbb{R}^n$ aperto, $f:A \rightarrow  \mathbb{R}$ differenziabile due volte in $\overline{x_0}\in A$, punto stazionario per $f$.
1. Se $D^2f(\overline{x_0})>0 $ allora $\overline{x_0}$ è punto di minimo relativo per $f$.
2. Se $D^2f(\overline{x_0})<0$ allora $\overline{x_0}$ è punto di massimo relativo per $f$. 
3. Se $D^2f(\overline{x_0})$ è indefinita, allora $\overline{x_0}$ è punto di sella per $f$.
4. Se $\overline{x_0}$ è punto di minimo relativo, allora $D^2f(\overline{x_0})\geq0$.
5. Se $\overline{x_0}$ è punto di massimo relativo per $f$, allora $D^2f(\overline{x_0})\leq0$.

### Osservazione
I punti 4. e 5. sono conseguenza di 1., 2. e 3.

### Dimostrazione
1. $f(\overline{x})=f(\overline{x_0})+\langle \nabla f(\overline{x_0}), \overline{x}-\overline{x_0} \rangle+\frac{1}{2}\langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}),(\overline{x}-\overline{x_0}) \rangle+o(\| \overline{x}-\overline{x_0} \|^2)=f(\overline{x_0})+\frac{1}{2}\langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}),(\overline{x}-\overline{x_0})\rangle+o(\|\overline{x}-\overline{x_0}\|^2)$

    $D^2f(\overline{x_0})>0 \Rightarrow \exists \,\, c >0 \mid \langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}),\overline{x}-\overline{x_0} \rangle \geq c\|\overline{x}-\overline{x_0} \|^2\Rightarrow f(\overline{x})\geq f(\overline{x_0})+\frac{c}{2}\|\overline{x}-\overline{x_0}\|^2+o(\|\overline{x}-\overline{x_0}\|^2)=-f(\overline{x_0})+\|\overline{x}-\overline{x_0} \|^2(\frac{c}{2}+o(1))\Rightarrow \exists\,\, r>0 \mid \frac{c}{2}+o(1)\geq \frac{c}{4}$in $B_r(\overline{x_0})$ per il teorema della permanenza del segno

    $\Rightarrow \forall\,\, \overline{x}\in B_r(\overline{x_0})$ si ha
    $f(\overline{x})\geq f(\overline{x_0})+\frac{c}{4}\|\overline{x}-\overline{x_0}\|^2 \geq f(\overline{x_0}) \Rightarrow \overline{x_0}$ è punto di minimo relativo.
2. Analoga al punto 1. Si sfrutta il fatto che $\exists \,\, c>0 \mid \langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}),\overline{x}-\overline{x_0} \rangle \leq -c\|\overline{x}-\overline{x_0}\|^2$.
3. $D^2f(\overline{x_0})$ è indefinita, quindi ha due autovalori $\lambda_1$ e $\lambda_2$ tali che $\lambda_1<0$ e $\lambda_2>0$.

    Siano $\overline{r_1}$ e $\overline{r_2}$ i rispettivi autovettori tali che $D^2f(\overline{x_0})\overline{r_1}=\lambda_1\overline{r_1}$, $D^2f(\overline{x_0})\overline{r_2}=\lambda_2\overline{r_2}$, che supponiamo avere norma uno, $\|\overline{r_1} \|=\|\overline{r_2}\|=1$.

    $f(\overline{x})=f(\overline{x_0})+\frac{1}{2}\langle D^2f(\overline{x_0})(\overline{x}-\overline{x_0}),\overline{x}-\overline{x_0} \rangle + o(\|\overline{x}-\overline{x_0}\|^2)$

    $\overline{x}=\overline{x_0}+t\overline{r_1}$, $t \in \mathbb{R}$, sufficientemente piccolo in modo che $\overline{x_0}+t\overline{r_1}\in A$.

    $f(\overline{x_0}+t\overline{r_1})=f(\overline{x_0})+\frac{1}{2}\langle D^2f(\overline{x_0})t\overline{r_1},t\overline{r_1} \rangle + o(t^2)=f(\overline{x_0})+\frac{1}{2}\langle \lambda_1 +\overline{r_1},t\overline{r_1}\rangle + o(t^2)=f(\overline{x_0})+\frac{1}{2}\lambda_1 t^2 + o(t^2)=f(\overline{x_0})+t^2(\frac{1}{2}\lambda_1+o(1)) \Rightarrow \frac{1}{2}\lambda_1+o(1) < \frac{1}{4}\lambda_1$ in un intorno di $t=0$

    $f(\overline{x_0}+t\overline{r_1})<f(\overline{x_0})+\frac{1}{4}\lambda_1 t^2< f(\overline{x_0})$ in un intorno di $t=0$, $t\neq 0$.

    Analogamente $f(\overline{x_0}+t\overline{r_2})=f(\overline{x_0})+\frac{1}{2}\langle D^2f(\overline{x_0})t\overline{r_2},t\overline{r_1} \rangle +o(t^2)=f(\overline{x_0})+\frac{1}{2}\lambda_2t^2+o(t^2)>f(\overline{x_0})$ in un intorno di $t=0$, $t \neq 0$
    
    $\Rightarrow \overline{x_0}$ non è punto di estremo per $f \Rightarrow \overline{x_0}$ è punto di sella per $f$.