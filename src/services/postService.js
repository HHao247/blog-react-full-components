import API from './api';

const postService = {
	getAll: function (inputParams = {}){
		return API.get('/wp/v2/posts', {
			params: {
				lang: 'vi',
				...inputParams,
			}
		})
	},
	getLatest: function (){
		return this.getAll({per_page: 3, page: 1})
	},
	getPopular: function (){
		return this.getAll({per_page: 3, page: 1, orderby: 'post_views'})
	},
	getGeneral: function (page = 1){
		return this.getAll({ per_page: 2, page, orderby: 'post_views' });
	},
  getPostDetail: function(slug){

		return this.getAll({slug:{slug}})

	}

}
export default postService;
