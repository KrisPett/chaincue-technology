import React from 'react';
import ThemeSwitch from "./ThemeSwitch ";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className={"border-2 border-amber-700"}>
      <div className={"flex items-center justify-between py-10"}>
        <div>
          <a href={""}>
            <div className={"flex items-center justify-between"}>
              <div className={"mr-3"}>Logo</div>
              <div className={"h-6 text-2xl font-semibold"}>Chain</div>
            </div>
          </a>
        </div>
        <div className={"flex items-center text-base leading-5"}>
          <MobileNav/>
          <ThemeSwitch/>
        </div>
        <article>
          < h1>test</h1>
        </article>

      </div>
    </header>
  )
}

export default Header;
