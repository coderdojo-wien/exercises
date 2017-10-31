using System;

namespace SumOfNumbers
{
    enum Algorithmus
    {
        Schleife = 1,
        Gauss = 2,
        Rekursion = 3
    }

    class Program
    {
        static void Main(string[] args)
        {
            while(true)
            {
                Console.WriteLine("Welcher Algorithmus?");
                Console.WriteLine("  Schleife ( {0} )", (int)Algorithmus.Schleife);
                Console.WriteLine("  Gauss'sche Formel ( {0} )", (int)Algorithmus.Gauss);
                Console.WriteLine("  Rekursion ( {0} )", (int)Algorithmus.Rekursion);

                Console.Write("? ");
                Algorithmus algorithmus = (Algorithmus)Convert.ToInt32(Console.ReadLine());

                Console.Write("Zahl: ");
                int zahl = Convert.ToInt32(Console.ReadLine());

                IAlgorithmus algorithm = null;

                // Algorithmus Objekt erzeugen
                switch (algorithmus)
                {
                    case Algorithmus.Schleife:
                        algorithm = new SchleifenAlgorithmus();
                        break;

                    case Algorithmus.Gauss:
                        algorithm = new GaussAlgorithmus();
                        break;

                    case Algorithmus.Rekursion:
                        algorithm = new RecursionAlgorithmus();
                        break;
                }

                // Berechnung
                int summe = algorithm.Summe(zahl);

                // Ausgabe
                Console.WriteLine($"Summe der Zahlen bis {zahl} ist {summe}");
            }
        }
    }
}
