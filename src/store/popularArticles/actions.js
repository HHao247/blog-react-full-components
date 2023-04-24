import { mappingPostData } from "../../helpers";
import postService from "../../services/postService";


export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';

export function actFetchArticlesPopular(posts) {
	return {
		type: ACT_FETCH_ARTICLES_POPULAR,
		payload: posts,
	};
}
export function actFetchArticlesPopularAsync() {
	return async (dispatch) => {
		const response = await postService.getPopular();
		const posts = response.data.map(mappingPostData);
		dispatch(actFetchArticlesPopular(posts));
	};
}