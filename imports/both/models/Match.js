import Model from './Model'
import Collection from '../decorators/CollectionDecorator'
import Play from './Play'

@Collection('matches')
export default class Match extends Model {
  addPlay(name, player) {
    const play = new Play()
    play.name = name
    play.playerId = player._id
    play.date = new Date()
    this.plays.push(play)
  }

  addTeam(team) {
    this.teams.push(team)
  }

  goalMade(player) {
    player.goal()
    this.addPlay('Goal Made', player)
  }

  goalMissed(player) {
    player.missesGoal()
    this.addPlay('Goal Missed', player)
  }

  goalBlocked(player) {
    player.blocksGoal()
    this.addPlay('Goal Blocked', player)
  }

  releasesSnitch() {
    this.addPlay('Snitch Appeared', null)
    this.snitchAppeared = new Date()
  }

  caughtSnitch(player) {
    let snitchCaught = null
    if (this.snitchAppeared !== null) {
      player.catchSnitch()
      this.addPlay('Caught Snitch', player)
      snitchCaught = new Date()
    }
    this.timeSnitchCaught = snitchCaught - this.snitchAppeared
  }
}
