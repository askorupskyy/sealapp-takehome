import type { AppType } from "../routes/_main";
import { hc } from "hono/client";

export const client = hc<AppType>("");
