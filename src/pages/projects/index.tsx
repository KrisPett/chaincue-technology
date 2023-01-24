import React from 'react';
import ProjectsView from "../../components/projects/ProjectsView";
import {PageSEO} from "../../components/layout/SEO";

const Index = () => {
  return (
    <>
      <PageSEO title={"Chaincue | Porjects"} description={"Chaincue | Projects"}/>
      <ProjectsView/>
    </>
  )
}

export default Index;
