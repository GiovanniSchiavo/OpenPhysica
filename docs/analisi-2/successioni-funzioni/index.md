# Successioni di funzioni


## Definizione
 Sia $(X,d)$ spazio metrico. Una successione di funzioni da $X$ in $\mathbb{R}$
  è una funzione che ad ogni numero naturale $k \in \mathbb{N}$ associa una ed una sola funzione $f_k:X\rightarrow \mathbb{R}$. 

## Definizione
Sia $\{ f_j \}_{j\in\mathbb{N}}$, successione di funzioni $f_j: X \to \mathbb{K}$. Si dice che la successione ***converge puntualmente*** (o ***semplicemente***)
su $D \subseteq X$ alla funzione $f:D \to \mathbb{K}$ se $\forall x \in D$ la successione numerica $( f_j(x) )_{j\in\mathbb{N}}$ converge a $f(x)$ in $\mathbb{K}$, cioè se
$$
f(x) = \lim_{j\to\infty} f_j(x) \quad \forall x \in D.
$$


L'insieme $D$ è l'insieme degli $x \in X$ tale per cui $\{f_j \}_{j \in \mathbb{N}}$ converge puntualmente e si dice ***insieme di convergenza puntuale*** della successione.

## Definizione
$f_k:X \rightarrow \mathbb{R}, k \in \mathbb{N}$, successione di funzioni. Si dice che $\{ f_k\}_{k\in\mathbb{N}}$ ***converge uniformemente*** in $D \subseteq X$ ad una funzione $f: D\rightarrow \mathbb{R}$ se 
$$
    \lim_{k\rightarrow+\infty}\sup_{x\in D}|f_k(x)-f(x)|=0
$$
e si scrive $f_k \rightrightarrows f$ in $D$

($\forall \epsilon >0 \exists N | k >N$)

$\sup_{x\in D}|f_k(x)-f(x)| <\epsilon$, e quindi, in particolare $|f_k(x)-f(x)|<\epsilon \forall x \in D$ cioè $f(x)-\epsilon <f_k(x)<f(x)+\epsilon \forall x \in D$

$(X,d)$ spazio metrico

$B(x)=\{f:X \rightarrow \mathbb{R} | f$ è limitata$\}$ ($\exists M >0 | |f(x)| \leq M \forall x \in X$)

$f\in B(x)$, $\parallel f \parallel_\infty =\sup_{x\in X}|f(x)|$, norma infinito di $f$

$f_k \rightrightarrows f$ in $X$ se $\parallel f_k - f \parallel_\infty \rightarrow 0$ per $k \rightarrow +\infty$

cioè la convergenza uniforme è la convergenza per $\parallel \cdot \parallel_\infty$.

### Proposizione
Se $f_k \rightrightarrows f$ in $ D $, allora $\{ f_k \}_{k \in \mathbb{N}}$ converge puntualmente ad $f$ in $D$.

#### Dimostrazione della proposizione
Se $x \in D$, $0 \leq |f_k(x) -f(x)| \leq \sup_{y\in D}|f_k(y)-f(y)| \Rightarrow |f_k(x)-f(x)|\rightarrow 0$ per $ k \rightarrow +\infty$ cioè $f(x)=\lim_{k \rightarrow +\infty} f_k (x) \forall x \in D$.


## Teorema
$(X,d)$ spazio metrico, $f_k:X \rightarrow \mathbb{R}$, $\{f_k\}_{k \in \mathbb{N}}$ successione di funzioni tale che $f_k \rightrightarrows f$ in $D$. Se $f_k$ è continua in $x_0 \in X \,\, \forall\,\, k \in \mathbb{N}$, allora $f$ è continua in $x_0$. In particolare, se $f_k \in C^\circ(X)\,\, \forall \,\, k \in \mathbb{N}$, allora $f \in C^\circ(X)$ (il limite uniforme di funzioni continue è continuo).

### Osservazione
$f_k(x)=\frac{kx}{1+k|x|}$ non può convergere uniformemente a $\text{sgn}$ in $\mathbb{R}$ perché $f_k \in C^\circ (\mathbb{R})\,\, \forall \,\, k$, ma $\text{sgn}$ ha un punto di salto in $x=0$.

### Dimostrazione del teorema
$x_0 \in X$. Fissiamo $\epsilon >0$.

Dobbiamo dimostrare che $\exists \delta >0\,\, |\,\, d(x,x_0) <\delta \Rightarrow |f(x)-f(x_0)|<\epsilon$

1.  $f_k$ è continua in $x_0 \,\, \forall \,\, k$
2. $f_k \rightrightarrows f$ in $X$

$f_k \rightrightarrows f$ in $X \Rightarrow \exists\,\, N >0 \,\,|\,\, k >N \Rightarrow |f_k (x)-f(x)|< \frac{\epsilon}{3} \,\, \forall \,\, x \in X$ perchè $\sup_{x\in X}|f_k(x)-f(x)|<\frac{\epsilon}{3}$.

Fissiamo $\overline{k}>N$, cosicchè $|f_{\overline{k}}(x) -f(x)|<\frac{\epsilon}{3} \,\,\forall \,\, x \in X$ e sia $\delta >0 \,\,|\,\, d(x,x_0) <\delta$\\$\Rightarrow |f_{\overline{k}}(x) -f_{\overline{k}}(x_0)| <\frac{\epsilon}{3}$ ($\delta$ esiste perchè $f_{\overline{k}}$ è continua in $x_0$).

$|f(x)-f(x_0)| =|(f(x)-f_{\overline{k}}(x))+(f_{\overline{k}}(x)-f_{\overline{k}}(x_0))+(f_{\overline{k}}(x_0)-f(x_0))|\leq |f(x)-f_{\overline{k}}(x)|+|f_{\overline{k}}(x)-f_{\overline{k}}(x_0)|+|f_{\overline{k}}(x_0)-f(x_0)| < \frac{\epsilon}{3}+\frac{\epsilon}{3}+\frac{\epsilon}{3}=\epsilon$ a patto che $d(x,x_0)< \delta$


### Osservazione
Tutto quello che abbiamo detto e che diremo  per successioni di funzioni a valori in $\mathbb{R}$ vale per successioni di funzioni a valori in $\mathbb{C}$.

## Teorema
$\{f_k\}_{k\in\mathbb{N}}, f_k:[a,b]\rightarrow\mathbb{R},a,b\in\mathbb{R}$, successione di funzioni Riemann integrabili in $[a,b]$ tale che $f_k \rightrightarrows f$ in $[a,b]$. Allora $f$ è Riemann integrabile in $[a,b]$ e 
$$
    \int_{a}^{b}f(x)dx=\lim_{k\rightarrow+\infty}\int_{a}^{b}f_k(x)dx\,\, \textcolor{grey}{ = \int_{a}^{b}\lim_{k \rightarrow +\infty} f_k(x)dx}
$$

### Dimostrazione del teorema
Per semplicità, assumiamo che $f_k \in C^\circ([a,b])\forall k \in \mathbb{N}$. Allora $f\in C^\circ([a,b])$ perchè limite uniforme di una successione di funzioni continue, e quindi, in particolare, è Riemann integrabile in $[a,b]$. Resta da dimostrare il passaggio a limite sotto segno di integrale. Dobbiamo stimare 
$$
\begin{align*}
    |\int_{a}^{b}f_k(x) dx -\int_{a}^{b}f(x)dx|&=|\int_{a}^{b} [f_k(x)-f(x)]dx|\leq \int_{a}^{b}|f_k(x)-f(x)|dx\\ &\leq \int_{a}^{b}\sup_{y \in [a,b]} |f_k(y)-f(y)|dx= (b-a)\sup_{y \in [a,b]} |f_k(y)-f(y)| \xrightarrow{k \rightarrow+\infty} 0
\end{align*}
$$
perchè $f_k \rightrightarrows f$ in $[a,b]$, e si conclude.


### Osservazione
Non è possibile enunciare lo stesso teorema per gli integrali generalizzati. In generale, se $f_k \rightrightarrows f$ in $[1,+\infty[$ e le funzioni $f_k$ sono integrabili in senso improprio in $[1,+\infty[$ non è detto che $f$ lo sia.

## Teorema
$I \subseteq \mathbb{R}$ intervallo limitato, $\{f_k\}_{k \in \mathbb{N}}, f_k: I \rightarrow \mathbb{R}$, successione di funzioni derivabili in $I$. Se 

1. $\exists x_0 \in I\,\, |\,\, \{f_k(x_0)\}_{k \in \mathbb{N}} $ converge;
2. $\exists g:I \rightarrow \mathbb{R} \,\, |\,\, f_k' \rightrightarrows g$ in $I$

allora $\exists f: I \rightarrow \mathbb{R}$ derivabile tale che $f_k\rightrightarrows f$ in $I$ e $f' (x)= g(x) \,\, \forall x \in I$.

### Dimostrazione del teorema
Per semplicità, assumiamo che $f_k\in C^1(I)\,\, \forall k \in \mathbb{N}$, cosicchè $f_k' \in C^\circ(I) \,\, \forall k \in \mathbb{N}$, ed essendo $f_k' \rightrightarrows g$ in $I$, si deduce che $g \in C^\circ (I)$. Sia $\alpha = \lim_{k \rightarrow +\infty}f_k(x_0) \in \mathbb{R}$, allora $f_k(x) = f_k(x_0)+\int_{x_0}^{x}f_k' (t)dt\,\,\, x \in I $.

Sia $f(x) = \alpha + \int_{x_0}^{x}g(t) dt$, cosicchè, siccome $g$ è continua, per il teorema fondamentale del calcolo $f$ è derivabile e $f'(x) =g(x)$. Devo dimostrare che $f_k \rightrightarrows f$ in $I$, 

$|f_k(x)-f(x)|= |f_k(x_0)+ \int_{x_0}^{x}f_k' (t) dt+\alpha - \int_{x_0}^{x}g(t) dt|\leq |f_k(x_0)-\alpha|+|\int_{x_0}^{x}[f_k'(t)-g(t)] dt|\leq |f_k(x_0)-\alpha| + |\int_{x_0}^{x}|f_k'(t)-g(t)|dt|\leq |f_k(x_0)-\alpha| + |\int_{x_0}^{x}\sup_{y \in I}|f_k'(y)-g(y)|dt|=|f_k(x_0)-\alpha|+ |x-x_0|\sup_{y \in I}|f_k'(y)-g(y)|\leq |f_k(x_0)-\alpha|+|I|\sup_{y\in I}|f_k'(y)-g(y)|$ che non dipende da $x$, ma solo da $k$.

Dunque $\forall x \in I$, $|f_k(x)-f(x)| \leq |f_k(x_0)-\alpha|+|I|\sup_{y\in I}|f_k'(y)-g(y)| $

$\sup_{x\in I}|f_k(x)-f(x)|\leq |f_k(x_0)-\alpha|+|I|\sup_{y \in I}|f_k'(y)-g(y)|\rightarrow0$ per $k \rightarrow +\infty$ $\Rightarrow f_k \rightrightarrows f$ in $I$.
