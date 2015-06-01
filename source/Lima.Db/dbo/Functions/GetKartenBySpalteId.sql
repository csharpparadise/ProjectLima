CREATE FUNCTION [dbo].[GetKartenBySpalteId]
(@spalteId int)
RETURNS TABLE
AS
return
    SELECT Id, Titel, Beschreibung FROM Karte
    WHERE SpalteId = @spalteId

    