import Model from './Model'
import Collection from '../decorators/CollectionDecorator'

@Collection('actions')
export default class Action extends Model {
  constructor(doc) {
    super(doc)
  }
}
