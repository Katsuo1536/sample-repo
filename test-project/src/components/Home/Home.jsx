import { Fragment } from "react";
import { posts } from "../../data/posts";
import { Link } from 'react-router-dom';
import { time } from "../../utils/time";

export const Home = () => {

  return (
    <>
      <span className="text-2xl justify-between text-left m-5">記事一覧</span>
      {
        posts.map((elem) => (
          <Fragment key={elem.id} >
            <Link to={`articles/${elem.id}`}>
              <main className="flex justify-between mx-auto container items-center">
                <div >
                  <img src={elem.thumbnailUrl} />
                </div>

                <div className="text-left items-center">
                  <time dateTime={elem.createdAt}>{time(elem.createdAt)}</time>
                  <span>{elem.categories.map(category => (
                    <span className="bg-gray-200 text-black rounded-2xl p-1" key={elem.id}>{category}</span>
                  ))}
                  </span>

                  <h6 className="text-2xl">{elem.title}</h6>
                  <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: elem.content }}></div>
                </div>
              </main>
            </Link>

            <hr className="m-3" />

          </Fragment>
        ))}
    </>
  );

}