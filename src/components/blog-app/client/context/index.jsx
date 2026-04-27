import { createContext, useState } from "react";

export const BlogContext = createContext(null);

export default function BlogState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  return (
    <BlogContext.Provider value={{ formData, setFormData }}>
      {children}
    </BlogContext.Provider>
  );
}
