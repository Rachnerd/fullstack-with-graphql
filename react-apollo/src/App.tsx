import React from "react";
import "./App.scss";
import ItemDetailPage from "./pages/item-detail/ItemDetailPage";
import { ApolloProvider } from "@apollo/react-common";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { client } from "./client/client";

const App: React.FC = () => {
    const id = 1;
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <div className={"app"}>
                    <ItemDetailPage id={id}/>
                </div>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
};

export default App;
