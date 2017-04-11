using System.Threading.Tasks;
using Lexmail.Services;
using Lexmail.ViewModels;
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
            return Json(await _templatesService.GetAll());
        }

        [HttpGet("{id}", Name = "GetTemplate")]
        public async Task<IActionResult> GetById(int id)
        {
            var temp = await _templatesService.Find(id);
            if (temp != null) return new ObjectResult(temp);
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TemplateViewModel tempModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            await _templatesService.Add(tempModel);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var delResult = await _templatesService.Remove(id);
            if (delResult)
            {
               return new NoContentResult();
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Change(int id, [FromBody] TemplateViewModel temp)
        {
            if (temp == null || temp.Id != id)
            {
                return BadRequest();
            }
            var result = await _templatesService.Update(temp);

            if (result)
            {
                return new NoContentResult();
            }
            return NotFound();
        }
    }
}
