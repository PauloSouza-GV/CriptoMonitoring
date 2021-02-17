const zenapi = require('../api/zenapi');

module.exports = {
    async send(req, res){

        const { channel, direction, from, visitor, contents } = req.body.message;

        if(!req){
            return res.send({"message": "Requisição inválida"}).status(400);                
        }

        if(channel != "whatsapp"){
            return res.send({"message": "canal inválido"}).status(400);
        }

        if(direction != "IN"){
            return res.send({"message": "Direção inválida"}).status(400);
        }

        console.log(`Recebendo mensagem de ${from}`);

        zenapi.send( from, contents, visitor);

        return res.send({ "message": "OK" }).status(200);
    },
    
    async index(req, res){
        return res.send("Tudo na paz por aqui!").status(200);
    },

};