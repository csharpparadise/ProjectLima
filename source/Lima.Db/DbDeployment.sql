DELETE FROM [dbo].[Karte]
DELETE FROM [dbo].[Spalte]
DELETE FROM [dbo].[Board]

INSERT INTO [dbo].[Board] DEFAULT VALUES

DECLARE @boardId int
SET @boardId = @@IDENTITY

INSERT INTO [dbo].[Spalte](BoardId, Titel) values (@boardId, 'Features')

DECLARE @spaltenId int
SET @spaltenId = @@IDENTITY

INSERT INTO [dbo].[Spalte](BoardId, Titel) values (@boardId, 'Product Backlog')
INSERT INTO [dbo].[Spalte](BoardId, Titel) values (@boardId, 'Commited')
INSERT INTO [dbo].[Spalte](BoardId, Titel) values (@boardId, 'In Progress')
INSERT INTO [dbo].[Spalte](BoardId, Titel) values (@boardId, 'Done')



INSERT INTO [dbo].[Karte](SpalteId, Titel, Beschreibung) values (@spaltenId, 'Spalte editieren', 'Um die Kategorisierung ändern zu können Als ein Nutzer Ich möchte Spalten editieren können')
INSERT INTO [dbo].[Karte](SpalteId, Titel, Beschreibung) values (@spaltenId + 3, 'Karte editieren', 'Um eine Karte ändern zu können Als ein Nutzer Ich möchte den Titel und die Beschreibung einer Karte editieren können')
INSERT INTO [dbo].[Karte](SpalteId, Titel, Beschreibung) values (@spaltenId + 4, 'Karte löschen', 'Um eine Karte löschen zu können Als ein Nutzer Ich möchte die Karte löschen können')
