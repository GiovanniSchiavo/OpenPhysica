---
sidebar_position: 6
sidebar_label: 'Rotore'
---

# Rotore

Un altro operatore differenziale che può essere utile ricordare è il rotore.

## Definizione (Rotore)

Si definisce la grandezza ___rotore___ un vettore ottenuto dal campo vettoriale $\vec{v}$ in questo modo:

$$
\vec{rot} \; \vec{v}=\vec{\nabla}\times\vec{v}=\det\left(\begin{matrix}{ccc}\hat{i}&\hat{j}&\hat{k}\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\v_x&v_y&v_z\end{matrix}\right)\\
\vec{\nabla}\times\vec{v}=\hat{i}\left(\frac{\partial v_z}{\partial y}-\frac{\partial v_y}{\partial z}\right)-\hat{j}\left(\frac{\partial v_x}{\partial z}-\frac{\partial v_z}{\partial x}\right)+\hat{k}\left(\frac{\partial v_x}{\partial y}-\frac{\partial v_y}{\partial x}\right)
$$

Anche per il rotore, come per la divergenza, esiste una utilissima formula
per semplificare il calcolo del lavoro lungo un percorso. In particolare sia $S$
una qualunque superficie con bordo $\mathcal{L}$ vale che:
$$
\int_{\mathcal{L}}\vec{v}\cdot d\vec{l}=\int\int_S\vec{\nabla}\times\vec{v} ds
$$
