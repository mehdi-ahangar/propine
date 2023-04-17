import axios from 'axios'
import url from 'url'
async function getExchangeRates(tokens, next){
  
  var exchangeRates = [];
  var queryParams ={
           fsyms : tokens,
           tsyms : 'USD, EUR'
    }; 
    const params = new url.URLSearchParams(queryParams);
  await axios.get('https://min-api.cryptocompare.com/data/pricemulti?'+params)
   .then(res => {        
     exchangeRates.push(res.data );
     next (exchangeRates);
   })
   .catch(err => {
     console.log('An error occurred in receiving the rates: ', err.message);
   });
  }
  
  export { getExchangeRates };