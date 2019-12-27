import React, { Component } from 'react';
import AppJumbotron from './AppJumbotron'
import AppFooter from './AppFooter'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import './App.css';
import gamejson from './gameslist2.json'

const axios = require('axios');
const cheerio = require('cheerio');
const fuckArrays = [JSON.stringify(gamejson)] ;
const slagArray = JSON.stringify(gamejson) ;
const coolArray = slagArray.replace(/\"title\":/g," ") ;
const spiffyArray = coolArray.replace(/[\{\}\""]/g, "") ;
const splitArray = spiffyArray.split(",") ;
const splicedArray = splitArray.splice(-579,570) ;
const shiftArray= splitArray.shift() ;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const allTheThings = splicedArray;
    
    return (
      <div>
        <AppJumbotron title="Gamography" />
        <br />
        <br />
        <div className="rainbow-text">
          Sega Saturn Games Checklist:
        </div>
        <div className="bigmargin">
        <ItemList items={allTheThings} />
        </div>
        <br />
        <br></br>
        <br />
        <br />
        <ItemCount count={allTheThings.length} />
        <hr />
        <AppFooter />
      </div>
    );
  }
}

export default App;
