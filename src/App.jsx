import { BrowserRouter } from "react-router-dom";
import Accordian from "./components/accordion";
import ModalTest from "./components/custom-modal/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutoComplete from "./components/search-autocomplete";
import ShoppingCartApp from "./components/shopping-cart/ShoppingCartApp";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookText from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import WeatherApp from "./components/weather-app/WeatherApp";
import { Provider } from "react-redux";
import store from "./components/shopping-cart/store";
import FoodRecipeApp from "./components/food-recipe/FoodRecipeApp";
import GlobalState from "./components/food-recipe/context";
// import "./App.css";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookText /> */}
      {/* <UseOnClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}

      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}
      {/* <WeatherApp /> */}

      <BrowserRouter>
        <GlobalState>
          <FoodRecipeApp />
        </GlobalState>
      </BrowserRouter>

      {/* <Provider store={store}>
        <BrowserRouter>
          <ShoppingCartApp />
        </BrowserRouter>
      </Provider> */}
    </>
  );
}

export default App;
