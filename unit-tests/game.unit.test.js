import { computeStrength } from "./game.js";

describe("computeStrength", () => {
  it("Au niveau 1, le personnage à 1 point de force", () => {
    const result = computeStrength(1);
    expect(result).toEqual(1);
  });

  it("Au niveau 50, le personnage à 50 points de force", () => {
    const result = computeStrength(50);
    expect(result).toEqual(50);
  });

  it("Au niveau 51, le personnage à 50 points de force", () => {
    const result = computeStrength(51);
    expect(result).toEqual(50);
  });

  it("Au niveau 52, le personnage à 51 points de force", () => {
    const result = computeStrength(52);
    expect(result).toEqual(51);
  });

  it("Au niveau 100, le personnage à 75 points de force", () => {
    const result = computeStrength(100);
    expect(result).toEqual(75);
  });

  it("Au niveau 101, le personnage à 75 points de force", () => {
    const result = computeStrength(101);
    expect(result).toEqual(75);
  });

  it("Au niveau 200, le personnage à 108 points de force", () => {
    const result = computeStrength(200);
    expect(result).toEqual(108);
  });

  it("Au niveau 201, le personnage à 108 points de force", () => {
    const result = computeStrength(201);
    expect(result).toEqual(108);
  });

  it("Au niveau 205, le personnage à 109 points de force", () => {
    const result = computeStrength(205);
    expect(result).toEqual(109);
  });

  it("Au niveau 500, le personnage à 168 points de force", () => {
    const result = computeStrength(500);
    expect(result).toEqual(168);
  });
});
