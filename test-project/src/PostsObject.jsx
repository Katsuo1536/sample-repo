import { Fragment } from "react";


export default function PostsObject({src}){

    const time = (dateTime) => {
        const date = new Date(dateTime);
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        
        const dateText = year + '年' + month + '月' + day + '日';

        return dateText;
    };
    
    return(
        <dl>
        <header className="bg-taupe-950">
            <nav className="flex justify-between mx-auto container items-center">
                <div className="text-white text-2xl">Blog</div>
                <div className="text-white"><a href="">お問い合わせ</a></div>
            </nav>
        </header>
        <p className="text-2xl justify-between text-left">記事一覧</p>
            {
            src.map((elem, index) =>(
                <Fragment key={index} >
                    <main className="flex justify-between mx-auto container items-center">
                    <div >
                        <img src={elem.thumbnailUrl} />
                    </div>

                    <div className="text-left items-center ">
                        <time dateTime={elem.createdAt}>{ time(elem.createdAt) }</time>
                        <span>{elem.categories.map(category => (
                        <span className="bg-gray-200 text-black rounded-2xl p-1 ">{category}</span>
                        ))}
                        </span>
                    
                    <h6 className="text-2xl">{elem.title}</h6>
                    <div className="line-clamp-2" dangerouslySetInnerHTML={{__html: elem.content}}></div>
                    </div>
                    </main>
                    
                    <br/>
                    <hr/>
                    <br/>

                </Fragment>
            ))}
        </dl>
    );
}