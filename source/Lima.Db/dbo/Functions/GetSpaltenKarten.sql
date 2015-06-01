CREATE FUNCTION [dbo].[GetKartenBySpaltenId]
(@spalteId int)
RETURNS TABLE
AS
return
    SELECT Id, Titel, Beschreibung FROM Karte
    WHERE SpalteId = @spalteId

    