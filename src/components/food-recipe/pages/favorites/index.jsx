import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList?.length ? (
        favoritesList.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites
          </p>
        </div>
      )}
    </div>
  );
}
