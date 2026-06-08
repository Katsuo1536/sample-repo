import { Fragment } from "react";
import { posts } from "../../data/posts";
import "./Home.css";

export const Home = () => {

    const time = (dateTime) => {
        const date = new Date(dateTime);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        
        const dateText = year + '年' + month + '月' + day + '日';

        return dateText;
    };


return(
            <>
            <span className="list">記事一覧</span>
            {
            posts.map((elem) =>(
                <Fragment key={elem.id} >
                    <main className="main">
                    <div >
                        <img src={elem.thumbnailUrl} />
                    </div>

                    <div className="text">
                        <time dateTime={elem.createdAt}>{ time(elem.createdAt) }</time>
                        <span key={elem.id}>{elem.categories.map(category => (
                        <span className="category">{category}</span>
                        ))}
                        </span>
                    
                    <h6 className="title">{elem.title}</h6>
                    <div className="content" dangerouslySetInnerHTML={{__html: elem.content}}></div>
                    </div>
                    </main>
                    
                    <br/>
                    <hr/>
                    <br/>

                    </Fragment>
            ))}
            </>
        );

}