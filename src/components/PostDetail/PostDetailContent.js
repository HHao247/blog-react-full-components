import { format, mappingPostData } from '../../helpers'
import './post-detail.css'
import PostDetailComments from "./PostDetailComments"
import PostDetailRichText from "./PostDetailRichText"
import PostDetailTags from "./PostDetailTags"

function PostDetailContent({ data }) {
  const { thumb, shortDesc, detailContent } = data
  console.log("datadetail", data);
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={thumb} alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText detailContent={detailContent} />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  )
}

export default PostDetailContent