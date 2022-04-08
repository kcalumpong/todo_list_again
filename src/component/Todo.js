import React from "react";
import { useLocation } from "react-router-dom";

export default function Todo() {
  const location = useLocation();
  const { props } = location.state;
  return (
    <div>
      <h1>TODO: {props}</h1>
    </div>
  );
};
