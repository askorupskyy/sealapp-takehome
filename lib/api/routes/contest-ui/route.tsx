/** @jsxImportSource frog/jsx */

import { Button, Frog } from "frog";
import { HTTPException } from "hono/http-exception";

import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";

import { prisma } from "@/api/db";

import { BlankResponse } from "./components/blank-response";
import { Positions } from "./components/positions";

const contestUIRouter = new Frog({
  basePath: "/api/contest-ui",
  title: "Frog Frame",
});

contestUIRouter
  .frame("/show-positions", async (c) => {
    const contestId = c.req.query("contestId");

    const contest = await prisma.contest.findFirst({
      where: { id: contestId },
      include: { choiceOptions: { include: { positions: true } } },
    });

    if (!contest) {
      return c.res({
        image: <BlankResponse message="Contest not found" />,
      });
    }

    return c.res({
      image: <Positions contest={contest} />,
    });
  })

  .frame("/place-position", async (c) => {
    const { buttonValue: choiceId } = c;
    const contestId = c.req.query("contestId");

    if (!c.frameData?.fid || !choiceId) {
      throw new HTTPException(401, { message: "Unauthorized" });
    }

    const previousPosition = await prisma.contestPosition.findFirst({
      where: {
        author: c.frameData.fid.toString(),
        choiceId: parseInt(choiceId),
      },
    });

    if (!previousPosition) {
      await prisma.contestPosition.create({
        data: {
          author: c.frameData.fid.toString(),
          choiceId: parseInt(choiceId),
        },
      });
    }

    const contest = await prisma.contest.findFirst({
      where: { id: contestId },
      include: { choiceOptions: { include: { positions: true } } },
    });

    if (!contest) {
      return c.res({
        image: <BlankResponse message="Contest not found" />,
      });
    }

    return c.res({
      image: <Positions contest={contest} />,
    });
  })

  .frame("/:id", async (c) => {
    const contest = await prisma.contest.findUnique({
      where: { id: c.req.param("id") },
      include: { choiceOptions: { include: { positions: true } } },
    });

    if (!contest) {
      return c.res({
        image: <BlankResponse message="Contest not found" />,
      });
    }

    // now we see if this user has already took a position in the contest
    if (c.frameData?.fid) {
      const previousPosition = await prisma.contestPosition.findFirst({
        where: {
          author: c.frameData.fid.toString(),
          choice: { contestId: c.req.param("id") },
        },
        include: { choice: true },
      });

      // if they did, show their position....
      if (previousPosition) {
        return c.res({
          image: (
            <BlankResponse
              message={`You already voted ${previousPosition.choice.name}`}
            />
          ),
        });
      }
    }

    if (contest.deadline < new Date()) {
      return c.res({
        image: <Positions contest={contest} />,
        intents: [<Button action="/show-positions">Show positions</Button>],
      });
    }

    return c.res({
      action: `/place-position?contestId=${contest.id}`,
      image: <BlankResponse message={contest.title} />,
      intents: contest.choiceOptions.map((option) => (
        <Button value={option.id.toString()}>{option.name}</Button>
      )),
    });
  });

devtools(contestUIRouter, { serveStatic });

export { contestUIRouter };
