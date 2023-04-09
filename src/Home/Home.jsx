import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div>{navigation.state === "loading" ? "Loading..." : ""}</div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
