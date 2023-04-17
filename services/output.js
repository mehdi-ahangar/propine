
function output (balance, tokens, exchangeRates){
  
    for (let token of tokens){
      
      console.log(token + ":  "+balance[token]*exchangeRates[0][token]['USD']+ " USD");
    }
  
  }

  export {output};