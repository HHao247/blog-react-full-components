import { mappingPostData } from '../../helpers';
import postService from '../../services/postService';


export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_GENERAL = 'ACT_FETCH_ARTICLES_GENERAL';
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



