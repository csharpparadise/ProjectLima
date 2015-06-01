using System.Web.Http;
using Lima.Core;

namespace Lima.Api.Controllers
{
    public class BoardController : ApiController
    {
        private readonly IBoardService _boardService;

        public BoardController(IBoardService boardService)
        {
            _boardService = boardService;
        }

        public Board Get()
        {
            return _boardService.BoardHolen();
        }
    }
}