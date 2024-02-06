import AuthApi from "../api/auth.api"
import { post } from "../utils/request"

export const serviceAuthLogin = async (params) => {
     const res = await post(AuthApi.login, params);
     return res;
}