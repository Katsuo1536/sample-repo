import { Fragment } from "react";
import { posts } from "../../data/posts";
import styles from "./Home.module.css";

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
            <span className={styles.list}>記事一覧</span>
            {
                posts.map((elem) => (
                    <Fragment key={elem.id} >
                        <main className={styles.main}>
                            <div >
                                <img src={elem.thumbnailUrl} />
                            </div>

                            <div className={styles.text}>
                                <time dateTime={elem.createdAt}>{time(elem.createdAt)}</time>
                                <span>{elem.categories.map(category => (
                                    <span className={styles.category} key={elem.id}>{category}</span>
                                ))}
                                </span>

                                <h6 className={styles.title}>{elem.title}</h6>
                                <div className={styles.content} dangerouslySetInnerHTML={{ __html: elem.content }}></div>
                            </div>
                        </main>

                        <br />
                        <hr />
                        <br />

                    </Fragment>
                ))}
        </>
    );

}