import { mappingPostData } from "../../helpers";
import postService from "../../services/postService";


export const ACT_FETCH_ARTICLES_GENERAL = 'ACT_FETCH_ARTICLES_GENERAL';

export function actFetchArticlesGeneral(posts, currentPage, totalPage) {
	return {
		type: ACT_FETCH_ARTICLES_GENERAL,
		payload: {
			posts,
			currentPage,
			totalPage
		},
	};
}
export function actFetchArticlesGeneralAsync(page = 1) {
	return async (dispatch) => {
		const response = await postService.getGeneral(page);
		const totalPage = parseInt(response.headers['x-wp-totalpages']);
		const posts = response.data.map(mappingPostData)
		dispatch(actFetchArticlesGeneral(posts, page, totalPage))

	}
}