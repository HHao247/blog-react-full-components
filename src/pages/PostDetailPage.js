
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { actGetPostDetailAsync } from "../store/postDetailArticles/actions"

function PostDetailPage() {
  const params = useParams();
  const slug = params.slug;
  console.log(slug);
  const dispatch = useDispatch();
  const [wait, setWait] = useState(false)
  useEffect(() => {
    dispatch(actGetPostDetailAsync(slug)).then(() => {
      setWait(true);
    })
  }, [slug]);
  const postDetail = useSelector((state) => state.DETAIL.postDetail);
  console.log("postDetail", postDetail);
  if (wait === false) return <></>
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage