import React from 'react';
import Clock from './time';
import Quote from './quote';
import Calendar from './date';
import Weather from './weather';

function Dash() {
  return (
    <div className="dash-wrapper">
      <div className="top">
        <section className="date"><Calendar/></section>
        <section className="weather"><Weather/></section>
      </div>
      <div className="mainInfo">
	      <section className="time"><Clock/>
        </section>
	      <section className="hello-caoimhe"> Hello, Caoimhe </section>
	      <section className="quote"> <Quote/> </section>
      </div>
    </div>
  );
}


export default Dash;
