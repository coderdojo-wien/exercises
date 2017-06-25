# Bedingte Anweisungen und Verzweigungen

Bedingte Anweisungen können ein Programm auf unterschiedliche Zustände und Eingaben reagieren lassen.

## if else

Durch eine Bediengte Anweisung wird entschieden ob ein bestimmtes Codesegment ausgeführt wird oder nicht. In _C#_ ist diese mit einem ```if``` Befehlt realisiert.

```csharp
int zahl = 5;

if(zahl > 0) 
{
    Console.WriteLine("Zahl " + zahl +" ist eine positive Zahl.");
}
```

Eine Verzweigung besteht aus zwei Codeabschnitten: ```if``` und ```else```.

```csharp
int zahl = -1;

if(zahl > 0) 
{
    Console.WriteLine("Zahl " + zahl +" ist eine positive Zahl.");
}
else
{
    Console.WriteLine("Zahl " + zahl +" ist eine negative Zahl.");
}
 ```
### Aufgabe

In dem letzten Beispiel besteht ein Problem. Was wenn das Zahl ein 0 wird? Denn 0 is weder eine positive noch eine negative Zahl. Bessere das Fehler im folgenden Programm so aus, das bei Zahl 0 eine Nachricht herausgeben wird, dass das Zahl 0 weder negativ noch positiv ist.

Ein Hinweis: Du kannst das ```else``` auch mit ```if``` kombinieren.

```csharp
if (Bedienung){}
else if (Bedienung){}
else {}
```

```csharp
static void Main(string[] args)
{
    while(true)
    {
        Console.Write("Schreibe eine Zahl: ");
        int zahl = int.Parse(Console.ReadLine());

        if(zahl > 0) 
        {
            Console.WriteLine("Zahl " + zahl +" ist eine positive Zahl.");
        }
        else
        {
            Console.WriteLine("Zahl " + zahl +" ist eine negative Zahl.");
        }

        Console.WriteLine();
    }
}
```


## Switch

### Aufgabe