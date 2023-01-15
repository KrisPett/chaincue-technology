import React from 'react';
import ButtonAlternative from "./ButtonAlternative";
import Button from "./Button";

const HomeView = () => {
  return (
    <div className={"flex flex-col justify-center  items-center mt-10"}>
      <div className="flex flex-col xs:flex-row justify-center items-center w-5/6">
        <Button title={"View Projects"}/>
        <Button title={"Get a Demo"}/>
      </div>
      <article className={"flex flex-col w-5/6 lg:w-4/6 2xl:w-3/6 space-y-5 my-10"}>
        <p className={"whitespace-normal"}>Chaincue Technologies is a company that specializes in providing solutions
          using microservices and blockchain technologies.</p>
        <p>As an example, lets say that Chaincue Technologies is working with a large e-commerce company to improve the
          scalability and security of their online platform. The company has a complex system with many different
          components, such as a shopping cart, payment gateway, and inventory management.</p>
        <p>Chaincue Technologies uses microservices as a future-proof solution for scalable application development.
          Microservices are a software architecture approach in which a large application is built as a suite of small,
          independent services that communicate with each other over well-defined APIs. This allows for greater
          flexibility and scalability, as each microservice can be developed and deployed independently, and new
          services can be easily added or removed as needed.</p>
        <p>In addition to using microservices, Chaincue Technologies also incorporate blockchain technologies to further
          enhance the security and transparency of the platform. Blockchain is a distributed ledger technology that
          allows for secure and transparent record-keeping, making it well-suited for modern applications. By using
          blockchain, Chaincue Technologies could help companis securely track transactions and verify the authenticity
          of any data, ensuring a high level of trust with their customers.</p>
        <p>Overall, by using microservices and blockchain technologies, Chaincue Technologies helps companies improve
          the scalability and security of their web application, positioning the company for success in the future.</p>
      </article>
    </div>
  );
};

export default HomeView;
