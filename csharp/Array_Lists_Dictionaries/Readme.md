# Arrays, Lists und Dictionaries

In C# gibt es auch einige spezielle Datentypen. Wir sehen uns einige an.

## Array

Ein Array fasst eine Menge an Variablen mit gleichem Datentyp in einer einzigen Variable zusammen. So können wir z.B. in einem Array das Alter aller unserer Freunde speichern.

```csharp
int[] alterMeinerFreunde = { 10, 12, 11, 9, 10 };
```

oder anders

```csharp
int[] alterMeinerFreunde = new [5];
int[0] = 10;
int[1] = 12;
int[2] = 11;
int[3] = 9;
int[4] = 10;
```

Beide Beispiele machen dasselbe. In der Variablen `alterMeinerFreunde` werden die fünf Zahlen 10, 12, 11, 9, 10 gespeichert. Jeder dieser Zahlen hat im Array auch eine Position, auch _Index_ genannt. Im zweiten Beispiel siehst du das deutlicher. Die Zahl 10 hat die Position 0, die Zahl 12 die Position 2 usw. Vielleich fragst du dich warum man bei der Position mit der Zahl 0 beginnt. Dazu kannst du in Internet viele [Antworten finden](https://www.google.at/search?q=why+arrays+start+at+0) und du kannst selber entscheiden welche Antwort für dich passt: für uns ist es nun ein Fakt: **Ein Array fängt in C# immer bei Position 0 an.** 

Gehen wir das obige Beispiel noch einmal schritt nach schritt durch:

Hier legen wir eine neue Variable vom Typ Integer Array ( ```int[]``` ) mit dem Name _alterMeinerFreunde_ an. 

```csharp
int[] alterMeinerFreunde;
```
Im nächsten Schritt sagen wir wieviele Elemente wir in diesem Array speichern wollen. In unserem Beispiel sind es fünf.

```csharp
int[] alterMeinerFreunde = new [5];
```

Oder wie im ersten Beispiel sagen wir dies bereits beim Anlegen der Variable, welche Elemente drinnen gespeichert werden sollen und damit sagen wir auch implizit an wie groß das Array ist.

```csharp
int[] alterMeinerFreunde = { 10, 12, 11, 9, 10 };
```

Wenn man einen Wert auslesen will muss man dem Computer sagen an welcher Position. Die Zahl an der zweiten Position kann man so auslesen:

```csharp 
int meinesFreundAlter = alterMeinerFreunde[1];
```
Welcher Wert steht in der Variable ```meinesFreundAlter``` nach dem Befehl?

### Aufgabe

Schreibe in einer Variable die Namen deiner drei besten Freunden oder Freundinnen. Gib jeden dieser Namen in einer _Console_ aus in dem du die vorher angelegte Variable verwendest.

## List

List zeigen einige Ähnlichkeiten mit Array an. Auch in List kann man eine Menge in eine Variable zusammenfassen. Es gibt jedoch einige Unterschiede. Der wohl wesentlichste Unterschied ist das ein List dynamisch und ein Array statisch ist. Was bedeutet es? Wir haben bei Arrays gelernt, dass man immer angeben muss wie groß das Array ist, also wir viel Werte wir in einem Array speichern wollen. Bei List muss man es nicht, wir können dort beliebig viele Werte speichern.

Eine Variable von Typ ```List``` legt man folglich an:

```csharp
List<int> alterMeinerFreunde = new List<int>();
```

Hier haben wir eine ```List``` von Typ ```int``` angelegt, also eine Liste wo Ganzzahlwerten gespeichert werden können. Was wir _nicht_ angegeben haben wir groß die Liste ist.

So fügen wir paar Werte dazu:

```csharp
alterMeinerFreunde.Add(10);
alterMeinerFreunde.Add(12);
alterMeinerFreunde.Add(11);
alterMeinerFreunde.Add(9);
alterMeinerFreunde.Add(10);
```

Siehst du? Du kann mit die Funktion ```Add``` Werte hinzufügen. Aber nicht nur das, du kannst wieder auch Werte entfernen:

```csharp
alterMeinerFreunde.Remove(9);
```

Es gibt viel Funktionen du auf einer List ausführen kannst hier paar Beispiele:

```csharp
int anzahl = alterMeinerFreunde.Count; //Gibt zurück wie viel Einträge sind in die Liste
alterMeinerFreunde.Sort(); //Ordnet die Liste an
alterMeinerFreunde.Clear(); //Löscht alle Einträge aus die Liste
bool gibtEsEinAlterZehn = alterMeinerFreunde.Contains(10); //Gibt zurück in die Variable gibtEsEinAlterZehn ob ein Eintrag 10 existiert
```

Wenn du einen Wert auslesen möchtest kannst es so machen wie bei Array:

```csharp 
int meinesFreundAlter = alterMeinerFreunde[0];
```

Es gibt auch andere und bessere Varianten wie man Werte auslesen kann. aber da würden wir zu weit vorgreifen.

### Ausgabe

Schreibe in einer Variable Namen von drei besten Freunden oder Freundinnen. Sortiere diese von A bis Z. Gebe jede diesen Namen in einer _Console_ aus in dem du die vorher angelegte Variable verwendest.

## Dictionaries

Du hast gesehen, dass wir in vorherigen Beispielen zwar das Alter aber nicht die Namen dazu gespeichert haben. Dazu geeignet sich ```Dictionary```. Dictionary ist eine spezielle Liste, wo man auf eine Position zwei Werte speichern kann ein Wert bei _key_ andere bei _value_.

```csharp
Dictionary<string,int> altersBuch = new Dictionary<string,int>();
altersBuch.Add("Toni", 39);
altersBuch.Add("Daniel", 38);
```

Wichtig ist hier zu sagen dass das _key_ eindeutig sein muss. Das hier wird hier nicht funktionieren:

```csharp
Dictionary<string,int> altersBuch = new Dictionary<string,int>();
altersBuch.Add("Toni", 39);
altersBuch.Add("Daniel", 38);
altersBuch.Add("Toni", 25); //hier wird bei ausführen des Programm eine Fehler passieren, weil schon Toni hinzugefügt haben.
```

Wenn du einen Wert aus Dictionary auslesen möchtest kannst du es folglich machen:
```csharp
var alterVonDaniel = altersBuch["Daniel"];
```

### Aufgabe

Schreibe in einer Variable Vorname, Nachname und das Alter von drei besten Freunden oder Freundinnen. Gebe das Alter von einen diesen Namen in einer _Console_ aus in dem du die vorher angelegte Variable verwendest.

