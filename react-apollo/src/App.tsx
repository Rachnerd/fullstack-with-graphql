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
