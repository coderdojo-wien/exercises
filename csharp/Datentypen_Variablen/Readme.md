# Datentypen und Variablen

## Datentypen

In C# gibt es mehrere Datentypen. Einen Überblick welche Datentypen in C# erhalten sind kann du [hier](https://docs.microsoft.com/de-de/dotnet/articles/csharp/language-reference/keywords/reference-tables-for-types) sehen. Ein Datentyp bestimmt welche Werte eine Variable annehmen darf. Hier die wichtigsten der sogenannten integrierten Typen.

|Schlüsselwort|Wertebereich|
|:---:|---|
|```bool```|```true``` oder ```false```|
|```byte```|0..255|
|```decimal```|-79228162514264337593543950335 .. 79228162514264337593543950335|
|```char```|Ein Zeichen|
|```int```|-2,147,483,648 .. 2,147,483,647|
|```string```|Eine Zeichenkette|

## Variablen

Variablen definieren ein Bereich in Computerspeicher. In einer Variable können beliebige Werte gespeichert und später von dort ausgelesen werden.

Eine Variable hat immer ein Datentyp, einen Namen und einen Wert.

```csharp
string meineName = "Toni";
```
So hat in diesen Fall die Variable ```meineName``` ein Datentyp ```string``` und ein Wert _Toni_. 

Andere Beispiele:

```csharp
bool hastDuEinComputer = true;
byte besteNote = 1;
decimal computerPreis = 999.90M;
char ersteBuchstabe = 'A';
int alter = 17;
```

Du kannst die Werte auch kombinieren in eine neue Variable.

```csharp
string begruessung = "Hallo ";
string meineName = "Toni";
string nachricht = begruessung + meineName;
```
Welche Wert ist nach dem letzten Befehlt in eine Variable ```nachricht``` ?

```csharp
int ersteZahl = 5;
int zweiteZahl = 5;
int ergebnis = ersteZahl + zweiteZahl;
```
Welche Wert ist nach dem letzten Befehlt in eine Variable ```ergebnis``` ?

## Aufgabe

Schreibe ein Programm der dich mit deinem Vornamen, Nachnamen und Alter begrüßt. Jede Wert sollte in eine eigene Variable gespeichert werden.

Ein Ergebnis kann zum Beispiel so aussehen: _Hallo Toni Kalcik, 39_.
