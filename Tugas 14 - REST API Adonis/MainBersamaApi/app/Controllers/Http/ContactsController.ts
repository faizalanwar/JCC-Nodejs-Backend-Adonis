import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator';
//import { HttpContext } from "@adonisjs/http-server/build/standalone";
import CreateContactValidator from 'App/Validators/CreateContactValidator'
//import Database from '@ioc:Adonis/Lucid/Database'

//Models
import Venue from 'App/Models/Venue';


export default class ContactsController {
    public async index({request, response}: HttpContextContract){
        if(request.qs().name){
            let name = request.qs().name
            //Query Builder
            // let venuesFiltered = await Database.from('venues').where('name', name).select('id', 'name', 'address', 'phone')
            let venuesFiltered = await Venue.findBy("name", name)
            return response.status(200).json({message: 'success get venues', data: venuesFiltered })
        }
        // let venues = await Database.from('venues').select('*')
        let venues = await Venue.query().preload('fields')
        return response.status(200).json({message: 'success get venues', data: venues })
    }

    public async store({request, response, auth}: HttpContextContract){
        try {
            const data = await request.validate(CreateContactValidator) 
            const newVenue = await Venue.create(data)
            //auth
            await auth.use('api').authenticate()
            //console.log(auth.use('api').user!)
            const Id = auth.user?.id
            console.log(Id)
            // Query builder
            // let newVenueId = await Database.table('venues').returning('id').insert({
            //     name: request.input('name'),
            //     address: request.input('address'),
            //     phone: request.input('phone')
            // })
            // response.created({message: 'created', newId: newVenueId})
            
            //Lucid Orm
            // let newVenue = new Venue();
            // newVenue.name = request.input('name')
            // newVenue.address = request.input('address')
            // newVenue.phone = request.input('phone')
            // await newVenue.save()

            response.created({message: 'venues is created', data: newVenue})
        } catch (error) {
            response.unprocessableEntity({message: error.message})
        }
    }

    // public async booking({request, response}: HttpContextContract){
    //     try {
    //         await request.validate(CreateBookingValidator)   
    //     } catch (error) {
    //         response.unprocessableEntity({error: error.messages})
    //     }
    // }

    public async show({params, response}: HttpContextContract){
        // Query Builder
        // let venue = await Database.from('venues').where('id', params.id).select('id', 'name', 'address', 'phone').firstOrFail()
        let venue = await Venue.find(params.id)
        return response.status(200).json({message: 'success get venues with id', data: venue})
    }

    public async update({request, response, params}: HttpContextContract){
        let id = params.id
        // DB Builder
        // await Database.from('venues').where('id', id).update({
        //     name: request.input('name'),
        //     address: request.input('address'),
        //     phone: request.input('phone')
        // })

        //Model Orm
        let NewVenue = await Venue.findOrFail(id)
        NewVenue.name = request.input('name')
        NewVenue.address = request.input('address')
        NewVenue.phone = request.input('phone')

        NewVenue.save()
        return response.status(200).json({message: 'updated'})
    }

    public async destroy({response, params}: HttpContextContract){
        let id = params.id
        // await Database.from('venues').where('id', id).delete()
        let venue = await Venue.findOrFail(id)
        await venue.delete()
        return response.ok({message: 'deleted'})
    }
}
