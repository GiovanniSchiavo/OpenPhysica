---
sidebar_position: 2
---

# Gradiente di un campo scalare

Iniziamo a studiare un metodo per caratterizzare la rapidità con cui varia
la grandezza di un campo nei vari punti dello spazio.
Per fare ciò immagino di spostarmi tra due punti $P_1$ e $P_2$, che distano
tra loro di una quantità infinitesima 
$$
d\vec{l} =(dx, dy, dz) = dx\hat{i} + dy\hat{j} + dz\hat{k}
$$

Dove abbiamo usato la notazione $( \hat{i}, \hat{j}, \hat{k} )$ come versori dello spazio euclideo
tridimensionale.

## Definizione (Gradiente)
Si definisce Gradiente di un campo $U$ la
quantità:

$$
\vec{grad}U=\left(\frac{\partial U}{\partial x},\frac{\partial U}{\partial y},\frac{\partial U}{\partial z}\right)
$$

E si indica con il simbolo $\vec{\nabla} U$.

Se ora facciamo il prodotto scalare tra il gradiente di $U$ e lo spostamento $d\vec{l}$ 
otteniamo la seguente relazione:

$$
\vec{\nabla}U\cdot d\vec{l}=\frac{\partial U}{\partial x}dx+\frac{\partial U}{\partial y}dy+\frac{\partial U}{\partial z}dz
$$

Che altri non è che il differenziale totale della funzione $U$. Abbiamo quindi
ottenuto l'importante equivalenza che:

$$
\vec{\nabla}U\cdot d\vec{l}=dU
$$

Da questa relazione ottengo facilente un espressione che mi dice la pendenza della curva lungo una direzione particolare:

$$
\frac{dU}{|d\vec{l}|}=|\vec{\nabla}U|\cos\theta 
$$

Da questa formula si ricavano alcune considerazioni importanti sulla
natura geometrica del gradiente. Se scegliamo lo spostamento $d\vec{l}$ lungo una
curva di livello sappiamo che la funzione non varia, quindi $dU=0$. Ma
quindi:
$$
\begin{align*}
    \frac{dU}{|d\vec{l}|}&=0\\
    \frac{dU}{|d\vec{l}|}&=|\vec{\nabla}U|\cos\theta=0
\end{align*}
$$
Poichè genericamente il modulo del gradiente sarà diverso da zero, è nullo il
coseno di $0$. Questo ci dice che il gradiente è sempre rivolto ortogonalmente
allo spostamento $d\vec{l}$ (infatti $0$ è l'angolo tra $d\vec{l}$ e $\vec{\nabla}U$).
Da questa stessa formula risulta che il gradiente è un vettore che indica la
massima pendenza del campo, infatti la derivata direzionale, ha un massimo
quando $0$ è nullo, cioè ci spostiamo lungo la direzione del gradiente.