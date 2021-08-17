import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string | null

  @column()
  public displayName: string | null

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public location: string | null

  @column()
  public avatarUrl: string | null

  @column()
  public bio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}