namespace Lima.Core
{
    public interface IBoardService
    {
        void SpalteAnlegen(Spalte spalte);
        void KarteAnlegen(Karte karte, int spalteId);
        Board BoardHolen();
    }

    public class BoardService : IBoardService
    {
        public BoardService()
        {
            
        }

        public void SpalteAnlegen(Spalte spalte)
        {
            
        }

        public void KarteAnlegen(Karte karte, int spalteId)
        {
            
        }

        public Board BoardHolen()
        {
            return new Board();
        }
    }
}