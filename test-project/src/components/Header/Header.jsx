import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Form } from "./Form";

export const Header = () => {

    return (

        
        <header className="bg-taupe-950">
            <nav className="flex justify-between mx-auto container items-center">
                <div className="text-white text-2xl">Blog</div>
                <Link to="form" className="text-white text-1.5xl">お問い合わせ</Link>
            </nav>

        </header>

    );
};

