---
sidebar_position: 1
sidebar_label: Ripasso in ℝ
---

# Punti di estremo in $\mathbb{R}$ (ripasso)

$f:]a,b[\rightarrow \mathbb{R}$, derivabile.

1. Teorema di Fermat: i punti di massimo e minimo di $f$ sono punti stazionari, cioè soddisfano $f'(x)=0$.
    $f: A \rightarrow \mathbb{R}$, $A \subseteq \mathbb{R}^n$ aperto, $\overline{x_0}\in A$ punto di estremo per $f \Rightarrow \nabla f(\overline{x_0})=\overline{0}$
2. Se $x_0 \in ]a,b[$ è punto stazionario, come faccio a capire se è di massimo, di minimo o di flesso orizzontale?

    $f''(x_0)<0 \Rightarrow x_0$ punto di massimo

    $f''(x_0)>0 \Rightarrow x_0$ punto di minimo

    $f''(x_0)=0 \Rightarrow x_0$ è candidato punto di flesso.


## Definizione

$f:\text{dom} f \rightarrow \mathbb{R}$, $\text{dom} f \subseteq \mathbb{R}^n$. $\overline{x_0}\in \text{dom} f$ si dice punto di ***massimo relativo*** per $f$ se $\exists r >0 \mid f(\overline{x_0})\geq f(\overline{x})\forall\overline{x}\in B_r(\overline{x_0})\cap \text{dom} f$, $\overline{x_0}\in \text{dom} f$ si dice punto di ***minimo relativo*** se $\exists r >0 \mid f(\overline{x_0})\leq f(\overline{x})\forall \overline{x} \in B_r(\overline{x_0})\cap \text{dom} f$. $\overline{x_0} \in \text{dom} f$ di massimo o minimo relativo si dice anche punto di estremo relativo.

$\overline{x_0}\in \text{dom} f$ si dice di ***massimo (assoluto o globale)*** se $f(\overline{x_0})\geq f(\overline{x})\forall \overline{x} \in \text{dom} f$. Definizione analoga si dà per un punto di ***minimo (assoluto o globale)***.
