import * as React from "react";
import { UserModel } from "../../state/user/user.model";
import { Async } from "../../state/state.utils";
import HttpError from "../../http-error/HttpError";

interface UserProps {
  user: Async<UserModel>;
}

const User = ({ user: { data, error, loading } }: UserProps) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <HttpError error={error} />;
  }

  if (!data) {
    return <p>No Data!</p>;
  }
  const isMe = data.id === 1;
  return (
    <div className={"user"}>
      <img src={data.image} alt={"user"} />
      <span>{isMe ? `Me (${data.name})` : data.name}</span>
    </div>
  );
};
export default User;
