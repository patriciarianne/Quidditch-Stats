import Model from './Model'
import Collection from '../decorators/CollectionDecorator'

@Collection('teams')
export default class Team extends Model {
  constructor(doc) {
    super(doc)
    this.playerIds = []
  }

  addPlayer(player) {
    player.teamId = this._id
    player.save()
    this.playerIds.push(player._id)
    this.save()
  }
}
