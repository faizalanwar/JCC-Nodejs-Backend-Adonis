import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Venue from 'App/Models/Venue';
import Booking from 'App/Models/Booking';
export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: Array<string> = ['futsal', 'mini soccer', 'basketball']

  @column()
  public venueId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Venue)
  public venues: BelongsTo<typeof Venue>

  @hasMany(() => Booking)
  public Bookings: HasMany<typeof Booking>
}

