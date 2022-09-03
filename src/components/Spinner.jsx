import React from 'react';
import Seasons from '../enums/Seasons';

export default class Spinner extends React.Component {
  state = {
    color: Seasons.Spring.bgColor,
  };

  componentDidMount() {
    this.colors = Object.keys(Seasons).map((index) => {
      return Seasons[index].bgColor;
    });

    // Change colors with interval of 500 ms
    let colorIndex = 0; // Variable to store index of color
    setInterval(() => {
      if (colorIndex < this.colors.length) {
        this.setState({ color: this.colors[colorIndex++] });
      } else {
        colorIndex = 0;
      }
    }, 500);
  }

  render() {
    return (
      <div className='ui segment spinner'>
        <div
          className='ui active inverted dimmer'
          style={{ backgroundColor: this.state.color }}>
          <div className='ui massive text loader'>{this.props.text}</div>
        </div>
        <p></p>
      </div>
    );
  }
}
