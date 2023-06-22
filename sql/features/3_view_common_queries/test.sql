-- View commonly queried statements
WITH "QueryCount" AS 
    (SELECT "statement", COUNT(*) AS "queryCount" 
     FROM "Query" 
     GROUP BY "statement")
SELECT DISTINCT "User"."username", "Project"."projectName", "Q"."statement" AS "queryStatement", "QueryType"."queryTypeName" AS "queryType", "Q"."issuedAt", "Q"."finishedAt", "Q"."hasError", "Q"."errorMessage"
FROM "Query" "Q"
JOIN "QueryType" ON "Q"."queryTypeId" = "QueryType"."queryTypeId"
JOIN "User" ON "Q"."userId" = "User"."userId"
JOIN "Project" ON "Q"."projectId" = "Project"."projectId"
WHERE "Q"."statement" IN (SELECT "statement" FROM "QueryCount" WHERE "queryCount" >= (SELECT AVG("queryCount") FROM "QueryCount"));

-- View common users that query
-- WITH "UserQueries" AS 
--     (SELECT "userId", COUNT(*) AS "queryCount" 
--      FROM "Query" 
--      GROUP BY "userId"), 
-- "avgQueryCount" AS 
--     (SELECT AVG("queryCount") FROM "UserQueries"), 
-- "CommonUsers" AS 
--     (SELECT "userId"
--      FROM "UserQueries"
--      WHERE "queryCount" >= "avgQueryCount")
-- SELECT DISTINCT "User"."username"
-- FROM "User"
-- WHERE "User"."userId" IN "CommonUsers"."userId";