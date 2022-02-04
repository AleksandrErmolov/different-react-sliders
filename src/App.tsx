import React from 'react';
import './App.css';
import {Carousel} from "./component/Carousel/Carousel";
import {ButtonSlider} from "./component/ButtonSlider/ButtonSlider";

function App() {
  return (
    <div className="app">
      <h1>Slider Div</h1>
        {/*<Carousel>*/}
        {/*    <div className="item item-1">item 1</div>*/}
        {/*    <div className="item item-2">item 2</div>*/}
        {/*    <div className="item item-3">item 3</div>*/}
        {/*</Carousel>*/}
        <ButtonSlider />
    </div>
  );
}

export default App;
