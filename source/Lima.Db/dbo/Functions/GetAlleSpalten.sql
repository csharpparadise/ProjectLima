CREATE FUNCTION [dbo].[GetAlleSpalten]()
RETURNS TABLE
AS
return
    SELECT Id, Titel FROM Spalte