import { createContext, useState } from "react";

export const BlogContext = createContext(null);

export default function BlogState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [blogList, setBlogList] = useState([]);
  const [pending, setPending] = useState(false);
  return (
    <BlogContext.Provider
      value={{
        formData,
        setFormData,
        blogList,
        setBlogList,
        pending,
        setPending,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
