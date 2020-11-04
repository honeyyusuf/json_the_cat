const request = require('request');


const fetchBreedDescription = function(breedName,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?name=${breedName}`,(error,response,body)=>{
  
    const data = JSON.parse(body);
    if (error !== null) {
      callback(error,null);
    } else if (breedName.length === 0) {
      console.log('please input the breed name');
    } else if (data.length === 0) {
      console.log("the breed name can't be found check if you gave the write name");
    } else {
      callback(error,data[0].description);
    }
  
  
  
  });
};
module.exports = { fetchBreedDescription};