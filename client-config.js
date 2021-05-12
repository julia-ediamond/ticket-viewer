const base64 = require('base-64');


var authHeaderKey = 'Authorization';
var authHeaderValue = 'Basic ' + Buffer.from('iusharnina@gmail.com' + '/token:' + 'xn6R6HwQTO8WoYkGFhuA2kzKRERNzUieKVKQ4l3k').toString('base64');

var url = 'https://ediamondhelp.zendesk.com/api/v2';