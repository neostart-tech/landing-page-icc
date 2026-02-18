import { useApi } from "./api";

export const useStatisticsService = () => {
  const api = useApi();
  const getStatistics = async () => {
    try {
      const response = await api.get("/website/statistiques");

      if (response.status === 200) {
        return {
          success: true,
          data: response.data.data,
        };
      }

      return {
        success: false,
        message: "Réponse inattendue du serveur.",
      };

    } catch (error: any) {

      if (error.response) {
        switch (error.response.status) {
          case 401:
            return { success: false, message: "Non autorisé." };
          case 403:
            return { success: false, message: "Accès interdit." };
          case 500:
            return { success: false, message: "Erreur serveur." };
          default:
            return { success: false, message: "Erreur inconnue." };
        }
      }

      return {
        success: false,
        message: "Impossible de contacter le serveur.",
      };
    }
  };

  return {
    getStatistics,
  };
};
