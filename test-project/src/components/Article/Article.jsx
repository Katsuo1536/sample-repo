import { Fragment } from "react";
import posts from "../../data/posts";
import { Link, useParams } from 'react-router-dom';

export const Article = () => {

  const time = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();

    const dateText = year + '年' + month + '月' + day + '日';

    return dateText;
  };

  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));


  return (
    <>
      {
        <Link to="/Article/:id">
          <Fragment key={post.id} >
            <br />
            <main className="mx-auto max-w-3xl px-4">
              <div>
                <img className="items-center" src={post.thumbnailUrl} /><br />
              </div>

              <div className="text-left">
                <time dateTime={post.createdAt}>{time(post.createdAt)}</time>
                <span>{post.categories.map(category => (
                  <span className="bg-gray-200 text-black rounded-2xl p-1" key={post.id}>{category}</span>
                ))}
                </span>

                <br />
                <br />

                <h6 className="text-3xl">{post.title}</h6>

                <br />

                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>

              <br />
              <br />
              <Link to="/" className="text-blue-400">記事一覧へ戻る</Link>
            </main>
          </Fragment>
        </Link>
      }
    </>
  );

}