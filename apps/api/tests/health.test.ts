import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";
describe("health route", () => { it("exports an express app", () => expect(app).toBeDefined()); });
