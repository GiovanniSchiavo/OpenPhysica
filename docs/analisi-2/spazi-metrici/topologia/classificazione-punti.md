---
sidebar_position: 2
sidebar_label: Classificazione di punti in spazi metrici
---

# Classificazione di punti in spazi metrici

## Definizione

Sia $(\mathbf{X},d)$ uno spazio metrico, $\mathbf{A} \subseteq \mathbf{X}$ e $p \in \mathbf{X}$. Si dice che $p$:
- è un ***punto interno*** ad $\mathbf{A}$ se $\exists \mathcal{U}(p,r) \subseteq \mathbf{A}$
- è un ***punto esterno*** ad $\mathbf{A}$ se $\exists \mathcal{U}(p,r) \subseteq \mathbf{A}^{\mathsf{c}}$
- è un ***punto di frontiera*** per $\mathbf{A}$ se $\forall \mathcal{U}(p,r) \cap \mathbf{A}^{\mathsf{c}} \neq \varnothing  \land \forall \mathcal{U}(p,r) \cap \mathbf{A}^{\mathsf{c}} \neq \varnothing $

Queste condizioni sono fra di loro mutualmente esclusive.

### Osservazioni

Se $p$ è un punto interno ad $\mathbf{A}$, allora $p \in \mathbf{A}$.

Se $p$ è un punto esterno ad $\mathbf{A}$, allora $p \in \mathbf{A}^{\mathsf{c}}$.

Se $p$ è un punto di frontiera per $\mathbf{A}$, allora $p$ è un punto di frontiera anche per $\mathbf{A}^{\mathsf{c}}$, e viceversa. In simboli: $p \in \partial \mathbf{A} \Leftrightarrow p \in \partial \mathbf{A}^{\mathsf{c}}$.

Se $p$ è un punto di $\mathbf{A}$, non è detto che sia un punto interno di $\mathbf{A}$. In simboli: $p \in \mathbf{A} \nRightarrow p \in \mathring{\mathbf{A}}$. Ciò accade solo se $\mathbf{A}$ è un insieme aperto.
Un punto che appartiene ad $\mathbf{A}$ può essere un punto interno o un punto di frontiera per $\mathbf{A}$.
Un punto che appartiene ad $\mathbf{A}^{\mathsf{c}}$ può essere un punto esterno o un punto di frontiera per $\mathbf{A}$.
Dunque, se $p \in \partial \mathbf{A}$, allora $p$ può appartenere ad $\mathbf{A}$ o ad $\mathbf{A}^{\mathsf{c}}$.

L'insieme dei punti interni è solitamente indicato con $\mathring{\mathbf{A}}$, l'insieme dei punti esterni con $\mathbf{A}^{\mathsf{e}}$ e l'insieme dei punti di frontiera con $\partial \mathbf{A}$.

<details>
<summary>Esempi</summary>
<p>
#### Primo esempio
Sia $(\mathbf{X},d)$ e sia $p \in X \Rightarrow p$ è un punto interno ad $\mathbf{X}$. Dunque $\mathring{\mathbf{X}} = \mathbf{X}$, $\mathbf{X}^{\mathsf{e}} = \varnothing$.

#### Secondo esempio
Sia $(\mathbf{X},d)$, $\mathbf{X}=\mathbb{R}^{2}$ e $d = \left\lVert \cdot \right\rVert $.
Sia $\mathbf{A} = \left\{ (x,y) \in \mathbf{X} \mid x^{2} + y^{2} < 1 \right\}$. Allora:
- $\mathring{\mathbf{A}} = \mathbf{A}$
- $\partial \mathbf{A} = \partial \mathbf{A}^{\mathsf{c}} = \left\{ (x,y) \in \mathbf{X} \mid x^{2} + y^{2} = 1 \right\}$
- $\mathbf{A}^{\mathsf{e}} = \left\{ (x,y) \in \mathbf{X} \mid x^{2} + y^{2} > 1 \right\}$

#### Terzo esempio
Sia $(\mathbf{X},d)$ spazio metrico, $p \in X$, $s>0$ e $\mathcal{U}(p,s)$
Dobbiamo dimostrare che $\forall x \in \mathcal{U}(p,s) \Rightarrow \exists \mathcal{U}(p,r)\subseteq \mathcal{U}(p,s)$.

Fissiamo $x \in \mathcal{U}(p,s)$ e poniamo $r \lt s - d(p,x)$. Si ha $\mathcal{U}(x,r)=\{ y| d(x,y)\lt r \lt s-d(x,p) \}$.

Devo dimostrare che $\forall y \in \mathcal{U}(x,r)\Rightarrow y \in \mathcal{U}(p,s), d(y,p) \lt s$.
$d(y,p) \leq d(y,x) + d(x,p) \lt r + d(x,p) \lt s - d(x,p) + d(x,p) = s$.
</p>
</details>

## Definizione
Sia $(\mathbf{X},d)$ uno spazio metrico, $\mathbf{A} \subseteq \mathbf{X}$ e $p \in \mathbf{X}$. Si dice che $p$:
- è un ***punto di accumulazione*** per $\mathbf{A}$ se $\forall \mathcal{U}(p,r) \cap \mathbf{A} \setminus \{p\} \neq \varnothing$;
- è un ***punto isolato*** per $\mathbf{A}$ se $\exists \mathcal{U}(p,r) \cap \mathbf{A} = \{p\}$.

### Osservazioni
Se $p$ è un punto isolato $\Rightarrow p \in \mathbf{A}$.

Se $p$ è un punto di accumulazione $\Rightarrow p \in \mathbf{A}$ oppure $p \in \mathbf{A}^{\mathsf{c}}$.

## Teorema
Sia $(\mathbf{X},d)$ uno spazio metrico, $\mathbf{A} \subseteq \mathbf{X}$ e $p \in \mathbf{X}$.
Allora $p$ è un punto di accumulazione per $\mathbf{A}$ se e solo se ogni intorno $\mathcal{U}$ di $p$ di raggio $r$ contiene infiniti punti di $\mathbf{A}$.
In simboli $p \in \mathbf{A}' \Leftrightarrow \mathcal{U}(p,r)$ contiene infiniti punti di $\mathbf{A}$

### Corollario
$\mathbf{A} \subseteq \mathbf{X}$ finito $\Rightarrow \mathbf{A'}=\varnothing$.