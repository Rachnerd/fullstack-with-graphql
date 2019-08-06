import React from "react";
import "./App.scss";
import ItemDetailPage from "./pages/item-detail/ItemDetailPage";
import { useDispatch } from "react-redux";
import { fetchItem } from "./state/item/item.actions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const id = "2";
  dispatch(fetchItem(id));

  return <ItemDetailPage id={id} />;
};

export default App;
