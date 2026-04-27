import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { useContext } from "react";
import { BlogContext } from "../../context";

export default function Header() {
  const { setIsEdited } = useContext(BlogContext);
  return (
    <div className={classes.header}>
      <h3>Mern Blog App</h3>
      <ul>
        <Link to={"/"} onClick={() => setIsEdited(false)}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
