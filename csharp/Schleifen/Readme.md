# Schleifen
Um ein bestimmtes Codesegment zu wiederholen, verwendet man Schleifen. Von Schleifen gibt es mehrere Arten. 

## For

Eine ```For``` Schleife ist sogenannte Zählschleife und besteht aus drei Befehlen. Der erste Befehl bestimmt das Wert und Typ von _Index_. Der zweite Parameter ist eine Abbruchbestimmung. Er steuert wann die Schleife abgebrochen werden soll. Der dritte Befehlt sagt welche Operation sollte nach jedem Vorgang ausgeführt werden.

Sehen wir uns an wie so eine Schleife aussieht:

```csharp
for (int i = 0; i < 4; i = i + 1)
{
    Console.WriteLine(i);
}
```

Der erste Befehl weißt einer Variable ```i``` von Typ ```int``` ein Anfangswert von 0 zu. Die Abbruchbestimmung sagt das die Schleife so lange bis das ```i``` kleiner vier ist, ausgeführt werden soll. Der letzte Parameter ist typischerweiße dazu benötigt das Wert in ```i``` zu erhöhen wie auch in diesen Beispiel. Nach jedem Durchgang wird das Wert um eins erhöht. 

Eine Frage: Welche Werte werden nach Ausführung in _Console_ angezeigt?

### Aufgabe
 1) Schreibe in einer Variable ```string[] freunde``` die Namen fünf Freunde oder Freundinnen. Gib nacheinander alle Namen in _Console_ aus, indem du die ```for``` Schleife verwendest.

 2) Gib die alle Namen in umgekehrte Reihenfolge aus. 
## While

Eine ```While``` Schleife ist eine sogenannte Kopfgesteuerte Schleife. Kopf gesteuert deswegen, weil sich die Steuerung der Schleife oben befindet.

```csharp
int anzahlVonZeichen = 0;
while (anzahlVonZeichen < 10)
{
    Console.Write("X");
    anzahlVonZeichen++;
}
```

Im unterschied zu ```For``` Schleife hat die ```While``` Schleife nur ein Befehl. Diese sagt wie lange soll das Codesegment ausgeführt werden. In den obigen Beispiel lautet das Abbruch- oder besser gesagt Laufbedienung ```anzahlVonZeichen < 10```. Also wird das Befehl ``` Console.WriteLine ``` solange ausgeführt bis das ```anzahlVonZeichen``` kleiner zehn ist. Vielleicht fragst du dich was das Befehlt ```anzahlVonZeichen++``` bedeutet. Es ist eine Abkürkzung von einer Schreibweisse ```anzahlVonZeichen = anzahlVonZeichen + 1```.

Eine Frage: Wieviel _X_ Zeichen werden auf dem Bildschirm in den obigen Beispiel tatsächlich ausgegeben? 

### Aufgabe

Vervollständige das Code hier so dass man ein Alphabet ausgeben kann. Man kann jedoch begrenzen wie viel Zeichen man ausgeben möchte in dem man das 'bis' Zeichen eingibt.

```csharp
static void Main(string[] args)
{
    char[] alphabet = new char[]
                        {
                            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä',  'ö',  'ü', 'ß'
                        };

    Console.Write("Bis welche Zeichen soll das Alphabet ausgegeben werden (lasse es leer wenn alle Zeichen ausgegeben werden sollten)? ");
    char zeichen = Console.ReadKey().KeyChar;
    Console.WriteLine();

    int i = 0;

    //schreibe hier das Codesegment um das Alphabet auszugeben mit hilfe eine While Schleife

    Console.WriteLine();
}

```

Das Programm könnte so aussehen
![Alphabet mit While Schleife](images/alphabet_with_while.gif)

## Do-While

### Aufgabe