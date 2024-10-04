---
sidebar_position: 1
---

# Graficare un campo scalare

Un primo problema quando si parla di campo riguarda come darne una
pratica rappresentazione su di un foglio. Esistono diversi metodi di rappresentazione,
per i campi scalari il più comune riguarda le curve di livello.
Queste si ottengono fissando la variabile temporale, e imponendo che
la funzione sia uguale ad una certa costante, ad esempio, considerando la
temperatura della nostra camera, possiamo escludere la dipendenza da $z$, e
vedere come varia in $x$, $y$ per un fissato tempo $t^*$.
$$
T(x, y, t^∗) = cost
$$

Per il teorema di Dini, se una delle derivate parziali di $T$ è non nulla in un
punto in cui rimane verificata questa uguaglianza, allora questa equazione è
grafico di una curva nel piano $(x, y)$. Possiamo quindi pensare di disegnare
tutte le curve con:
$$
T(x, y, t^∗) = n · c
$$

Dove $n \in \mathbb{N}$ e $c$ è una qualunque costante arbitraria. Questo metodo è molto
diffuso nelle cartine altimetriche dove vengono rappresentate tutte le curve
di livello delle varie altitudini del suolo, o nelle previsioni del tempo, dove
vengono presentate le curve di livello della pressione atmosferica.
