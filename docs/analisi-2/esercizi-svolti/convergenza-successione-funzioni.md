---
sidebar_position: 1.5
sidebar_label: Convergenza puntuale e uniforme di successioni di funzioni
---

# Convergenza puntuale e uniforme di successioni di funzioni

# Esercizio 1

Sia $f_n: \mathbb{R} \to ]0,+\infty[\;$ con $n \in \mathbb{N}$ una successione di funzioni definita come
$
f_n = e^{nx}.
$

Verificare se e dove la funzione converge puntualmente e valutare la continuita della funzione limite.
Studiare infine se la successione converge uniformemente in $[-\infty,-1]$.

<details>
<summary>Soluzione</summary>

#### Convergenza puntuale
Consideriamo il limite:
$$
\lim_{n \to \infty} f_n=\lim_{n \to \infty} e^{nx}
$$

Dobbiamo studiare questo limite al variare di $x$, che può essere considerato come un parametro reale.

- Quando $x \gt 0$, il limite è uguale a $+\infty$ e quindi la funzione $e^{nx}$ diverge.
- Quando $x = 0$, il limite è uguale a $1$.
- Quando $ x \leq 0$, il limite è uguale a $0$.

Possiamo quindi concludere che la successione converge puntualmente alla funzione 
$$ 
F =
\begin{cases}
0 & \text{se } x \leq 0\\
1 & \text{se } x = 0\\    
\end{cases}
$$

e il suo insieme di convergenza puntuale è $[-\infty,0]$.

Nonostante tutte le funzioni $e^{nx}$ siano continue in tutto $\mathbb{R}$, e a maggior ragione in $[-\infty,0]$, la funzione limite $F$ non è continua in $x=0$.


#### Convergenza uniforme

Nell'intervallo $[-\infty,-1]$ la successioni converge puntualmente, come abbiamo appena mostrato, e la funzione limite 
$F$ è continua. La successione in questo intervallo può quindi convergere uniformemente.

Consideriamo la successione
$$
g_n(x) = \left\lvert f_n - F \right\rvert = \left\lvert e^{nx} \right\rvert = e^{nx} 
$$

e cerco il suo massimo studiando la derivata prima:
$$
g_n'(x) = ne^{nx} \gt 0
$$

Sono tutte funzioni monotone crescenti. Il massimo assoluto si avrà quindi nell'estremo destro dell'intervallo, ovvero in $x=-1$:
$$
S_n = g_n(-1) = e^{-n}
$$

e valuto il valore della successione $S_n$ per $n \to \infty$:
$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} e^{-n} = 0
$$

Dunque la successione converge uniformemente a $0$ in $[-\infty,-1]$ e si scrive $f_n \rightrightarrows 0$ in $[-\infty,-1]$.



</details>



# Esercizio 2
Sia $f_n: \mathbb{R} \to Y$ con $n \in \mathbb{N^*}$ e $Y \subseteq \mathbb{R}$ una successione di funzioni definita come
$$
f_n =\frac{n^2x}{n^2x^2+1}
$$

Verificare se e dove la funzione converge puntualmente e valutare la continuita della funzione limite.
Studiare inoltre la convergenza puntuale nell'intervallo $[1,+\infty[$.
Studiare infine la convergenza uniforme nel medesimo intervallo $[1,+\infty[$.



<details>
<summary>Soluzione</summary>

#### Convergenza puntuale

Notiamo che tutte le funzioni $f_1, f_2, \dots, f_n$ sono definite e continue in tutto $\mathbb{R}$.

Consideriamo il limite:
$$
\lim_{n \to \infty} f_n=\lim_{n \to \infty} \frac{n^2x}{n^2x^2+1}
$$

- Quando $x = 0$, il limite è uguale a $0$. (Infatti $x$ è esattamente uguale a $0$, non ci sono problemi di indeterminazione).
- Quando $x \neq 0$, il limite è uguale a $\frac{1}{x}$.

La successione di funzioni $f_n$ converge puntualmente alla funzione
$$ 
F(x) =
\begin{cases}
0 & \text{se } x = 0\\
\frac{1}{x} & \text{se } x \neq 0\\
\end{cases}
$$
e si scrive $f_n \to F(x)$ in $\mathbb{R}$, ovvero $f_n$ converge puntualmente a $F(x)$ in tutto $\mathbb{R}$, che è l'insieme di convergenza puntuale.

Nonostante le funzioni $f_n$ siano continue in tutto $\mathbb{R}$, la funzione limite $F(x)$ non è continua, infatti nel punto $x=0$ si ha un punto di discontinuità di seconda specie.

Nell'intervallo $[1,+\infty[$ la successione converge puntualmente alla funzione $F(x)=\frac{1}{x}$, che è continua in tutto l'intervallo.


#### Convergenza uniforme

Per quanto appena detto, nell'intervallo $[1,+\infty[$ la successione può convergere uniformemente.

Consideriamo, nell'intervallo, la successione:
$$
\begin{align*}
    g_n{x} &= \left\lvert f_n - F \right\rvert = \left\lvert\frac{n^2x}{n^2x^2+1} - \frac{1}{x} \right\rvert\\
    &= \frac{1}{x(n^2x^2+1)}
\end{align*}
$$

e cerco il suo massimo studiando la derivata prima:
$$
g_n'(x) = -\frac{1}{x^2(n^2x^2+1)^2} \lt 0
$$

Sono tutte funzioni monotone decrescenti, dunque cerco il massimo nel limite sinistro dell'intervallo, ovvero in $x=1$:
$$
S_n = g_n(1) = \frac{1}{(n^2+1)}
$$

e valuto il valore della successione $S_n$ per $n \to \infty$:
$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{1}{n^2+1} = 0
$$

Dunque la successione converge uniformemente a $F = \frac{1}{x}$ in $[1,+\infty[$ e si scrive $f_n \rightrightarrows \frac{1}{x}$ in $[1,+\infty[$.


</details>



## Esercizio 3

Per $n \in \mathbb{N^*}$ si consideri la successione $\{ nxe^{-nx^2} \}$ di funzioni definite su $\mathbb{R}$.

Studiare la convergenza puntuale della successione e valutare la continuità della funzione limite.
Studiare se la successione converge anche uniformemente nell'insieme di convergenza puntuale.
Studiare infine la convergenza uniforme nella restrizione $[1,+\infty[.$

<details>
<summary>Soluzione</summary>

#### Convergenza puntuale

Consideriamo il limite:
$$
\lim_{n \to \infty} f_n = \lim_{n \to \infty} nxe^{-nx^2}
$$

che è uguale a $0$ per ogni $x \in \mathbb{R}$. Dunque la successione 
converge puntualmente alla funzione $F(x)=0$ in tutto $\mathbb{R}$ e si scrive $f_n \to 0$ in $\mathbb{R}$.

La funzione limite $F(x)=0$ è, evidentemente, continua in tutto $\mathbb{R}$.

#### Convergenza uniforme
Poichè la successione converge puntualmente ed è continua in tutto $\mathbb{R}$, può convergere uniformente in $\mathbb{R}$.

Consideriamo la successione:
$$
g_n(x) = \left\lvert f_n - F \right\rvert = \left\lvert nxe^{-nx^2} \right\rvert 
$$

Che è una famiglia di funzioni pari, ovvero simmetriche per l'asse delle ascisse. Ci limitiamo quindi a studiarle nell'intervallo $[0,+\infty[$, così da poter lavorare senza il valore assoluto.
Si che la derivata prima è:
$$
\begin{align*}
    g_n'(x) &= n(e^{-nx^2} - 2nx^2e^{-nx^2})\\
    & = ne^{-nx^2}(1-2nx^2)
\end{align*}
$$

troviamo che i due punti di massimo assoluto si trovano in $x=\pm \frac{1}{\sqrt{2n}}$. Valutiamo il valore della successione in questi punti:
$$
S_n = g_n\left(\frac{1}{\sqrt{2n}}\right) = \frac{ne^{\frac{-1}{2}}}{\sqrt{2n}}
$$

e valutiamo il valore della successione $S_n$ per $n \to \infty$:
$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{ne^{\frac{-1}{2}}}{\sqrt{2n}} = + \infty
$$

Dunque la successione non converge uniformemente in $\mathbb{R}$, ma solo puntualmente.

#### Convergenza uniforme in $[1,+\infty[$
Le considerazioni iniziali, ovviamente, si applicano anche qui, in quanto $[1,+\infty[ \subset \mathbb{R}$.

I punti di massimo precedentemente trovati, $x=\pm \frac{1}{\sqrt{2n}}$, non appartengono all'intervallo. 
Poichè $g_n$ è decrescente in $[1,+\infty[$, il massimo si avrà in $x=1$:

$$
S_n = g_n(1) = ne^{-n}
$$

Valutiamo il valore della successione $S_n$ per $n \to \infty$:
$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} ne^{-n} = 0
$$

Dunque la successione converge uniformemente a $F(x)=0$ in $[1,+\infty[$ e si scrive $f_n \rightrightarrows 0$ in $[1,+\infty[$.

Poichè $g_n$ è una successione di funzioni pari, la convergenza uniforme vale anche in $]-\infty,-1]$.

</details>