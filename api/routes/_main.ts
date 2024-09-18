import { Hono } from "hono";

import { contestRouter } from "./contest/route";

export const app = new Hono().basePath("/api").route("/contest", contestRouter);
