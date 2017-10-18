namespace SumOfNumbers
{
    public class GaussAlgorithmus : IAlgorithmus
    {
        public int Summe(int zahl)
        {
            // Ergebnisvariable
            int summe = 0;

            // Berechnung
            summe = zahl * (zahl + 1) / 2;

            // Rückgabe des Ergebnisses
            return summe;
        }
    }
}