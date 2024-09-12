import moment from "moment";
import weatherStyles from "../../css/weather.module.css";
export default function WeatherItem({ item = {} }) {
  function formateDate(date) {
    const dateObject = moment(date, "YYYY-MM-DD HH:mm:ss");

    return dateObject.format("DD/MM/YY");
  }
  return (
    <div className={weatherStyles.weatherCard}>
      <div className={weatherStyles.tempDate}>Date: {formateDate(item.dt_txt)}</div>
      <div className={weatherStyles.tempHeading}>Temp : {item.main.temp}</div>
      <div>
        <div className={weatherStyles.TempItems}>
          <div className={weatherStyles.itemCell}>Min</div>
          <div className={weatherStyles.divider}></div>
          <div className={weatherStyles.itemCell}>Max</div>
        </div>
        <div className={weatherStyles.TempItems}>
          <div className={weatherStyles.itemCell}>{item.main.temp_min}</div>
          <div className={weatherStyles.divider}></div>
          <div className={weatherStyles.itemCell}>{item.main.temp_max}</div>
        </div>
        <div className={weatherStyles.TempItems}>
          <div className={weatherStyles.itemCell}>Pressure</div>
          <div className={weatherStyles.divider}></div>
          <div className={weatherStyles.itemCell}>{item.main.pressure}</div>
        </div>
        <div className={weatherStyles.TempItems}>
          <div className={weatherStyles.itemCell}>Humidity</div>
          <div className={weatherStyles.divider}></div>
          <div className={weatherStyles.itemCell}>{item.main.humidity}</div>
        </div>
      </div>
    </div>
  );
}
