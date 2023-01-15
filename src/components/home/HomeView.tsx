import React from 'react';
import Button from "./Button";

const HomeView = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        New
      </h1>
      <h1 className="text-3xl font-bold">
        New
      </h1>
      <div className="flex flex-col xs:flex-row justify-center items-center">
        <Button title={"View Projects"}/>
        <Button title={"Get a Demo"}/>
      </div>
    </div>
  );
};

export default HomeView;
