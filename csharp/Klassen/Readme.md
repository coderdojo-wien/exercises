# Klassen und Methoden und Eingeschaften

Stellt dir folgende Aufgabe vor. Du musst ein Programm schreiben wo du bestimmte Informationen über deine Freunde speichern könntest. 

Ganz konkret: 

* Name
* Geschlecht
* Spitzname
* Alter
* Adresse

## Klassen

Genau dazu kann man ein Klasse verwenden. Eine Klasse beschreibt ein Objekt, in diese Fall eben einen Freund oder eine Freundin.

Ein Klasse fängt immer mit einen Wort das sagt wo die Klasse überall sichtbar ist. Wir werden wegen einfachkeit immer das Wort ```public``` verwenden. Weiterhin follgt das Schlüsselwort ```class```.

```csharp
public class Freund {}
```

### Constructor
Ein Klasse kann auch expliziten _Constructor_ haben. Ein _Constructor_ ist eine _Hilfsmethode_ die immer aufgerufen wird wenn von eine Klasse ein konkretes Objekt erzeugt wird. Ein _Constructor_ muss immer die Name einer Klasse tragen und kann aber muss nicht ein oder mehrere Parametern haben.

```csharp
public class Freund 
{
    public Freund(){} //Ein Konstruktor ohne Parametern
}
```

### Klassenvariablen

### Eigenschaften

Wir habe also eine Klasse erzeugt, aber da fehlen noch die Eigenschaften von einem Freund. Eigenschaften werden in C# _properties_ genannt. Ein _Property_ fängt genauso mit einen Wort das sagt diese auch nach außen sichtbar sein sollte. Weiterhin müssen wir ein Datentyp definieren, damit begrenzen wir welche Werte hier gespeichert werden können. Am ende kommt letzlich das Name mit den wir das _Property_ ansprechen werden können und die Schlüsselwörter ```get``` und ```set```.

```csharp
public class Freund 
{
    public string Name { get; set; }
} 
```

### Methoden
