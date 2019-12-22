var http = require('http');
const axios = require('axios');
const cheerio = require('cheerio');
var fs = require("fs");

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
    const writeStream = fs.createWriteStream('gameslist2.txt');
    const pathName = writeStream.path;
  
    writeStream.write(bestArray);
  
    writeStream.on('finish', () => {
      console.log(`wrote all the array data to file ${pathName}`);
   });
  
    writeStream.on('error', (err) => {
      console.error(`There is an error writing the file ${pathName} => ${err}`)
  });

  writeStream.end();

  console.log(bestArray)

  this.setState({dumbArray: bestArray})

    console.log(bestArray)
  })
  .catch(console.error);
  