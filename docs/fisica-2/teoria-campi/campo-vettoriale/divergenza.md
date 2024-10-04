---
sidebar_position: 3
sidebar_label: 'Divergenza'
---

import { Img25, Img33, Img50, Img75, Img100 } from '@site/src/components/Image';
import Divergenza from './divergenza.png';

# Divergenza
Guardiamo ora un esempio tipico di flusso con sorgenti positive e sorgenti
negative, tipo quello mostrato in figura.
<Img50 src={Divergenza} />
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
div \vec{v}=\frac{\partial v_x}{\partial x}+\frac{\partial v_y}{\partial y}+\frac{\partial v_z}{\partial z}
$$
