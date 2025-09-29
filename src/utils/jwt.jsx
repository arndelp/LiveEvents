import { jwtDecode } from "jwt-decode";

/**
 * Décode un token JWT en toute sécurité
 * @param {string} token - Le token JWT
 * @returns {object|null} - Le payload décodé ou null si invalide
 */
export const safeJwtDecode = (token) => {
  try {
    return jwtDecode(token);
  } catch (err) {
    console.warn("Token invalide :", err.message);
    return null;
  }
};
