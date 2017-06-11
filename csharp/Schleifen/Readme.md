# Schleifen
Um ein bestimmtes Codesegment zu wiederholen, verwendet man Schleifen. Von Schleifen gibt es gibt mehrere Arten. 

## For

Eine ```For``` Schleife ist sogenannte Kopf gesteuerte Schleife. Kopf gesteuert deswegen, weil sich die Steuerung der Schleife oben, also dort wo Kopf ist, befindet. Eine ```For``` Schleife besteht aus drei Befehlen. Der erste Befehl bestimmt das Wert und Typ von _Index_. Der zweite Parameter ist eine Abbruchbestimmung. Er steuert wann die Schleife abgebrochen werden soll. Der dritte Befehlt sagt welche Operation sollte nach jedem Vorgang ausgeführt werden.

Sehen wir uns an wie so eine Schleife aussieht:

```csharp
            for (int i = 0; i < 4; i = i + 1)
            {
                Console.WriteLine(i);
            }
```

Der erste Befehl weißt Variable ```i``` von Typ ```int``` ein Anfangswert von 0 zu. Die Abbruchbestimmung sagt das die Schleife so lange bis das ```i``` kleiner 4 ist, ausgeführt werden soll. Der letzte Parameter ist typischerweiße dazu benötigt das Wert in ```i``` zu erhöhen wie auch in diesen Beispiel. Nach jedem Durchgang wird das Wert um eins erhöht. Eine Frage: Welche Werte werden nach Ausführung in _Console_ angezeigt?

### Aufgabe
 1) Schreibe in einer Variable ```string [] freunde``` die Namen fünf Freunde oder Freundinnen. Gib nacheinander alle Namen in _Console_ aus, indem du die ```for``` Schleife verwendest.

 2) Gib die alle Namen in umgekehrte Reihenfolge aus. 
## While


### Aufgabe

## Do-While

### Aufgabe