---
sidebar_position: 1
sidebar_label: Teoremi sugli insiemi
---

# Teoremi sugli insiemi

## Teorema
Sia $E \subseteq \mathbb{R}$ un insieme non vuoto, chiuso e limitato. allora esistono $\min E$ e $\max E$.

### Dimostrazione
Si prova l'esistenza del massimo (l'esistenza del minimo è del tutto analoga).

Poiché $E$ è non vuoto e (superiormente) limitato, esiste un punto $M$ che è estremo superiore di $E$, $M:=\sup E \in \mathbb{R}$. 
Se $M \in E$, allora il massimo esiste e coincide con $M$ per definizione.

Supponiamo per assurdo che $M \in \mathcal{C}E$ (insieme complementare di $E$).
Per la caratterizzazione dell'estremo superiore, per ogni $\varepsilon > 0$ esiste $x_\varepsilon \in (M-\varepsilon,M) \cap E=(M-\varepsilon,M)\setminus \mathcal{C}E$.
Perciò $M$ non è interno a $\mathcal{C}E$, cioè $\mathcal{C}E$ non è aperto, ovvero $E$ non è chiuso. Ciò contraddice l'ipotesi, quindi $M \in E$.