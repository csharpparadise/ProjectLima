// ReSharper disable RedundantUsingDirective
// ReSharper disable DoNotCallOverridableMethodsInConstructor
// ReSharper disable InconsistentNaming
// ReSharper disable PartialTypeWithSinglePart
// ReSharper disable PartialMethodWithSinglePart
// ReSharper disable RedundantNameQualifier
// TargetFrameworkVersion = 4.51
#pragma warning disable 1591    //  Ignore "Missing XML Comment" warning

using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Linq.Expressions;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data;
using System.Data.SqlClient;
using System.Data.Entity.ModelConfiguration;
using System.Threading;
using System.Threading.Tasks;
using DatabaseGeneratedOption = System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption;

namespace Lima.Data
{
    // Spalte
    [GeneratedCodeAttribute("EF.Reverse.POCO.Generator", "2.13.1.0")]
    public partial class Spalte
    {
        public int Id { get; set; } // Id (Primary key)
        public string Titel { get; set; } // Titel
        public int? BoardId { get; set; } // BoardId

        // Reverse navigation
        public virtual ICollection<Karte> Kartes { get; set; } // Karte.FK__Karte__SpalteId__145C0A3F

        // Foreign keys
        public virtual Board Board { get; set; } // FK__Spalte__BoardId__15502E78
        
        public Spalte()
        {
            Kartes = new List<Karte>();
            InitializePartial();
        }

        partial void InitializePartial();
    }

}
