---
sidebar_position: 2
sidebar_label: Teorema di Fermat
---

# Teorema di Fermat

## Teorema 
$A \in \mathbb{R}^n$ aperto, $f: A \rightarrow \mathbb{R}$ derivabile in $\overline{x_0} \in A$, punto di estremo relativo per $f$. Allora $\nabla f(\overline{x_0})=\overline{0}$, cioè $\partial_{x_k}f(\overline{x_0})=0 \forall k =1,...,n$.

### Dimostrazione
$\exists \delta >0 \mid B_\delta (\overline{x_0})\subseteq A$ perché $A$ è aperto. Fissato $k=1,...,n$ sia $\phi_k(t)=f(\overline{x_0}+t\overline{e_k})$, $ t \in ]-\delta,\delta[$ restrizione di $f$ lungo un segmento parallelo  a $\overline{e_k}$ passante per $\overline{x_0}$ e di lunghezza $2\delta$.

Per fissare le idee assumiamo che $\overline{x_0}$ sia di massimo relativo. Prendendo $\delta$ abbastanza piccolo, possiamo assumere che $f(\overline{x_0})\geq f(\overline{x})\forall \overline{x} \in B_\delta (\overline{x_0})$.

$\phi(0)=f(\overline{x_0})\geq f(\overline{x_0}+t\overline{e_k})=\phi_k(t)\forall \,\, t \in ]-\delta,\delta[$ perché $\overline{x_0}+t \overline{e_k} \in B_\delta (\overline{x_0})\forall t \in ]-\delta,\delta[ \Rightarrow t=0$ è punto di massimo per $\phi \Rightarrow \phi'(0)=\partial_{x_k}f(\overline{x_0})=0$ per il teorema di Fermat in una variabile.


## Definizione
$f:\text{dom} f \rightarrow \mathbb{R}$, $\overline{x_0}\in \text{dom} f \subseteq \mathbb{R}^n$. $f$ derivabile in $\overline{x_0}$. Se $\nabla f(\overline{x_0})=\overline{0}$, allora $\overline{x_0}$ si dice ***punto stazionario (o critico)*** per $f$.

## Definizione
$f: \text{dom} f \rightarrow \mathbb{R}$, $ \overline{x_0}\in \text{dom} f \subseteq \mathbb{R}^n$ punto stazionario. Se $\overline{x_0}$ non è punto di estremo relativo, allora si dice ***punto di sella*** per $f$.