# Arbeiten mit dem Beschleunigungssensor auf dem micro:bit

## Was ist ein micro:bit?

Solltest Du die Einführung zum micro:bit noch nicht gelesen haben, findest Du sie [hier][1].

## Wie messe ich die Beschleunigung?

Zuerst benötigen wir ein Ereignis, das dem micro:bit sagt, wann er etwas tun soll. In diesem Fall ist es die Eingabe: _Wenn (geschüttelt)_.

![](images/wenn_geschuettelt.png)

Verschiebe den Block in den Arbeitsbereich.

![](images/Move_Block.png)

Wir wollen feststellen, wie stark der micro:bit geschüttelt wurde. Dazu benötigen wir als nächstes eine Variable in der wir die Stärke festhalten können innerhalb unserer ```Wenn``` Anweisung.

![](images/Variable_Staerke.png)

Etwa so.

![](images/Variable_Staerke2.png)

Nun müssen wir nur noch die Variable umbenennen, ```Platzhalter``` ist nicht besonders aussagekräftig, oder? Klick auf den kleinen Pfeil neben dem ```Platzhalter``` und wähle _Variable umbenennen_ aus. 

![](images/Variable_Staerke3.png)

Wir nennen die Variable ```Stärke```.

![](images/Variable_Staerke4.png)

Jetzt müssen wir der Variable zuweisen, wie stark der micro:bit geschüttelt wird.

![](images/Variable_Staerke5.png)

Als Wert wählen wir ```Stärke``` aus.

![](images/Variable_Staerke6.png)

Als nächstes wollen wir noch ausgeben, wie stark der micro:bit geschüttelt wurde. Dazu verwenden wir ```Zeige Zeichenfolge``` aus den _Grundlagen_. (Wenn Du mit der aus über dem Block ```Zeige Zeichenfolge``` bleibst, wird eine kurze Hilfe angezeigt. Lies Dir den Text gut durch, das wird gleich noch wichtig!).

![](images/Ausgabe.png)

Jetzt wählen wir unsere Variable ```Stärke``` aus und ziehen sie hinter den Block ```Zeige Zeichenfolge```.

![](images/Ausgabe2.png)

Hier hat sich aber jetzt ein Fehler eingeschlichen, der uns durch das kleine blaue Rufzeichen angezeigt wird. 

![](images/Ausgabe3.png)

Was ist da passiert? Wenn wir auf das Rufzeichen klicken, erfahren wir mehr.

![](images/Ausgabe4.png)

Was bedeutet das? Wir haben versucht den Wert von unserer Variable ```Stärke``` die eine Zahl enthält in dem Text von ```Zeige Zeichenfolge``` auszugeben. Der Text von Zeige Zeichenfolge, erwartet aber immer einen Text und kann mit Zahlen nichts anfangen. Programmierer nennen dieses Problem einen "Type Mismatch".
Aber wie beheben wir dieses Problem? Zum Glück können wir den Zahlenwert so ändern, dass er von ```Zeige Zeichenfolge``` verstanden werden kann. Dazu müssen wir aber zunächst in den JavaScript Code wechseln. Das tun wir, indem wir auf den _{} JavaScript_ button rechts oben klicken:

![](images/Type_Mismatch.png)

Jetzt fügen wir in den bestehenden Code eine neue Zeile ein. Und zwar ```let Stärke_Str = Stärke.toString()```. Damit definieren wir eine neue Variable ```Stärke_Str``` und weisen ihr den Wert von ```Stärke``` zu nachdem wir diesen mit der Funktion ```toSring()``` in einen String umgewandelt haben. Zusätzlich müssen wir nun in der Funktion ```basic.showString(Stärke)``` die Variable ```Stärke``` durch unsere neue Variable ```Stärke_str``` ersetzen.

![](images/Type_Mismatch2.png)

Alles Fertig? Dann kann's losgehen! Probieren wir den Code aus! Beobachte welche Werte Du angezeigt bekommst.

[1]: ../Hello_World/Readme.md
[2]: https://makecode.microbit.org