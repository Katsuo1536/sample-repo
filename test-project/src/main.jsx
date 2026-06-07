import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { posts } from './data/posts'
import PostsObject from './PostsObject'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <PostsObject src={posts} />
</StrictMode>
);
