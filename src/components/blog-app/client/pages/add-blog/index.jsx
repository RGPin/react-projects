import { useContext, useEffect } from "react";
import classes from "./styles.module.css";
import { BlogContext } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddNewBlog() {
  const { formData, setFormData, isEdit, setIsEdit } = useContext(BlogContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDB() {
    setIsEdit(false);
    try {
      const response = await fetch("http://localhost:5000/api/blogs/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
        }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      if (result) {
        setFormData({
          title: "",
          description: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEditBlogThenSaveToDB() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/update/${location.state.blog._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
          }),
        },
      );

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      if (result) {
        setIsEdit(false);
        setFormData({
          title: "",
          description: "",
        });
        navigate("/");
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    if (location.state) {
      const { blog } = location.state;
      setIsEdit(true);
      setFormData({
        title: blog.title,
        description: blog.description,
      });
    }
  }, [location]);

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit a Blog" : "Add a Blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <button
          onClick={isEdit ? handleEditBlogThenSaveToDB : handleSaveBlogToDB}
        >
          {isEdit ? "Edit Blog" : "Add New Blog"}
        </button>
      </div>
    </div>
  );
}
