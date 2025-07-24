import React from "react";
import Hero from "./Hero";
import bg from "../assets/various-kebab-with-rice-vegetables.jpg";
import TitleText from "./TitleText";
import GrandText from "./GrandText";
import Table from "./Table";
const Menus = ({ fetchedData }) => {
  console.log(fetchedData);
  return (
    <div>
      <Hero bg={bg} style={{ height: "80vh" }}>
        <TitleText>Taste the Tradition</TitleText>
        <GrandText>Our Menus</GrandText>
      </Hero>
      <Table fetchedData={fetchedData} style={{height:"100vh"}}></Table>
    </div>
  );
};

export default Menus;
