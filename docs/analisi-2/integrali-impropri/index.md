# Integrali impropri

## Definizione

Sia $f:[a,b[\rightarrow \mathbb{R}, a,b \in \mathbb{R} \cup\{+\infty\}$ (voglio definire $\int_{a}^{b}f(x)dx$) Riemann integrabile in $[a,c]\,\, \forall c \in [a,b[$. Se $\exists$ finito il $\lim_{c \rightarrow b^-} \int_{a}^{c}f(x)dx $, allora $f$ si dice integrale in senso improprio o generalizzato in $[a,b[$ e la quantità 
$$
    \int_{a}^{b} f(x)dx = \lim_{c\rightarrow b^-} \int_{a}^{c} f(x)dx
$$
si dice integrale improprio o generalizzato di $f$ in $[a,b[$.

Analogamente, data $f:]a,b]\rightarrow \mathbb{R}, a,b \in \mathbb{R} \cup \{-\infty\}$, Riemann integrabile in $[c,b]\,\, \forall c \in ]a,b]$. Se $\exists$ finito il $\lim_{c \rightarrow a^+} \int_{c}^{b} f(x)dx$, allora $f$ si dice integrabile in senso improprio o generalizzato in $]a,b]$ e la quantità
$$
    \int_{a}^{b} f(x)dx = \lim_{c \rightarrow a^+} \int_{c}^{b} f(x)dx
$$
si dice integrale improprio o generealizzato di $f$ in $]a,b]$.

Se $f$ è integrabile in senso improprio in un intervallo $I$, allora si dice anche che l'integrale (improprio) di $f$ in $I$ è convergente o che $f$ ha integrale (improprio) convergente in $I$.\\
Se il limite che definisce l'integrale improprio di $f$ è infinito, si dice anche che l'integrale (improprio) di $f$ è divergente o che $f$ ha integrale (improprio) divergente in $I$.

### Osservazione
Vista la definizione, 
$$
    \int_{1}^{+\infty}\frac{1}{x^\alpha}dx \,\,\,\,\, \text{converge} \Leftrightarrow \alpha > 1
$$

### Osservazione
Se $f:[a,b] \rightarrow \mathbb{R}$ è Riemann integrabile, allora è integrabile anche in senso improprio e i due integrali coincidono.

## Definizione

$f:[a,b] \rightarrow \mathbb{R},\,\, a,b \in \mathbb{R} \cup \{\pm \infty\}$, Riemann integrabile in $[c,d]\,\, \forall a<c<d<b$. $f$ si dice integrabile in senso improprio in $ ]a,b[$ se, fissato $\xi \in ]a,b[$, lo è in $]a, \xi]$ e in $[\xi,b[$ (esistono finiti $\lim_{c \rightarrow a^+} \int_{c}^{\xi} f(x)dx$ e $\lim_{d\rightarrow b^-}\int_{\xi}^{d} f(x)dx$) e in tal caso si pone 
$$
    \int_{a}^{b} f(x)dx = \int_{a}^{\xi} f(x)dx + \int_{\xi}^{b} f(x) dx
$$
Si verifica che la definizione non dipende da punto $\xi$ fissato.

## Definizione 

In generale, data $f:]a,b[\rightarrow \mathbb{R}$ integrabile in senso improprio in $]x_0,x_1[,]x_1,x_2[,$ $...,]x_{n-1},x_n[$ con $a= x_0 <x_1<...<x_n=b$, allora $f$ si dice integrabile in senso improprio in $]a,b[$ e si pone 
$$
    \int_{a}^{b}f(x)dx= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i}f(x)dx.
$$