import * as axios from "axios";
import config from "../config";

const baseURL = config.app_locale ? config.app_dev_url : config.app_prod_url;
export default defineNuxtPlugin(() => {
    axios.default.defaults.baseURL = baseURL;

    return {
        provide: {
            axios: axios.default,
        },
    };
    // You can also add interceptors or other configurations to the instance here
});