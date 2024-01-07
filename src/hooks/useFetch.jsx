import { useState } from "react"
import { serviceCategoryFetchList } from "../services/category.service";

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

    return [data, apiFetch, loading]
}