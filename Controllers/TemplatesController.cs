using System.Collections.Generic;
using Lexmail.Entities;
using Lexmail.Services;
using Microsoft.AspNetCore.Mvc;

namespace Lexmail.Controllers
{
    [Route("api/[controller]")]
    public class TemplatesController: Controller
    {
        private readonly ITemplatesService _templatesService;

        public TemplatesController(ITemplatesService templatesService)
        {
            _templatesService = templatesService;
        }

        public JsonResult GetAll()
        {
            return Json(_templatesService.GetAll());
        }
    }
}
