namespace Lima.Core
{
    public interface IBoardService
    {
        void SpalteAnlegen(Spalte spalte);
        void KarteAnlegen(Karte karte, int spalteId);
        Board BoardHolen();
    }
}