import React from "react";
import ServiceCard from "../compoments/Services/ServiceCard";
import ServiceList from "../compoments/Services/ServiceList";


const Services = ()=>{
    return  <section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Our medical services</h2>
        <p className="text__para text_center">World-class care for everyone. Out health System offers unmatched, expert health care.</p>
      </div>
      <ServiceList/>
    </div>
  </section>
};

export default Services;