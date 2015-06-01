using Lima.Data;
using NUnit.Framework;
using Should;

namespace Lima.Core.IntegrationTests
{
    [TestFixture]
    public class BoardServiceTests
    {
        [Test]
        public void Stelle_sicher_Board_ist_vorhanden()
        {
            var boardService = new BoardService(new LimaDbContext());

            var board = boardService.BoardHolen();

            board.ShouldNotBeNull();
        }
    }
}
