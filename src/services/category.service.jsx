import CategoryApi from "../api/category.api";
import { get } from "../utils/request"

export const serviceCategoryFetchList = async (params = {}) => {
    const res = await get(CategoryApi.list);
    return res;
}