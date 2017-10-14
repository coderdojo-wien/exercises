# "Summe von Zahlen"

In diesem Beispiel wirst du verschiedene Algorithmen entwickeln mit welchen die Summe von natürlichen Zahlen berechnet werden kann. Dabei wirst du auch einige Konzepte der Programmierung mit C# kennen lernen, wie zum Beispiel _Interfaces_, _Enums_ und _Rekursion_.

## Neues .NET Core Projekt
Zu Beginn lege dir ein neues .NET Core Projekt an. Dazu kannst du in einer Konsole folgende Befehle ausführen. Du kannst in der [Dokumentation der .NET Core CLI Tools][dotnet-cli-tools] nachlesen was die einzelnen Befehle bewirken.

```shell
mkdir ZahlenSumme
cd ZahlenSumme
dotnet new sln -n ZahlenSumme
dotnet new console -n ZahlenSumme
dotnet sln add ZahlenSumme/ZahlenSumme.csproj
```

### Das Hauptprogramm

Im Hauptprogramme (Klasse ```Program```) kannst du die Ein- und Ausgabe vorbereiten. Du benötigst eine Variable in welcher die Art der Berechnung gespeichert wird, eine weitere Variablen in welchen die Zahl bis zu welcher summiert werden soll bzw. die errechnete Summe gespeichert werden.

Für die Art des Algorithmus ist es vorteilhaft einen ```enum``` zu verwenden. Enums sind ein selbst definierter Datentyp in welchem bestimmten erlaubten Werten einen Namen geben kannst. In der [Dokumentation][dotnet-csharp-enum] kannst du mehr zu ```enum```s nachlesen.

```csharp
enum Algorithmus
{
    Schleife = 1,
    Gauss = 2,
    Rekursion = 3
}
``` 

[dotnet-cli-tools]: https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x
[dotnet-csharp-enum]: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/enum