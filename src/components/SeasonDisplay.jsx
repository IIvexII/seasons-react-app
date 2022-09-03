import React from 'react';
import Seasons from '../enums/Seasons';

export default class SeasonDisplay extends React.Component {
  state = {
    season: this.getSeason(this.props.lat, new Date().getMonth() + 1),
  };

  getSeason(lat, month) {
    // Northern Hemisphere
    if (lat > 0) {
      // March to May -> Spring
      if (month >= 3 && month <= 5) return Seasons.Spring;
      // June to Augest -> Summer
      else if (month >= 6 && month <= 8) return Seasons.Summer;
      // September to November -> Autumn
      else if (month >= 9 && month <= 11) return Seasons.Autumn;
      // December to February -> Winter
      else if (month === 12 || month <= 2) return Seasons.Winter;
    }
    // Southern Hemisphere
    else if (lat < 0) {
      // March to May -> Autumn
      if (month >= 3 && month <= 5) return Seasons.Autumn;
      // June to Augest -> Winter
      else if (month >= 6 && month <= 8) return Seasons.Winter;
      // September to November -> Spring
      else if (month >= 9 && month <= 11) return Seasons.Spring;
      // December to February -> Summer
      else if (month === 12 || month <= 2) return Seasons.Summer;
    }
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({

  //     })
  //   },500);
  // }

  render() {
    return (
      <div className={`season-display ${this.state.season.name.toLowerCase()}`}>
        <i className={`icon-left massive ${this.state.season.icon} icon`} />
        <h1>{this.state.season.phrase}</h1>
        <i className={`icon-right massive ${this.state.season.icon} icon`} />
      </div>
    );
  }
}
