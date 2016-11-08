import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('players')
export default class Player extends Model {
  constructor(doc) {
    super(doc)
    this.teamId = null
    this.matchId = null
  }

  play(action, match) {
    if(this.position === action.position) {
      const play = new Play()
      play.name = action.name,
      play.playerId = this._id
      play.teamId = this.teamId
      play.matchId = match._id
      play.date = new Date()
      play.save()
      match.addPlay(play)
    }
    else{
      console.log('play not saved')
    }
  }
}
