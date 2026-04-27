import { useContext, useEffect } from "react";
import { BlogContext } from "../../context";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Home() {
  const { pending, setPending, blogList, setBlogList } =
    useContext(BlogContext);

  async function fetchListOfBlogs() {
    try {
      setPending(true);
      const response = await fetch("http://localhost:5000/api/blogs");

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      if (result.blogList.length) setBlogList(result.blogList);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  }

  async function handleDeleteBlog(id) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/delete/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      if (result?.message === "Successfully deleted") {
        setBlogList([]);
        fetchListOfBlogs();
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);
  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs. Please wait...</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList?.length ? (
            blogList.map((blog) => (
              <div key={blog._id}>
                <p>{blog.title}</p>
                <p>{blog.description}</p>
                <FaEdit size={30} />
                <FaTrash onClick={() => handleDeleteBlog(blog._id)} size={30} />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
}
