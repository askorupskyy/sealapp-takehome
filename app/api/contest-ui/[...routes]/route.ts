import { contestUIRouter } from "@/lib/api/routes/contest-ui";
import { handle } from "frog/next";

export const GET = handle(contestUIRouter);
export const POST = handle(contestUIRouter);
