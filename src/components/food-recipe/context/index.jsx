import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function handleAddToFavorites(recipe) {
    setFavoritesList((prevState) => {
      const index = prevState.findIndex((item) => item.id === recipe.id);
      if (index === -1) {
        return [...prevState, recipe];
      } else {
        return prevState.filter((item) => item.id !== recipe.id);
      }
    });
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
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorites,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
