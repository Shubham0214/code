import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma = db;
