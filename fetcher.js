//take 2 command line args = 1) a URL and 2) a local file path
//make an http request and wait for the response
//after the request is complete, take the data you receive and write it to a file in local filesystem 
//command line will look like: > node fetcher.js http://www.example.edu/ ./index.html
//print message like: "Downloaded and saved 1235 bytes to ./index.html."
//use body.length for the byte size as 1 character === 1 byte
//write to files in Node.js is to use the fs.writeFile()

const fs = require('fs')
const request = require('request');
const readline = require('readline');

const URL = process.argv[2];
const localPath = process.argv[3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const downloadPage = function (URL, localPath) {
  request(URL, (error, response, body) => {
    const fileSize = body.length;
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error(err);
        return
      } else {
        console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
      }

    });
  });
};

downloadPage(URL, localPath);
