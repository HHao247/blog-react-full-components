import { mappingPostData } from '../../helpers';
import postService from '../../services/postService';

export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';

export function actFetchArticlesLatest(posts) {
	return {
		type: ACT_FETCH_ARTICLES_LATEST,
		payload: posts,
	};
}

export function actFetchArticlesLatestAsync() {
	return async (dispatch) => {
		const response = await postService.getLatest();
		const posts = response.data.map(mappingPostData);
		dispatch(actFetchArticlesLatest(posts));
	};
}
