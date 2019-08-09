import React from "react";
import "./App.scss";
import ItemDetailPage from "./pages/item-detail/ItemDetailPage";
import { useDispatch } from "react-redux";
import { fetchItem } from "./state/item/item.actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const id = "1";
  dispatch(fetchItem(id));

  return (
    <div className={"app"}>
      <ItemDetailPage id={id} />
    </div>
  );
};

export default App;
