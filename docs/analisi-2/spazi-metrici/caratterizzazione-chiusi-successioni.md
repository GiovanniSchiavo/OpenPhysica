---
sidebar_position: 3
sidebar_label: Caratterizzazione dei chiusi mediante le successioni
---

# Caratterizzazione dei chiusi mediante le successioni

## Teorema
$(X,d)$ spazio metrico, $A \subseteq X$. Allora $z\in \overline{A}\Leftrightarrow \exists$ una successione $\{x_k\}_{k\geq 1} \subseteq A $ tale che $x_k \rightarrow z$.

## Corollario
$(X,d)$ spazio metrico. $A \subseteq X$ è chiuso $\Leftrightarrow \forall\,\, \{x_k\}_{k \geq 1} \subseteq A$ convergente, il suo limite appartiene ad $A$.


($A \subseteq X$ è chiuso $\Leftrightarrow A$ contiene i limiti delle successioni convergenti a valori in $A$.)

### Dimostrazione del corollario

1. $\Rightarrow$ $A$ chiuso, $A = \overline{A}$. Sia $\{x_k\}_{k \geq 1} \subseteq A$ successione convergente a $z \in X$. Allora il teorema implica che $z \in \overline{A}= A$.
2. $\Leftarrow$ Dobbiamo dimostrare che, se $x \in \overline{A}$, allora $z \in A$

($A=\overline{A}$, perchè l'inclusione $A \subseteq \overline{A}$ è nota)

$z \in \overline{A} \Rightarrow \,\, \exists \{x_k\}_{k \geq 1} \subseteq A$ convergente a $z$. Allora $z \in A$ per ipotesi.

### Dimostrazione del teorema
1. $\Rightarrow $ Sia $z \in \overline{A}$. Costruiamo una successione $\{x_k\}_{k \geq 1} \subseteq A \,\,|\,\, x_k \rightarrow z, z\in \overline{A} \Leftrightarrow \forall r >0, B_r(z)\cap A \neq \emptyset$.

    $r=1\,\,\,\,\,\, \exists\,\, x_1 \in B_1(z) \cap A$, $x_1 \in A$ e $d(x_1,z)<1$

    $r=\frac{1}{2}\,\,\,\,\,\, \exists \,\,x_2 \in B_{\frac{1}{2}}(z) \cap A$, $ x_2 \in A $ e $ d(x_2,z)< \frac{1}{2}$

    ...

    $r=\frac{1}{k}\,\,\,\,\,\, \exists\,\, x_k \in B_{\frac{1}{k}}(z)\cap A$, $ x_k \in A $ e $ d(x_k,z)< \frac{1}{k}$
    
    $\{x_k\}_{k \geq 1} \subseteq A$ tale che $0 \leq d(x_k,z)\leq \frac{1}{k} \Rightarrow \lim_{k \rightarrow +\infty} d(x_k,z)=0 \Rightarrow x_k \rightarrow z$.
2. $\Leftarrow$ Ipotesi: $\exists \,\, \{x_k\}_{k\geq 1} \subseteq A$ tale che $x_k \rightarrow z$. Tesi: $z \in \overline{A}$.

    Sia $r >0$. Poichè $x_k \rightarrow z \,\, \exists \,\, N> 0$ tale che $d(x_k,z)<r\,\, \forall \,\, k > N, x_k \in B_r(z) \cap A$

    $ \Rightarrow B_r(z) \cap A \neq \emptyset \Rightarrow z \in \overline{A}$. 


## Osservazione
Siccome $C$ è chiuso $\Leftrightarrow C^c$ è aperto, il corollario al teorema che abbiamo appena dimostrato implica che $A \subseteq \mathbb{R}^n$ è aperto per $|\cdot|  \Leftrightarrow A $ è aperto per la topologia data da $\| \cdot \|_\infty \Leftrightarrow A$ è aperto per $\| \cdot \|_1$, cioè le 3 norme $|\cdot|, \| \cdot \|_\infty, \| \cdot \|_1$ descrivono la stessa topologia.

Si può dimostrare che in $\mathbb{R}^n$ (***spazio di dimensione finita***) tutte le norme sono equivalenti, cioè se $A \subseteq \mathbb{R}^n$ è aperto per una norma, lo è per qualsiasi altra.

## Definizione
$(X,d)$ spazio metrico. $K \subseteq X$ si dice limitato se $\exists\,\, x \in X$ e $R>0$ tale che $ K \subseteq B_R(x)$, cioè $d(x,z)< R \,\, \forall \,\,z \in K$. 

## Osservazione
Se $(X, \| \cdot \|)$ è spazio normato, il punto $x \in X$ nella definizione di insieme limite può essere preso coincidente con $0$. Infatti se $K \subseteq B_R(x) \Rightarrow \| x-z \| < R \,\, \forall \,\, z \in K$

$z \in K$, $\| z \| =\| z-x+x \| \leq \| x-z \| + \| x\| <R+\| x \| \Rightarrow z \in B_{R+\| x\|}(0)$

Quindi, in uno spazio normato, $K \subseteq X$ è limitato se $\exists \,\, R >0 \,\,|\,\, K \subseteq B_R(0)$, cioè $\| z \| < R \,\,\forall\,\, z \in K$. (se $x = R$ e $\| \cdot \| = |\cdot|$, si ritrova quanto scritto sopra.)

## Proposizione
$(X,d)$ spazio metrico. $\{x_k\}_{k\geq 1} \subseteq X$ successione convergente. Allora $\{x_k\}_{k \geq 1}$ è limitata, cioè $\exists x \in X$ e $R >0$ tale che $x_k \in B_R(x)\,\, \forall k \geq 1$.
$(d(x_k,x)< R \,\, \forall \,\, k \geq 1)$.

## Osservazione
$K \subseteq \mathbb{R}^n$ è limitato per $|\cdot| \Leftrightarrow$ lo è per $\parallel \cdot \parallel_\infty \Leftrightarrow$ lo è per $\parallel \cdot \parallel_1$

$\parallel \overline{x} \parallel_\infty \leq |\overline{x}|\leq \parallel \overline{x} \parallel_1 \leq n \parallel\overline{x} \parallel_\infty$

## Osservazione
Introduciamo in $\mathbb{R}^n$ il simbolo $\infty$. Un intorno di $\infty$ è un qualunque insieme $A \subseteq \mathbb{R}^n$ tale che $A$ contiene il complementare di una palla di centro l'origine, cioè $\exists R>0$ tale che $\overline{x} \in A \Rightarrow \parallel \overline{x} \parallel > R$.

Una successione $\{\overline{x_k}\}_{k\geq 1} \subseteq \mathbb{R}^n$ si dice divergente a $\infty$ e si scrive $\lim_{k \rightarrow \infty} \overline{x_k}=\infty$ se $\lim_{k \rightarrow \infty} |\overline{x_k}|=+\infty$ cioè se $\forall\,\, R > 0\,\, \exists\, N >0\,\,|\,\,k>N \Rightarrow |\overline{x_k}|>R$
