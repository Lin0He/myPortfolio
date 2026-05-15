import { describe, expect, it } from "vitest";
import { getPageOffset } from "../lib/navigation";

describe("gallery navigation", () => {
  it("maps each slide page to its horizontal offset", () => {
    expect(getPageOffset("Home")).toBe(0);
    expect(getPageOffset("Projects")).toBe(100);
    expect(getPageOffset("ProjectDemo")).toBe(200);
    expect(getPageOffset("Notes")).toBe(300);
    expect(getPageOffset("NoteDemo")).toBe(400);
    expect(getPageOffset("About")).toBe(500);
    expect(getPageOffset("Resume")).toBe(600);
  });
});
