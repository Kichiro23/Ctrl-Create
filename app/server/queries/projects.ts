import { connectDb } from "./connection";
import { Project } from "../../db/models";

function withTimeout<T>(fn: () => Promise<T>, ms = 10000): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Database operation timed out after ${ms}ms`)), ms)
  );
  return Promise.race([fn(), timeout]);
}

export async function findAllProjects(category?: string) {
  return withTimeout(async () => {
    await connectDb();
    const filter = category ? { category } : {};
    return Project.find(filter).sort({ createdAt: -1 }).lean();
  });
}

export async function findFeaturedProjects() {
  return withTimeout(async () => {
    await connectDb();
    return Project.find({ featured: true }).sort({ createdAt: -1 }).lean();
  });
}
