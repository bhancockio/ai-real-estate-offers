import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env

import * as schema from "./schema";

export const db = drizzle(sql, { schema });
