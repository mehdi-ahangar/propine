#! /usr/bin/env node
import {program} from 'commander'
import {portfolio} from './commands/portfolio.js'
import{ portfolioToken} from './commands/portfolio-token.js'
import{ portfolioDate} from './commands/portfolio-date.js'
import{ portfolioTokenDate} from './commands/portfolio-token-date.js'

program
    .command('portfolio')
    .description('return the latest portfolio value per token in USD')
    .action(portfolio)

program
    .command('portfolio-t <token>')
    .description('return the latest portfolio value for the token in USD')
    .action( portfolioToken)
    
program
    .command('portfolio-d <date>')
    .description('return the latest portfolio value per token at the date in USD')
    .action( portfolioDate)

program
    .command('portfolio-t-d <token> <date>')
    .description('return the latest portfolio value for the token at the date in USD')
    .action( portfolioTokenDate)
    
program.parse()