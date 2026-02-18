export const handleApiError = (error: any): string => {
  if (!error.response) return "Impossible de contacter le serveur.";

  switch (error.response.status) {
    case 401:
      return "Non autorisé.";
    case 403:
      return "Accès interdit.";
    case 404:
      return "Ressource introuvable.";
    case 422:
      return error.response.data.message || "Données invalides.";
    case 500:
      return "Erreur serveur.";
    default:
      return "Une erreur est survenue.";
  }
};
