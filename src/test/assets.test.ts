import { describe, expect, it } from "vitest";
import { getPublicAssetUrl, getResumeUrl } from "../lib/assets";

describe("public asset URLs", () => {
  it("builds a GitHub Pages-safe resume URL", () => {
    expect(getResumeUrl("/portfolio/")).toBe("/portfolio/resume/Lin-He-Resume.pdf");
  });

  it("normalizes leading slashes in asset paths", () => {
    expect(getPublicAssetUrl("/demo/example.png", "/portfolio/")).toBe("/portfolio/demo/example.png");
  });
});
