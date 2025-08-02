import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Tutorial progress tracking
export const tutorials = pgTable("tutorials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  steps: jsonb("steps").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  tutorialId: varchar("tutorial_id").references(() => tutorials.id),
  completedSteps: jsonb("completed_steps").default([]),
  completed: timestamp("completed"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTutorialSchema = createInsertSchema(tutorials).pick({
  title: true,
  description: true,
  category: true,
  steps: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  tutorialId: true,
  completedSteps: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Tutorial = typeof tutorials.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type InsertTutorial = z.infer<typeof insertTutorialSchema>;
export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
