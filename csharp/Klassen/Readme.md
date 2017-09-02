# Klassen

Stellt dir folgende Aufgabe vor. Du musst ein Programm schreiben wo du bestimmte Informationen über deine Freunde speichern könntest und zwar: 

* Name
* Geschlecht
* Spitzname
* Adresse
* Alter

## Klassen

Eine Klasse beschreibt ein Objekt, in diesen Fall eben einen konkreten Freund oder eine Freundin.

Ein Klasse fängt immer mit einen Wort das sagt wo die Klasse überall sichtbar ist. Wir werden wegen einfachkeit immer das Wort ```public``` verwenden. Weiterhin follgt das Schlüsselwort ```class```.

```csharp
public class Freund {}
```

### Konstruktor
Eine Klasse kann auch einen oder mehreren expliziten Konstruktor(en) haben. Ein Konstruktor ist eine _Hilfsmethode_ die immer, wenn von eine Klasse ein konkretes Objekt erzeugt wird, aufgerufen wird. Ein Konstruktor muss immer die Name einer Klasse tragen und kann aber muss nicht ein oder mehrere Parametern haben. 

```csharp
public class Freund 
{
    public Freund(){} // Ein Konstruktor ohne Parametern
    public Freund(string name) {} // Ein Konstruktor mit einem Parameter
}
```
### Klassenvariablen
Klassenvariablen sind Variablen die am meisten innerhalb einer Klasse verwendet werden. Deswegen werden wir die mit dem Sichbarkeitswort ```private``` versehen oder wir können das Wort ```private``` als ganzes weglassen. Was in C# nicht als ```public``` bezeichnet wird, ist automatisch ```private``` also sichtbar nur innerhalb der Klasse selbst.

```csharp
public class Freund 
{
    private DateTime geburtstag;
}
```

### Eigenschaften
Wir haben also eine Klasse erzeugt, aber da fehlen noch die Eigenschaften die den Freund beschreiben. Eigenschaften werden in C# _Properties_ genannt. Eine _Property_ fängt genauso mit einen Wort mit dem die Sichtbarkeit angegeben wird. Weiterhin müssen wir ein Datentyp definieren, damit begrenzen wir welche Werte hier gespeichert werden können. Am ende kommt letzlich das Name mit den wir das _Property_ ansprechen und die Schlüsselwörter ```get``` und ```set```.

```csharp
public class Freund 
{
    public string Name { get; set; }
} 
```

### Methoden
Klassen können auch Methoden haben, mit oder ohne Rückgabeparametern.

Eine Methode ohne Rückgabeparameter ist folgend deklariert. Ein Sichtbarkeitswort folgt das Schlüsselwort ```void```. Innerhalb die geschwomennen Klammern, schreib man dann das, was die Methode machen sollte.

```csharp
public class Freund 
{
    public void SagHallo()
    {
        Console.WriteLine("Hallo");
    }
}
```

Eine Methode kann, wie auch Konstruktor, mehrere Eingabeparametern haben.

Eine Methode mit Rückgabeparameter muss anstatt das Wort ```void``` ein Rückgabetyp deklarieren. Methode mit Rückgabeparameter muss immer etwas zurückgeben und zwar mit dem Schlüsserwort ```return```.

```csharp
public class Freund 
{
    public int SagMirDeinAlter()
    {
        return 25;
    }
}
```

Wir habe hier einige Klassenkonzepte erläutert. Jetz sehen wir uns an wie man eine Klasse verwenden kann.

Wir deklarieren folgende Klasse ```Freund```:

```csharp
public class Freund 
{
    public Freund(string name)
    {
        Name = name;
    }
    public string Name { get; set; }

    public int Alter { get; set; }

    public void SagHallo()
    {
        Console.WriteLine("Hallo mein Name ist " + Name);
    }
}
```
Um diese Klasse zu verwende, müssen wir diese Klasse instatieren. Das machen wir mit den _Operator_ ```new```.

```csharp
public class Program
{
    public class Freund 
    {
        public string Name { get; set; }

        public int Alter { get; set; }

        public void SagHallo()
        {
            Console.WriteLine("Hallo mein Name ist " + Name);
        }
    }

    static void Main(string[] args)
    {
        Freund neueFreund = new Freund();
    }
}
```

Ab jetzt können wir mit die Variable ```neueFreund``` arbeiten. Zum Beispiel ein _Name_ und ein _Alter_ zu den ```neueFreund``` zuweisen.

```csharp
class Program
{
    public class Freund 
    {
        public Freund(string name)
        {
            Name = name;
        }
        public string Name { get; set; }

        public int Alter { get; set; }

        public void SagHallo()
        {
            Console.WriteLine("Hallo mein Name ist " + Name);
        }
    }

    static void Main(string[] args)
    {
        Freund neueFreund = new Freund("Peter");
        neueFreund.Alter = 8;
    }
}
```

Und jetzt lassen wir den ```neueFreund``` sich vorstellen und wir sagen ihm ebensfalls Hallo.

```csharp
class Program
{
    public class Freund 
    {
        public Freund(string name)
        {
            Name = name;
        }
        public string Name { get; set; }

        public int Alter { get; set; }

        public void SagHallo()
        {
            Console.WriteLine("Hallo mein Name ist " + Name);
        }
    }

    static void Main(string[] args)
    {
        Freund neueFreund = new Freund("Peter");
        neueFreund.Alter = 8;

        neueFreund.SagHallo();
        Console.WriteLine("Hallo " + neueFreund.Name);
    }
}
```

Wenn wir das Programm ausführen sieht das Ergebniss so aus:
![Konsole](images/Console.png)

## Aufgabe

* Vervollständige die Klasse um die andere Eingeschaften wie _Geschlecht_, _Spitzname_ und _Adresse_. 
* Die Methode ```SagHallo``` soll folgende Text auszugeben: "Hallo ich heiße _Name_ bin _Alter_ alt. Meine Freunde nennen mich auch _Spitzname_." Falls keine _Spitzname_ vorhanden ist, sollte der letzte Satz nicht ausgegeben werden.
* Initializiere die Klasse mit einem Konstruktor, wo du auch die Parametern _Geschlecht_, _Spitzname_ und _Alter_ übergibst.
* Benutze die Klasse in einem Program und gebe die Informationen mit hilfe der Methode ```SagHallo``` in einer Console aus.