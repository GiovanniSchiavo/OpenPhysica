---
sidebar_position: 3
sidebar_label: Teorema della permanenza del segno
---

# Teorema del confronto

## Teorema
$(X,d)$ spazio metrico, $g,f,h : A \rightarrow \mathbb{R}, A \subseteq X, x_0$ punto di accumulazione per $A$, tali che $g(x) \leq f(x)\leq h(x)$ definitivamente per $x \rightarrow x_0$. Se $\lim_{x \rightarrow x_0} g(x)=\lim_{x \rightarrow x_0} h(x)=l$, allora $\lim_{x \rightarrow x_0} f(x)=l$.

## Teorema
$(X,d_x),(Y,d_y)$ spazi metrici, $f:X \rightarrow Y$. $f$ è continua $\Leftrightarrow f^{-1}(A)$ è aperto (in $X$) per ogni aperto $A \subseteq Y$.

### Dimostrazione Teorema

- $\Rightarrow$ Ipotesi: $f$ continua. Tesi: Dato $A \subseteq Y$ aperto, $f^{-1}(A)\subseteq X$ è aperto.

            Sia $x_0 \in f^{-1}(A)$. Dobbiamo trovare una palla centrata in $x_0$ contenuta in $f^{-1}(A)$.

            $f(x_0) \in A$, che è aperto, $\exists \epsilon >0$ tale che $B_{\epsilon}^{Y}(f(x_0))\subseteq A$, $\exists \delta >0 $ tale che $B_{\delta}^{X}(x_0) \Rightarrow f(x)\in B_{\epsilon}^{Y}(f(x_0))\subseteq A$.

            $B_{\delta}^{X}(x_0) \subseteq f^{-1} (A)$, come si voleva.
- $\Leftarrow$ Ipotesi: $f^{-1}(A)\subseteq X$ è aperto $\forall A \subseteq Y$ aperto. Tesi: $f$ è continua

    Fissiamo $x_0 \in X$ e $\epsilon >0$.

    Dobbiamo trovare $\delta >0 $ tale che $x \in B_{\delta}^{X} (x_0) \Rightarrow f(x) \in B_{\epsilon}^{Y} (f(x_0))$

    $B_{\epsilon}^{Y} (f(x_0))$ è un aperto $\Rightarrow f^{-1}(B_{\epsilon}^{Y} (f(x_0)))$ è aperto e $x_0 \in f^{-1}(B_{\epsilon}^{Y} (f(x_0))) \Rightarrow \exists\,\, \delta >0 $ tale che $B_{\delta}^{X}(x_0) \subseteq f^{-1}(B_{\epsilon}^{Y}(f(x_0)))$ cioè, se $x \in B_{\delta}^{X}(x_0) \Rightarrow f(x) \in B_{\epsilon}^{Y}(f(x_0))$ come si voleva.

## Teorema
$(X,d)$ spazio metrico. $A \subseteq X, f,g: A \rightarrow \mathbb{R}, x_0 \in A$, $f$ e $g$ continue in $x_0$. Allora $f+g, f\cdot g$ e $f/g$, se $g(x_0)\neq 0$, sono continue in $x_0$.

## Proposizione
$(X,d)$ spazio metrico, $A \subseteq X, \overline{f}: A \rightarrow \mathbb{R}^n$

$\overline{f}(x)=(f_1(x),...,f_n(x))$, è continua in $x_0 \in A \Leftrightarrow$ sono continue in $x_0$ le sue componenti $f_j \forall j=1,...,n$.
