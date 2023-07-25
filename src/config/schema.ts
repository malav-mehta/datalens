import * as resolvers from "../resolvers";

import { authChecker } from "../middleware";
import { buildSchemaSync } from "type-graphql";

export const schema = buildSchemaSync({
  resolvers: [
    resolvers.ColumnResolver,
    resolvers.JobResolver, 
    resolvers.JobColumnDetailResolver,
    resolvers.JobTableDetailResolver,
    resolvers.ProjectResolver,
    resolvers.ProjectDetailResolver,
    resolvers.SchemaResolver,
    resolvers.TableResolver,
    resolvers.TableSnapshotResolver,
    resolvers.UserResolver,
    resolvers.UserProjectTokenResolver,
  ],
  validate: false,
  authChecker,
});
