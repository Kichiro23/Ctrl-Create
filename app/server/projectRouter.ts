import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { findAllProjects, findFeaturedProjects } from "./queries/projects";

export const projectRouter = createRouter({
  list: publicQuery
    .input(
      z
        .object({
          category: z.string().optional(),
        })
        .optional(),
    )
    .query(({ input }) => {
      return findAllProjects(input?.category);
    }),

  featured: publicQuery.query(() => {
    return findFeaturedProjects();
  }),
});
