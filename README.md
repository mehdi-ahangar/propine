# propine
Propine CLI
Hello,
This CLI is organized into two main branches: commands and services.
commands:
In the command folder, each command is implemented in a separate file. That is for the maintainability of the program. The command list is below:
               
               propine portfolio
                                                                  returns the latest portfolio value per token in USD.

               propine portfolio-t <token>
                                                              returns the latest portfolio value for that token in USD.

               propine portfolio-d <date>
                                                                  return the portfolio value per token in USD on that date.

               propine portfolio-t-d <token> <date>
                                                                return the portfolio value of that token in USD on that date.

services:
In the service folder, three services are implemented which are called by commands. Separating these modules is because they are used frequently in commands and also this increases the maintainability, readability, and performance of the program.
Furthermore, future changes in the CSV data file structure, getting exchange rates and the output way, are easy to apply.
               
 readCSV:
 This is where the CSV file is read. This function accepts token and date, as arguments. For different queries, we can pass the value for these arguments or pass null for them if there is no need.
                                
 For example, when we want to get portfolio value per token on a special date, the token argument is null (because this query is for all tokens), but the date argument has value.

getExchangeRate:
This function gets exchange rates for the requested tokens by the API which is in question. This function is called in different commands when tokens and their amounts are calculated.
In this function, it is also easy to change the exchange currency from USD to another ones or add new currencies to the list.

Output:
This section is where the output is shown to the user. This function is also called in different commands.

Maintainability Features in Summary:

It is tried to consider some maintainability features of the program. For example, changes and future redesign in the CSV file, getting exchange rates, and currencies are easy to apply. Plus, the names of variables and functions are chosen carefully to be readable and clear.
About the commands, separating them makes it easy to add new commands or possible changes in the future.  

Future Improvements:
Regarding the high volume of the CSV file, it takes a time to read the file and process the data. It is possible to reduce the time by caching the data for the next commands. However, the amount of available memory must be carefully considered.
                     

Thank you for reading.
Best Regards

