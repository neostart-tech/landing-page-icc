import axios from "axios";
import { useRuntimeConfig } from "#app";

export const useApi = () => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      Accept: "application/json",
      [config.public.apiKeyHeaderName]: config.public.apiKey,
    },
  });

  return api;
};
