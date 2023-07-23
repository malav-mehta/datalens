import { ProjectConfig } from "../gen/project";

export const THEATRE_PROJECT: ProjectConfig = {
  name: "Theatre",
  roles: [
    {
      name: "Admin",
      permissions: [
        "project:read",
        "project:share",
        "schema:read",
        "schema:update",
        "job:read",
        "job:create",
        "job:update",
        "snapshot:read",
        "alert:create",
        "alert:read",
        "alert:update",
        "alert:delete",
      ],
    },
    {
      name: "Manager",
      permissions: [
        "job:read",
        "job:create",
        "job:update",
        "snapshot:read",
        "alert:create",
        "alert:read",
        "alert:update",
        "alert:delete",
      ],
    },
    {
      name: "Employee",
      permissions: ["alert:read", "alert:update"],
    },
    {
      name: "WebServer",
      permissions: ["job:create"],
    },
  ],
  users: [
    { role: "Admin" },
    { role: "Manager" },
    { role: "Employee" },
    { role: "Employee" },
  ],
  bots: [{ role: "WebServer" }, { role: "WebServer" }],
};
