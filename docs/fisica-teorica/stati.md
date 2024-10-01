---
sidebar-position: 1
sidebar-label: Stati
---

# Stati

## Stato $\Sigma$ (puro)

### Meccanica classica

$N$ ndof (numero di gradi di libertà) per $t_0 \; [q_i(t_0), p_i(t_0)]$ con $i=1,\dots,N$

#### Equazioni di Hamilton 
$$
t>0 \begin{cases}
    \dot{q_i}=\frac{\partial H}{\partial p_i}\\
    \dot{q_i}=-\frac{\partial H}{\partial q_i}\\
\end{cases}
$$

#### Pa
$f(q,p) \; {f,g}=\Sigma_i ''\Big( \frac{\partial f}{\partial q_i}\frac{\partial p}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial p}{\partial q_i} \Big)$









$\psi (x) \in [L_2(\mathbb{R})]_x \quad \widetilde{\psi}(p) \in [L_2(\mathbb{R})]_p$

Ricordando che $p=k\hslash$

$
\psi(x)= \frac{1}{\sqrt(2\pi \hslash)} \int dp \; \widetilde{\psi}(p) e^{\frac{ipx}{\hslash}} \; \Rightarrow \; 
\psi(p)= \frac{1}{\sqrt(2\pi \hslash)} \int dx \; \psi(x) e^{\frac{ipx}{\hslash}} 
$

$p(x)= \frac{\left\lvert \psi (x) \right\rvert^2}{\left\lVert \psi \right\rVert^2 }$
