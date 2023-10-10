import React from 'react';
import iconData from '../data/iconData.json';

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;


  const weatherCode = icon.slice(0,1) + "00";

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
        <img src={iconData[weatherCode]} alt="weather-icons"/>
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

export default ForecastSummary;