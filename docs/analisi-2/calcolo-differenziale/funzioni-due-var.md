---
sidebar_position: 1
sidebar_label: Insiemi di definizione di funzioni a due variabili
---

# Insiemi di definizione di funzioni a due variabili

Sia $f(x,y)$ una funzione a due variabili e $X \subseteq \mathbb{R^2}$ il suo ***insieme di definizione***, ovvero:
$$
\begin{align*}
    f(x,y): X \subseteq \mathbb{R^2}&\rightarrow \mathbb{R}\\
    (x,y) &\mapsto f(x,y)
\end{align*}
$$

Diamo ora alcuni esempi di insiemi di definizione di funzioni a due variabili.

Nota bene: $A(x,y)$ e $B(x,y)$ sono a loro volta funzioni a due variabili.

### Funzioni fratte
$f(x,y)=\frac{A(x,y)}{B(x,y)} \qquad B(x,y) \neq 0$

### Funzioni radice con indice pari 
$f(x,y)=\sqrt[n]{A(x,y)}$  con $n$ pari $\quad A(x,y) \geq 0$

### Funzioni logaritmiche
$f(x,y)=\log_{B(x,y)}{A(x,y)} \qquad 
\begin{cases}
    A(x,y) > 0\\
    B(x,y) > 0\\
    B(x,y) \neq 1
\end{cases}$

### Funzioni arcoseno e arcocoseno
$f(x,y)=\arcsin{A(x,y)}$ oppure $f(x,y)=\arccos{A(x,y)} \quad \left\lvert A(x,y) \right\rvert \leq 1$

### Funzioni esponenziali
$f(x,y)=A(x,y)^{B(x,y)} \qquad A(x,y) \gt 0$ intersecato all'insieme di definizione di $B(x,y)$ 
 
## Esempi 

### Esempio 1
$f(x,y)=\frac{x^2+\sin{y}}{x^2-y} \qquad X= \{ (x,y) \in \mathbb{R^2} \vert x^2+y \neq 0 \} = R^2 \setminus\{ (x,y) \in \mathbb{R^2} \vert y=x^2 \}$

### Esempio 2
$f(x,y) = \sqrt{4-x^2 - y^2} \qquad 4-x^2 - y^2 \geq 0$

### Esempio 3
$f(x,y) = \log_{\left\lvert x \right\rvert }{\left\lvert y \right\rvert } \qquad x \neq 0 \land y \notin \{ -1,0,1 \}$

### Esempio 4
$f(x,y) = \arcsin{(x^2+y^2-3)} \qquad \left\lvert x^2+y^2-3 \right\rvert \leq 1$

ovvero $-1 \leq x^2+y^2-3 \leq 1$ ovvero ancora $2 \leq x^2+y^2-3 \leq 4$,
quindi $f(x,y)$ è definita su un anello centrato nell'origine di raggio interno $\sqrt{2}$ e raggio esterno $\sqrt{4}$.

### Esempio 5
$f(x,y) = (1-x^2-y^2)^{\frac{1}{x^2}} \qquad \begin{cases}
    1-x^2-y^2 \gt 0\\
    x^2 \neq 0
\end{cases}$