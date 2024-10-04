---
sidebar_position: 1
sidebar_label: 'Campo vettoriale'
---

# Campo vettoriale

Abbiamo appena definito l'operatore di gradiente, 
adesso proviamo ad applicare il gradiente ad ogni punto di un campo scalare. 
Otteniamo un altro
campo, ma questa volta vettoriale, con la caratteristica di essere un campo
gradiente. Questo particolare tipo di campo viene detto __conservativo__.

## Definizione (Campo conservativo)
Un campo vettoriale si dice conservativo se, e solo se, è generato attraverso l'operatore gradiete da un
qualsiasi campo scalare.
I campi conservativi hanno la notevole proprietà di avere circuitazione
nulla, ovvero preso un qualunque percorso per cui mi muovo da un punto
$P_1$ ad un punto $P_2$, e poi torno da $P_2$ a $P_1$, il lavoro fatto dal campo è nullo!
$$
\oint\vec{\nabla}U\cdot d\vec{l}=0
$$

Questa proprietà si verifica immediatamente:
$$
\oint\vec\nabla U\cdot d\vec l=\oint dU=\int_{P_1}^{P_2}dU+\int_{P_2}^{P_1}dU=U(P_2)–U(P_1)–U(P_1)–U(P_2)=0
$$
