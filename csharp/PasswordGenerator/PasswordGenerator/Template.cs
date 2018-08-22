using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PasswordGenerator
{
    class Template
    {
        private const string Puncts = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
        private const string Lowers = "abcdefghijklmnopqrstuvwxyz";
        private const string Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        private const string Digits = "0123456789";

        public bool HasLower { get; private set; }

        public bool HasUpper { get; private set; }

        public bool HasDigit { get; private set; }

        public bool HasPunct { get; private set; }

        private string pool;

        private Random r;

        private Template()
        {
            r = new Random();

        }

        public static Template CreateTemplate(String templateString)
        {
            Template template = new Template();

            template.HasLower = templateString.Any(char.IsLower);
            template.HasUpper = templateString.Any(char.IsUpper);
            template.HasDigit = templateString.Any(char.IsDigit);
            template.HasPunct = templateString.Any(char.IsPunctuation);

            if (template.HasLower)
            {
                template.pool += Lowers;
            }

            if (template.HasUpper)
            {
                template.pool += Uppers;
            }

            if (template.HasDigit)
            {
                template.pool += Digits;
            }

            if (template.HasPunct)
            {
                template.pool += Puncts;
            }

            return template;
        }

        public char GetCharacter()
        {
            return pool[r.Next(0, pool.Length - 1)];
        }
    }
}
