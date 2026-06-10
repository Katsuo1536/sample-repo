import { Fragment } from "react";

export const Header = () => {

    return (

        <header className="bg-taupe-950">
            <nav className="flex justify-between mx-auto container items-center">
                <div className="text-white text-2xl">Blog</div>
                <div className="text-white">お問い合わせ</div>
            </nav>
        </header>

    );
};

