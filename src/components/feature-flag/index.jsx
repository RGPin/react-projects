import { useContext } from "react";
import Accordian from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { enabledFlags, loading, error } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];
  function checkEnabledFlags(key) {
    return enabledFlags[key];
  }
  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(
        (item) =>
          checkEnabledFlags(item.key) && (
            <div key={item.key}>{item.component}</div>
          ),
      )}
    </div>
  );
}
