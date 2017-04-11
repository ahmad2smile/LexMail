using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lexmail.Entities;

namespace Lexmail.Data
{
    public static class DbInitializer
    {
        public static void Initialize(TemplateDbContext _context)
        {
            _context.Database.EnsureCreated();

            if (_context.Templates.Any())
            {
                return;
            }

            var temps = new[]
            {
                new TemplateModel
                {
                    TemplateName = "Wlaa lajsdblajsbd",
                    TemplateCTime = DateTime.Now,
                    TemplateDefault = true,
                    TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
                },
                new TemplateModel
                {
                TemplateName = "Xlaa lajsdblajsbd",
                TemplateCTime = DateTime.Now,
                TemplateDefault = false,
                TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
                },
                new TemplateModel
                {
                    TemplateName = "Klaa lajsdblajsbd",
                    TemplateCTime = DateTime.Now,
                    TemplateDefault = false,
                    TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
                }
            };
            foreach (var temp in temps)
            {
                _context.Templates.Add(temp);
            }
            _context.SaveChanges();
        }
    }

}
