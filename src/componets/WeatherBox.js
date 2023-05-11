function WeatherBox(props) {

    function getDay(date){
        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        return weekday[0]
    }
    return ( 
        <div className='weather-box'>
            <h1>{props.day.date}</h1>
            <img 
                alt="sun"
            />
            {/* <span>{Math.round(props.temp - 273.15)} °C </span> */}
        </div>
     );
}

export default WeatherBox;