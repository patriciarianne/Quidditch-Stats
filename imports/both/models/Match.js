import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Action from './Action'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  constructor(doc) {
    super(doc)
    this.playIds = []
    this.dateEnded = null
  }

  addPlay(play) {
      this.playIds.push(play._id)
      this.save()
  }

  getTeamScore(team) {
    let score = 0
    let actions = Action.find().fetch()
    let plays = Play.find({matchId: this._id, teamId: team._id})

    plays.forEach((play) => {
      actions.forEach((action) => {
        if (play.name === action.name){
          score += action.score
        }
      })
    })
    return score
  }

  snitchCaught(play) {
    if(play.name === 'snitchCaught')
    return play.date
  }

  getMatchEnded() {
    let plays = Play.find({matchId: this._id})
    this.dateEnded = plays.filter(snitchCaught)
    this.save()
  }
}
