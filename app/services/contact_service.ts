import { useApi } from "./api";

interface ContactPayload {
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
}

export const useContactService = () => {
  const api = useApi();
  const handleError = (error: any) => {
    return error?.response?.data?.message || "Erreur serveur";
  };

  const sendContact = async (payload: ContactPayload) => {
    try {
           const transformedPayload = {
        name: payload.nom,
        email: payload.email,
        phone: payload.telephone,
        subject: payload.objet,
        message: payload.message,
      };
      const res = await api.post("/contact", transformedPayload);
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  const subscribeNewsletter = async (email: string) => {
    try {
      const res = await api.post("/news-letter", { email });
      return { success: true, data: res.data };
    } catch (error: any) {
      return { success: false, message: handleError(error) };
    }
  };

  return {
    sendContact,
    subscribeNewsletter,
  };
};
