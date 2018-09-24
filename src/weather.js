import React from 'react';

class Weather extends React.Component {

  weatheric = {
    url: "http://openweathermap.org/img/w/" + this.props.icon + ".png"
  }

  render() {

    /*if(this.props.icon) {
      name = this.props.icon;
      weather_icon = "http://openweathermap.org/img/w/" + this.props.icon + ".png";
    }*/

    return (

      <div>
        {this.props.country && this.props.city &&
          <p>Location: {this.props.city},    {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions:  {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
        {this.props.icon && <img src="weatheric.url" alt="img_not_available" />}
        </div>

      )

  }
}

export default Weather;
