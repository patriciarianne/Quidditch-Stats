import Model from './Model'
import Collection from '../decorators/CollectionDecorator'

@Collection('users')
export default class User extends Model {
  save(callback) {
    if (this._id === null) {
      Accounts.createUser(this.doc, callback)
    } else {
      this.update(this._id, { $set: this.doc })
    }
  }
}
