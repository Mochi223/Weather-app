import CityInput from './CityInput';
import WeatherBox from './WeatherBox';
import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';



function MainWeatherWindow(props) {
    const [input, setInput] = useState('')
    const [setUrl, data, loading, setLoading, error] = useAxios();
    // const [title, setTitle] = useState(<h1 className='title'>Weather Forcast</h1>)
    const [today, setToday] = useState({
        title: <h1 className='title'>Weather Forecast</h1>,
        styles: {
            visibility: 'hidden',
            opacity : 0
        },
        temp: 0,
        desc: '',
        img: "01d"
    })

    // const [thisWeek, setThisWeek] = useState([])

    function handleSubmit(e){
        e.preventDefault();

        setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&APPID=6557810176c36fac5f0db536711a6c52`)
        setLoading(true)
    }
    // will run only when loading is set by useAxios
    useEffect(() => {
        if(data){
            setToday({
                ...today,
                title: <h1 className='title'>{data.city.name}</h1>,
                styles: {
                    visibility: 'visible',
                    opacity: '1'
                },
                temp: data.list[0].main.temp,
                desc: data.list[0].weather[0].description,
                img: data.list[0].weather[0].icon
            })

            // let weekArray = []

            // for(let i = 1; i < 5; i=i+8){
            //     weekArray.push({
            //         date: data.list[i].dt_txt
            //     })
            // }

            // setThisWeek(weekArray)
        }
    }, [loading])


    

    return ( 
        <div className="main" >
            <div className="inner-main">
                {today.title}
                <img 
                    src={require(`../images/${today.img}.svg`)}
                    alt='sun'
                    style={today.styles}
                />

                <div 
                className='today'
                style={today.styles}
                >
                    <span>Today</span>
                    {today.title}
                    <p>
                        Temperature: {Math.round(((today.temp - 273.15) * 9/5) + 32)}
                         °F
                    </p>
                    <p>{today.desc.toLowerCase()}</p>
                </div>
            </div>
            <CityInput input={input} setInput={setInput} handleSubmit={handleSubmit} />
            {data ? console.log(data) : ''}
            {/* {data ? 
            thisWeek.map((day, index)=> <WeatherBox key={index} day={day} />) 
            :
            'weather incoming'
            } */}
            
        </div>
     );
}

export default MainWeatherWindow;