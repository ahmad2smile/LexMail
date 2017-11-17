using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Lexmail.Data;

namespace Lexmail.Migrations
{
    [DbContext(typeof(TemplateDbContext))]
    [Migration("20170411081501_DbInit")]
    partial class DbInit
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Lexmail.Entities.TemplateModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("TemplateBody");

                    b.Property<DateTime>("TemplateCTime");

                    b.Property<bool>("TemplateDefault");

                    b.Property<string>("TemplateName");

                    b.HasKey("Id");

                    b.ToTable("Templates");
                });
        }
    }
}
