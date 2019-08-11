import React from "react";
import "./App.scss";
import ItemDetailPage from "./pages/item-detail/ItemDetailPage";
import { useDispatch } from "react-redux";
import { fetchItem } from "./state/item/item.actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const id = 1;
  dispatch(fetchItem(id));

  return (
    <div className={"app"}>
      <ItemDetailPage id={id} />
    </div>
  );
};

export default App;

/**
 * Integration with presentation.
 * @param e
 */
window.onmessage = function(e) {
  if (e.data === "scroll-down") {
    window.scroll(0, 0);
    setTimeout(() => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      window.scrollTo({
        behavior: "smooth",
        top: limit,
        left: 0
      });
    }, 500);
  }
  if (e.data === "scroll-down2") {
    setTimeout(() => {
      const limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      window.scrollTo({
        behavior: "smooth",
        top: limit,
        left: 0
      });
    }, 500);
  }
};
