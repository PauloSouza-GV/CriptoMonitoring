const request = require('request-promise');
require("dotenv/config");

module.exports = {
    async send( req ) {

        const { message } = req.body;

        request.post({
            uri: process.env.APIZENAPI,
            headers: {
                'X-API-TOKEN': process.env.TOKENZENAPI
            },
            body: {
                from: process.env.ACCOUNTZENAPI,
                to: '5584981562093',
                contents: [{
                    type: 'text',
                    text: message
                }]
            },
            json: true
        });
    }
}