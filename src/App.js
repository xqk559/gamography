import React, { Component } from 'react';
import AppJumbotron from './AppJumbotron'
import AppFooter from './AppFooter'
import ItemList from './ItemList'
import ItemCount from './ItemList'
import './App.css';
import glist from 'C:/Users/Keith/Desktop/ROM/Development/Programming/Gamography/gamography/src/gameslist.txt';
// import logo from './logo.svg';
// import saturnicon from './segasaturnicon.jpg';

const axios = require('axios');
const cheerio = require('cheerio');

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dumbArray: [6],
    glist2: glist
  }

  render() {
    const url = 'https://segaretro.org/List_of_Saturn_Games_(A-M)';

    axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html)
      const statsTable = $('tbody > tr');
      const titles = [];

      statsTable.each(function () {
        const title = $(this).find('i > a').text();
        titles.push({
          title,  
        });
      });

      const stringer = JSON.stringify(titles) ;
      const bestArray = stringer.replace(/"title":/g," ") ;

      const fs = require('fs');
      const writeStream = fs.createWriteStream('gameslist.txt');
      const pathName = writeStream.path;
    
      writeStream.write(bestArray);
    
      writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`);
      });
    
      writeStream.on('error', (err) => {
        console.error(`There is an error writing the file ${pathName} => ${err}`)
      });
    
      writeStream.end();

      this.setState({dumbArray: bestArray})

      console.log(bestArray)
    })
    .catch(console.error);

    // const test = "test";
    return (
      <div>
        <AppJumbotron title="Gamography" />
        <br />
        <br />
        <div className="rainbow-text">
          Sega Saturn Games Checklist:
        </div>
        <div className="bigmargin">
        <ItemList />
        </div>
        <br />
        <div className="bigmargin">{this.state.dumbArray}</div>
        <br />
        <div>{glist}</div>
        <div>{this.state.glist2}</div>
        <br />
        <ItemCount count={allTheThings.length} />
        <hr />
        <AppFooter />
      </div>
    );
  }
}

export default App;
