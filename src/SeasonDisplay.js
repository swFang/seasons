import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Warm!",
    iconName: "sun"
  },
  winter: {
    text: "Chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getDate());

  const { text, iconName } = seasonConfig[season];

  return (
    <div className = {`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> Based on your location. It must be {text} </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
