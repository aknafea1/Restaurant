import React from "react";
import { home } from "./Home.module.css";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Table from "./Table";
import Extrainfo from "./Extrainfo";
import Footer from "./Footer";
import bg from "../assets/HeroImg.jpeg";
import GrandText from "./GrandText";
import NormalText from "./NormalText";
const Home = ({fetchedData}) => {
  return (
    <div className={home}>
      <Hero bg={bg}>
        <GrandText>A Culinary Adventure Awaits</GrandText>
        <NormalText>Smokin' Up a Storm, One Bite at a Time</NormalText>
      </Hero>
      <About></About>
      <Table fetchedData={fetchedData}></Table>
      <Extrainfo></Extrainfo>
    </div>
  );
};

export default Home;
