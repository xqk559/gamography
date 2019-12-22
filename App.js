import React, { Component } from 'react';
import logo from './logo.svg';
import saturnicon from './segasaturnicon.jpg';
import './App.css';

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

    const url = 'http://www.imdb.com/title/tt1229340/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;




class App extends React.Component {
  constructor (props){
    super ();
  }
  render (){


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
