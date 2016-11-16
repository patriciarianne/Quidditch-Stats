import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Player from './Player'

@Collection('teams')
export default class Team extends Model {
  addPlayer(player) {
    if (this.players.length <= 5) {
      player.team = this._id
      player.save()
      this.players.push(player)
      this.save()
    }
  }

  getPlayers() {
    const playerIds = this.players.map(player => player._id)
    return Player.find({
      _id: { $in: playerIds },
    })
  }

  getScore() {
    let score = 0
    let goals = 0
    this.getPlayers().forEach((player) => {
      if (player.hasCaughtSnitch === true) {
        score += 150
      }
      goals += player.goalsMade
    })
    score += goals * 10
    return score
  }
}
