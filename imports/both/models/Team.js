import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Team from './Player'

@Collection('teams')
export default class Team extends Model {
  save(callback) {
    super.save(callback)
  }
}
