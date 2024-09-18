import { z } from "zod";

export const ContestQuerySchema = z.object({
  author: z.string().optional(),

  deadlineEq: z.coerce.date().optional(),
  deadlineBefore: z.coerce.date().optional(),
  deadlineAfter: z.coerce.date().optional(),

  createdEq: z.coerce.date().optional(),
  createdBefore: z.coerce.date().optional(),
  createdAfter: z.coerce.date().optional(),
});

export const ContestCreateSchema = z.object({
  deadline: z.coerce.date(),
  title: z.string(),
  options: z
    .array(z.object({ name: z.string() }))
    .min(2, { message: "Contest must have at least two options." }),
});
