//Redimensionnement des images pour un affichage responsive


// utils/imageHelper.js
export function generateSrcSet(url) {
  // Ici on suppose un paramètre `w` pour redimensionner
  // Sinon tu peux juste renvoyer la même URL pour toutes tailles
  const small = url.includes("?") ? `${url}&w=400` : `${url}?w=400`;
  const medium = url.includes("?") ? `${url}&w=800` : `${url}?w=800`;
  const large = url.includes("?") ? `${url}&w=1600` : `${url}?w=1600`;

  return {
    src: medium,
    srcSet: `${small} 400w, ${medium} 800w, ${large} 1600w`,
    sizes: `(max-width: 600px) 100vw, 50vw`,
  };
}
