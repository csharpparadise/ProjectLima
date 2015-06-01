using System.Linq;
using Lima.Data;

namespace Lima.Core
{
    public class BoardService : IBoardService
    {
        private readonly ILimaDbContext _dbContext;

        public BoardService(ILimaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SpalteAnlegen(Spalte spalte)
        {
            var board = _dbContext.Boards.Single();
            
            board.Spaltes.Add(new Data.Spalte { Titel = spalte.Titel});
        }

        public void KarteAnlegen(Karte karte, int spalteId)
        {
            var entity = new Data.Karte
            {
                SpalteId = spalteId,
                Beschreibung = karte.Beschreibung,
                Titel = karte.Titel
            };
            _dbContext.Kartes.Add(entity);

            karte.Id = entity.Id;
        }

        public Board BoardHolen()
        {
            var board = _dbContext.Boards.Single();

            return new Board
            { 
                Spalten = board.Spaltes.Select(x => new Spalte 
                { 
                    Titel = x.Titel, 
                    Karten = x.Kartes.Select(k => new Karte
                    {
                        Titel = k.Titel, 
                        Beschreibung = k.Beschreibung
                    }).ToList()
                }).ToList()
            };
        }
    }
}