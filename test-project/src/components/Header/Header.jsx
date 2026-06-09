import { Fragment } from "react";
import styles from "./Header.module.css";

export const Header = () => {

    return (

        <header className={styles.header}>
            <nav className={styles.navigate}>
                <div className={styles.blog}>Blog</div>
                <div className={styles.inquiry}>お問い合わせ</div>
            </nav>
        </header>

    );
};

