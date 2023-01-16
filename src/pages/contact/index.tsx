import React from 'react';
import {PageSEO} from "../../components/layout/SEO";
import ContactView from "../../components/contact/ContactView";


const Index = () => {
  return (
    <>
      <PageSEO title={"Chaincue | Contact"} description={"Chaincue | Contact"}/>
      <ContactView/>
    </>
  )
}

export default Index;
