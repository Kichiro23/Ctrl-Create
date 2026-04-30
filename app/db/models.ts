import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    unionId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    lastSignInAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    businessName: { type: String },
    serviceType: { type: String },
    budget: { type: String },
    timeline: { type: String },
    message: { type: String, required: true },
    discountType: { type: String, enum: ["none", "student", "pwd", "senior"], default: "none" },
    discountId: { type: String },
    readStatus: { type: String, enum: ["unread", "read"], default: "unread" },
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    link: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const chatMessageSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    role: { type: String, enum: ["user", "assistant"], required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const membershipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    tier: { type: String, enum: ["bronze", "silver", "gold", "diamond"], required: true },
    status: { type: String, enum: ["pending", "active", "expired", "cancelled"], default: "pending" },
    notes: { type: String },
  },
  { timestamps: true }
);

const templateOrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    templateName: { type: String, required: true },
    pricePHP: { type: String, required: true },
    status: { type: String, enum: ["pending", "paid", "fulfilled", "cancelled"], default: "pending" },
    notes: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export const ChatMessage = mongoose.models.ChatMessage || mongoose.model("ChatMessage", chatMessageSchema);
export const Membership = mongoose.models.Membership || mongoose.model("Membership", membershipSchema);
export const TemplateOrder = mongoose.models.TemplateOrder || mongoose.model("TemplateOrder", templateOrderSchema);

export type IUser = mongoose.InferSchemaType<typeof userSchema> & { _id: string };
export type IMessage = mongoose.InferSchemaType<typeof messageSchema> & { _id: string };
export type IProject = mongoose.InferSchemaType<typeof projectSchema> & { _id: string };
export type IChatMessage = mongoose.InferSchemaType<typeof chatMessageSchema> & { _id: string };
export type IMembership = mongoose.InferSchemaType<typeof membershipSchema> & { _id: string };
export type ITemplateOrder = mongoose.InferSchemaType<typeof templateOrderSchema> & { _id: string };
