import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorites,
    favoritesList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  async function getRecipeDetails(signal) {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
        { signal },
      );
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setRecipeDetailsData(data?.data?.recipe);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getRecipeDetails(signal);

    return () => controller.abort();
  }, []);

  return (
    <div className="mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-120 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            key={`${id}-image`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData)}
            key={`${id}-button`}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList.some((recipe) => recipe.id === recipeDetailsData.id)
              ? "Remove from favorites"
              : "Save as favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.ingredients.map((ingredient, index) => (
              <li key={`${id}-${index}`}>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.units}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
