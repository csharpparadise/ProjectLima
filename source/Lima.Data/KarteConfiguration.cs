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
    // Karte
    internal class KarteConfiguration : EntityTypeConfiguration<Karte>
    {
        public KarteConfiguration(string schema = "dbo")
        {
            ToTable(schema + ".Karte");
            HasKey(x => x.Id);

            Property(x => x.Id).HasColumnName("Id").IsRequired().HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.Titel).HasColumnName("Titel").IsRequired().HasMaxLength(100);
            Property(x => x.Beschreibung).HasColumnName("Beschreibung").IsOptional();
            Property(x => x.SpalteId).HasColumnName("SpalteId").IsOptional();

            // Foreign keys
            HasOptional(a => a.Spalte).WithMany(b => b.Kartes).HasForeignKey(c => c.SpalteId); // FK__Karte__SpalteId__145C0A3F
        }
    }

}
