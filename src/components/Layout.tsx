import React from 'react';
import Footer from "./Footer";

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <>
      {/*<Navbar/>*/}
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
