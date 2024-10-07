---
sidebar-position: 1
sidebar-label: Leggi di Kirchhoff
---

# Leggi di Kirchhoff

Un circuito elettrico viene spesso definito col termine **rete elettrica**.

Gli elementi geometrici della rete sono:
- nodi
- rami
- maglie

Un **nodo** è un punto nel quale convergono almeno 3 conduttori.

I nodi sono collegati da **rami** in cui possono esserci elementi passivi (resistenze, condensatori, induttori) e attivi (generatori).

## Prima legge di Kirchhoff - Legge dei Nodi (KCL)
La somma algebrica delle correnti che confluiscono in un nodo è nulla:
$$
\sum_k i_k = 0
$$

<img class="small" src={require('./kirchhoff-1.png').default} />

Formulazione alternativa: la somma delle correnti che entrano in un nodo è uguale alla somma delle correnti che escono dal nodo.
$$
\sum i_{in} = \sum i_{out}
$$

La legge ci dice che in un punto di un conduttore non possiamo accumulare carica.

## Seconda legge di Kirchhoff - Legge delle maglie (KVL)


### Terza legge di Kirchhoff - 

## Esercizio d'esempio

Dato il circuito in figura, calcolare la corrente $i_x$ e la tensione erogata dal generatore dipendente

<details>
<summary>Soluzione</summary>

I nostri dati sono:
$$
\begin{align*}
    i_x &= i_2 + i_3 \\
    i_x &= \frac{V_0 - V_A}{R}\\
    i_3 &= 3A\\
    R_1 &= 3 \Omega \\
    R_2 &= 2 \Omega
\end{align*}
$$



</details>

