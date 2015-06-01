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
    internal class SpalteConfiguration : EntityTypeConfiguration<Spalte>
    {
        public SpalteConfiguration(string schema = "dbo")
        {
            ToTable(schema + ".Spalte");
            HasKey(x => x.Id);

            Property(x => x.Id).HasColumnName("Id").IsRequired().HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.Titel).HasColumnName("Titel").IsRequired().HasMaxLength(100);
            Property(x => x.BoardId).HasColumnName("BoardId").IsOptional();

            // Foreign keys
            HasOptional(a => a.Board).WithMany(b => b.Spaltes).HasForeignKey(c => c.BoardId); // FK__Spalte__BoardId__15502E78
        }
    }

}
