const request = require('request-promise');
require("dotenv/config");

module.exports = {
    async send( from, contents, visitor ) {

        let text = `Ola! ${visitor.name}`

        for(let i = 0; i < contents.length; i++){
            if(contents[i].type == "text"){
               text += `\n ${contents[i].text}`;
            }
        }

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
                    text: text
                }]
            },
            json: true
        });
    }
}