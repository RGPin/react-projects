import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
      }
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        recipeList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
