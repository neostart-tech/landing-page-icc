import { useApi } from "./api";

export const useResourcesService = () => {
  const api = useApi();
  const handleError = (error: any) => {
    return error?.response?.data?.message || "Erreur serveur";
  };

  const getMentionsLegales = async () => {
    try {
      const res = await api.get("/mentions-legales");
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  const getPrivacyPolicy = async () => {
    try {
      const res = await api.get("/politique-de-confidentialite");
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  const getCgu = async () => {
    try {
      const res = await api.get("/conditions-generales-d-utilisation");
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  const getPsc = async () => {
    try {
      const res = await api.get("/politique-de-suppression-de-compte");
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  return {
    getMentionsLegales,
    getPrivacyPolicy,
    getCgu,
    getPsc,
  };
};
