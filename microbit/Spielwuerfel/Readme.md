# Spielwürfel

Ziel dieses Übung ist ein Spielwürfel für micro_bit zu enwerfen.

## Funktionen für verschiedene Würfelzustände

Wir benötigen für jeden Würfelzustand eine Funktion. Mit Würfelzustand ist das gemeint was nach jedem Wurf angezeigt wird.

1) Um eine Funktion zu erzeugen wählt man in _Fortgeschritten_ Menu _Functions_ und dann _Make a Function_.

    ![](images/create_function.png)

2) Benenne die Funktion mit _zeigeEins_.

    ![](images/function_show_one.png)

3) Definiere die Funktion ```function zeigeEins```.

    Die Funktion ```function zeigeEins``` soll die Zahl _eins_ am Display von micro:bit zeigen.

    Dazu wählen wir in _Grundlagen_ das Baustein ```zeige LEDs``` aus und verschieben wir diese in die ```function zeigeEins```. Zusätzlich markiern in mitte die Diode die aufleuchten soll.

    ![](images/display_shows_one.png)

4) Andere Würfelzustände definiereng

    Das selbe wiederholen wir für alle andere Würfelzustände.

    ![](images/all_show_functions.png)

## Würfeln

Der micro:bit kann mit seinem Beschleunigungssensor auf schütteln reagieren.
 
1) Wählen wir von _Eingabe_ ein Block ```wenn geschüttelt``` aus.


