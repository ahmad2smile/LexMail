using System.Collections.Generic;
using System.Threading.Tasks;
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

        public async Task<JsonResult> GetAll()
        {
            return Json(await _templatesService.GetAllAsync());
        }
    }
}
