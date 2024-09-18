import { PrismaClient } from "@prisma/client/index.js";

BigInt.prototype.toJSON = function () {
  return parseInt(this.toString());
};

declare global {
  interface BigInt {
    toJSON(): number;
  }
}

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
