using System.Web.Http;
using Lima.Core;

namespace Lima.Api.Controllers
{
    public class SpalteController : ApiController
    {
        private readonly IBoardService _boardService;

        public SpalteController(IBoardService boardService)
        {
            _boardService = boardService;
        }

        public void Post([FromBody]Spalte spalte)
        {
            _boardService.SpalteAnlegen(spalte);
        }
    }
}