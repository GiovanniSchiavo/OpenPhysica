# Spazi metrici e normati

## Definizione (norma)
$X$ spazio vettoriale su $\mathbb{R}$ o $\mathbb{C}$. Una ***norma*** su $X$ è una funzione $\left\lVert \cdot \right\rVert  : X\rightarrow \mathbb{R}$ tale che 

1. $\| x\|\geq 0 \forall x \in X$ e $\| x\|=0 \Leftrightarrow x=0$
2. $\| \lambda x\|=|\lambda|\| x\| \forall$ scalare $\lambda$ e $\forall x \in X$
3. $\| x+y \| \leq \| x\| + \| y \| \,\,\, \forall x,y \in X$ (Disuguaglianza triangolare)

La coppia ($X,\left\lVert \cdot \right\rVert $) si dice ***spazio normato***.

## Definizione (distanza)
$X$ insieme non vuoto. Una distanza o metrica su $X$ è una funzione $d:X \times X\rightarrow \mathbb{R}$ tale che

1. $d(x,y)\geq 0 \,\,\, \forall x,y \in X $ e $d(x,y)=0 \Leftrightarrow x=y$
2. $d(x,y)=d(y,x)$ (Proprietà simmetrica)
3. $d(x,y)\leq d(x,z)+d(z,y) \,\,\, \forall x,y,z \in X$ (Disuguaglianza triangolare)

La coppia $(X,d)$ si dice ***spazio metrico***.

### Osservazione
Siano $(X,\left\\lVert \cdot \right\rVert )$ spazio normato e $d(x,y)=\left\lVert x-y \right\rVert $ è metrica, allora

1.  $d(x,y)\geq 0$ (banalmente)
    $d(x,y)=\| x-y\| =0 \Leftrightarrow x-y=0 \Leftrightarrow x=y$
2. $d(x,y)= \| x-y\|=\| y-x\| =d(y,x)$
3. $d(x,y)=\| x-y\|=\|(x-z)+(z-y)\|\leq \|x-z\|+\| z-y\|=d(x,z)+d(y,z)$

### Osservazione
Dato uno spazio vettoriale $X$ e $d$ metrica su $X$, esiste sempre una norma $\left\lVert \cdot \right\rVert $ su $X$ tale che $d(x,y)=\left\lVert x-y \right\rVert $?


No, esistono metriche dentro lo spazio vettoriale che non derivano da una norma.
