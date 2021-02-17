const zenapi = require('../api/zenapi');

module.exports = {
    async send(req, res){

        zenapi.send( req );

        return res.send({ "message": "OK" }).status(200);
    },
};