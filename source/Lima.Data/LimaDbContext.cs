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
    public partial class LimaDbContext : DbContext, ILimaDbContext
    {
        public IDbSet<Board> Boards { get; set; } // Board
        public IDbSet<Karte> Kartes { get; set; } // Karte
        public IDbSet<Spalte> Spaltes { get; set; } // Spalte
        
        static LimaDbContext()
        {
            Database.SetInitializer<LimaDbContext>(null);
        }

        public LimaDbContext()
            : base("Name=LimaDbContext")
        {
            InitializePartial();
        }

        public LimaDbContext(string connectionString) : base(connectionString)
        {
            InitializePartial();
        }

        public LimaDbContext(string connectionString, System.Data.Entity.Infrastructure.DbCompiledModel model) : base(connectionString, model)
        {
            InitializePartial();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new BoardConfiguration());
            modelBuilder.Configurations.Add(new KarteConfiguration());
            modelBuilder.Configurations.Add(new SpalteConfiguration());

            OnModelCreatingPartial(modelBuilder);
        }

        public static DbModelBuilder CreateModel(DbModelBuilder modelBuilder, string schema)
        {
            modelBuilder.Configurations.Add(new BoardConfiguration(schema));
            modelBuilder.Configurations.Add(new KarteConfiguration(schema));
            modelBuilder.Configurations.Add(new SpalteConfiguration(schema));
            return modelBuilder;
        }

        partial void InitializePartial();
        partial void OnModelCreatingPartial(DbModelBuilder modelBuilder);
        
        // Stored Procedures
    }
}
