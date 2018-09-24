import React, { Component } from 'react';
import './App.css';
import Title from './title';
import Form from'./form';
import Weather from './weather';

const Api_key = "e6a8f49b55c0cb203a67b68f381e3bd5";

class App extends Component {

  state = {

   temperature: undefined,
   city: undefined,
   country: undefined,
   humidity: undefined,
   description: undefined,
   error: undefined,
   icon: undefined

 }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
        icon: response.weather[0].icon

      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }

  }

  render() {
    return (
      <div className="App">

        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          icon={this.state.icon} />

      </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
