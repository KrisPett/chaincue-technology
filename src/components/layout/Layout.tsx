import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <div className={"mx-auto max-w-full"}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
