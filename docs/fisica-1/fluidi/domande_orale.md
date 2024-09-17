---
sidebar_position: 20
sidebar_label: Domande tipiche di un esame orale
---

# Domande frequenti di un esame orale di fisica 1

## Domanda 1

Definisci una forza conservativa.

<details>
<summary>Risposta</summary>

Una forza conservativa è una forza il cui lavoro dipende solo 
dai punti di **partenza** e di **arrivo** di un tragitto, non dal cammino percorso. 

Ciò significa che il **lavoro** svolto su un corpo in movimento è lo stesso **indipendentemente 
dalla traiettoria seguita**. In un campo conservativo, la forza può essere descritta come funzione 
posizione nello spazio e non dipende dalla storia passata del corpo. Ogni punto dello spazio ha 
un valore di forza associato, che agisce sul corpo solo quando questo passa per quel punto.

Questo concetto permette di associare una forza non solo al corpo, ma anche allo spazio in cui si muove. 
In più, in un campo conservativo, l'energia meccanica totale del sistema si conserva, 
indipendentemente dal percorso seguito, a condizione che vengano rispettati certi vincoli.

Riassumendo, le proprietà di una forza conservativa (tra loro equivalenti) sono:
- il suo lavoro non dipende dal percorso;
- ammette energia potenziale;
- il lavoro all'andata è opposto al lavoro al ritorno;
- il lavoro su un percorso chiuso è nullo.
</details> 

## Domanda 2

Dimostra che la forza peso è conservativa.

<details>
<summary>Risposta</summary>

Per dimostrare che la forza peso è conservativa, dobbiamo verificare che il lavoro compiuto dalla forza peso su un corpo che 
si sposta da un punto $A$ a un punto $B$ dipenda solo dalla posizione di $A$ e $B$, e non dal percorso seguito.

La forza peso è data da:
$$
\mathbf{F} = m\mathbf{g}
$$
dove $m$ è la massa del corpo e $\mathbf{g}$ è il vettore accelerazione di gravità, che ha direzione verso il basso e modulo costante.

Il lavoro $L$ compiuto dalla forza peso lungo un certo percorso $C$ si calcola come l'integrale della forza lungo il cammino:

$$
L = \int_C \mathbf{F} \cdot d\mathbf{s}
$$

dove $d\mathbf{s}$ è un elemento infinitesimale del percorso. La forza peso agisce solo nella direzione verticale (asse $z$), quindi possiamo scrivere:

$$
L = \int_C -mg \, dz
$$

Il segno meno compare perché la forza è diretta verso il basso, mentre il vettore $dz$ può essere positivo o negativo a seconda che il corpo si muova verso l’alto o verso il basso.
Ora, l'integrale di $-mg \, dz$ dipende solo dalla differenza di quota tra il punto iniziale e il punto finale, non dal particolare percorso seguito. L'integrale diventa:

$$
L = -mg(z_B - z_A)
$$

dove $z_A$ e $z_B$ sono le quote del punto iniziale $A$ e del punto finale $B$.
Poiché il lavoro dipende solo dalle altezze $z_A$ e $z_B$, e non dal percorso seguito, la forza peso è conservativa.

Inoltre, possiamo definire una funzione potenziale $U(z)$ associata alla forza peso, data da:

$$
U(z) = mgz
$$

e il lavoro svolto dalla forza peso è uguale alla variazione dell'energia potenziale:

$$
L = U(z_A) - U(z_B)
$$

Con ciò, abbiamo dimostrato che la forza peso è conservativa.

</details>

## Domanda 3

Dimostra che la forza elastica è conservativa.

<details>
<summary>Risposta</summary>

Per dimostrare che la forza elastica è conservativa, dobbiamo verificare che il lavoro compiuto dalla forza elastica su un corpo che si sposta da un punto $A$ a un punto $B$ dipenda solo dalle posizioni di $A$ e $B$, e non dal percorso seguito.

La forza elastica è descritta dalla legge di Hooke, che afferma che la forza $\mathbf{F}$ esercitata da una molla è proporzionale allo spostamento $\mathbf{x}$ dalla posizione di equilibrio. Matematicamente, possiamo scrivere:

$$
\mathbf{F} = -k \mathbf{x}
$$

dove:
- $k$ è la costante elastica della molla (positiva),
- $\mathbf{x}$ è lo spostamento dalla posizione di equilibrio.

### Calcolo del Lavoro

Il lavoro $L$ compiuto dalla forza elastica lungo un percorso $C$ si calcola come:

$$
L = \int_C \mathbf{F} \cdot d\mathbf{s}
$$

Dove $d\mathbf{s}$ è un elemento infinitesimale del percorso. Nel caso della forza elastica, questa forza è sempre diretta verso la posizione di equilibrio. Supponiamo che il corpo si muova lungo una linea retta, allora possiamo considerare lo spostamento $x$ lungo quella direzione:

$$
L = \int_{x_A}^{x_B} (-k x) \, dx
$$

### Esecuzione dell'Integrale

Calcoliamo l'integrale:

$$
L = -k \int_{x_A}^{x_B} x \, dx
$$

$$
L = -k \left[ \frac{x^2}{2} \right]_{x_A}^{x_B}
$$

$$
L = -k \left( \frac{x_B^2}{2} - \frac{x_A^2}{2} \right)
$$

$$
L = -\frac{k}{2} (x_B^2 - x_A^2)
$$

### Funzione Potenziale

Il lavoro effettuato dalla forza elastica è uguale alla variazione dell'energia potenziale elastica. Possiamo definire l'energia potenziale elastica $U(x)$ associata alla forza elastica come:

$$
U(x) = \frac{1}{2} k x^2
$$

Il lavoro effettuato dalla forza elastica durante uno spostamento dalla posizione $x_A$ alla posizione $x_B$ è dato dalla differenza tra le energie potenziali nei due punti:

$$
L = U(x_A) - U(x_B)
$$

Sostituendo la funzione potenziale, otteniamo:

$$
U(x_A) = \frac{1}{2} k x_A^2
$$

$$
U(x_B) = \frac{1}{2} k x_B^2
$$

$$
L = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2
$$

$$
L = \frac{1}{2} k (x_A^2 - x_B^2)
$$

Notiamo che:

$$
L = - \frac{1}{2} k (x_B^2 - x_A^2)
$$

### Conclusione

Il lavoro compiuto dalla forza elastica dipende solo dalla posizione iniziale e finale e non dal percorso seguito. La forza elastica può quindi essere descritta come un campo conservativo, e l'energia meccanica totale del sistema si conserva, dato che l'energia potenziale elastica varia in base alla posizione. Questo conferma che la forza elastica è conservativa.

</details>

## Domanda 4

Definisci una forza dissipativa.

<details>
<summary>Risposta</summary>

Una forza si dice dissipativa se **non** è **conservativa** e se il lavoro compiuto da essa
è sempre, qualsiasi sia il percorso, **negativo**.
</details>

## Domanda 5
Parlami del momento angolare.

<details>
<summary>Risposta</summary>

Il momento angolare è una grandezza fisica che misura la quantità di moto rotazionale di un corpo rispetto a un punto di riferimento o un asse.
È una misura della "rotazione" di un corpo e si conserva in sistemi chiusi, dove non ci sono forze esterne che agiscono.
È definito come il prodotto vettoriale tra il vettore posizione e il vettore quantità di moto di un corpo rispetto a un punto fisso,
$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}.
$$

Alcune sue proprietà sono:
- Conservazione: In assenza di momenti torcenti esterni, il momento angolare totale di un sistema rimane costante nel tempo (principio di conservazione del momento angolare).

- Momento Angolare di un Corpo Rigido: Per un corpo rigido che ruota attorno a un asse fisso, il momento angolare 
$\mathbf{L}$ è dato da:
$$
\mathbf{L}=I\omega
$$

dove:
$I$ è il momento d'inerzia del corpo rispetto all'asse di rotazione e $\omega$ è la velocità angolare del corpo.
</details>


## domanda 6

Parlami del moto rettilineo in attrito viscoso.

<details>
<summary>Risposta</summary>

### Moto Rettilineo in Attrito Viscoso

Il moto rettilineo di un corpo in un fluido viscoso è descritto dall'equazione di Newton con il termine di attrito viscoso. La forza di attrito viscoso è proporzionale alla velocità del corpo e agisce in senso opposto al moto.

**Equazione del moto:**

La forza totale che agisce su un corpo di massa $m$ è data dalla somma della forza di attrito viscoso e di eventuali altre forze esterne $F$:

$$
m \frac{dv}{dt} = F - b v
$$

dove:
- $m$ è la massa del corpo
- $v$ è la velocità del corpo
- $b$ è il coefficiente di attrito viscoso
- $F$ è la forza esterna applicata

**Soluzione dell'equazione:**

Se $F = 0$ (moto rettilineo uniforme in un fluido viscoso), l'equazione diventa:

$$
m \frac{dv}{dt} = -b v
$$

La soluzione di questa equazione differenziale è:

$$
v(t) = v_0 e^{-\frac{b}{m} t}
$$

dove:
- $v_0$ è la velocità iniziale del corpo

**Moto con forza esterna costante:**

Se è presente una forza esterna costante $F$, la soluzione stazionaria della velocità $v_s$ è:

$$
v_s = \frac{F}{b}
$$

La velocità $v(t)$ come funzione del tempo è quindi:

$$
v(t) = \left( v_0 - \frac{F}{b} \right) e^{-\frac{b}{m} t} + \frac{F}{b}
$$

</details>

## Domanda 7
Parlami del moto armonico.

<details>
<summary>Risposta</summary>

### Moto Armonico

Il moto armonico semplice è un tipo di moto oscillatorio in cui un corpo si muove avanti e indietro intorno a una posizione di equilibrio sotto l'influenza di una forza ripristinatrice proporzionale allo spostamento dal punto di equilibrio.

**Equazione del moto:**

La forza ripristinatrice in un moto armonico semplice è data da:

$$
F = -k x
$$

dove:
- $k$ è la costante elastica (rigidezza della molla)
- $x$ è lo spostamento dal punto di equilibrio

Secondo la seconda legge di Newton, questa forza è uguale alla massa del corpo moltiplicata per l'accelerazione:

$$
m \frac{d^2 x}{dt^2} = -k x
$$

**Equazione differenziale:**

Questa equazione differenziale può essere riscritta come:

$$
\frac{d^2 x}{dt^2} + \omega^2 x = 0
$$

dove $\omega$ è la pulsazione angolare data da:

$$
\omega = \sqrt{\frac{k}{m}}
$$

**Soluzione dell'equazione:**

La soluzione generale dell'equazione differenziale è:

$$
x(t) = A \cos(\omega t + \phi)
$$

dove:
- $A$ è l'ampiezza dell'oscillazione
- $\phi$ è la fase iniziale

**Velocità e accelerazione:**

La velocità e l'accelerazione nel moto armonico semplice sono date da:

$$
v(t) = -A \omega \sin(\omega t + \phi)
$$

$$
a(t) = -A \omega^2 \cos(\omega t + \phi)
$$

L'energia totale del sistema è costante e può essere espressa come la somma dell'energia cinetica e dell'energia potenziale:

$$
E = \frac{1}{2} k A^2
$$

</details>

## Domanda 8
Parlami del concetto di energia e del potenziale armonico.

<details>
<summary>Risposta</summary>

### Concetto di Energia e Potenziale Armonico

**Energia Totale:**

Nel moto armonico semplice, l'energia totale del sistema è costante e si suddivide in energia cinetica e energia potenziale. La somma di queste due forme di energia è l'energia totale del sistema.

**Energia Cinetica:**

L'energia cinetica $E_{\text{cinetica}}$ di un corpo di massa $m$ che si muove con velocità $v$ è data da:

$$
E_{\text{cinetica}} = \frac{1}{2} m v^2
$$

**Energia Potenziale:**

Nel caso del moto armonico semplice, l'energia potenziale $E_{\text{potenziale}}$ è data dall'energia accumulata nella molla o nel sistema elastico, e dipende dalla distanza $x$ dallo stato di equilibrio. Per una molla con costante elastica $k$, l'energia potenziale è:

$$
E_{\text{potenziale}} = \frac{1}{2} k x^2
$$

**Energia Totale del Sistema:**

L'energia totale $E_{\text{totale}}$ è la somma dell'energia cinetica e dell'energia potenziale. Per un sistema in moto armonico semplice, l'energia totale è costante e pari all'energia potenziale massima quando il corpo è a massimo spostamento (ampiezza $A$):

$$
E_{\text{totale}} = \frac{1}{2} k A^2
$$

dove:
- $A$ è l'ampiezza dell'oscillazione

**Relazione tra Energia Cinetica e Potenziale:**

Nel moto armonico semplice, l'energia cinetica e l'energia potenziale variano periodicamente ma la loro somma resta costante. Quando l'energia potenziale è massima (e quindi l'energia cinetica è nulla), il corpo è al massimo spostamento, e viceversa.

**Esempio di Energia in un Moto Armonico:**

Se la velocità $v(t)$ e lo spostamento $x(t)$ sono dati dalle equazioni:

$$
v(t) = -A \omega \sin(\omega t + \phi)
$$

$$
x(t) = A \cos(\omega t + \phi)
$$

l'energia cinetica e potenziale come funzione del tempo possono essere scritte come:

$$
E_{\text{cinetica}}(t) = \frac{1}{2} m \left( A \omega \sin(\omega t + \phi) \right)^2
$$

$$
E_{\text{potenziale}}(t) = \frac{1}{2} k \left( A \cos(\omega t + \phi) \right)^2
$$

</details>


## Domanda 9
Parlami delle forze centrali. Cosa significa isotropo?

<details>
<summary>Risposta</summary>

### Forze Centrali

Le forze centrali sono forze che agiscono su un corpo e sono dirette lungo una linea che passa per un punto fisso, chiamato centro. La magnitudine di una forza centrale dipende solo dalla distanza del corpo dal centro e non dalla direzione del corpo.

**Definizione Matematica:**

Una forza centrale $\mathbf{F}$ può essere descritta come:

$$
\mathbf{F} = -f(r) \hat{r}
$$

dove:
- $f(r)$ è una funzione della distanza $r$ dal centro
- $\hat{r}$ è il vettore unitario radiale che punta verso o lontano dal centro

**Esempi di Forze Centrali:**

1. **Forza Gravitazionale:**
   La forza gravitazionale tra due corpi di massa $m_1$ e $m_2$ separati da una distanza $r$ è una forza centrale e viene data da:

   $$
   \mathbf{F} = -\frac{G m_1 m_2}{r^2} \hat{r}
   $$

   dove $G$ è la costante di gravitazione universale.

2. **Forza Elettrica:**
   La forza elettrica tra due cariche $q_1$ e $q_2$ è una forza centrale e viene data da:

   $$
   \mathbf{F} = \frac{k q_1 q_2}{r^2} \hat{r}
   $$

   dove $k$ è la costante di Coulomb.

### Isotropia

Il termine **isotropo** si riferisce a una proprietà di un sistema che è identico in tutte le direzioni. In altre parole, un sistema isotropo non dipende dalla direzione, ma solo dalla posizione o dalla distanza.

Un materiale è isotropo se le sue proprietà fisiche (come la resistenza o la conducibilità) sono le stesse in tutte le direzioni. Ad esempio, una sfera di materiale isotropo avrà le stesse caratteristiche meccaniche ovunque

</details>

## Domanda 10
Cosa sono le superfici equipotenziali?  

<details>
<summary>Risposta</summary>

### Superfici Equipotenziali

Le superfici equipotenziali sono superfici su cui il potenziale di un campo è costante. In altre parole, ogni punto su una superficie equipotenziale ha lo stesso valore di potenziale.

**Definizione Matematica:**

Per un campo di potenziale $\Phi$, una superficie equipotenziale è definita come il luogo geometrico dei punti per cui:

$$
\Phi(\mathbf{r}) = \text{costante}
$$

dove $\mathbf{r}$ rappresenta le coordinate spaziali.

**Proprietà delle Superfici Equipotenziali:**

1. **Perpendicolarità al Campo:**
   Le superfici equipotenziali sono sempre perpendicolari alle linee di campo. Questo significa che il campo gravitazionale $\mathbf{g}$ è ortogonale alla superficie equipotenziale. Matematicamente, questo può essere espresso come:

   $$
   \mathbf{E} \cdot \mathbf{n} = -\frac{d\Phi}{dx} = 0
   $$

   dove $\mathbf{n}$ è il vettore normale alla superficie.

2. **Nessun Lavoro per Movimento:**
   Non è richiesto lavoro per spostare una particella lungo una superficie equipotenziale, poiché il potenziale non cambia. Questo significa che una particella che si muove lungo una superficie equipotenziale non cambia la sua energia potenziale.

3. **Curvatura e Forma:**
   La forma delle superfici equipotenziali dipende dalla distribuzione del campo. Per un campo elettrico generato da una carica puntiforme, le superfici equipotenziali sono sfere concentriche intorno alla carica. Per un campo gravitazionale generato da una massa puntiforme, hanno la stessa forma sferica.

</details>

## Domanda 11
Definisci il concetto di energia in fisica.

<details>
<summary>Risposta</summary>

L'energia è una grandezza fisica scalare che rappresenta la capacità di un sistema di compiere lavoro o di produrre cambiamenti. È una misura della quantità di lavoro che un sistema può fare o della capacità di un sistema di influenzare il suo ambiente attraverso forze, movimenti o trasformazioni.
</details>

## Domanda 12
Parlami del pendolo semplice.

<details>
<summary>Risposta</summary>

### Oscillazione del Pendolo Semplice

**Definizione:**

Un pendolo semplice è costituito da una massa appesa a un filo inestensibile e senza peso, che oscilla liberamente intorno a una posizione di equilibrio sotto l'influenza della gravità.

**Equazione del Moto:**

Per piccole oscillazioni, il pendolo semplice si comporta come un oscillatore armonico. La forza di ritorno verso la posizione di equilibrio è proporzionale all'angolo di deflessione $\theta$. L'equazione del moto è:

$$
\frac{d^2 \theta}{dt^2} + \frac{g}{L} \theta = 0
$$

dove:
- $g$ è l'accelerazione dovuta alla gravità
- $L$ è la lunghezza del filo

**Periodo dell'Oscillazione:**

Il periodo $T$ (tempo necessario per completare un'oscillazione) di un pendolo semplice per piccole oscillazioni è dato da:

$$
T = 2\pi \sqrt{\frac{L}{g}}
$$

**Frequenza dell'Oscillazione:**

La frequenza $f$ dell'oscillazione è l'inverso del periodo:

$$
f = \frac{1}{T} = \frac{1}{2\pi} \sqrt{\frac{g}{L}}
$$

**Ampiezza dell'Oscillazione:**

Per piccole oscillazioni, l'ampiezza non influisce sul periodo. Tuttavia, per oscillazioni più ampie, il periodo aumenta leggermente rispetto a quello previsto per piccole oscillazioni.

**Energia:**

L'energia totale del pendolo semplice è la somma dell'energia cinetica e dell'energia potenziale. L'energia potenziale massima si verifica alla massima deflessione, mentre l'energia cinetica è massima nella posizione di equilibrio.

$$
E_{\text{totale}} = \frac{1}{2} m v^2 + \frac{1}{2} k \theta^2
$$

dove $k = \frac{mg}{L}$ è la costante elastica per il pendolo.

**Approssimazione:**

L'approssimazione dell'oscillazione armonica è valida solo per piccole angolazioni ($\theta \ll 1$ radiante). Per angoli più grandi, l'oscillazione non è più perfettamente armonica e il periodo aumenta.


</details>


## Domanda 13
Come ricavi e come definisci l'energia potenziale efficace? In quali ipotesi?

<details>
<summary>Risposta</summary>

### Energia Potenziale Efficace

**Definizione:**

L'energia potenziale efficace è un concetto utilizzato per semplificare l'analisi del moto di un corpo in un campo di forze centrali. Essa rappresenta l'energia potenziale totale considerata in un sistema che tiene conto delle forze e delle coordinate rilevanti, spesso includendo un termine aggiuntivo che riflette l'influenza di un'altra variabile, come la posizione angolare nel caso di un pendolo.

**Ricavo dell'Energia Potenziale Efficace:**

Per un pendolo semplice di lunghezza $L$ e massa $m$, l'energia potenziale $U$ in un campo gravitazionale è data da:

$$
U = mgh
$$

dove $h$ è l'altezza rispetto a una posizione di riferimento. Se si usa il sistema di coordinate angolari, l'altezza $h$ può essere espressa in termini dell'angolo $\theta$:

$$
h = L (1 - \cos \theta)
$$

Quindi, l'energia potenziale è:

$$
U = mgL (1 - \cos \theta)
$$

**Energia Potenziale Efficace:**

Nel caso del pendolo, l'energia potenziale efficace $U_{\text{eff}}$ è:

$$
U_{\text{eff}} = mgL \left(1 - \cos \theta\right)
$$

Nel caso di un'orbita gravitazionale, l'energia potenziale efficace può includere un termine associato alla forza centripeta. Per un'orbita circolare, l'energia potenziale efficace è:

$$
U_{\text{eff}} = -\frac{GMm}{r} + \frac{1}{2} m \omega^2 r^2
$$

dove:
- $-\frac{GMm}{r}$ è l'energia potenziale gravitazionale
- $\frac{1}{2} m \omega^2 r^2$ è l'energia cinetica associata al moto circolare

**Ipotesi:**

1. **Pendolo Semplice:**
   - Oscillazioni piccole: Si assume che l'oscillazione sia armonica e l'energia potenziale efficace può essere approssimata con una funzione quadratica in $\theta$.
   - La lunghezza del filo è costante e il filo è inestensibile.

2. **Sistema di Orbita:**
   - La forza centrale è una forza gravitazionale o simile.
   - Il moto è circolare o vicino al circolare per cui l'energia cinetica associata al movimento rotazionale deve essere inclusa.

**Utilità:**

L'energia potenziale efficace è utile per analizzare il comportamento del sistema in termini di energia totale e per semplificare il calcolo del moto e delle traiettorie, specialmente in presenza di forze centrali.

</details>


## Domanda 14
Definisci il concetto di lavoro in fisica.

<details>
<summary>Risposta</summary>

### Concetto di Lavoro

**Definizione:**

Il lavoro è l'energia trasferita a un corpo quando una forza agisce su di esso e lo sposta. È dato dal prodotto scalare tra la forza e lo spostamento.

**Formula:**

$$
W = \mathbf{F} \cdot \mathbf{s} = F s \cos \theta
$$

dove:
- $\mathbf{F}$ è la forza
- $\mathbf{s}$ è lo spostamento
- $\theta$ è l'angolo tra la forza e lo spostamento

**Unità di Misura:**

L'unità di misura del lavoro è il joule (J), con $1 \text{ J} = 1 \text{ N} \cdot \text{m}$.

**Esempi:**

- **Lavoro Positivo:** Una forza di 50 N che sposta un corpo di 10 m nella stessa direzione della forza: $W = 500 \text{ J}$.
- **Lavoro Negativo:** Se la forza è opposta alla direzione dello spostamento, il lavoro è negativo.

**Proprietà:**

- **Lavoro Zero:** Se non c'è spostamento o la forza è perpendicolare al movimento, il lavoro è zero.

Il lavoro è legato alla variazione dell'energia cinetica del corpo.

</details>

## Domanda 15
Enuncia le leggi di Keplero.

<details>
<summary>Risposta</summary>

### Leggi di Keplero

1. **Prima Legge di Keplero (Legge delle Orbite Ellittiche):**
   I pianeti si muovono attorno al Sole lungo orbite ellittiche, con il Sole in uno dei due fuochi dell'ellisse.

2. **Seconda Legge di Keplero (Legge delle Aree):**
   Il raggio vettore che collega un pianeta al Sole spazza aree uguali in intervalli di tempo uguali. In altre parole, un pianeta si muove più velocemente quando è più vicino al Sole e più lentamente quando è più lontano.

3. **Terza Legge di Keplero (Legge dei Periodi):**
   Il quadrato del periodo orbitale $T$ di un pianeta è proporzionale al cubo della distanza media $a$ dal Sole. Matematicamente:

   $$
   \frac{T^2}{a^3} = \text{costante}
   $$

   Questa costante è la stessa per tutti i pianeti del sistema solare.

</details>


## Domanda 16
Enuncia le leggi di Newton.

<details>
<summary>Risposta</summary>

### Leggi di Newton

1. **Prima Legge di Newton (Legge dell'Inerzia):**
   Un corpo rimane in stato di riposo o in moto rettilineo uniforme a meno che non sia costretto a cambiare il suo stato da una forza esterna. In altre parole, un corpo mantiene il suo stato di moto se non agiscono forze esterne su di esso.

2. **Seconda Legge di Newton (Legge della Forza e Accelerazione):**
   La forza risultante $F$ che agisce su un corpo è uguale al prodotto della sua massa $m$ e della sua accelerazione $a$. Matematicamente:

   $$
   \mathbf{F} = m \mathbf{a}
   $$

   Questa legge stabilisce che la forza applicata a un corpo determina l'accelerazione che esso acquisisce, proporzionale alla forza e inversamente proporzionale alla massa.

3. **Terza Legge di Newton (Legge di Azione e Reazione):**
   Per ogni azione c'è una reazione uguale e contraria. Se un corpo A esercita una forza su un corpo B, allora il corpo B esercita una forza di uguale intensità e direzione opposta su A.

   $$
   \mathbf{F}_{AB} = -\mathbf{F}_{BA}
   $$

   Queste forze sono sempre di pari intensità e opposte direzioni, e agiscono su corpi diversi.

</details>


## Domanda 17
Enuncia il teorema delle forze vive e le relative ipotesi.

<details>
<summary>Risposta</summary>

### Teorema delle Forze Vive

**Enunciazione:**

Il teorema delle forze vive stabilisce che il lavoro totale effettuato da tutte le forze su un corpo durante un intervallo di tempo è uguale alla variazione dell'energia cinetica del corpo. In altre parole, la variazione dell'energia cinetica di un corpo è pari al lavoro netto delle forze che agiscono su di esso.

Matematicamente, il teorema può essere espresso come:

$$
W_{\text{netto}} = \Delta K
$$

dove:
- $W_{\text{netto}}$ è il lavoro totale fatto dalle forze esterne sul corpo
- $\Delta K$ è la variazione dell'energia cinetica del corpo

**Ipotesi:**

1. **Sistema Isolato:**
   Il teorema si applica a corpi o sistemi per cui le forze esterne sono conosciute e il sistema non scambia energia con l'ambiente esterno in forme diverse dall'energia cinetica.

2. **Forze Conservatrici e Non Conservatrici:**
   Il teorema è valido sia per le forze conservative (come la forza gravitazionale) sia per le forze non conservative (come l'attrito). Per le forze conservative, il lavoro è uguale alla variazione dell'energia potenziale, mentre per le forze non conservative, parte del lavoro può essere dissipata come calore o altre forme di energia.

3. **Corpo Rigido:**
   Il teorema assume che il corpo sia trattato come un corpo rigido se le forze considerate sono interne o se il sistema è composto da più corpi rigidi.

4. **Spostamenti e Forze:**
   Le forze devono essere applicate e gli spostamenti devono essere misurati nel sistema di riferimento in cui il lavoro è calcolato.

**Utilità:**

Il teorema delle forze vive è utile per analizzare e risolvere problemi di dinamica e meccanica, fornendo una connessione tra il lavoro fatto dalle forze e la variazione dell'energia cinetica di un corpo.

</details>


## Domanda 18
Quando un sistema di riferimento mobile è inerziale? Scrivi le trasformazioni di Galileo.

<details>
<summary>Risposta</summary>

### Leggi di Trasformazione dei Sistemi di Riferimento

**1. Trasformazioni di Galileo:**

Le trasformazioni di Galileo descrivono il passaggio da un sistema di riferimento a un altro che si muove con velocità costante rispetto al primo. Sono valide nella meccanica classica e si applicano a sistemi di riferimento inerziali.

**Formule delle Trasformazioni di Galileo:**

Consideriamo due sistemi di riferimento: $S$ e $S'$, dove $S'$ si muove con velocità costante $v$ rispetto a $S$ lungo l'asse $x$.

- **Coordinate spaziali:**

  Se un punto ha coordinate $(x, y, z)$ nel sistema $S$ e $(x', y', z')$ nel sistema $S'$, allora:

  $$
  x' = x - vt
  $$
  $$
  y' = y
  $$
  $$
  z' = z
  $$

- **Coordinate temporali:**

  Il tempo $t$ è lo stesso in entrambi i sistemi di riferimento:

  $$
  t' = t
  $$

- **Velocità:**

  Se un oggetto ha velocità $(v_x, v_y, v_z)$ nel sistema $S$, allora nel sistema $S'$ la velocità $(v_x', v_y', v_z')$ è data da:

  $$
  v_x' = v_x - v
  $$
  $$
  v_y' = v_y
  $$
  $$
  v_z' = v_z
  $$

**2. Sistema di Riferimento Inerziale:**

Un sistema di riferimento è inerziale se in esso valgono le leggi della meccanica classica di Newton. In altre parole, un sistema di riferimento è inerziale se:

- Gli oggetti su cui non agiscono forze esterne si muovono in linea retta con velocità costante (o rimangono fermi).
- Le leggi di Newton sono valide in quel sistema.

Un sistema di riferimento mobile è inerziale se si muove con velocità costante rispetto a un altro sistema di riferimento inerziale, ovvero se non è accelerato. In altre parole, se un sistema di riferimento si muove con moto rettilineo uniforme rispetto a un sistema di riferimento inerziale, allora è anche esso un sistema di riferimento inerziale.

**Utilità:**

Le trasformazioni di Galileo sono utilizzate per passare da un sistema di riferimento a un altro che si muove con velocità costante e sono fondamentali per risolvere problemi in meccanica classica. La condizione di inerzialità è cruciale per applicare le leggi della fisica in modo corretto e per garantire che le leggi di Newton siano valide.

</details>


## Domanda 19
Parla del caso di un sistema di riferimento rotante rispetto ad un sistema di riferimento inerziale.

<details>
<summary>Risposta</summary>

### Sistema di Riferimento Rotante Rispetto a un Sistema Inerziale

Quando si analizza un sistema di riferimento rotante rispetto a un sistema inerziale, è necessario considerare le forze apparenti che emergono a causa della rotazione. Queste forze non esistono in un sistema di riferimento inerziale, ma appaiono in un sistema di riferimento rotante.

**1. Forze Apparenti in un Sistema di Riferimento Rotante:**

In un sistema di riferimento rotante, ci sono tre principali forze apparenti che devono essere considerate:

- **Forza Centrifuga:**
  
  Questa forza appare come se fosse diretta verso l'esterno rispetto all'asse di rotazione e dipende dalla velocità angolare $\omega$ e dalla distanza $r$ dal punto di rotazione. È data da:

  $$
  \mathbf{F}_{\text{cent}} = m \omega^2 r
  $$

  dove:
  - $m$ è la massa dell'oggetto
  - $\omega$ è la velocità angolare del sistema di riferimento
  - $r$ è la distanza dal centro di rotazione

- **Forza di Coriolis:**
  
  Questa forza appare quando un oggetto si muove all'interno del sistema di riferimento rotante. È data da:

  $$
  \mathbf{F}_{\text{Coriolis}} = -2 m (\mathbf{v} \times \mathbf{\omega})
  $$

  dove:
  - $\mathbf{v}$ è la velocità dell'oggetto rispetto al sistema di riferimento rotante
  - $\mathbf{\omega}$ è il vettore della velocità angolare

- **Forza di Inerzia (o Forza di Rotazione):**
  
  Questa forza è una conseguenza della rotazione e può essere descritta come una forza apparente che è diretta verso il centro di rotazione. È data da:

  $$
  \mathbf{F}_{\text{iner}} = -m \mathbf{\omega} \times (\mathbf{\omega} \times \mathbf{r})
  $$

**2. Equazione del Moto in un Sistema di Riferimento Rotante:**

Nel sistema di riferimento rotante, la seconda legge di Newton deve includere le forze apparenti. La forza totale apparente $\mathbf{F}_{\text{tot}}$ che agisce su un corpo di massa $m$ è:

$$
\mathbf{F}_{\text{tot}} = \mathbf{F}_{\text{real}} + \mathbf{F}_{\text{cent}} + \mathbf{F}_{\text{Coriolis}} + \mathbf{F}_{\text{iner}}
$$

dove $\mathbf{F}_{\text{real}}$ è la forza reale che agisce sull'oggetto.

**3. Applicazioni e Considerazioni:**

- **Effetti nella Meteorologia:** Le forze apparenti come la forza di Coriolis sono fondamentali per spiegare i modelli di circolazione atmosferica e oceanica.
- **Effetti nella Fisica dei Corpi Celesti:** La forza centrifuga è considerata nei calcoli dell'orbita dei pianeti e nelle simulazioni delle dinamiche degli anelli planetari.

**4. Trasformazioni tra Sistemi di Riferimento:**

Per passare da un sistema di riferimento rotante a uno inerziale, è necessario utilizzare trasformazioni che tengano conto delle forze apparenti e della velocità angolare del sistema rotante. Le coordinate e le velocità devono essere trasformate con attenzione per mantenere la coerenza nelle equazioni del moto.

In sintesi, un sistema di riferimento rotante introduce forze apparenti che devono essere considerate per applicare correttamente le leggi della dinamica. La comprensione di queste forze è cruciale per risolvere problemi in meccanica e in altre aree della fisica.

</details>


## Domanda 20
Parla del pendolo di Focault.

<details>
<summary>Risposta</summary>
### Pendolo di Foucault

**Definizione:**

Il pendolo di Foucault è un pendolo che oscilla liberamente in un piano e mostra l'effetto della rotazione terrestre sul piano di oscillazione. Fu ideato dal fisico francese Léon Foucault nel 1851 come dimostrazione diretta della rotazione della Terra.

**Funzionamento:**

- **Struttura:** Il pendolo di Foucault è costituito da un pendolo lungo e pesante che può oscillare in un piano qualsiasi, fissato a un punto di sospensione con un filo o una corda robusta.
- **Oscillazione:** Quando il pendolo è messo in movimento, esso oscilla nel suo piano di oscillazione senza subire variazioni di direzione a causa di forze esterne.
- **Effetto della Rotazione della Terra:** A causa della rotazione della Terra, il piano di oscillazione del pendolo sembra ruotare rispetto alla superficie terrestre. Questo effetto è noto come "precessione" del piano di oscillazione.

**Matematica e Osservazioni:**

- **Precessione del Piano di Oscillazione:** Il piano di oscillazione del pendolo ruota rispetto al suolo con una velocità angolare che dipende dalla latitudine del luogo in cui è situato. La velocità angolare della precessione è data da:

  $$
  \Omega_{\text{precessione}} = \omega_{\text{Terra}} \sin \phi
  $$

  dove:
  - $\omega_{\text{Terra}}$ è la velocità angolare di rotazione della Terra (circa $7.292 \times 10^{-5} \text{ rad/s}$)
  - $\phi$ è la latitudine del luogo

  Ad esempio, all'equatore ($\phi = 0^\circ$), il piano di oscillazione del pendolo non mostra rotazione apparente rispetto alla Terra, mentre ai poli ($\phi = 90^\circ$) il piano di oscillazione ruota con la stessa velocità angolare della Terra.

- **Periodi di Precessione:** A latitudini diverse, il periodo di precessione del piano di oscillazione varia. Per esempio, al polo, il piano di oscillazione compie una rotazione completa in 24 ore, mentre alla latitudine di 45° è di circa 24 ore diviso il coseno di 45°.

**Implicazioni e Significato:**

- **Conferma della Rotazione Terrestre:** Il pendolo di Foucault fornisce una prova visiva e diretta della rotazione della Terra. La precessione del piano di oscillazione dimostra che la Terra ruota attorno al proprio asse.
- **Educazione e Dimostrazione:** È un importante strumento educativo nei musei e nei planetari per mostrare i principi della rotazione terrestre e la fisica del moto rotatorio.

**Conclusione:**

Il pendolo di Foucault è un esperimento elegante e semplice che ha avuto un impatto significativo nella comprensione della rotazione della Terra. Attraverso la sua osservazione, è possibile vedere e misurare direttamente l'effetto della rotazione terrestre, confermando così una delle principali caratteristiche del nostro pianeta.

</details>


## Domanda 21
Ricava la Legge di Gravitazione universale. Quanto vale la costante di Cavendish?

<details>
<summary>Risposta</summary>

### Legge di Gravitazione Universale

**Enunciazione:**

La Legge di Gravitazione Universale afferma che ogni coppia di corpi si attrae con una forza gravitazionale che è direttamente proporzionale al prodotto delle loro masse e inversamente proporzionale al quadrato della distanza tra i loro centri.

**Formula:**

$$
F = G \frac{m_1 m_2}{r^2}
$$

dove:
- $F$ è la forza gravitazionale
- $G$ è la costante di gravitazione universale
- $m_1$ e $m_2$ sono le masse dei due corpi
- $r$ è la distanza tra i centri dei due corpi

**Costante di Cavendish:**

La costante di gravitazione universale $G$ è stata determinata sperimentalmente e ha il valore:

$$
G \approx 6.67430 \times 10^{-11} \text{ m}^3 \text{ kg}^{-1} \text{ s}^{-2}
$$

Questo valore è stato ottenuto attraverso esperimenti come quello di Cavendish nel 1798, che misurò la forza gravitazionale tra masse conosciute per calcolare $G$.

</details>


## Domanda 22
Enuncia il teorema di Gauss. Perché (e dove) il campo gravitazionale è in modulo uguale a $g$?

<details>
<summary>Risposta</summary>
### Definizione di Flusso

Il flusso di un campo vettoriale attraverso una superficie è una misura della quantità totale del campo che attraversa quella superficie. È definito come l'integrale del prodotto scalare tra il campo vettoriale e il vettore normale alla superficie.

**Formula del Flusso:**

Se $\mathbf{F}$ è un campo vettoriale e $\mathbf{n}$ è il vettore normale alla superficie $S$, il flusso $\Phi$ attraverso $S$ è dato da:

$$
\Phi = \int_S \mathbf{F} \cdot d\mathbf{A}
$$

dove:
- $\mathbf{F}$ è il campo vettoriale
- $d\mathbf{A}$ è un elemento di area della superficie $S$ con verso normale $\mathbf{n}$

### Teorema di Gauss

**Enunciazione:**

Il teorema di Gauss (o teorema della divergenza) stabilisce che il flusso totale di un campo vettoriale attraverso una superficie chiusa è uguale all'integrale del divergenza del campo all'interno del volume racchiuso dalla superficie.

**Formula del Teorema di Gauss:**

$$
\int_S \mathbf{F} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{F}) \, dV
$$

dove:
- $\int_S \mathbf{F} \cdot d\mathbf{A}$ è il flusso del campo $\mathbf{F}$ attraverso la superficie chiusa $S$
- $\int_V (\nabla \cdot \mathbf{F}) \, dV$ è l'integrale della divergenza del campo $\mathbf{F}$ all'interno del volume $V$ racchiuso dalla superficie $S$
- $\nabla \cdot \mathbf{F}$ è la divergenza del campo vettoriale $\mathbf{F}$

### Campo Gravitazionale e Accelerazione Gravitazionale

Il campo gravitazionale $\mathbf{g}$ e l'accelerazione gravitazionale $g$ sono strettamente correlati.

**Definizione di Campo Gravitazionale:**

Il campo gravitazionale $\mathbf{g}$ in un punto è definito come la forza per unità di massa che agisce su un corpo in quel punto:

$$
\mathbf{g} = \frac{\mathbf{F}}{m}
$$

dove $\mathbf{F}$ è la forza gravitazionale e $m$ è la massa del corpo.

**Definizione di Accelerazione Gravitazionale:**

L'accelerazione gravitazionale $g$ è la grandezza scalare che misura la forza gravitazionale per unità di massa al suolo, ed è numericamente uguale al modulo del campo gravitazionale $\mathbf{g}$:

$$
g = |\mathbf{g}|
$$

**Perché il Campo Gravitazionale è uguale a $g$:**

Nel contesto della superficie terrestre, dove il campo gravitazionale $\mathbf{g}$ è quasi uniforme e diretto verso il basso, il modulo di $\mathbf{g}$ è rappresentato come $g$. La relazione tra il campo gravitazionale e l'accelerazione gravitazionale è quindi:

$$
\mathbf{g} = -g \hat{e}_z
$$

dove $\hat{e}_z$ è il versore verso il basso e $g$ è l'accelerazione gravitazionale. La costante $g$ è approssimativamente uguale a $9.81 \text{ m/s}^2$ alla superficie della Terra.

Quindi, nel contesto della gravità terrestre e in prossimità della superficie terrestre, $g$ è numericamente uguale al modulo del campo gravitazionale $\mathbf{g}$.

</details>



## Domanda 23
Ricava il teorema di Konig per l'energia cinetica.

<details>
<summary>Risposta</summary>

### Teorema di König per l'Energia Cinetica

**Enunciazione:**

Il teorema di König afferma che l'energia cinetica totale di un corpo rigido può essere espressa come la somma dell'energia cinetica di traslazione e dell'energia cinetica di rotazione rispetto al centro di massa.

**Formula:**

$$
T = T_{\text{trasl}} + T_{\text{rot}}
$$

dove:
- $T$ è l'energia cinetica totale del corpo rigido.
- $T_{\text{trasl}} = \frac{1}{2} M \mathbf{V}_{\text{CM}}^2$ è l'energia cinetica di traslazione, con $M$ massa totale e $\mathbf{V}_{\text{CM}}$ velocità del centro di massa.
- $T_{\text{rot}} = \frac{1}{2} \mathbf{\omega}^T I \mathbf{\omega}$ è l'energia cinetica di rotazione, con $\mathbf{\omega}$ velocità angolare e $I$ tensore di inerzia.

**Spiegazione:**

1. **Energia Cinetica di Traslazione:** Rappresenta l'energia dovuta al movimento del corpo rigido come un tutto, considerato come se tutta la massa fosse concentrata nel centro di massa che si muove con velocità $\mathbf{V}_{\text{CM}}$.

2. **Energia Cinetica di Rotazione:** Rappresenta l'energia dovuta al movimento di rotazione del corpo rigido attorno al proprio centro di massa.

Il teorema di König consente di analizzare separatamente il movimento di traslazione e rotazione di un corpo rigido, facilitando la risoluzione di problemi dinamici complessi.

</details>


## Domanda 24
Ricava il teorema di Konig per il momento angolare.

<details>
<summary>Risposta</summary>

### Teorema di König per il Momento Angolare

**Enunciazione:**

Il teorema di König per il momento angolare afferma che il momento angolare totale di un corpo rigido rispetto a un punto fisso può essere scomposto in due componenti: il momento angolare dovuto alla traslazione del centro di massa e il momento angolare dovuto alla rotazione del corpo rigido attorno al suo centro di massa.

**Formula:**

$$
\mathbf{L} = \mathbf{L}_{\text{trasl}} + \mathbf{L}_{\text{rot}}
$$

dove:
- $\mathbf{L}$ è il momento angolare totale rispetto a un punto fisso.
- $\mathbf{L}_{\text{trasl}}$ è il momento angolare dovuto alla traslazione del centro di massa.
- $\mathbf{L}_{\text{rot}}$ è il momento angolare dovuto alla rotazione del corpo rigido attorno al suo centro di massa.

**Componenti del Momento Angolare:**

1. **Momento Angolare di Traslazione:**

   Il momento angolare di traslazione è dato da:

   $$
   \mathbf{L}_{\text{trasl}} = \mathbf{r}_{\text{CM}} \times (M \mathbf{V}_{\text{CM}})
   $$

   dove:
   - $\mathbf{r}_{\text{CM}}$ è il vettore di posizione del centro di massa rispetto al punto fisso.
   - $M$ è la massa totale del corpo rigido.
   - $\mathbf{V}_{\text{CM}}$ è la velocità del centro di massa.

2. **Momento Angolare di Rotazione:**

   Il momento angolare di rotazione rispetto al centro di massa è dato da:

   $$
   \mathbf{L}_{\text{rot}} = I \mathbf{\omega}
   $$

   dove:
   - $I$ è il tensore di inerzia del corpo rigido rispetto al centro di massa.
   - $\mathbf{\omega}$ è il vettore velocità angolare.

**Derivazione del Teorema di König per il Momento Angolare:**

Il momento angolare totale rispetto a un punto fisso è composto da due contributi:

- **Traslazione:** Il momento angolare dovuto al movimento del centro di massa del corpo, calcolato come il prodotto vettoriale tra la posizione del centro di massa rispetto al punto fisso e il momento lineare totale ($M \mathbf{V}_{\text{CM}}$).

- **Rotazione:** Il momento angolare dovuto alla rotazione del corpo attorno al centro di massa, calcolato come il prodotto tra il tensore di inerzia e la velocità angolare.

Quindi, il momento angolare totale è la somma di questi due contributi:

$$
\mathbf{L} = \mathbf{r}_{\text{CM}} \times (M \mathbf{V}_{\text{CM}}) + I \mathbf{\omega}
$$

**Conclusione:**

Il teorema di König per il momento angolare consente di scomporre il momento angolare totale di un corpo rigido in momenti angolari di traslazione e rotazione, facilitando l'analisi dei movimenti complessi di un corpo rigido.

</details>



## Domanda 25
Enuncia il primo ed il secondo teorema della termodinamica.

<details>
<summary>Risposta</summary>

#### Primo principio della Termodinamica

L'energia interna di un sistema termodinamico isolato è costante.

#### Secondo principio della Termodinamica
Possibili formulazioni:

- È impossibile realizzare una trasformazione il cui unico risultato sia quello di trasferire calore da un corpo più freddo a uno più caldo senza l'apporto di lavoro esterno (formulazione di Clausius).
- È impossibile realizzare una macchina termica ciclica il cui unico risultato sia la conversione in lavoro di tutto il calore assorbito da una sorgente omogenea (formulazione di Kelvin-Planck).
- È impossibile realizzare una macchina termica il cui rendimento sia pari al 100%.

</details>