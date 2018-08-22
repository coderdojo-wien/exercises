using CommandLine;

namespace PasswordGenerator
{
    class Options
    {
        [Option('t', "template", HelpText = "Template to use", Default = "aS1#")]
        public string Template { get; set; }

        [Option('l', "length", HelpText = "Lenght", Default = 8)]
        public int Length { get; set; }
    }
}