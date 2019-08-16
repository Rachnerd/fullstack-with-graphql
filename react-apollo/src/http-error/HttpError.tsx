import { HTTP_STATUS_CODE } from "../state/state.model";
import * as React from "react";

const HttpError = ({ error }: Record<"error", number>) => (
  <p>
    {error === HTTP_STATUS_CODE.UNAUTHORIZED
      ? "Unauthorized!"
      : error === HTTP_STATUS_CODE.NOT_FOUND
      ? "Not found!"
      : "???"}{" "}
  </p>
);

export default HttpError;
