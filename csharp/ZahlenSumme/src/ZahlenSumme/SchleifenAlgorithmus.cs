namespace SumOfNumbers
{
    public class SchleifenAlgorithmus : IAlgorithmus
    {
        public int Summe(int zahl)
        {
            // Schleifenvariable
            int schleifenIndex = 0;

            // Ergebnisvariable
            int summe = 0;

            // For-Schleife
            for (schleifenIndex = 1; schleifenIndex <= zahl; schleifenIndex++)
            {
                // Addition zur Summe
                summe = summe + schleifenIndex;
            }

            // Rückgabe des Ergebnisses
            return summe;
        }
    }
}