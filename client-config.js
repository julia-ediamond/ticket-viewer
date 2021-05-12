const base64 = require('base-64');
const dotenv = require('dotenv');
dotenv.config()

function ZendeskAuthHeaderValue() {
    return 'Basic ' + Buffer.from(process.env.zendeskemail + '/token:' + process.env.zendesktoken).toString('base64');
}


module.exports = {
    zendeskAuthHeaderValue: ZendeskAuthHeaderValue(),
    zendeskApiUrl: process.env.zendeskurl
}