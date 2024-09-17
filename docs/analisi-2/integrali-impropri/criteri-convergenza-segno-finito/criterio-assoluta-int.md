---
sidebar_position: 2
sidebar_label: Criterio di assoluta integrabilità
---

# Criterio di assoluta integrabilità

## Teorema
$f:[a,b[\rightarrow \mathbb{R}, b \in \mathbb{R} \cup \{+\infty\}$ Riemann integrabile in $[a,c] \,\,\, \forall c \in [a,b[$ e tale che $|f|$ è integrabile in senso improprio in $[a,b[$ (si dice che l'integrale improprio di $f$ è assolutamente convergente o che converge assolutamente). Allora $\int_{a}^{b} f(x)dx$ converge.

### Dimostrazione
$f=f^+-f^-$ ove $f^+=\max\{f(x),0\} \geq 0$ e $f^-=\max\{-f(x),0\} \geq 0$ $\forall x \Rightarrow |f(x)|=f^+(x)+f^-(x)$

$f^+$ e $f^-$ sono Riemann integrabili  in  $[a,c]\,\,\, \forall c\in [a,b[$ e inoltre
$$
\begin{cases}
    & 0 \leq f^+(x) \leq |f(x)|\\
    & 0 \leq f^-(x) \leq |f(x)|
\end{cases}
 \,\,\,\,\, \forall x \in [a,b[
$$
$\Rightarrow$ per il criterio del confronto $\int_{a}^{b} f^+(x)dx$ e $\int_{a}^{b} f^-(x)dx$ convergono entrambi 

$\Rightarrow \lim_{c \rightarrow b^-} \int_{a}^{c} f(x)dx = \lim_{c \rightarrow b^-} \left[ \int_{a}^{c}f^+(x)dx - \int_{a}^{c}f^-(x)dx \right],$

esiste finito per il teorema sulla somma dei limiti $\Rightarrow \int_{a}^{b} f(x) dx$ converge.


### Osservazione
Sia $f: [a,b[ \rightarrow \mathbb{R}, \,\, b\in\mathbb{R}\cup\{+\infty\}$ e se $\int_{a}^{b} f(x) dx$ converge, non è detto che $\int_{a}^{b}|f(x)|dx$ converga.
Prendiamo
$$
    f(x)= \frac{\sin x}{x}, \,\,\,\,\, x \geq 1
$$
e dimostriamo che $ \int_{1}^{+\infty} \frac{\sin x}{x} dx$ converge. Fissiamo $c>1$

$\int_{1}^{c} \frac{\sin x}{x} dx= -\frac{\cos x}{x} |_{1}^{c} - \int_{1}^{c} \frac{\cos x}{x^2} dx = \cos 1 - \frac{\cos c}{c} -\int_{1}^{c} \frac{\cos x}{x^2} dx$

$\lim_{c \rightarrow +\infty} \int_{1}^{c} \frac{\sin x}{x} dx =\lim_{c \rightarrow +\infty} \left[\cos 1 -\frac{\cos c}{c} - \int_{1}^{c} \frac{cosx}{x^2}dx\right] $

($\lim_{c \rightarrow +\infty} \int_{1}^{c} \frac{\cos x}{x^2} dx$ esiste finito)

$\frac{|\cos x|}{x^2} \leq \frac{1}{x^2} \,\,\, \forall x \geq 1$ e $ \int_{1}^{+\infty} \frac{1}{x^2} dx$ converge $\Rightarrow \int_{1}^{+\infty} \frac{|\cos x|}{x^2} dx$ converge per il criterio del confronto $\Rightarrow \int_{1}^{+\infty} \frac{\cos x}{x^2}dx$ converge per il criterio di assoluta integrabilità

$\Rightarrow \lim_{c \rightarrow +\infty} \int_{1}^{c} \frac{\sin x}{x} dx = \cos 1 - \int_{1}^{+\infty} \frac{\cos x}{x^2} dx$ esiste finito e dunque $\int_{1}^{+\infty} \frac{\sin x}{x} dx$ converge ma $\int_{1}^{+\infty} |\frac{\sin x}{x}|dx =+\infty$.

Presi $k \geq 1, \,\,\, k \in \mathbb{N}$ avremo $k\pi \leq x \leq (k+1)\pi \Longrightarrow \frac{1}{(k+1)\pi} \leq \frac{1}{x} \leq \frac{1}{k\pi} \Longrightarrow \int_{k\pi}^{(k+1)\pi} \frac{(\sin x)}{x}dx \geq \int_{k\pi}^{(k+1)\pi} \frac{1}{(k+1)\pi} (\sin x) dx = \frac{2}{(k+1)\pi} \Longrightarrow \int_{1}^{+\infty} \frac{|\sin{x}|}{x} dx \geq \sum_{k=1}^{\infty} \int_{k\pi}^{(k+1)\pi} \frac{|\sin{x}|}{x} dx \geq \sum_{k=1}^{\infty} \frac{2}{(k+1)\pi}=+\infty$  perchè $\frac{2}{(k+1)\pi} \sim \frac{1}{k}$.