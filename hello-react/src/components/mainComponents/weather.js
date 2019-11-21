import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import LatLong from './lat_long';
import DisplayTemp from './displaytemp'
import OpenWeatherAPI from './weather_api'
class Weather extends Component {
constructor(props){
    super(props);
    this.state ={
      Lat:'',
      Long:'',
      Temp:'Loading'
    }
    this.onPass = this.onPass.bind(this)
  };
onPass(Lat,Long) {
    var that = this;
OpenWeatherAPI.getTemp(Lat,Long).then(function (data) {
      that.setState({
        Lat: Lat,
        Long: Long,
        Temp: data.main.temp,
        Name: data.name
      });
    },
    function (errorMessage) {
        alert(errorMessage);
    });
  }
render(){
    return(
      <div>
        <LatLong onPass = {this.onPass} />
        <DisplayTemp Temp = {this.state.Temp} Name = {this.state.Name} Lat = {this.state.Lat} Long = {this.state.Long}/>
      </div>
    );
  }
}

export default Weather;