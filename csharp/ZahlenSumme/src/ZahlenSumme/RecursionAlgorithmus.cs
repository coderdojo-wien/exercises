namespace ZahlenSumme
{
    public class RecursionAlgorithmus : IAlgorithmus
    {
        public int Summe(int zahl)
        {
            // Ergebnisvariable
            int summe = 0;

            // Berechung
            if (zahl > 0)
            {
                // Rekursion
                summe = zahl + Summe(zahl - 1);
            }
            else
            {
                // Rekursionsanfang
                summe = 0;
            }

            // Rückgabe des Ergebnisses
            return summe;
        }

    }
}