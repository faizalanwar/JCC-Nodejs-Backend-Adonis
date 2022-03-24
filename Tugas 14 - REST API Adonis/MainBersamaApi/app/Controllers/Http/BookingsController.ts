import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator'
import Field from 'App/Models/Field'
import Database from '@ioc:Adonis/Lucid/Database'
export default class BookingsController {
    public async booking({request, response, params, auth}: HttpContextContract){
        try {
            const field = await Field.findByOrFail('id', params.id)
            const user = auth.user!
            
            await request.validate(CreateBookingValidator) 
            //await auth.use('api').authenticate()
            
            //Lucid Orm
            const newBooking = new Booking();
            newBooking.title = request.input('title')//payload.title
            newBooking.play_date_start = request.input('play_date_start') //payload.play_date_start
            newBooking.play_date_end = request.input('play_date_end') //payload.play_date_end
            
            newBooking.related('field').associate(field)
            user.related('myBooking').save(newBooking)

            return response.status(200).json({message: 'berhasil booking', data: newBooking})
        } catch (error) {
            response.unprocessableEntity({message: error.message})
        }
    }
    
    public async show({params, response }: HttpContextContract) {
        try {
            const booking = await Booking.query()
                .select('id', 'play_date_start', 'play_date_end')
                .where('id', '=', params.id)
                .withCount('players', (query) => {
                    query.as('players_count')
                })
                .preload('players', (query) => {
                    query.select('id', 'name', 'email')
                })
                .firstOrFail()
            const {id, play_date_start, play_date_end, players} = booking.toJSON()
            const players_count = booking.$extras.players_count
            response.ok({ message : 'berhasil get data booking by id', data: {id, play_date_start, play_date_end, players_count, players}})
        } catch (error) {
            if (error.messages) {
                return response.unprocessableEntity({ message: 'failed', error: error.messages})
            } else {
                return response.unprocessableEntity({ message: 'failed', error: error.message})
            }
        }
    }
    /*
    public async store({request, response, auth}: HttpContextContract){
        try {
            //const data = await request.validate(CreateBookingValidator) 
            await auth.use('api').authenticate()
            response.status(200).json({message: 'success booking', data: data })
            } catch (error) {
            response.unprocessableEntity({error: error.message})
        }
    }*/

    public async join({response, auth, params}:HttpContextContract){
        // const booking = await Booking.findOrFail(params.id)
        // let user = auth.user!

        // await booking.related('players').sync([user.id]) 
        // response.ok({status: 'success', date: 'successfully join'})

        const booking = await Booking.findOrFail(params.id)
        //console.log(params.id)
        let user = auth.user!
        const checkJoin = await Database.from('users_has_bookings').where('booking_id', params.id).where('user_id', user.id).first()

        if (!checkJoin) {
            await booking.related('players').attach([user.id])
        } else {
            await booking.related('players').detach([user.id])
        }

        return response.ok({message: 'success', data: 'successfully join/unjoin'})
    }
}
