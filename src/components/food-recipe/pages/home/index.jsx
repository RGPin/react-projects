import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading, error } = useContext(GlobalContext);
  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div>Error encountered: {error}</div>;
  return (
    <div className="py-8 mx-auto flex flex-wrap justify-center gap-10">
      {recipeList?.length ? (
        recipeList.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No recipes found
          </p>
        </div>
      )}
    </div>
  );
}
