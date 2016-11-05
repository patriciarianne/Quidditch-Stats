import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Team from './Team'

@Collection('games')
export default class Game extends Model {
  save(callback) {
    super.save(callback)
  }
}
