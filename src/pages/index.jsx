import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import PostsListPage from "./postsListPage";
import PostPage from "./postPage";

export const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/posts/:id'} element={<PostPage/>}/>
                <Route path={'/posts'} element={<PostsListPage/>}/>
                <Route path="*" element={<Navigate to="/posts"/>}/>
            </Routes>
        </HashRouter>
    )
}

