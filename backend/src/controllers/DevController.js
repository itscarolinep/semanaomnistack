const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
/**
 * Funções do Controller:
 * Index, Show, Store, Update, Destroy
 */

module.exports = {
    async index(req, res){
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res) {
        //console.log(req.body);
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, bio, avatar_url } = apiResponse.data;
        
            //console.log(name, bio, avatar_url, github_username);
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return res.json(dev);
    },

    // async update(req, res) {
        
    //     return res.json(dev);
    // },

    // async destroy(req, res) {
        
    //     return res.json(dev);
    // }
};