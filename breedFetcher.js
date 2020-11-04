const request = require('request');
const breedName = process.argv.slice(2);


request('https://api.thecatapi.com/v1/breeds/search?name=' + breedName[0],(error,response,body)=>{
  
  const data = JSON.parse(body);
  if (error) {
    console.log("can't connet to websit");
  } else if (breedName.length === 0) {
    console.log('please input the breed name');
  } else if (data.length === 0) {
    console.log("the breed name can't be found check if you gave the write name");
  } else {
    console.log(data[0].description);
  }
  
  
  
});