const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');
const clientCtrl = {};


clientCtrl.get = async (req, res ) => {
    const clients = await db.client.findAll({
        order: [
            ['name', 'ASC']
        ]
    });
    for (let i = 0; i < clients.length; i++) {
        const c = clients[i];
        c.name = c.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
    res.json(clients);
}

clientCtrl.searchclient = async (req, res ) => {
    const clients = await db.client.findAll({
        where: {
            nit: {
                [Op.like]: `%${req.query.documentId}%`
        }
    }});
    res.json(clients);
}

clientCtrl.post = async ( req, res ) => {
    const { name,phone,email,documentId } = req.body;
    const ClientCreate = await db.lient.create({ 
        nit:documentId,
        name, 
        phone, 
        email, 
        status: 'true'
    });

    res.json({
        msg: 'post API - clientsPost',
        ClientCreate
    });
}

module.exports = clientCtrl;