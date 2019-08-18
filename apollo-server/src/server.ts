import * as fs from "fs";
import * as path from "path";
import { ApolloServer, gql } from "apollo-server";
import { GQLResolvers } from "../.generated/gql.model";
import fetch from "node-fetch";

const BACKEND = "http://localhost:8080";

const resolvers: GQLResolvers = {
    Query: {
        item: async (_, {id}) => {
            const res = await fetch(`${BACKEND}/items/${id}`);
            return await res.json();
        }
    },
    Item: {
        averageRating: async (item) => {
            const res = await fetch(`${BACKEND}/items/${item.id}/reviews/averageRating`);
            return await res.json();
        },
        reviews: async (item, {page = 0, size = 10}) => {
            const res = await fetch(`${BACKEND}/items/${item.id}/reviews?page=${page}&size=${size}`);
            return await res.json();
        },
        seller: async (item) => {
            const res = await fetch(`${BACKEND}/users/${item.userId}`);
            return await res.json();
        }
    },
    Review: {
        author: async (review) => {
            const res = await fetch(`${BACKEND}/users/${review.userId}`);
            return await res.json();
        }
    },
    Mutation: {
        postReview: async (_, {review}) => {
            const postRes = await fetch(`${BACKEND}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
            const reviewId = postRes.headers.get("Location");
            const res = await fetch(`${BACKEND}/reviews/${reviewId}`);
            return await res.json();
        }
    }
};
fs.readFile(
    path.resolve("src", "schema.graphql"),
    "utf8",
    (err, data) => {
        if (err) throw err;

        const typeDefs = gql`${data}`;
        const server = new ApolloServer({typeDefs, resolvers: resolvers as any});

        server.listen().then(({url}) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    });
