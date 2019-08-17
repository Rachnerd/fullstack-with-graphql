import * as React from "react";
import "./Item.scss";
import { UIDivider } from "../../ui/Divider";

import Rating from "../rating/Rating";
import HttpError from "../../http-error/HttpError";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { GQLItem } from "../../../.generated/gql.model";
import Seller from "../seller/Seller";
import { AverageRating } from "../rating/average/AverageRating";

interface ItemProps {
    id: number;
}

const Item: React.FC<ItemProps> = ({id}) => {
    const {loading, error, data} = useQuery<Record<"item", GQLItem>>(gql`
        query item($id: Int!) {
            item(id: $id) {
                name
                description
                image
                seller {
                    name
                }
            }
        }
    `, {variables: {id}});

    if (loading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <HttpError error={error as any}/>;
    }

    if (!data) {
        return <p>No Data!</p>;
    }

    const {
        image,
        name,
        description,
        seller
    } = data.item;

    return (
        <div className={"item"}>
            <h2>{name}</h2>
            <div className={"item__sub-header"}>
                <AverageRating id={id} />
                <Seller seller={seller} />
            </div>
            <UIDivider/>
            <img className={"item__image"} src={image} alt={"item"}/>
            <UIDivider/>
            <h3>Item description</h3>
            <p>{description}</p>
        </div>
    );
};

export default Item;
