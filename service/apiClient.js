import {setApiClinet} from "./api/axiosInstance";
import {setAuthApiClient} from "./api/authAxiosInstance";

export const api = setApiClinet();
export const authApi = setAuthApiClient();
