import React from 'react';
import {PageSEO} from "../../components/layout/SEO";
import AboutView from "../../components/about/AboutView";


const Index = () => {
  return (
    <>
      <PageSEO title={"Chaincue | About"} description={"Chaincue | About"}/>
      <AboutView/>
    </>
  )
}

export default Index;
