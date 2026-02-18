import { useApi } from "./api";
import { handleApiError } from "./error_helper"; // si tu l’as créé

export const useFaqService = () => {
  const api = useApi();
  const getFaqs = async () => {
    try {
      const res = await api.get("/faqs");
      return {
        success: true,
        data: res.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: handleApiError
          ? handleApiError(error)
          : error?.response?.data?.message || "Erreur serveur",
      };
    }
  };

  const getTopFaqs = async () => {
    try {
      const res = await api.get("/faqs/top");
      return {
        success: true,
        data: res.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message: handleApiError
          ? handleApiError(error)
          : error?.response?.data?.message || "Erreur serveur",
      };
    }
  };

  return {
    getFaqs,
    getTopFaqs,
  };
};
