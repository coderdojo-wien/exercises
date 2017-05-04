# "Hello World" in Visual Studio

Du wirst nun dein erstes C# Programm entwickeln. Dazu benötigst du eine Entwicklungsumgebung. Wir empfehlen dir Visual Studio Community von Microsoft. Diese ist kostenlos und kann [hier](https://www.visualstudio.com/) heruntergeladen werden.

## Neue Solution
Programme in C# werden üblicherweise in sogenannten Solutions organisiert. Jede Solution kann ein oder mehrere Projekte enthalten. Lege eine Solution _"HelloWorld"_ an. Siehe dazu das Video unten.

![Eine neue Solution anlegen](images/new_solution.gif)

Nach dem die Solution erzeugt geworden ist solltest du folgende Struktur in Solution Explorer sehen:

![Solution Explorer](images/solution_explorer.png)

Nun schreibst du dein erstes eigenes Programm in C#. Es geht darum das Program in [```Program.cs```](src/HelloWorld/HelloWorld/Program.cs) so zu erweitern, dass nach dem Start
"Hello World!" in der Konsole erscheint.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
```
In C# gibt es eine Methode ```Console.WriteLine``` mit der man einen beliebigen Text auf dem Bildschirm ausgeben kann. Das untere Beispiel gibt den Text _"Hello World!"_ aus.

```csharp 
Console.WriteLine("Hello World!")
```
Jetzt das komplette Program:

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!")
        }
    }
}
```

Jetzt kannst du das Programm ganz einfach mit der Taste F5 starten. Du wirst jedoch sehen, dass das Programm zwar startet aber ziemlich schnell wieder beendet wird. Mann muss also noch eine Pause einbauen. Mit der Methode ```Console.ReadKey()``` wird dein Programm auf eine beliebige Eingabe warten. Überlegt dir, wo du diesen Methodenaufruf am besten einbaust.
