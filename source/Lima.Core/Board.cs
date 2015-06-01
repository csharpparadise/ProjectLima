using System.Collections.Generic;

namespace Lima.Core
{
    public class Board
    {
        public Board()
        {
            Spalten = new List<Spalte>();
        }
        public List<Spalte> Spalten { get; set; }
    }
}
