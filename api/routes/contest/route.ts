import { ContestQuerySchema, ContestCreateSchema } from "@/api/schemas/contest";
import { UUIDSchema } from "@/api/schemas/shared";

import { Hono } from "hono";

import { zValidator } from "@hono/zod-validator";

import { prisma } from "@/api/db/index";

export const contestRouter = new Hono()
  .get("/", zValidator("query", ContestQuerySchema), async (c) => {
    const query = c.req.valid("query");

    const contests = await prisma.contest.findMany({
      where: {
        author: query.author,
        createdAt: {
          equals: query.createdEq,
          lt: query.createdBefore,
          gt: query.createdAfter,
        },
        deadline: {
          equals: query.deadlineEq,
          lt: query.deadlineBefore,
          gt: query.deadlineAfter,
        },
      },
      include: { choiceOptions: true },
    });

    return c.json(contests);
  })

  .post("/", zValidator("json", ContestCreateSchema), async (c) => {
    const contestData = c.req.valid("json");

    await prisma.contest.create({
      data: {
        author: "856508",
        title: contestData.title,
        deadline: contestData.deadline,
        choiceOptions: {
          createMany: { data: contestData.options },
        },
      },
    });

    return c.json({
      message: "Contest successfully created.",
    });
  })

  .get("/:id", zValidator("param", UUIDSchema), async (c) => {
    const contest = await prisma.contest.findUnique({
      where: { id: c.req.valid("param").uuid },
    });

    return c.json(contest);
  });
