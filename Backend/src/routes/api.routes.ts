import { Router } from "express";

const apiRoutes = Router();

apiRoutes.get("/", (req, res) => {
  const base_url = "http://localhost:3333";

  return res.json({
    base_url,
    links: [
      {
        name: "users",
        type: "POST",
        href: `${base_url}/users`,
        rel: "create",
      },
      {
        name: "modules",
        type: "GET",
        href: `${base_url}/modules`,
        rel: "list",
      },
      {
        name: "lessons",
        type: "GET",
        href: `${base_url}/lessons`,
        rel: "list",
      },
    ],
  });
});

export { apiRoutes };
