const {nilai} = require('../models');
class venueController{
    static async showAll(req, res){
        try {
            let realData = await nilai.findAll();
            res.status(200).json({status: 'Success', data: realData})
        } catch (error) {
            res.status(401).json({error: error})
        }
    }

    static async store(req, res){
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let newVenue = nilai.build({name, address, phone});
        console.log(newVenue instanceof nilai);
        await newVenue.save()
        res.status(200).json({status: 'Success', message: "Data berhasil disimpan"})
    }

    static async findId(req, res){
        let id = req.params.id;
        let value = await nilai.findByPk(id);

        res.status(200).json({status: 'succes', data: value})
    }

    static async update(req, res){
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let query = await nilai.update({
            name: name,
            address: address, 
            phone: phone
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({status: 'succes', data: "updated"})
    }

    static async destroy(req, res){
        await nilai.destroy({
            where: {
                id: req.params.id 
            }
        })
        res.status(200).json({status: 'succes', data: "deleted"})
    }

}

module.exports = venueController;