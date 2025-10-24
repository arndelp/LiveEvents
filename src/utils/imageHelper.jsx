//Redimensionnement des images pour un affichage responsive


// utils/imageHelper.js
export function generateSrcSet(url) {
  // Ici on suppose un paramètre `w` pour redimensionner
  // Sinon tu peux juste renvoyer la même URL pour toutes tailles
  const small = url.includes("?") ? `${url}&w=200` : `${url}?w=200`;
  const medium = url.includes("?") ? `${url}&w=400` : `${url}?w=400`;
  const large = url.includes("?") ? `${url}&w=800` : `${url}?w=800`;

  return {
    src: medium,
    srcSet: `${small} 200w, ${medium} 400w, ${large} 800w`,
    sizes: `(max-width: 300px) 100vw, 50vw`,
  };
}
