const zenapi = require('../api/zenapi');

module.exports = {
    async send(req, res){

        zenapi.send( req );

        return res.send({ "message": "OK" }).status(200);
    },
    async index(req, res){
        return res.send("Tudo na paz por aqui!").status(200);
    },


};