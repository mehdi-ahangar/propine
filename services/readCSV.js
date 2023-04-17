import {createReadStream} from 'fs'
import {parse} from 'csv-parse'

function readCSV(token, date, next){

    var balance = [];
    //flages for data chunk are used to make it clear, regarding the query type, if the specific chunk of data is allowed to be processed or not.
    var tokenFlag , dateFlag ; 
    var csvFilePath = "./transactions.csv";
    console.log("Reading the CSV file...");
    createReadStream(csvFilePath, { encoding: "utf-8" })
        .pipe(parse({ header: true , from_line: 2}))
        .on("data", (data) => {

            tokenFlag = false; dateFlag = false;
            if(!token || data[2]==token )
                tokenFlag = true;
            //check if we are looking for a specific date or not. 
            if(date){
                    
                    var start = new Date (date);
                    var end = new Date(date);
                    end.setDate(start.getDate()+1);
                    if ((data[0]*1000) >= start.getTime() && (data[0]*1000)<= end.getTime())
                        dateFlag = true;                     
            }
                else dateFlag = true;   
            if (tokenFlag && dateFlag){
                if ( !balance[data[2]]) balance[data[2]]=0;
                if (data[1]=='WITHDRAWAL')
                        balance[data[2]] -= Number.parseFloat(data[3]);

                 if (data[1]=='DEPOSIT') 
                         balance[ data[2]] += Number.parseFloat(data[3]);
            }
              
 })
        .on("end", ()=> {
            next(balance);
        })
         .on("An error ocurred in reading the csv file:", (error) => {
             console.log(error);
 });
 
}
export { readCSV };