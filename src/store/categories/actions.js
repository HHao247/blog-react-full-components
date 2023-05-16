import { mappingCategories } from "../../helpers";
import categoryService from "../../services/categoriesServer";


export const ACT_GET_LIST_CATEGORIES = 'ACT_GET_LIST_CATEGORIES';

export function actGetListCategories(categories) {
  return {
    type: ACT_GET_LIST_CATEGORIES,
    payload: categories,
  }
}

export function actGetListCategoriesAsync() {
  return async (dispatch) => {
    const response = await categoryService.getAll();
    const data = response.data;
    // console.log("data categories", data);
    const categories = data.map(mappingCategories);
    // console.log("hao tesst cate", categories);
    dispatch(actGetListCategories(categories));
  }
}