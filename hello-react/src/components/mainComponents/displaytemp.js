import React, { Component } from 'react';
//require('style!css!DemoStyle');
class DisplayTemp extends Component {
render(){
    var {Temp, Name} = this.props;
  //var {Temp, Lat, Name, Long} = this.props;}
    if(Temp==='Loading'){
      return <div className='loading'>Loading Your Local Weather...</div>
    }
    else {
      // var Lat = Math.round(Lat)
      // var Long = Math.round(Long)
      return(
        <div className='display-weather'>
          It is {Temp} &#8451; at {Name}
          {/*<br />Latitude: {Lat} and Longitude: {Long}*/}
        </div>
      )
    }
}
}

export default DisplayTemp;
