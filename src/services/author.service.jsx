import AuthorApi from "../api/author.api"
import { get } from "../utils/request"

export const serviceAuthorFetchList = async (params = false) => {
    const res = await get(AuthorApi.list, params);
    return res;
}