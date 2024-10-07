---
sidebar_position: 5
sidebar_label: Proprietà della divergenza
---

# Proprietà della divergenza

Analizziamo subito alcuni calcoli sulla divergenza che verranno utilizzati nel
corso di queste dispenze.

## Teorema (divergenza del prodotto vettoriale)

$$
\vec\nabla\left(\vec a\times\vec b\right)=\left(\vec\nabla\times\vec a\right)\cdot\vec b-\vec a\cdot\left(\vec\nabla\times\vec b\right)
$$

### Dimostrazione 
Sia $\vec{c}=\vec{a} \times \vec{b}$, calcoliamo la divergenza di $\vec{c}$:
$$
\vec{\nabla}\cdot\vec{c}=\frac{\partial}{\partial x}c_x+\frac{\partial}{\partial y}c_y+\frac{\partial}{\partial z}c_z
$$

Ricordiamo la definizione di prodotto vettoriale:
$$
    \vec c=\det\left(\begin{matrix}\hat i&\hat j&\hat k\\a_x&a_y&a_z\\b_x&b_y&b_z\end{matrix}\right)\\
    c_x=a_yb_z-b_ya_z\\
    c_y=a_zb_x-a_xb_z\\
    c_z=a_xb_y-b_xa_y
$$

Per semplicità isoliamo dal calcolo della divergenza solo il contributo delle
derivate fatte rispetto a $x$
$$
\frac{\partial}{\partial x}c_x=\frac{\partial a_y}{\partial x}b_z+\frac{\partial b_z}{\partial x}a_y-\frac{\partial a_z}{\partial x}b_y-\frac{\partial b_y}{\partial x}a_z
$$

Le altre componenti della divergenza di $\vec{c}$ sono analogamente calcolabili.
Vediamo per convincerci del teorema a cosa è uguale il membro di destra:
$$
\begin{pmatrix}\vec{\nabla}\times\vec{a}\end{pmatrix}\cdot\vec{b}-\vec{a}\cdot\begin{pmatrix}\vec{\nabla}\times\vec{b}\end{pmatrix}
$$

Anche qui per semplicità isoliamo solo i termini che hanno derivate in $x$ (in
modo da confrontare con l'altra espressione). Il primo termine è il rotore di
$\vec{a}$ :
$$
\vec{\nabla}\times\vec{a}=\left(\begin{matrix}\hat{i}&\hat{j}&\hat{k}\\\partial_x&\partial_y&\partial_z\\a_x&a_y&a_z\end{matrix}\right)
$$

svolgendo solo le derivate in $x$ otteniamo:
$$
\vec{\nabla}\times\vec{a}=-\frac{\partial a_z}{\partial x}\hat{j}+\frac{\partial a_y}{\partial x}\hat{k}+\cdots 
$$

facciamo ora il prodotto scalare per $\vec{b}$
$$
\left(\vec\nabla\times\vec a\right)\cdot\vec b=-b_y\frac{\partial a_z}{\partial x}+b_z\frac{\partial a_y}{\partial x}+\cdots 
$$

Analogamente calcoliamo il secondo membro:
$$
\vec{a}\cdot\left(\vec{\nabla}\times\vec{b}\right)=-a_y\frac{\partial b_z}{\partial x}+a_z\frac{\partial b_y}{\partial x}+\cdots 
$$

mettiamo insieme ed otteniamo:
$$
\begin{pmatrix}\vec{\nabla}\times\vec{a}\end{pmatrix}\cdot\vec{b}-\vec{a}\cdot\begin{pmatrix}\vec{\nabla}\times\vec{b}\end{pmatrix}=-b_y\frac{\partial a_z}{\partial x}+b_z\frac{\partial a_y}{\partial x}+a_y\frac{\partial b_z}{\partial x}-a_z\frac{\partial b_y}{\partial x}
$$

che è esattamente quanto trovato per la divergenza di $\vec{c}$.

