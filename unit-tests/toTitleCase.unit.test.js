import { toTitleCase } from "./toTitleCase.js";

describe("toTitleCase", () => {
  it("Mot avec première et deuxième lettre en majuscule", () => {
    const result = toTitleCase("OClock");
    expect(result).toEqual("Oclock");
  });

  it("Mot en minuscule", () => {
    const result = toTitleCase("oclock");
    expect(result).toEqual("Oclock");
  });

  it("Mot commencent par une minuscule, puis des majuscules, numériques et caractères spéciaux", () => {
    const result = toTitleCase("oCL0ck!");
    expect(result).toEqual("Ocl0ck!");
  });

  it("Avec une chaine vide", () => {
    const result = toTitleCase("");
    expect(result).toEqual("");
  });

  it("Avec Hello world", () => {
    const result = toTitleCase("Hello world");
    expect(result).toEqual("Hello World");
  });

  it("Avec tout en majuscule", () => {
    const result = toTitleCase("BONJOUR MONDE");
    expect(result).toEqual("Bonjour Monde");
  });

  it("Avec une phrase qui commence par une majuscule et qui comporte des caractères spéciaux", () => {
    const result = toTitleCase("Mais qu'est-ce qu'il se passe ici ?");
    expect(result).toEqual("Mais Qu'est-ce Qu'il Se Passe Ici ?");
  });
});
