import { Fragment, useState, useEffect } from "react";
// import posts from "../../data/posts";
import { Link, useParams } from 'react-router-dom';
import { time } from "../../utils/time";

export const Article = () => {

  const { id } = useParams();

  const [post, setPost] = useState([])

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${parseInt(id)}`)
      const data = await res.json()
      setPost(data.post)
      console.log(post);
    }

    fetcher()
  }, [])

  if (!post) return <div className="mx-auto text-center mt-5">投稿が見つかりません</div>;

  if (post.length === 0) return <div className="mx-auto text-center mt-5">投稿読み込み中！！！</div>;


  return (
    <>
      {
        <Link to="/articles/:id">
          <Fragment key={post.id} >
            <main className="mx-auto max-w-3xl px-4 mt-3">
              <div>
                <img className="items-center" src={post.thumbnailUrl} /><br />
              </div>

              <div className="text-left">
                <time dateTime={post.createdAt}>{time(post.createdAt)}</time>



                <span>{post.categories?.map(category => (
                  <span className="bg-gray-200 text-black rounded-2xl p-1" >{category}</span>
                ))}
                </span>


                <h6 className="text-3xl mt-2">{post.title}</h6>

                <div className="my-3" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>

              <Link to="/" className="text-blue-400" >記事一覧へ戻る</Link>
            </main>
          </Fragment>
        </Link>
      }
    </>
  );

}