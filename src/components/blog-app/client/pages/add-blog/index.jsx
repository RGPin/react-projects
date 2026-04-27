import { useContext } from "react";
import classes from "./styles.module.css";
import { BlogContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(BlogContext);
  const navigate = useNavigate();

  async function handleSaveBlogToDB() {
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
  return (
    <div className={classes.wrapper}>
      <h1>Add a Blog</h1>
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
        <button onClick={handleSaveBlogToDB}>Add New Blog</button>
      </div>
    </div>
  );
}
