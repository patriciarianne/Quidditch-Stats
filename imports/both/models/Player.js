import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import { Schema } from '../schema/PlayerSchema'

@Collection('players')
export default class Player extends Model {
  save(callback) {
    super.save(callback)
  }

  static schema = Schema
}
