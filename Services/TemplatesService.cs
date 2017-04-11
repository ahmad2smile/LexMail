using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lexmail.Data;
using Lexmail.ViewModels;

namespace Lexmail.Services
{
    public interface ITemplatesService
    {
        Task<IEnumerable<TemplateViewModel>> GetAllAsync();
        TemplateViewModel Find(int id);
        void Add(TemplateViewModel template);
        void Remove(int id);
        void Update(TemplateViewModel template);
    }

    public class TemplatesService: ITemplatesService
    {
        private readonly TemplateDbContext _context;
        private readonly Random randNum = new Random();

        public TemplatesService(TemplateDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TemplateViewModel>> GetAllAsync()
        {
            return await _context.Templates.ToAsyncEnumerable().Select(temp => 
            new TemplateViewModel
            {
                Id = temp.Id,
                TemplateTagLetter = temp.TemplateName[0],
                TemplateName = temp.TemplateName,
                TemplateCTime = temp.TemplateCTime,
                TemplateDefault = temp.TemplateDefault,
                RandomNum = randNum.Next(1, 11),
                TemplateBody = temp.TemplateBody
            }).ToList();
        }

        public TemplateViewModel Find(int id)
        {
            return null;
        }

        public void Add(TemplateViewModel template)
        {
        }

        public void Remove(int id)
        {
        }

        public void Update(TemplateViewModel template)
        {
        }
    }
}
