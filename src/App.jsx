import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter, Router } from "react-router";

export default function App() {
  return (
    <div className="bg-gray-800">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}