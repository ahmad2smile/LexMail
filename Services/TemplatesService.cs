using System;
using System.Collections.Generic;
using System.Linq;
using Lexmail.Entities;

namespace Lexmail.Services
{
    public interface ITemplatesService
    {
        IEnumerable<TemplateModel> GetAll();
        TemplateModel Find(int id);
        void Add(TemplateModel template);
        void Remove(int id);
        void Update(TemplateModel template);
    }

    public class TemplatesService: ITemplatesService
    {
        public IEnumerable<TemplateModel> GetAll()
        {
            IEnumerable<TemplateModel> allTemps = new[] {new TemplateModel
            {
                Id = 1,
                TemplateTagLetter = "W",
                TemplateName = "blaa lajsdblajsbd",
                TemplateCTime = DateTime.Now,
                TemplateDefault = true,
                RandomNum = 4,
                TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
            },

            new TemplateModel
            {
                Id = 2,
                TemplateTagLetter = "X",
                TemplateName = "blaa lajsdblajsbd",
                TemplateCTime = DateTime.Now,
                TemplateDefault = false,
                RandomNum = 2,
                TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
            },

            new TemplateModel
            {
                Id = 3,
                TemplateTagLetter = "K",
                TemplateName = "blaa lajsdblajsbd",
                TemplateCTime = DateTime.Now,
                TemplateDefault = false,
                RandomNum = 9,
                TemplateBody = "klkdflksdlfksmdlkfmsldkmf s dl sdfnlksd"
            }
        };

            return allTemps.ToList();
        }

        public TemplateModel Find(int id)
        {
            return null;
        }

        public void Add(TemplateModel template)
        {
        }

        public void Remove(int id)
        {
        }

        public void Update(TemplateModel template)
        {
        }
    }
}
