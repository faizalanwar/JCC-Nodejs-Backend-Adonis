import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  manyToMany,
  ManyToMany, 
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'

import Booking from 'App/Models/Booking'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string
  
  @column()
  public isVerified: boolean

  @column()
  public role: string
  //public role: Array<string> = ['user', 'owner']
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  
  @manyToMany(() => Booking,{
    pivotTable: 'users_has_bookings'
  })
  public Bookings: ManyToMany<typeof Booking> 
  
  @hasMany(() => Booking)
  public myBooking: HasMany<typeof Booking>
} 
