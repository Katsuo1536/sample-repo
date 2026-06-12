import { Fragment } from "react";
import { posts } from "../../data/posts";
import { Link } from 'react-router-dom';

export const Home = () => {

  const time = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();

    const dateText = year + '年' + month + '月' + day + '日';

    return dateText;
  };


  return (
    <>
      <span className="text-2xl justify-between text-left">記事一覧</span>
      {
        posts.map((elem) => (
          <Fragment key={elem.id} >
            <Link to={`Article/${elem.id}`}>
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

            <br />
            <hr />
            <br />

          </Fragment>
        ))}
    </>
  );

}