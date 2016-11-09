import Model from './Model'
import Collection from '../decorators/CollectionDecorator'

@Collection('teams')
export default class Team extends Model {
  addPlayer(player) {
    this.players.push(player)
  }

  getScore() {
    let score = 0
    let goals = 0
    this.players.forEach((player) => {
      if (player.isSnitchCaught === true) {
        score += 150
      }
      goals += player.goalsMade
    })
    score += goals * 10
    return score
  }
}
