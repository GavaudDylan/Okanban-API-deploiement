/**
 * Retourne une chaîne de caractères dont la première lettre de
 * chaque mot est en majuscule et les autres lettres en minuscules.
 * @param {string} str
 * @returns string
 */
export function toTitleCase(str) {
  // écrire le code de la fonction
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
