import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Database from '@ioc:Adonis/Lucid/Database'
import CreateFieldValidator from 'App/Validators/CreateFieldValidator'
//NQ.Wvoubd80xnsrh2cpJtYOs2FcZZPz363wjgdStAWX_eGRCneUlV6QCzhpy9Yy
//Ng.0imZoXF8yDPlz6o4LKEi_UXLTkv2yfNBypoH5_HwKdBTqr2pbTjgm_LX73rH
//Nw.aovEEweE8Xw08xVqYbP8kAkSbi8HjanIFLRZNsUfyagzUW5zeeyn7xSPjmWE
//Models
import Field from 'App/Models/Field';
//import Bookings from 'Database/migrations/1632474423761_bookings';
//import User from 'App/Models/User';

export default class PostsController {
  public async index ({request, response}: HttpContextContract) {
    if(request.qs().name){
      let name = request.qs().name
      //let fieldsFiltered = await Database.from('fields').where('name', name).select('id', 'name', 'type', 'venue_id')
      let fieldsFiltered = await Field.findBy("name", name)
      return response.status(200).json({message: 'success get contacts', data: fieldsFiltered })
    }
    //let fields = await Database.from('fields').select('*')
    let fields = await Field.query().preload('venues')
    return response.status(200).json({message: 'success get contacts', data: fields })
  }

  
  public async store ({request, response, params, auth}: HttpContextContract) {
    try {
        await request.validate(CreateFieldValidator) 

        // let newFieldId = await Database.table('fields').returning('id').insert({
        //     name: request.input('name'),
        //     type: request.input('type'),
        //     venue_id: params.venue_id
        // })
        // response.created({message: 'created', newId: newFieldId})
        //const newField = await Field.create(data)
        //auth
        await auth.use('api').authenticate()
        //const authUser = auth.venue
        //await authUser?.related('fields').save(newField)
        //Lucid Orm
        let newField = new Field();
        newField.name = request.input('name')
        newField.type =  request.input('type')
        newField.venueId = params.venue_id

        await newField.save()
        response.created({message: 'created', data: newField})
    }catch (error) {
        response.unprocessableEntity({error: error.message})
    }
  }

  public async show ({params, response}: HttpContextContract) {
      //let field = await Database.from('fields').where('id', params.id).select('id', 'name', 'type', 'venue_id').firstOrFail()
      // let field = await Field.find(params.id)
      const field = await Field.query().where('id', params.id).preload('Bookings', (bookingqQuery)=>{
        bookingqQuery.select(['title', 'play_date_start', 'play_date_end'])
      }).firstOrFail()
      return response.status(200).json({message: 'success get fields with id', data: field})

  }

  public async update ({request, response, params}: HttpContextContract) {
      let id = params.id
      // await Database.from('fields').where('id', id).update({
      //     name: request.input('name'),
      //     type: request.input('type'),
      //     venue_id: params.venue_id
      // })

      //Model Orm
      let newField = await Field.findOrFail(id);
      newField.name = request.input('name')
      newField.type =  request.input('type')
      newField.venueId = params.venue_id

      newField.save()
      return response.status(200).json({message: 'updated'})
  }

  public async destroy ({response, params}: HttpContextContract) {
      let id = params.id
      //await Database.from('fields').where('id', id).delete()
      let field = await Field.findOrFail(id)
      await field.delete()
      return response.ok({message: 'deleted'})
  }
}
