import React from "react";
import "./App.scss";
import { ItemDetailsPage } from "./pages/item-details/ItemDetailsPage";
import { ApolloProvider } from "@apollo/react-common";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { client } from "./client/client";

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <div className={"app"}>
        <ItemDetailsPage id={1} />
      </div>
    </ApolloHooksProvider>
  </ApolloProvider>
);
