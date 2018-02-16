using System;
using CommandLine;

namespace PasswordGenerator
{
    class Program
    {
        // Character constants

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var result = Parser.Default.ParseArguments<Options>(args).WithParsed(
                    options => Run(options)
                )
                .WithNotParsed(
                    errors =>
                    {
                        foreach (var e in errors)
                        {
                            Console.Error.WriteLine(e);
                        }
                    }
                );
        }

        static void Run(Options options)
        {
            Template t = Template.CreateTemplate(options.Template);

            // Generate the password
            for (int i = 0; i < options.Length; i++)
            {
                Console.Write(t.GetCharacter());
            }

            Console.WriteLine();
        }
    }
}