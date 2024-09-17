---
sidebar_position: 6
sidebar_label: Forme differenziali
---

# Forme differenziali

## Esercizio 1
Sia 
$$
\omega = (x+y)dx + x^2dy
$$

Determinare l'integrale di linea lungo:
$$
\begin{align*}
    \Gamma_1:\; y=x^2 \quad \text{da } A=(0,0) \text{ a } B=(1,1)\\
    \Gamma_2:\; y=x \quad \text{da } A=(0,0) \text{ a } B=(1,1)\\
    \Gamma_3:\; x=y^2 \quad \text{da } A=(0,0) \text{ a } B=(1,0)
\end{align*}
$$

<details>
<summary>Soluzione</summary>

La forma differenziale è definita e continua in tutta $\mathbb{R^2}$.

#### Integrale lungo $\Gamma_1$
Iniziamo parametrizzando la curva:
$$
\begin{cases}
    x(t)=t\\
    y(t)=t^2
\end{cases}
\quad t\in[0,1]
$$

Calcoliamo i differenziali:
$$
\begin{align*}
    dx=dt\\
    dy=2t\,dt
\end{align*}
$$

Svolgiamo ora l'integrale di linea:

$
\int_{0}^{1} t + t^2 + 2t^3 \,dt =
\left[ \frac{t^2}{2} + \frac{t^3}{3} + \frac{t^4}{2} \right]_0^1 =
\frac{1}{2} + \frac{1}{3} + \frac{1}{2} = \frac{4}{3}
$

#### Integrale lungo $\Gamma_2$
Parametrizziamo la curva:
$$
\begin{cases}
    x(t)=t\\
    y(t)=t
\end{cases}
\quad t\in[0,1]
\quad 
\begin{align*}
    dx=dt\\
    dy=dt
\end{align*}
$$

Svolgiamo ora l'integrale di linea:

$$
\int_{0}^{1} 2t + t^2 \,dt =
\left[ t^2 + \frac{t^3}{3} \right]_0^1 = \frac{4}{3}
$$

#### Integrale lungo $\Gamma_3$
Parametrizziamo la curva:
$$
\begin{cases}
    x(t)=t^2\\
    y(t)=t
\end{cases}
\quad t\in[0,1]
\quad 
\begin{align*}
    dx=2t\,dt\\
    dy=dt
\end{align*}
$$

Svolgiamo ora l'integrale di linea:

$$
\int_{0}^{1} 2t^3 + 2t^2 + t^4\,dt =
\left[ \frac{t^4}{2} + \frac{2t^3}{3}+\frac{t^5}{5} \right]_0^1 = \frac{41}{30}
$$
</details>