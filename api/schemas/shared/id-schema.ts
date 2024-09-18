import { z } from "zod";

export const UUIDSchema = z.object({
  uuid: z.string(),
});

export const IDSchema = z.object({
  id: z.number(),
});
