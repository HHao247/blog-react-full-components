
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { actGetPostDetailAsync } from "../store/post/actions"
import IconLoading from "../components/shared/IconLoading"
import style from '../../src/components/shared/style.css'

function PostDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(actGetPostDetailAsync(slug)).then(() => {
      setLoading(true)
    })
  }, [slug]);
  const postDetail = useSelector((state) => state.POST.postDetail);
  // console.log(postDetail);
  if (loading === false) {
    return (
      <div className="icon_center">
        <IconLoading width={250} />
      </div>
    )
  }
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead data={postDetail} />
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent data={postDetail} />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage