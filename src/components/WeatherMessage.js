import React, { Component } from 'react';

class WeatherMessage extends Component {
  render () {
    var {temp, location} = this.props;

    return (
      <div>
        <h2>It is {temp} in {location}!</h2>
      </div>
    )
  }
}

export default WeatherMessage;