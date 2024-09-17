# Limiti di funzione in spazi metrici

## Definizione
$(X,d)$ spazio metrico, $A \subseteq X$, non vuoto. $x_0 \in X$ si dice ***punto di accumulazione*** 
per $A$ se  $\forall \epsilon >0 \,\, \exists \,\, x \in A, x \neq x_0,$ tale che $x \in B_\epsilon(x_0)$,
 cioè se $B_\epsilon (x_0) \cap A$ contiene punti di $A$ diversi da $x_0$. $x_0 \in A$ si dice ***punto isolato*** se non è di accumulazione, cioè se $\exists \epsilon >0$ tale che $B_\epsilon (x_0) \cap A =\{x_0\}$.

## Definizione
$(X,d_x),(Y,d_y)$ spazi metrici, $f:\text{dom} f \rightarrow Y$, con $\text{dom} f \subseteq X, x_0 \in X $ punto di accumulazione per $\text{dom} f$. Si dice che $f$ ha limite $l \in Y$ per $x \rightarrow x_0$ e si scrive
$$
    \lim_{x \rightarrow x_0} f(x)=l \,\,\,\,\,\, \text{oppure} \,\,\,\,\,\, f(x) \rightarrow l \,\,\,\, \text{per} \,\,\, x \rightarrow x_0
$$
se per ogni intorno  $V$ di $l$  esiste un intorno $U$ di $x_0 $ tale che $ f(x) \in V$, $x \in U \cap \text{dom} f, x \neq x_0$

In altre parole, $\lim_{x \rightarrow x_0} f(x) =l $ se $ \,\,\forall\,\, \epsilon >0 \,\ \exists \,\, \delta >0 \,\,|$ se $0 < d(x,x_0) < \delta$ e $x \in \text{dom} f $, allora $d_y(f(x),l)<\epsilon$.

Se prendo la definizione data con $\epsilon$ e $\delta$ per $X=Y=\mathbb{R}$ e le distanze $d_x(x,y)=d_y(x,y)=|x-y|$, ottengo la definizione con $\epsilon$ e $\delta$ data in ambito reale.

