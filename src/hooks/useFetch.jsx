import { useState } from "react"
import { serviceCategoryFetchList } from "../services/category.service";
import { serviceNewsFetchBySlug, serviceNewsFetchComments, serviceNewsFetchList, serviceNewsFetchRandomList } from "../services/news.service";
import { serviceAuthorFetchList } from "../services/author.service";

const useFetch = (state = false) => {
    const [data, setData] = useState(state);
    const [loading, setLoading] = useState(false);

    const fetch = async (service, params) => {
        setLoading(true);
        const res = await service(params);
        setData(res);
        setLoading(false);
    }

    return [data, fetch, loading]
}

// Category Fetch
export const useFetchCategoryList = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async (params = {}) => {
        fetch(serviceCategoryFetchList, params);
    }

    return [data || [], apiFetch, loading]
}

// Random News Fetch
export const useFetchNewsRandomList = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async () => {
        fetch(serviceNewsFetchRandomList, {limit: 6});
    }

    return [data?.data || [], apiFetch, loading]
}

export const useFetchNewsList = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async (params = {}) => {
        fetch(serviceNewsFetchList, params);
    }

    return [data?.data || [], apiFetch, loading, data?.total]
}

export const useFetchAuthorRandomList = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async () => {
        fetch(serviceAuthorFetchList, {random: true, limit: 5});
    }

    return [data?.data || [], apiFetch, loading]
}

export const useFetchAuthorList = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async () => {
        fetch(serviceAuthorFetchList, {limit: 20});
    }

    return [data?.data || [], apiFetch, loading, data.total]
}

export const useFetchNewsSearch = () => {
    const [data, fetch, loading] = useFetch([]);

    const apiFetch = async (params) => {
        fetch(serviceNewsFetchList, params);
    }

    return [data?.data || [], apiFetch, loading]
}

export const useFetchNewsBySlug = () => {
    const [data, fetch, loading] = useFetch(false);

    const apiFetch = async (slug) => {
        fetch(serviceNewsFetchBySlug, slug);
    }

    return [data || false, apiFetch, loading]
}

export const useFetchNewsComments = () => {
    const [data, fetch, loading] = useFetch(false);

    const apiFetch = async (id) => {
        fetch(serviceNewsFetchComments, id);
    }

    return [data || [], apiFetch, loading]
}