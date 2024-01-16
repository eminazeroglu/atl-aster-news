import CategoryApi from "../api/category.api";
import { get } from "../utils/request"

export const serviceCategoryFetchList = async (params = {}) => {
    const res = await get(CategoryApi.list);
    if (!localStorage.getItem('categories')) {
        localStorage.setItem('categories', JSON.stringify(res));
        window.location.reload();
        return false;
    }
    return res;
}