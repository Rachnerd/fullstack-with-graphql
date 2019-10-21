import * as React from "react";
import { GQLUser } from "../../.generated/gql.model";

interface UserProps {
  user: Pick<GQLUser, "name" | "image">;
}

const User = ({ user }: UserProps) => {
  const isMe = user.name === "Rachnerd";
  return (
    <div className={"user"}>
      <img src={user.image} alt={"user"} />
      <span>{user.name}</span>
    </div>
  );
};
export default User;
