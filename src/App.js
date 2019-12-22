import React, { Component } from 'react';
import logo from './logo.svg';
import saturnicon from './segasaturnicon.jpg';
import './App.css';

const axios = require('axios');
const cheerio = require('cheerio');

class App extends React.Component {
  constructor (props){
    super ();
  }
  state = {
    dumbArray: [6]
  }

  render (){

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
    const bestArray = stringer.replace(/\"title\":/g," ") ;

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
  
  const test = "test" ;
  

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
        <br />
        <ItemCount count={allTheThings.length} />
        <hr />
        <AppFooter />
      </div>
    );
  }
}




class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="2Tax Gold" />;
let item3 = <Item message="3D Baseball" />;
let item4 = <Item message="3D Lemmings" />;
let item5 = <Item message="Test Icicles" />;

let allTheThings = [item2, item3, item4, item5];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>There are {this.props.count} items on your list</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div className="jumbotron">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class AppFooter extends React.Component {
  render (){
    return (
      <div className="text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    );
  }
}

let target = document.getElementById('app');



export default App;
