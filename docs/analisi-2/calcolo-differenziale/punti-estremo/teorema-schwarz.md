---
sidebar_position: 4
sidebar_label: Teorema di Schwarz e matrice Hessiana
---

# Teorema di Schwarz e matrice hessiana
## Teorema
$A \subseteq\mathbb{R}^n$ aperto, $f:A\rightarrow\mathbb{R}$ tale che $\partial_{x_ix_j}^2f$ e $\partial_{x_jx_i}^2f$ ($i$ e $j$ fissati) esistono in un intorno $U$ di $\overline{x_0}\in A$ e sono continue in $\overline{x_0}$. Allora

$$
    \partial_{x_jx_i}^2f(\overline{x_0})=\partial_{x_ix_j}^2f(\overline{x_0}).
$$

In particolare, se $f \in C^2(A)$, si ha 

$$
     \partial_{x_jx_i}^2f(\overline{x})=\partial_{x_ix_j}^2f(\overline{x})\,\,\, \forall\,\, \overline{x} \in A\,\, \forall \,\,i,j=1,...,n. 
$$  

## Definizione
$A \subseteq \mathbb{R}^n$ aperto, $f: A \rightarrow \mathbb{R}$ derivabile due volte in $\overline{x}\in A$. Si dice ***matrice Hessiana*** di $f$ in $\overline{x}$ la matrice
$$
    D^2f(\overline{x})=\begin{pmatrix}
        \partial_{x_1x_1}^2f(\overline{x})& \partial_{x_1x_2}^2f(\overline{x})  & \cdots & \partial_{x_1x_n}^2f(\overline{x})\\
        \partial_{x_2x_1}^2f(\overline{x})& \partial_{x_2x_2}^2f(\overline{x}) & \cdots & \partial_{x_2x_n}^2f(\overline{x})\\
        \vdots&\vdots & \ddots &\vdots \\
        \partial_{x_nx_1}^2f(\overline{x})& \partial_{x_nx_2}^2f(\overline{x})& \cdots & \partial_{x_nx_n}^2f(\overline{x}) \\
    \end{pmatrix}
$$

### Osservazione
Se $f \in  C^2(A)$, $D^2f(\overline{x})$ è matrice simmetrica per il teorema di Schwarz.