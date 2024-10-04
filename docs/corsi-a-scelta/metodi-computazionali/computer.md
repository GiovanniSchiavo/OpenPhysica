---
sidebar_position: 2
sidebar_label: 'Il computer'
---

# Il computer

In un __computer__ i dati sono immagazzinati sotto forma di ___byte___. Un byte è un insieme di 8 bit, dove un bit è l'unità di misura più piccola di informazione. Un bit può assumere solo due valori: 0 o 1. Un byte può quindi assumere $2^8 = 256$ valori diversi.

I numeri che verranno utilizzati nei nostri calcoli sono anch'essi rappresentati da byte.
I numeri reali possono essere rappresentati in svariati modi, tra i quali la ___virgola mobile___
$$
0_0 C_1 C_2 \ldots C_{n-1} C_n \cdot 10^{\pm d_1 d_2}
$$

composta da una mantissa $C_1 C_2 \ldots C_{n-1} C_n$ e un esponente $d_1 d_2$.
Lo standard per la virgola mobile è il ___IEEE 754___, che definisce la rappresentazione di numeri reali in virgola mobile a singola (4 bytes, in C chiamato float) e doppia precisione (8 bytes, in C chiamato double).

In singola precisione:
- 1 bit per il segno
- 8 bits per l'esponente (-126, +127)
- 23 bits per la mantissa (da 6 a 9 cifre significative)

In doppia precisione:
- 1 bit per il segno
- 11 bits per l'esponente (-1022, +1023)
- 52 bits per la mantissa (da 15 a 17 cifre significative)

In entrambi c'è un bit riservato per ognuno di questi errori: NaN (not a number), Overflow e Underflow.
