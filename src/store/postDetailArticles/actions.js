import { mappingPostData } from '../../helpers';
import postService from '../../services/postService';

export const ACT_FETCH_DETAIL_PAGE = 'ACT_FETCH_DETAIL_PAGE';


export function actGetPostDetail(posts) {
	return {
		type: ACT_FETCH_DETAIL_PAGE,
		payload: posts,
	}
}
export function actGetPostDetailAsync(slug) {
	return async (dispatch) => {
		const response = await postService.getPostDetail(slug);
		const posts = response.data.map(mappingPostData);
		console.log(posts);
		dispatch(actGetPostDetail(posts))
	}
}