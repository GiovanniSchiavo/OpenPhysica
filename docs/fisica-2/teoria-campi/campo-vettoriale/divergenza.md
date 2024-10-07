---
sidebar_position: 3
sidebar_label: 'Divergenza'
---

# Divergenza
Guardiamo ora un esempio tipico di flusso con sorgenti positive e sorgenti
negative, tipo quello mostrato in figura.
<img class="large" src={require('./divergenza.png').default} />
_Grafico fatto usando le linee di forza di un campo vettoriale
con due sorgenti, $S_1$ e $S_2$, in rosso sono mostrate due superfici qualunque
chiuse attorno a queste sorgenti, la loro caratteristica è quella che il flusso
del campo passante attraverso queste superfici non è mai nullo._

Come si vede dalla figura, possiamo definire una sorgente come un punto
in cui prendendo una qualsiasi superficie infinitesima chiusa attorno a quel
punto, il flusso lungo questa superficie del campo è diverso da zero.
In particolare definendo una quantità ad hoc, la divergenza notiamo
interessanti cose.

## Definizione (Divergenza)
Definiamo la divergenza di un campo vettoriale $\vec{v}(x,y,z)$ come la quantità:
$$
div \; \vec{v}=\frac{\partial v_x}{\partial x}+\frac{\partial v_y}{\partial y}+\frac{\partial v_z}{\partial z}
$$

Può essere scritta sintatticamente come:
$$
div \; \vec{v}=\vec{\nabla} \cdot \vec{v}
$$

Esiste un teorema molto utile, che viene dimostrato nei corsi di analisi
vettoriale [^1], detto ___teorema della divergenza___.

## Teorema (Della divergenza)
Dato comunque una superficie chiusa $S_c$ il flusso del campo vettoriale
lungo questa superficie chiusa può essere calcolato attraverso l'integrale di
volume della divergenza del campo, all'interno del volume rinchiuso dalla
superficie.
$$
\Phi_{S_c}(\vec{v})=\int_{S_c}\vec{v}\cdot\hat{n}ds=\int_{V_c}\vec{\nabla}\cdot\vec{v}dV
$$

<iframe src="https://www.youtube-nocookie.com/embed/rB83DpBJQsE?si=PXIxa1DJo8ykiYxs&amp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="allowfullscreen"></iframe>

[^1]: La dimostrazione del teorema è molto semplice, consiste nell'impiegare sapientemente
il teorema di Gauss-Green.
