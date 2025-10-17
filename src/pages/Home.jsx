import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
