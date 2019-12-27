import React, { Component } from 'react';
import AppJumbotron from './AppJumbotron'
import AppFooter from './AppFooter'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import './App.css';
import gamejson from './gameslist2.json'
import gamejson3 from './gameslist3.json'

const slagArray = JSON.stringify(gamejson) ;
const slagArray3 = JSON.stringify(gamejson3) ;
const combineArray = slagArray+slagArray3 ;
const coolArray = combineArray.replace(/\"title\":/g," ") ;
const spiffyArray = coolArray.replace(/[\{\}\"\]\["]/g, "") ;
const splitArray = spiffyArray.split(",") ;
const splicedArray = splitArray.splice(1159,1167) ;
const splicedArray2 = splitArray.splice(579,9) ;
const shiftArray= splitArray.shift() ;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const allTheThings = splitArray;
    
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
