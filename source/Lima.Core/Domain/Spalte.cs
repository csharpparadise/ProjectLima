using System.Collections.Generic;

namespace Lima.Core
{
    public class Spalte
    {
        public Spalte()
        {
            Karten = new List<Karte>();
        }
        public string Titel { get; set; }
        public List<Karte> Karten { get; set; }
    }
}