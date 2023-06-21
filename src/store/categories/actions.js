import { mappingCategories, mappingPostData } from "../../helpers";
import categoryService from "../../services/categoriesServer";


export const ACT_GET_LIST_CATEGORIES = 'ACT_GET_LIST_CATEGORIES';
export const ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES = 'ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES';

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
    // console.log("haodata", data);
    // console.log("data categories", data);
    const categories = data.map(mappingCategories);
    // console.log("hao tesst cate", categories);
    dispatch(actGetListCategories(categories));
  }
}

export function actFetchAllSearchPostByCategories({ posts, currentPage, totalPage, slug }) {
  return {
    type: ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES,
    payload: {
      posts,
      currentPage,
      totalPage,
    }
  }
}

export function actFetchAllSearchPostByCategoriesAsync({ page = 1, slug = "VueJs" }) {

  return async (dispatch) => {
    const response = await categoryService.getCategoryBySlug({ slug });
    const dataCategoryBySlug = response.data[0];
    const responseSearchCategories = await categoryService.getSearchPostByCategories({ page, categories: dataCategoryBySlug.id });
    const totalPage = parseInt(responseSearchCategories.headers['x-wp-totalpages']);
    const posts = responseSearchCategories.data.map(mappingPostData);
    dispatch(actFetchAllSearchPostByCategories({ posts: posts[0], currentPage: page, totalPage }))
  }
}