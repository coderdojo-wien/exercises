# Selfie-Bot
Dieser Bot wurde mit [Microsoft Botbuilder SDK v4](https://github.com/Microsoft/botbuilder-js) in Node.js geschrieben. Er nimmt ein Bild/Selfie entgegen und ruft [Microsoft Cognitive Services (Face API)](https://azure.microsoft.com/de-de/services/cognitive-services/face/) auf um das Bild zu analysieren hinsichtlich Geschlecht, Alter, Lächeln und Brille.

![](images/selfie-bot.png)

## Los geht's!

Hinweis: Diese Anleitung ist nicht mehr aktuell!

Folgende Schritte sind notwendig um den Bot zu entwickeln:

### 1) Notwendige Installationen
Installiere die letzte Version von Visual Studio kostenlos von [hier](https://www.visualstudio.com/en/downloads). Als Workload sollten auf jeden Fall Node.js-Entwicklung und am besten auch ASP.NET-Entwicklung ausgewählt sein:

![](https://github.com/christian-vorhemus/DashboardTemplate/blob/master/images/setup.png)

Lade außerdem den [Bot Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases) für dein System sowie <a href="https://nodejs.org/en/download/">Node.js</a> herunter.

### 2) Keys abrufen
Wir verwenden Microsoft Cognitive Services um das Bild zu analysieren und benötigen dafür einen API-Schlüssel. Dazu wechseln wir auf [diese Seite](https://azure.microsoft.com/de-de/try/cognitive-services/?api=face-api) und wählen _API-Schlüssel abrufen_ aus.

![](images/face-api.png)

Ein Microsoft oder Facebook-Konto ist notwendig um den Schlüssel generieren zu können. Der Schlüssel ist danach als Zeichenkette abrufbar.

![](images/api-key.png)

### 3) Projekt laden und starten
Lade dieses Projekt herunter und wechsle in den Ordner [nodejs/Selfie-Bot](src) in einer Konsole/Terminal. Tippe

```
npm install
```

um die fehlenden Pakete zu installieren. Wenn du die Mitteilung bekommst, dass der Befehl "npm" nicht gefunden werden kann, überprüfe ob du Node.js installiert hast. Als nächstes doppelklicke auf [Selfie-Bot.sln](src/Selfie-bot.sln) um das Projekt in Visual Studio zu öffnen. Wähle in Visual Studio im "Solution Explorer" (rechtes Menü) die Datei [app.js](src/Selfie-Bot/app.js) aus, dies sollte wie folgt aussehen und ersetze den Platzhaltertext für ```const apiKey``` mit dem Schlüssel aus Schritt 2.

```typescript
const apiKey = "<ADD FACY API KEY HERE>"
```

Starte den Bot, indem du in Visual Studio auf _F5_ klickst. Es öffnet sich eine Website und die Konsole. Kopiere die Adresse, die im Browser aufscheint:

![](images/browser.png)

### 4) Bot im Emulator testen
Starte Bot Emulator, wähle die Adresse, die du soeben kopierst hast, füge _/api/messages_ hinzu, und klicke auf _Connect_.

![](images/emulator.png)

Du solltest nun mit dem Bot kommunizieren können.
