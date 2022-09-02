import React from 'react';

const Seasons = {
  Spring: {
    name: 'Spring',
    phrase: 'Hurry let go to park and see the beauty.',
  },
  Summer: {
    name: 'Summer',
    phrase: "Let's hit the pool.",
  },
  Autumn: {
    name: 'Autumn',
    phrase: 'Leaves are falling but new will born.',
  },
  Winter: {
    name: 'Winter',
    phrase: "Burrr! It' very cold outside.",
  },
};

const getSeason = (lat, month) => {
  month += 1; // Start month 1 not from 0

  // Northern Hemisphere
  if (lat > 0) {
    // March to May -> Spring
    if (month >= 3 && month <= 5) return Seasons.Spring;
    // June to Augest -> Summer
    else if (month >= 6 && month <= 8) return Seasons.Summer;
    // September to November -> Autumn
    else if (month >= 9 && month <= 11) return Seasons.Autumn;
    // December to February -> Winter
    else if (month === 12 || month === 1) return Seasons.Winter;
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
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      <h1>{season.name}</h1>
      <h1>{season.phrase}</h1>
    </div>
  );
}
