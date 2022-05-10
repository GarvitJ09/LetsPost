import "./App.css";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth></Auth>}></Route>
          ) : (
            <>
              <Route path="/myBlogs" element={<UserBlogs></UserBlogs>}></Route>
              <Route
                path="/myBlogs/:id"
                element={<BlogDetail></BlogDetail>}
              ></Route>
              <Route path="/blogs/add" element={<AddBlog></AddBlog>}></Route>
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
