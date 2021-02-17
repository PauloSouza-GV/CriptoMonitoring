const request = require('request-promise');
require("dotenv/config");

module.exports = {
    async send( from, message, name ) {

        request.post({
            uri: process.env.APIZENAPI,
            headers: {
                'X-API-TOKEN': process.env.TOKENZENAPI
            },
            body: {
                from: process.env.ACCOUNTZENAPI,
                to: from,
                contents: [{
                    type: 'text',
                    text: `Olá ${name} message`
                }]
            },
            json: true
        });
    }
}