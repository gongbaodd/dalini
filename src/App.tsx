import React from 'react'
import { Map } from "react-bmapgl";
import './App.css'

function App() {
  return (
    <div className="App" id="App">
      <Map center={{ lng: 121.605868, lat: 39.004631 }} zoom="11" enableScrollWheelZoom={true} enableDoubleClickZoom={true} style={{ height: "100%" }}></Map>
    </div >
  )
}

export default App
