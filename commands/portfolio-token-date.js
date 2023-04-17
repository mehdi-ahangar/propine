import { readCSV } from '../services/readCSV.js'
import { getExchangeRates } from '../services/getExchangeRates.js'
import { output } from '../services/output.js'

var tokens = []; 
var balance = [];
var exchangeRates = [];
async function portfolioTokenDate (token,date) {

    readCSV(token,date, (res) => {
         balance = res;
        for (var item in res) 
            tokens.push(item);
        if (tokens.length>0){
                getExchangeRates(tokens, (res) =>{
                    exchangeRates = res;
                    output(balance,tokens,exchangeRates);
                });
        }
        else
            console.log("Not Found.");
  });
  
 }
export { portfolioTokenDate };