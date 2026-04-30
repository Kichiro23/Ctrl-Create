import { connectDb } from "./connection";
import { Project } from "../../db/models";
import type { IProject } from "../../db/models";

export async function findAllProjects(category?: string): Promise<IProject[]> {
  await connectDb();
  const filter = category ? { category } : {};
  return Project.find(filter).sort({ createdAt: -1 }).lean();
}

export async function findFeaturedProjects(): Promise<IProject[]> {
  await connectDb();
  return Project.find({ featured: true }).sort({ createdAt: -1 }).lean();
}

export async function createProject(data: {
  title: string;
  category: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  featured?: boolean;
}): Promise<string> {
  await connectDb();
  const doc = await Project.create(data);
  return doc._id.toString();
}
