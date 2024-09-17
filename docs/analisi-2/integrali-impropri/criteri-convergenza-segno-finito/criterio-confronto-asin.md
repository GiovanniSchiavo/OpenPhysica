---
sidebar_position: 3
sidebar_label: Criterio asintotico del confronto
---

# Criterio asintotico del confronto

## Teorema
$f,g: [a,b[\rightarrow \mathbb{R}, \,\,\ b\in \mathbb{R} \cup \{+\infty\}$, Riemann integrabili in $[a,c] \,\, \forall c \in [a,b[$ tali che $f(x),g(x)\geq 0$ definitivamente per $x \rightarrow b^-$ e $\lim_{x \rightarrow b^-} \frac{f(x)}{g(x)}=l \in [0,+\infty[$

1. Se $l \in \,\, ]0,+\infty[$, allora $ \int_{a}^{b} f(x) dx$ converge $\Leftrightarrow \int_{a}^{b} g(x) dx$ converge.
2. Se $l=0$ e $\int_{a}^{b} g(x)dx $ converge, allora $\int_{a}^{b} f(x) dx$ converge.
3. Se $l=+\infty$ e $\int_{a}^{b} g(x) dx$ diverge, allora $\int_{a}^{b} f(x)dx$ diverge.


### Dimostrazione

1. $\lim_{x \rightarrow b^-}\frac{f(x)}{g(x)} = l \in \,\, ]0,+\infty[$ allora $\frac{l}{2}\leq \frac{f(x)}{g(x)}\leq 2l$ definitivamente per $x \rightarrow b^-$ perchè $]\frac{l}{2},2l[$ è un intorno di $l$. Dunque $f(x)\leq 2lg(x)$ e $g(x)\leq \frac{2}{l} f(x)$ definitivamente per $x \rightarrow b^-$. Se $\int_{a}^{b} g(x) dx$ converge $\int_{a}^{b} f(x) dx$ converge e se $\int_{a}^{b} f(x) dx$ converge $\int_{a}^{b} g(x) dx$ converge per il criterio del confronto.
2. $\lim_{x \rightarrow b^-} \frac{f(x)}{g(x)} = 0 \Rightarrow \frac{f(x)}{g(x)} \leq 1 $ definitivamente per $x\rightarrow b^- \Rightarrow f(x) \leq g(x)$ definitivamente per $x\rightarrow b^- \Rightarrow $ se $\int_{a}^{b} g(x)dx$ converge, allora $\int_{a}^{b} f(x)dx$ converge per il criterio del confronto.
3. $\lim_{x \rightarrow b^-}\frac{f(x)}{g(x)} = +\infty \Rightarrow \frac{f(x)}{g(x)} \geq 1$ definitivamente per $x \rightarrow b^- \Rightarrow f(x) \geq g(x)$ definitivamente per $x \rightarrow b^- \Rightarrow$ se $\int_{a}^{b} g(x)dx$ diverge, allora $\int_{a}^{b} f(x)dx$ diverge sempre per il criterio del confronto.
