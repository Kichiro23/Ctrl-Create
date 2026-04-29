import { getDb } from "./connection";
import { projects } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export async function findAllProjects(category?: string) {
  if (category) {
    return getDb().query.projects.findMany({
      where: eq(projects.category, category),
      orderBy: desc(projects.createdAt),
    });
  }
  return getDb().query.projects.findMany({
    orderBy: desc(projects.createdAt),
  });
}

export async function findFeaturedProjects() {
  return getDb().query.projects.findMany({
    where: eq(projects.featured, true),
    orderBy: desc(projects.createdAt),
  });
}

export async function createProject(data: {
  title: string;
  category: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  featured?: boolean;
}) {
  const [{ id }] = await getDb().insert(projects).values(data).$returningId();
  return id;
}
