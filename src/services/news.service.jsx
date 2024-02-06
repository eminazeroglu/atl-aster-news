import NewsApi from "../api/news.api";
import { destroy, get, post } from "../utils/request"

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


export const serviceNewsFetchComments= async (id) => {
    const res = await get(NewsApi.comments.replace(':id', id));
    return res;
}

export const serviceNewsPostComments= async (id, values) => {
    const res = await post(NewsApi.addComment.replace(':id', id), values);
    if (res?.id) {
        return true;
    }
    return false;
}

export const serviceNewsDeleteComment= async (newsId, commentId) => {
    const res = await destroy(NewsApi.removeComment.replace(':id', newsId).replace(':commentId', commentId));
    if (res) {
        return true;
    }
    return false;
}
