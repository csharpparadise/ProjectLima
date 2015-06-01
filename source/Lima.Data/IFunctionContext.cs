using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Lima.Data
{
    interface IFunctionContext
    {
        List<Spalte> GetAlleSpalten();

        List<Karte> GetKartenBySpalteId(int spalteId);
    }

    public partial class LimaDbContext : IFunctionContext
    {
        private const string SQL_GetAlleSpalten = "SELECT * FROM dbo.GetAlleSpalten";
        private const string SQL_GetKartenBySpalteId = "SELECT * FROM dbo.GetSpaltenKarten(@spalteId)";

        public List<Spalte> GetAlleSpalten()
        {
            return Database.SqlQuery<Spalte>(SQL_GetAlleSpalten).ToList();
        }

        public List<Karte> GetKartenBySpalteId(int spalteId)
        {
            return Database.SqlQuery<Karte>(SQL_GetKartenBySpalteId, new SqlParameter("@spalteId", spalteId)).ToList();
        }
    }
}
