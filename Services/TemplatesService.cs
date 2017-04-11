using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lexmail.Data;
using Lexmail.Entities;
using Lexmail.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace Lexmail.Services
{
    public interface ITemplatesService
    {
        Task<IEnumerable<TemplateViewModel>> GetAll();
        Task<TemplateViewModel> Find(int id);
        Task Add(TemplateViewModel template);
        Task<bool> Remove(int id);
        Task<bool> Update(TemplateViewModel template);
    }

    public class TemplatesService: ITemplatesService
    {
        private readonly TemplateDbContext _context;
        private readonly Random randNum = new Random();

        public TemplatesService(TemplateDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TemplateViewModel>> GetAll()
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

        public async Task<TemplateViewModel> Find(int id)
        {
            return await _context.Templates.Where(r => r.Id == id).Select(temp =>
                new TemplateViewModel
                {
                    Id = temp.Id,
                    TemplateTagLetter = temp.TemplateName[0],
                    TemplateName = temp.TemplateName,
                    TemplateCTime = temp.TemplateCTime,
                    TemplateDefault = temp.TemplateDefault,
                    RandomNum = randNum.Next(1, 11),
                    TemplateBody = temp.TemplateBody
                }).SingleAsync();
        }

        public async Task Add(TemplateViewModel template)
        {
            await _context.Templates.AddAsync(new TemplateModel
            {
                TemplateName = template.TemplateName,
                TemplateCTime = DateTime.Now,
                TemplateDefault = false,
                TemplateBody = template.TemplateBody
            });
            await _context.SaveChangesAsync();
        }

        public async Task<bool> Remove(int id)
        {
            var temp = await _context.Templates.FindAsync(id);
            if (temp != null)
            {
                _context.Templates.Remove(temp);
                await _context.SaveChangesAsync();
                return false;
            }
            else return true;
        }

        public async Task<bool> Update(TemplateViewModel template)
        {
            var temp = await _context.Templates.FindAsync(template.Id);
            if (temp == null)
            {
                return false;
            }

            temp.TemplateName = template.TemplateName;
            temp.TemplateDefault = template.TemplateDefault;
            temp.TemplateBody = template.TemplateBody;

            _context.Templates.Update(temp);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
