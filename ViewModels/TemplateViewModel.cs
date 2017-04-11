using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lexmail.ViewModels
{
    public class TemplateViewModel
    {
        public int Id { get; set; }
        public char TemplateTagLetter { get; set; }
        public string TemplateName { get; set; }
        public DateTime TemplateCTime { get; set; }
        public bool TemplateDefault { get; set; }
        public int RandomNum { get; set; }
        public string TemplateBody { get; set; }
    }
}
