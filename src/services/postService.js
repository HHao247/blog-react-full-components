import API from './api';

const postService = {
	getAll: function (inputParams = {}) {
		return API.call().get('/wp/v2/posts', {
			params: {
				lang: 'vi',
				...inputParams,
			}
		})
	},
	getLatest: function () {
		return this.getAll({ per_page: 3, page: 1 })
	},
	getPopular: function () {
		return this.getAll({ per_page: 3, page: 1, orderby: 'post_views' })
	},
	getPaging: function ({ page = 1, inputParams = {} }) {
		return this.getAll({ per_page: 2, page, ...inputParams });
	},
	getPostDetail: function (slug) {
		return this.getAll({ slug: { slug } })

	},
	getPostSearch: function ({ queryStrURI }) {
		return this.getAll({
			per_page: 3,
			page: 1,
			search: queryStrURI
		})
	},
	getPostRelated: function (author, id) {
		return this.getAll({ per_page: 3, page: 1, author, id })
	},

}
export default postService;
