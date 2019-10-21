import * as React from "react";
import { GQLUser } from "../../.generated/gql.model";

export type UserSubset = Pick<GQLUser, "name" | "image">;

interface UserProps {
  user: UserSubset;
}

export const User = ({ user }: UserProps) => {
  return (
    <div className={"user"}>
      <img src={user.image} alt={"user"} />
      <span>{user.name}</span>
    </div>
  );
};
