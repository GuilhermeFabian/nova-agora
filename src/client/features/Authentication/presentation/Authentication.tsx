import React, { useEffect } from "react";
import { AuthenticationController } from "../controllers/AuthenticationController";

export function Authentication(): React.ReactElement {
  // useEffect(() => {
  //   return () => {
  //     delete x;
  //   };
  // }, []);

  return <Authentication.Root />;
}

Authentication.Root = function AuthenticationRoot(): React.ReactElement {
  return <></>;
};
