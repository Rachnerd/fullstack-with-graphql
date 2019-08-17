import * as React from "react";

const HttpError = ({ error }: Record<"error", number>) => (
  <p>
    {error === 401
      ? "Unauthorized!"
      : error === 404
      ? "Not found!"
      : "???"}{" "}
  </p>
);

export default HttpError;
