using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lexmail.Entities
{
    public class TemplateModel
    {
        public int Id { get; set; }
        public string TemplateName { get; set; }
        public DateTime TemplateCTime { get; set; }
        public bool TemplateDefault { get; set; }
        public string TemplateBody { get; set; }
    }
}
