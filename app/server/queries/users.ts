import { connectDb } from "./connection";
import { User } from "../../db/models";
import type { IUser } from "../../db/models";
import { env } from "../lib/env";

export async function findUserByUnionId(unionId: string): Promise<IUser | null> {
  await connectDb();
  return User.findOne({ unionId }).lean();
}

export async function upsertUser(data: {
  unionId: string;
  name?: string;
  email?: string;
  avatar?: string;
}): Promise<IUser> {
  await connectDb();

  const isOwner = data.unionId === env.ownerUnionId;

  const user = await User.findOneAndUpdate(
    { unionId: data.unionId },
    {
      $set: {
        name: data.name,
        email: data.email,
        avatar: data.avatar,
        lastSignInAt: new Date(),
        ...(isOwner ? { role: "admin" } : {}),
      },
    },
    { upsert: true, new: true }
  ).lean();

  return user as IUser;
}
