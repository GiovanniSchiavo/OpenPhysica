---
sidebar_position: 3
sidebar_label: Insiemi aperti e chiusi in uno spazio metrico
---

# Insiemi aperti e chiusi in uno spazio metrico

## Definizione
Sia $(\mathbf{X},d)$ uno spazio metrico e sia $\mathbf{A} \subseteq \mathbf{X}$. Si dice che:
- $\mathbf{A}$ è un ***insieme aperto*** se $\mathbf{A} = \mathring{\mathbf{A}}$, ovvero $\forall x \in \mathbf{A} \Rightarrow \exists \mathcal{U}(x,r) \subseteq \mathbf{A} \Rightarrow x$ è interno ad $\mathbf{A}$.
- $\mathbf{A}$ è un ***insieme chiuso*** se $\mathbf{A}^{\mathsf{c}}$ è aperto, ovvero $\mathbf{A}^{\mathsf{c}} = \mathring{\mathbf{A}^{\mathsf{c}}}$.

## Definizione alternativa

$A \subseteq X$ si dice ***aperto*** se è intorno di ogni suo punto, cioè se $\forall x \in A\,\,\, \exists r>0\,\,|\,\, B_r(x)\subseteq A$.

$A$ si dice ***chiuso*** se $A^c = X \backslash A$ è aperto.

## Teorema
$\mathbf{A}$ è un insieme chiuso $\Leftrightarrow \mathbf{A'} \subseteq \mathbf{A}$.


### Ossevazione
$(X,d)$ spazio metrico, $X$ è aperto (banalmente se $x\in X, B_r(x) \subseteq X \forall r>0$) e quindi $\emptyset = X^c = X \backslash X$ è chiuso. D'altra parte $\emptyset $ è aperto perchè l'implicazione $x \in \emptyset \Rightarrow \exists r >0 | B_r(x) \subseteq \emptyset$ è vera perchè $x \in \emptyset$  è falsa $\Rightarrow \emptyset^c=X \backslash \emptyset = X$ è chiuso. $\emptyset, X$ sono sia aperti che chiusi.

## Teorema
$(X,d)$ spazio metrico

1. $A_1,A_2 \subseteq X$ aperti $\Rightarrow A_1 \cap A_2$ è un aperto. 
2. $\{A_i\}_{i\in I}$ è una famiglia di aperti, allora $\bigcup_{i\in I}A_i$ è un aperto.
3. Se $C_1,C_2 \subseteq X$ sono chiusi, allora $C_1 \cup C_2$ è chiuso.
4. $\{C_i\}_{i\in I}$ è famiglia di chiusi, allora $\bigcap_{i\in I} C_i$ è un chiuso.

## Osservazione
In generale se $\{ A_i\}_{i\in I}$ è una famiglia infinita di aperti, allora non è detto che $\bigcap_{i\in I} A_i$ sia un aperto e, se $\{C_i\}_{i \in I}$ è una famiglia infinita di chiusi, allora non è detto che $\bigcup_{i\in I} C_i$ sia un chiuso. 
