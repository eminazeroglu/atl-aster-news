import NewsApi from "../api/news.api";
import { get } from "../utils/request"

export const serviceNewsFetchRandomList = async (params = {}) => {
    const res = await get(NewsApi.random, params);
    return res;
}

export const serviceNewsFetchList = async (params = {}) => {
    const res = await get(NewsApi.list, params);
    return res;
}

export const serviceNewsFetchBySlug = async (slug) => {
    const res = await get(NewsApi.showBySlug.replace(':slug', slug));
    return res;
}
