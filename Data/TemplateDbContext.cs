using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lexmail.Entities;
using Microsoft.EntityFrameworkCore;

namespace Lexmail.Data
{
    public class TemplateDbContext: DbContext
    {
        public TemplateDbContext(DbContextOptions<TemplateDbContext> options): base(options)
        {
        }

        public DbSet<TemplateModel> Templates { get; set; }
    }
}
