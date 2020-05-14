import React from "react";
import "./App.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import PhotoOfDay from './components/photoOfDay';
import moment from 'moment';
import styled from 'styled-components';

const Button = styled.button`
  padding: 15px;
  background-color: red;
  color: black;
  height: auto;
  width: 125px;
  font-size: 24px
`


function App() {
const apiKey = '1FlNz8qisjWSK0Mg9MbtGZxNfOg8L22oVO4trTnB';
const exampleData ={
  date: "2020-05-13",
  explanation: "In infrared, Jupiter lights up the night.  Recently, astronomers at the Gemini North Observatory in Hawaii, USA, created some of the best infrared photos of Jupiter ever taken from Earth’s surface, pictured.  Gemini was able to produce such a clear image using a technique called lucky imaging, by taking many images and combining only the clearest ones that, by chance, were taken when Earth's atmosphere was the most calm.  Jupiter’s jack-o’-lantern-like appearance is caused by the planet’s different layers of clouds.  Infrared light can pass through clouds better than visible light, allowing us to see deeper, hotter layers of Jupiter's atmosphere, while the thickest clouds appear dark.  These pictures, together with ones from the Hubble Space Telescope and the Juno spacecraft, can tell us a lot about weather patterns on Jupiter, like where its massive, planet-sized storms form.   Notable APOD Submissions: Flower Moon 2020",
  hdurl: "https://apod.nasa.gov/apod/image/2005/JupiterIR_Gemini_1400.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Jupiter in Infrared from Gemini",
  url: "https://apod.nasa.gov/apod/image/2005/JupiterIR_Gemini_960.jpg",
}

const today = moment().format('YYYY-MM-DD');
const [nasaDate, setNasaDate] = useState(today);
const [nasaData, setNasaData] = useState(exampleData);
const [counter, setCounter] = useState(0);

const changeDate=(days)=>{
  let newDate = moment().subtract(days, 'days').format('YYYY-MM-DD')
  setNasaDate(newDate);
}

useEffect(()=>{console.log('nasaDate is currently', nasaDate)} ,[nasaDate])
const dateHandler=(direction)=>{
  // console.log('button clicked');
  if(direction ==='next'){
    if(nasaDate !== today){
      changeDate(counter-1);
      setCounter(counter-1);
      console.log('counter', counter);
    }

  }else{
    changeDate(counter+1);
    setCounter(counter+1);
    console.log('counter',counter)
  }
}
// setNasaDate(moment().subtract(counter, 'days').format('YYYY-MM-DD'))
useEffect(()=>{
  console.log('starting useEffect');
  axios.get(`https://api.nasa.gov/planetary/apod?&date=${nasaDate}&api_key=${apiKey}`)
  .then((response)=>{
      setNasaData(response.data);
      // console.log(response.data);
      })
  .catch(err=>{console.log("Error", err)})
  }, [nasaDate])

  return (
    <div className="App">
      <PhotoOfDay data={nasaData}/>
      <Button onClick ={()=>{dateHandler('previous')}}>Previous</Button>
      <Button color='primary' size='large' onClick={()=>{dateHandler('next')}}>Next</Button>
    </div>
  );
}

export default App;
