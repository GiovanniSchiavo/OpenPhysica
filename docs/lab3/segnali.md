import { Blue, Red, Green, Yellow, Black, White, Gray, Orange, Purple, Pink } from '@site/src/components/TextColor';

---
sidebar-position: 2
sidebar-label: Segnali e amplificazioni di segnali
---

# Segnali e amplificazioni di segnali

I segnali contengono **informazioni** riguardo molteplici oggetti e attività
che ci circondano sia nella vita quotidiana che nel lavoro.
Alcuni esempi:
- la pagina WEB che apriamo sul nostro computer: viene generata da un
  computer e trasmessa (via cavo, fibra e/o WiFi) fino ad arrivare sul nostro
  computer
- la carica elettrica generata per ionizzazione in una camera a deriva

Per poter estrarre le informazioni portate dai segnali bisogna processarli
in modo adeguato:
- la pagina WEB è una sequenza di bits che nel nostro browser vengono
  convertiti in parole o immagini
- la carica elettrica rilasciata nel gas di una camera a deriva deve essere
  raccolta e convertita in forma digitale per poter essere utilizzata nei
  programmi di analisi

Il **processamento** dei segnali tipicamente viene fatto, in modo
opportuno, da **specifici dispositivi elettronici**:
- i bits che costituiscono la pagina WEB vengono interpretati dal processore
  del nostro computer e trasformati in istruzioni per la scheda video
- la carica elettrica rilasciata nella camera a deriva deve essere:
  - raccolta (per induzione)
  - amplificata
    - è un segnale troppo piccolo per le fasi di processamento successive
  - filtrata
  - convertita in forma digitale

Questi passaggi vengono effettuati da dispositivi elettronici diversi, noi ci
concentreremo sulla parte di **amplificazione**.


Un segnale analogico tipicamente è un impulso (variazione temporale) in tensione o corrente.

- Un segnale in tensione tipicamente viene rappresentato da un generatore ideale di tensione con in serie una resistenza $R_S$
  - Circuito equivalente di Thevenin
- Un segnale in corrente tipicamente viene rappresentato da un generatore ideale di corrente con in parallelo una resistenza $R_S$
  - Circuito equivalente di Norton
- Le due forme sono equivalenti, ma si preferisce:
  - La forma di Thevenin quando $R_S$ è piccola
  - La forma di Norton quando $R_S$ è grande

- Amplificatore: dispositivo atto a ingrandire, secondo un rapporto prestabilito, il valore di una grandezza fisica:
  - Amplificatori elettrici
  - Amplificatori sonori
  - Amplificatori meccanici
  - Amplificatori ottici