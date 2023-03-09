import React from "react";
import logo from "./assets/Logo.png";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen text-center flex items-center justify-center flex-col gap-10">
      <h2 className="text-4xl font-bold ">Oops</h2>
      <p>An unexpected Error Occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
