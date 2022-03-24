import BaseSchema from '@ioc:Adonis/Lucid/Schema'
export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
        table.boolean('is_verified').defaultTo(false)
        table.string('role').defaultTo('user')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('is_verified')
      table.dropColumn('role')
    })
  }
}

