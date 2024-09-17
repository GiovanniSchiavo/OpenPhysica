---
sidebar_position: 2
sidebar_label: Teorema della permanenza del segno
---

# Teorema della permanenza del segno

## Teorema
$(X,d)$ spazio metrico, $f: \text{dom} f \rightarrow\mathbb{R}$, $\text{dom} f \subseteq X, x_0 \in X$ punto di accumulazione per $\text{dom} f$.
Se $\lim_{x \rightarrow x_0} f(x) = l >0$, allora $f(x)>0$ definitivamente per $ x \rightarrow x_0$, cioè $\exists \,\, \delta >0 \,\, |\,\, f(x)>0 \,\, \forall \,\, x \in B_\delta (x_0)\cap \text{dom} f$, $x \neq x_0$. 

## Teorema
$(X,d)$ spazio metrico, $f,g: A \rightarrow\mathbb{R}$, $A \subseteq X, x_0 \in X$ 
punto di accumulazione per $A$, tale che $\lim_{x \rightarrow x_0} f(x) =l_f$, 
$\lim_{x \rightarrow x_0} g(x)=l_f$ e $f(x)\leq g(x)$ definitivamente per $x \rightarrow x_0$. 
$\exists \delta > 0 | f(x) \leq g(x) \forall x \in B_\delta (x_0) \cap A$, $x \neq x_0$. Allora $l_f \leq l_g$.