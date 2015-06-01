using System.Web.Http;
using Lima.Core;

namespace Lima.Api.Controllers
{
    public class KarteController : ApiController
    {
        private readonly IBoardService _boardService;

        public KarteController(IBoardService boardService)
        {
            _boardService = boardService;
        }

        public void Post([FromBody]Karte karte, int spalteId)
        {
            _boardService.KarteAnlegen(karte, spalteId);
        }
    }
}