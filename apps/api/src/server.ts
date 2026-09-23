import { app } from "./app.js";
import { connectDatabase } from "./config/db.js";
import { env } from "./config/env.js";

await connectDatabase();
app.listen(env.PORT, "0.0.0.0", () => console.log(`API listening on ${env.PORT}`));
