import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const UserBlogs = () => {
  const id = localStorage.getItem("userId");
  const [user, setUser] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
    //eslint-disable-next-line
  }, []);
  console.log(user);
  return (
    <div>
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            user={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
